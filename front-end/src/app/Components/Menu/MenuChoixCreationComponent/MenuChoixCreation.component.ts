import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';

@Component({
  selector: 'app-MenuChoixCreation',
  templateUrl: './MenuChoixCreation.component.html',
  styleUrls: ['../../../../styles.scss','./MenuChoixCreation.component.scss']
})

export class MenuChoixCreation implements OnInit {

  constructor(private jouerService : JouerService) {
  }

  ngOnInit(): void {
  }
  playBackSound(){
    this.jouerService.playButtonSimpleSound(ButtonSound.back)}
}
