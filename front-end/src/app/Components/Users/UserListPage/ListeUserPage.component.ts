import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';
@Component({
    selector: 'app-ListeUserPage',
    templateUrl: './ListeUserPage.component.html',
    styleUrls: ['./ListeUserPage.component.scss']
})
export class ListeUserPage implements OnInit {
    constructor() {}
    ngOnInit() : void {}

    SelectUser(user : User) : void {
        
    }
}
