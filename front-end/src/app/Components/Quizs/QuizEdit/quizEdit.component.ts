import { Component } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/service/quiz.service';

@Component({
  selector: 'app-quizEdit',
  templateUrl: './quizEdit.component.html',
  styleUrls: ['./quizEdit.component.scss']
})
export class QuizEditComponent {
  
  public currentQuiz: Quiz;

  constructor(private quizService: QuizService) {
    this.currentQuiz = quizService.quizSelected$.getValue();
    
  }

  public deleteQuestionForQuiz(question : Question){
    this.quizService.selectQuiz(this.currentQuiz);
    this.quizService.deleteQuestionForQuiz(question);
  }
}
