import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/service/user.service';


@Component({
    selector: 'app-EndPage',
    templateUrl: './EndPageComponent.component.html',
    styleUrls: ['./EndPageComponent.component.scss']
  })

  export class EndPageComponent implements OnInit {

    constructor(public userService : UserService) {
      this.userService.stopMusic();
    }

    ngOnInit(): void {
    }
}