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
      let temp : Date =new Date(this.jouerService.chronoStop());

      temp.getSeconds()
      this.minutes = temp.getMinutes();
      this.secondes = temp.getSeconds();

      jouerService.results$.subscribe((results) => {
        this.results = JSON.parse(JSON.stringify(results));
      });
      jouerService.questions$.subscribe((questions) => {
        this.questions = JSON.parse(JSON.stringify(questions));
      });

      console.log(this.results);
      console.log(this.questions);

      for(let i = 0; i < this.results.length; i++){
        if(this.results[i] == true){
          this.questionsJustes.push(this.questions[i]);
          for(let j = 0; j < this.questions[i].answers.length; j++){
            if(this.questions[i].answers[j].isCorrect) {
              this.answersJustes.push(this.questions[i].answers[j].value);
            }
          }
        }
      }
    }

    ngOnInit(): void {
    }

    statsOn(){
      this.StatsOn = true;
    }
}
