import { Injectable } from '@angular/core';
import { QUIZ_LIST } from 'src/mocks/QuizList.mocks';
import { Quiz } from 'src/models/quiz.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Question } from 'src/models/question.model';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})

export class QuizService {
    //The list of quiz. The list is retrieved from the mock.
private quizzes: Quiz[] = QUIZ_LIST; // Ici on initialise la valeur avec un mock QUIZ_LIST
private quizSelected!: Quiz; // Ici on initialise la valeur avec un mock QUIZ_LIST

public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes); // Ici on crée un observable qui va permettre de récupérer la liste des quiz
public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizSelected); // Ici on crée un observable qui va permettre de récupérer un quiz sélectionné

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor(private userService: UserService) { }

retrieveQuizes(): void {
}

addQuiz(quiz : Quiz) {
  this.quizzes.push(quiz);
  this.quizzes$.next(this.quizzes);
}

deleteQuiz(quiz: Quiz) {
  this.quizzes = this.quizzes.filter(q => q !== quiz);
  this.quizzes$.next(this.quizzes);
 }

 selectQuiz(quiz: Quiz) {
    this.quizSelected = quiz;
    this.quizSelected$.next(this.quizSelected);
  }

  addQuestionForQuiz(question : Question){
    if(this.quizSelected.questions.indexOf(question)==-1) this.quizSelected.questions.push(question) ;
    this.quizSelected$.next(this.quizSelected);
  }

  deleteQuestionForQuiz(question : Question){
    this.quizSelected.questions = this.quizSelected.questions.filter(value => value !== question);
    this.QuizUpdate(this.quizSelected);
    this.quizSelected$.next(this.quizSelected);
  }

  QuizUpdate(quizModified: Quiz){
    this.userService.Users.forEach(user=>{
      user.quizzes.forEach((quiz:Quiz,index:number)=>{
        if(quiz.id==quizModified.id){
          user.quizzes[index]=quizModified;
          
        }
      })
    })

  }
}
