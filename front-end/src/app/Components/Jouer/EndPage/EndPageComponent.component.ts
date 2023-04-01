import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/models/question.model';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';


@Component({
    selector: 'app-EndPage',
    templateUrl: './EndPageComponent.component.html',
    styleUrls: ['./EndPageComponent.component.scss']
  })

  export class EndPageComponent implements OnInit {
    minutes: number = 0;
    secondes: number = 0;
    StatsOn: boolean = false;

    results: boolean[] = [];
    questions: Question[] = [];
    questionsJustes: Question[] = [];
    answersJustes: string[] = [];


    constructor(public jouerService : JouerService) {
      this.jouerService.playBackgroundMusic();
      this.jouerService.chronoStop();
    }

    ngOnInit(): void {
    }

    statsOn(){
      this.StatsOn = true;
    }
}
