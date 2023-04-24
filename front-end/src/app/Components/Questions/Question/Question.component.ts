
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question } from 'src/models/question.model';
import { QuestionService } from 'src/service/question.service';

@Component({
    selector: 'app-Question',
    templateUrl: './Question.component.html',
    styleUrls: ['./Question.component.scss']
})

export class QuestionComponent implements OnInit {

  @Input()
  question!: Question;

  @Output()
  editQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private questionService: QuestionService) {

  }

  ngOnInit(): void {
  }

  selectQuestion(): void {
    this.questionService.selectQuestion(this.question);
    this.questionService.canEdit(true);
  }

  edit(): void {
    this.editQuestion.emit(this.question);
  }

  delete(): void {
    this.deleteQuestion.emit(this.question);
  }
}
