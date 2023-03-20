import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';
@Component({
    selector: 'app-ListeUserPage',
    templateUrl: './ListeUserPage.component.html',
    styleUrls: ['./ListeUserPage.component.scss']
})
export class ListeUserPage implements OnInit {
    @Input()
    public user !: User;
    constructor() {}
    ngOnInit(): void {}

    
}
