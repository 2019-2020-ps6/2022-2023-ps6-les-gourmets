import { Injectable } from '@angular/core';
import { QUESTIONLIST_ACTOR } from 'src/mocks/QuizList.mocks';
import { Question } from 'src/models/question.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuizService } from './quiz.service';
import { Quiz } from 'src/models/quiz.model';


@Injectable({
    providedIn: 'root'
  })
    export class QuestionService {  
    //The list of question. The list is retrieved from the mock.
    private questions: Question[] = JSON.parse(JSON.stringify(QUESTIONLIST_ACTOR)); // Ici on initialise la valeur avec un mock QUESTIONLIST
    private questionSelected!: Question;
    private edit!: boolean;
    private id:number =100;

    public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions); // Ici on crée un observable qui va permettre de récupérer la liste des suestions
    public questionSelected$: Subject<Question> = new BehaviorSubject(this.questionSelected);
    public edit$: Subject<boolean> = new BehaviorSubject(this.edit);
    private questionUrl = "http://localhost:9428/api" + '/questions';

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
      /*this.id++;
      question.id=this.id;
      this.questions.push(question);
      this.questions$.next(this.questions);*/
    }

    deleteQuestion(question: Question) {
      this.http.delete<Question>(this.questionUrl + '/' + question.id).subscribe(() => this.retrieveQuestions());
      /*
        this.questions = this.questions.filter(q => q.id !== question.id);
        this.questions$.next(this.questions);*/
    }

    selectQuestion(question: Question) {
        this.questionSelected = question;
        this.questionSelected$.next(this.questionSelected);
      }

    updateQuestion(questionToChange : Question, newQuestion : Question) {
      this.http.put<Question>(this.questionUrl + '/' + questionToChange.id, newQuestion).subscribe(() => this.retrieveQuestions());
      /*
        this.questions = this.questions.filter(u => u.id !== questionToChange.id);
        this.questions.push(newQuestion)
        this.quizService.updateQuestionForQuiz(questionToChange,newQuestion);
        this.questions$.next(this.questions);*/
      }

    canEdit(edit: boolean){
        this.edit = edit;
        this.edit$.next(this.edit);
    }
}



