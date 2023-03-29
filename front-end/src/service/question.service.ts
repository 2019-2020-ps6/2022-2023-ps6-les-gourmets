import { Injectable } from '@angular/core';
import { QUESTIONLIST_ACTOR } from 'src/mocks/QuizList.mocks';
import { Question } from 'src/models/question.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
    export class QuestionService {  
    //The list of question. The list is retrieved from the mock.
    private questions: Question[] = QUESTIONLIST_ACTOR; // Ici on initialise la valeur avec un mock QUESTIONLIST

    public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions); // Ici on crée un observable qui va permettre de récupérer la liste des suestions
    public questionSelected$: Subject<Question> = new Subject();
    private questionUrl = "http://localhost:4200" + '/questions';

    // The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
    constructor() { }

    retrieveQuestions(): void {
    }

    addQuestion(question : Question) {
        this.questions.push(question);
        this.questions$.next(this.questions);
    }

    deleteQuestion(question: Question) {
        this.questions = this.questions.filter(q => q !== question);
        this.questions$.next(this.questions);
    }

    editQuestion(question: Question) {
        this.questions = this.questions.filter(q => q !== question);
        this.questions$.next(this.questions);
    }   
}



