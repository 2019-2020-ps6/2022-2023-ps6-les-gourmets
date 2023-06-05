import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';
@Component({
    selector: 'app-ListeQuizPage',
    templateUrl: './ListeQuizPage.component.html',
    styleUrls: ['../../../../styles.scss','./ListeQuizPage.component.scss']
})
export class ListeQuizPage implements OnInit {
    constructor(private jouerService :JouerService) {}
    ngOnInit(): void {}
    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }
    playAddSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject)
    }
}
