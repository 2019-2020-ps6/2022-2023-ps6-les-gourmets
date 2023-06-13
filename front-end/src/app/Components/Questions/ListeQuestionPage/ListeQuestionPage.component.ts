import { Component, OnInit } from '@angular/core';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';

@Component({
    selector: 'app-ListeQuestionPage',
    templateUrl: './ListeQuestionPage.component.html',
    styleUrls: ['./ListeQuestionPage.component.scss']
})
export class ListeQuestionPage implements OnInit {
    theme:string;
    afficheTheme:boolean;
    constructor(private jouerService : JouerService) {
      this.theme="";
      this.afficheTheme=false;
    }
    ngOnInit(): void {}
    playBackSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }
    playAddSound(){
      this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject)
    }

    annulerTheme(): void{
      this.theme="";
    }

    chooseTheme(theme:string): void{
      this.theme=theme;
      this.afficheTheme=false;
    }

    changeAffichage(): void{
      this.afficheTheme=!this.afficheTheme;
    }

}
