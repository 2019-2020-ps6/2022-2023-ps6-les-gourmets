import { Component } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { QuizService } from 'src/service/quiz.service';

@Component({
  selector: 'app-quizEdit',
  templateUrl: './quizEdit.component.html',
  styleUrls: ['./quizEdit.component.scss']
})
export class QuizEditComponent {
  
  public currentQuiz!: Quiz;
  public quizReady: boolean = false;

  constructor(private quizService: QuizService, private jouerService : JouerService) {
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      if (quiz) {
        this.currentQuiz = quiz;
        this.quizReady = true;
      }
    });
    
  }

  public removeQuestionForQuiz(question : Question){
    this.quizService.selectQuiz(this.currentQuiz);
    this.quizService.removeQuestionForQuiz(question);
  }

  
  playBackSound(){
    this.jouerService.playButtonSimpleSound(ButtonSound.back)
  }
}
