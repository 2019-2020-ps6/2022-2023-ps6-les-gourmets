import { Component, HostListener, OnInit } from '@angular/core';
import { JouerService } from 'src/service/jouer.service';

@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss']
})

export class MenuComponent implements OnInit {

  private interacted=false;
  @HostListener("document:mousedown",['$event'])
  onClick(event: MouseEvent){
    if(!this.interacted){
      this.jouerService.playBackgroundMusic();
    }
  }

  constructor(public jouerService : JouerService) {
    this.jouerService.playBackgroundMusic();
  }

  ngOnInit(): void {
  }

  activateMusic(){
    this.jouerService.playBackgroundMusic();
  }
}
