import { Injectable } from '@angular/core';
import { QUESTIONLIST_ACTOR } from 'src/mocks/QuizList.mocks';
import { Question } from 'src/models/question.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuizService } from './quiz.service';
import { Stat } from 'src/models/stat.model';

@Injectable({
    providedIn: 'root'
  })
    export class QuestionService {  
    //The list of question. The list is retrieved from the mock.
    private questions: Question[] = [];
    private questionSelected!: Question;
    private edit!: boolean;
    private id:number =100;

    public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions); // Ici on crée un observable qui va permettre de récupérer la liste des suestions
    public questionSelected$: Subject<Question> = new BehaviorSubject(this.questionSelected);
    public edit$: Subject<boolean> = new BehaviorSubject(this.edit);
    private questionUrl = "http://localhost:9428/api" + '/questions';
    private statUrl = "http://localhost:9428/api" + '/stats';

    // The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
    constructor(private quizService: QuizService, private http: HttpClient) {
      this.retrieveQuestions();
     }


    retrieveQuestions(): void {
      this.http.get<Question[]>(this.questionUrl).subscribe((questionList) => {
        this.questions = questionList;
        this.questions$.next(this.questions);
      });
    }


    addQuestion(question : Question) {
      this.http.post<Question>(this.questionUrl, question).subscribe(() => this.retrieveQuestions());
    }

    deleteQuestion(question: Question) {
      this.http.delete<Question>(this.questionUrl + '/' + question.id).subscribe(() => this.retrieveQuestions());
      this.http.patch<Stat>(this.statUrl + '/' + question.id, question).subscribe();
    }

    selectQuestion(question: Question) {
        this.questionSelected = question;
        this.questionSelected$.next(this.questionSelected);
      }

    updateQuestion(questionToChange : Question, newQuestion : Question) {
      this.http.put<Question>(this.questionUrl + '/' + questionToChange.id,newQuestion).subscribe(() => this.retrieveQuestions());
      this.http.patch<Stat>(this.statUrl + '/', newQuestion).subscribe();
      }

    canEdit(edit: boolean){
        this.edit = edit;
        this.edit$.next(this.edit);
    }
}



