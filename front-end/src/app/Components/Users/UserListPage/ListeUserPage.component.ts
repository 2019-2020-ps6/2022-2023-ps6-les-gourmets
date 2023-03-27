import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/User.model';
@Component({
    selector: 'app-ListeUserPage',
    templateUrl: './ListeUserPage.component.html',
    styleUrls: ['./ListeUserPage.component.scss']
})
export class ListeUserPage implements OnInit {
    constructor(public router : Router) {}
    ngOnInit() : void {}

    AddUser(){
        this.router.navigate(["/UserForm/"]);
    }

    SelectUser(user : User) : void {
        
    }
}
