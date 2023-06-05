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
private quizzes: Quiz[] = JSON.parse(JSON.stringify(QUIZ_LIST)); // Ici on initialise la valeur avec un mock QUIZ_LIST
private quizSelected!: Quiz; // Ici on initialise la valeur avec un mock QUIZ_LIST
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
  /*
  this.id++;
  quiz.id=this.id;
  this.quizzes.push(quiz);
  this.quizzes$.next(this.quizzes);*/
}

deleteQuiz(quiz: Quiz) {
  this.http.delete<Quiz>(this.QuizUrl + '/' + quiz.id).subscribe(() => this.retrieveQuizes());
  /*this.quizzes = this.quizzes.filter(q => q !== quiz);
  this.quizzes$.next(this.quizzes);*/
 }

 selectQuiz(quiz: Quiz) {
    this.quizSelected = quiz;
    this.quizSelected$.next(this.quizSelected);
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

  updateQuestionForQuiz(questionToChange : Question, newQuestion : Question) {
    if(questionToChange.estFacile){
      this.quizzes.forEach(quiz=>{
        quiz.easyQuestions = quiz.easyQuestions.filter(q => q.id !== questionToChange.id);
        if(newQuestion.estFacile){
          quiz.easyQuestions.push(newQuestion);
        }else{
          quiz.questions.push(newQuestion);
        }
        this.QuizUpdate(quiz);
      })
    }else {
      this.quizzes.forEach(quiz=>{
        quiz.questions = quiz.questions.filter(q => q.id !== questionToChange.id);
        if(newQuestion.estFacile){
          quiz.easyQuestions.push(newQuestion);
        }else{
          quiz.questions.push(newQuestion);
        }
        this.QuizUpdate(quiz);
      })
    }
    console.log(this.quizzes);
    this.quizzes$.next(this.quizzes);
  }

  QuizUpdate(quizModified: Quiz){
    const questionIds:number[] = [];
    quizModified.questions.forEach(question => {
      questionIds.push(question.id);
    });
    console.log(JSON.stringify(questionIds));
    const newQuizz:string = JSON.stringify(quizModified);
    var ids:number[];
    ids = JSON.parse(newQuizz).questions;
    
    var ids2:number[];
    const newQuizz2:string = JSON.stringify(ids);
    console.log(newQuizz2);
    
   // console.log(newQuizz);
    this.http.put<Quiz>(this.QuizUrl + '/' + quizModified.id, questionIds).subscribe(() => this.retrieveQuizes());
    
   // this.http.patch<Quiz>(this.QuizUrl + '/' + quizModified.id, quizModified).subscribe(() => this.retrieveQuizes());
    /*
    this.userService.getUsers().forEach(user=>{
      user.quizzes.forEach((quiz:Quiz,index:number)=>{
        if(quiz.id==quizModified.id){
          user.quizzes[index]=quizModified;
          
        }
      })
    })*/

  }
}
