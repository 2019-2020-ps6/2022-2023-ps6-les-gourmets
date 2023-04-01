import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

    constructor(public jouerService : JouerService) {
      this.jouerService.stopMusic();
      let temp:number = this.jouerService.chronoStop();
      this.minutes = Math.floor(temp/60000);
      this.secondes = Math.floor((temp%60000)/1000);
    }

    ngOnInit(): void {
    }
}
