import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';
@Component({
    selector: 'app-ListeQuestionPage',
    templateUrl: './ListeQuestionPage.component.html',
    styleUrls: ['./ListeQuestionPage.component.scss']
})
export class ListeQuestionPage implements OnInit {
    constructor(private jouerService : JouerService) {}
    ngOnInit(): void {}
    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }
    playAddSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject)
    }

}
