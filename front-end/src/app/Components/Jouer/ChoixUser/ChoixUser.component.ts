import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';

@Component({
  selector: 'app-ChoixUser',
  templateUrl: './ChoixUser.component.html',
  styleUrls: ['../../../../styles.scss','./ChoixUser.component.scss']
})

export class ChoixUser implements OnInit {

  constructor(public jouerService : JouerService) {
  }

  ngOnInit(): void {
  }
  playBackSound(){
    this.jouerService.playButtonSimpleSound(ButtonSound.back)
  }
}
