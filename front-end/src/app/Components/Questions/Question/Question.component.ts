
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { Question } from 'src/models/question.model';
import { QuestionService } from 'src/service/question.service';
import { JouerService } from 'src/service/jouer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-Question',
    templateUrl: './Question.component.html',
    styleUrls: ['./Question.component.scss']
})

export class QuestionComponent implements OnInit {

  public isMod: Boolean = false;

  @Input()
  question!: Question;

  @Output()
  questionSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  public DeleteorAdd: String = "Delete";

  constructor(route: ActivatedRoute, private jouerService : JouerService, private questionService: QuestionService) {
    route.url.subscribe((url) =>
    this.isMod = (route.snapshot.url[0].path == "ListeQuestionPage")) ;
    route.url.subscribe((url) =>
    this.DeleteorAdd = (route.snapshot.url[0].path == "ListeQuestionAdable") ? "Ajouter" : "Supprimer"
    );
  }

  ngOnInit(): void {
  }

  selectQuestion(): void {
    this.questionService.selectQuestion(this.question);
    this.questionService.canEdit(true);
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
