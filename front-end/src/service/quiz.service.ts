import { Injectable } from '@angular/core';
import { QUIZ_LIST } from 'src/mocks/QuizList.mocks';
import { Quiz } from 'src/models/quiz.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Question } from 'src/models/question.model';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class QuizService {
    //The list of quiz. The list is retrieved from the mock.
private quizzes: Quiz[] = [];
private quizSelected!: Quiz;
private id:number = 100;

public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes); // Ici on crée un observable qui va permettre de récupérer la liste des quiz
public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizSelected); // Ici on crée un observable qui va permettre de récupérer un quiz sélectionné

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor(private userService: UserService, private http: HttpClient) {
  this.retrieveQuizes();
 }

 private QuizUrl = "http://localhost:9428/api" + '/quizzes';

retrieveQuizes(): void {
  this.http.get<Quiz[]>(this.QuizUrl).subscribe((quizList) => {
    this.quizzes = quizList;
    this.quizzes$.next(this.quizzes);
  });
}

addQuiz(quiz : Quiz) {
  this.http.post<Quiz>(this.QuizUrl, quiz).subscribe(() => this.retrieveQuizes());
}

deleteQuiz(quiz: Quiz) {
  this.http.delete<Quiz>(this.QuizUrl + '/' + quiz.id).subscribe(() => this.retrieveQuizes());
 }

 selectQuiz(quiz: Quiz) {
  this.http.get<Quiz>(this.QuizUrl + '/' + quiz.id).subscribe((dataQuiz) => {
    this.quizSelected = dataQuiz;
    this.quizSelected$.next(this.quizSelected);
    });
  }

  addQuestionForQuiz(question : Question){
    
    if(question.estFacile){
      if(this.quizSelected.easyQuestions.indexOf(question)==-1){
        this.quizSelected.easyQuestions.push(question) ;
      }
    }else {
      if(this.quizSelected.questions.indexOf(question)==-1){
        this.quizSelected.questions.push(question) ;
      }
    }
    this.QuizUpdate(this.quizSelected);
    this.quizSelected$.next(this.quizSelected);
  }

  removeQuestionForQuiz(question : Question){
    if(question.estFacile){
      this.quizSelected.easyQuestions = this.quizSelected.easyQuestions.filter(value => value.id !== question.id);
    }else{
      this.quizSelected.questions = this.quizSelected.questions.filter(value => value.id !== question.id);
    }
    this.QuizUpdate(this.quizSelected);
    this.quizSelected$.next(this.quizSelected);
  }

  QuizUpdate(quizModified: Quiz){
    const questionIds:number[] = [];
    quizModified.questions.forEach(question => {
      questionIds.push(question.id);
    });
    const easyQuestionIds:number[] = [];
    quizModified.easyQuestions.forEach(question => {
      easyQuestionIds.push(question.id);
    });
    this.http.put<Quiz>(this.QuizUrl + '/' + quizModified.id , questionIds).subscribe(() => this.selectQuiz(this.quizSelected));
    this.http.patch<Quiz>(this.QuizUrl + '/' + quizModified.id , easyQuestionIds).subscribe(() => this.selectQuiz(this.quizSelected));

  }
}
