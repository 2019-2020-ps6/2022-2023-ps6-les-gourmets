
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
    this.isMod = (route.snapshot.url[0].path == "ListeQuizPage") || (route.snapshot.url[0].path == "UserProfilePage") || (route.snapshot.url[0].path == "ListeQuizAdable"));
    route.url.subscribe((url) =>
    this.isPlay = (route.snapshot.url[0].path == "ChoixQuiz"));
  }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject);
    this.quizService.selectQuiz(this.quiz);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuizz.emit(this.quiz);
  }
}
