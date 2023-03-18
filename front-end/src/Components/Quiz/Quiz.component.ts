
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../src/models/quiz.model';

@Component({
    selector: 'app-Quiz',
    templateUrl: './Quiz.component.html',
    styleUrls: ['./Quiz.component.scss']
})

export class QuizComponent implements OnInit {

  @Input()
  quiz!: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(true);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuiz.emit(this.quiz);
  }
}
