import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';

@Component({
    selector: 'app-ListeQuestionPage',
    templateUrl: './ListeQuestionPage.component.html',
    styleUrls: ['./ListeQuestionPage.component.scss']
})
export class ListeQuestionPage implements OnInit {
    public themeSelected:string;
    constructor(private jouerService : JouerService) {
      this.themeSelected="";
    }
    ngOnInit(): void {}
    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }
    playAddSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject)
    }

    chooseTheme(theme:string): void{
      this.themeSelected=theme;
    }

}
