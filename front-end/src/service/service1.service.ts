import { Injectable } from '@angular/core';
import { QUIZ_LIST } from 'src/mocks/QuizList.mocks';
import { Quiz } from 'src/models/quiz.model';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
    //The list of quiz. The list is retrieved from the mock.
private quizzes: Quiz[] = QUIZ_LIST; // Ici on initialise la valeur avec un mock QUIZ_LIST


// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor(private http: HttpClient) {}


addQuizz(quiz : Quiz) { 
    
}

deleteQuizz(id: string) {  }
}