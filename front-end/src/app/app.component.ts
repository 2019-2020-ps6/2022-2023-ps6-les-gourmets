import { Component } from '@angular/core';
import { JouerService } from 'src/service/jouer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Main Component';
  
  isSlidingIn: boolean = false;

  constructor(private jouerService : JouerService){

  }

  toggleSlide() {
    this.isSlidingIn = !this.isSlidingIn;
  }

  ChangeMusic(event : any){
    this.jouerService.setMusicActivated(event.target.checked);
  }
  getMusicActivated() : boolean {
    return this.jouerService.musicActivated;
  }

  ChangeEffects(event : any){
    this.jouerService.setEffectsActivated(event.target.checked);
  }
  getEffectsActivated() : boolean {
    return this.jouerService.effectsActivated;
  }
}
