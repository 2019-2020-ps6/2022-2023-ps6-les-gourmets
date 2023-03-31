
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/User.model';
import { UserService } from 'src/service/user.service';

@Component({
    selector: 'app-ListeUser',
    templateUrl: './ListeUser.component.html',
    styleUrls: ['./ListeUser.component.scss']
})
export class ListeUser implements OnInit {
    public UserList: User[] = [];

    constructor(public UserService: UserService) {
      this.UserService.Users$.subscribe((Users: User[]) => {
        this.UserList = Users;
      });
    }

    ngOnInit() : void {}

    deleteUser(User: User) : void {
      this.UserService.deleteUser(User);
    }
  }
