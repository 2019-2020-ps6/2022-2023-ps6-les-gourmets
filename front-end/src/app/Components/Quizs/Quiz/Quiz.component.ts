
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonSound } from 'src/models/ButtonSound';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { QuizService } from 'src/service/quiz.service';

@Component({
    selector: 'app-Quiz',
    templateUrl: './Quiz.component.html',
    styleUrls: ['./Quiz.component.scss']
})

export class QuizComponent implements OnInit {

  public isMod: Boolean = false;
  public isPlay: Boolean = false;
  public isAdd:Boolean = false;
  public DeleteorAdd: String = "Delete";

  @Input()
  quiz!: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuizz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(route: ActivatedRoute, public quizService: QuizService, private jouerService: JouerService) {
    route.url.subscribe((url) =>
    this.isMod = (route.snapshot.url[0].path == "ListeQuizPage")) ;
    route.url.subscribe((url) =>
    this.isAdd = (route.snapshot.url[0].path == "ListeQuizPage" || route.snapshot.url[0].path == "UserProfilePage" || route.snapshot.url[0].path == "ListeQuizAdable")) ;
    route.url.subscribe((url) =>
    this.isPlay = (route.snapshot.url[0].path == "ChoixQuiz"));
    route.url.subscribe((url) =>
    this.DeleteorAdd = (route.snapshot.url[0].path == "ListeQuizAdable") ? "Ajouter" : "Supprimer"
    );
  }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizService.selectQuiz(this.quiz);
    this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuizz.emit(this.quiz);
  }
}
