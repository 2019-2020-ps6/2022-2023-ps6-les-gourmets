import { Component, OnInit } from '@angular/core';
import { JouerService } from 'src/service/jouer.service';

@Component({
  selector: 'app-ChoixUser',
  templateUrl: './ChoixUser.component.html',
  styleUrls: ['./ChoixUser.component.scss']
})

export class ChoixUser implements OnInit {

  constructor(public jouerService : JouerService) {
  }

  ngOnInit(): void {
  }
}
