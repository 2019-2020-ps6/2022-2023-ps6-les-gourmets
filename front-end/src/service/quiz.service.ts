import { Injectable } from '@angular/core';
import { QUIZ_LIST } from 'src/mocks/QuizList.mocks';
import { Quiz } from 'src/models/quiz.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class QuizService {
    //The list of quiz. The list is retrieved from the mock.
private quizzes: Quiz[] = QUIZ_LIST; // Ici on initialise la valeur avec un mock QUIZ_LIST
public quizSelected!: Quiz; // Ici on initialise la valeur avec un mock QUIZ_LIST

public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes); // Ici on crée un observable qui va permettre de récupérer la liste des quiz
public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizSelected); // Ici on crée un observable qui va permettre de récupérer un quiz sélectionné

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor() { }


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
}
