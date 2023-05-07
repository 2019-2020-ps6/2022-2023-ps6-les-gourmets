import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSound } from 'src/models/ButtonSound';
import { User } from 'src/models/User.model';
import { JouerService } from 'src/service/jouer.service';
@Component({
    selector: 'app-ListeUserPage',
    templateUrl: './ListeUserPage.component.html',
    styleUrls: ['./ListeUserPage.component.scss']
})
export class ListeUserPage implements OnInit {

    constructor(public router : Router, private jouerService: JouerService) {}
    ngOnInit() : void {}

    AddUser(){
        this.router.navigate(["/UserForm/"]);
        this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject)
    }

    SelectUser(user : User) : void {
        
    }
    playBackSound(){
        this.jouerService.playButtonSimpleSound(ButtonSound.back)
    }
}
