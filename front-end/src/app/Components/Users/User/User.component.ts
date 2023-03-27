
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/User.model';
import { UserService } from 'src/service/user.service';

@Component({
    selector: 'app-User',
    templateUrl: './User.component.html',
    styleUrls: ['./User.component.scss']
})

export class UserComponent implements OnInit {

  public isMod: Boolean = true;

  @Input()
  User!: User;

  @Output()
  UserSelected: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  editUser: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(public userService: UserService, route: ActivatedRoute) {
    route.url.subscribe((url) =>
    this.isMod = (route.snapshot.url[0].path == "ListeUserPage"));
  }

  ngOnInit() : void {
  }

  selectUser() : void {
    this.UserSelected.emit(this.User);
    this.userService.selectUser(this.User);
  }

  edit() : void {
    this.editUser.emit(this.User);
  }

  delete() : void {
    this.deleteUser.emit(this.User);
  }
}
