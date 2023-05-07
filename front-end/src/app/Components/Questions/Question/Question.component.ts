
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { Question } from 'src/models/question.model';
import { JouerService } from 'src/service/jouer.service';

@Component({
    selector: 'app-Question',
    templateUrl: './Question.component.html',
    styleUrls: ['./Question.component.scss']
})

export class QuestionComponent implements OnInit {

  @Input()
  question!: Question;

  @Output()
  questionSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(private jouerService : JouerService) {
  }

  ngOnInit(): void {
  }

  selectQuestion(): void {
    this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject);
    this.questionSelected.emit(true);
  }

  edit(): void {
    this.editQuestion.emit(this.question);
  }

  delete(): void {
    this.jouerService.playButtonSimpleSound(ButtonSound.deleteSound);
    this.deleteQuestion.emit(this.question);
  }
}
