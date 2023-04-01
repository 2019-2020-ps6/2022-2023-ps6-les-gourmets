import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';


@Component({
    selector: 'app-EndPage',
    templateUrl: './EndPageComponent.component.html',
    styleUrls: ['./EndPageComponent.component.scss']
  })

  export class EndPageComponent implements OnInit {

    constructor(public jouerService : JouerService) {
      this.jouerService.stopMusic();
      this.jouerService.chronoStop();
    }

    ngOnInit(): void {
    }
}