import { Injectable } from '@angular/core';
import { User } from 'src/models/User.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { USERS } from 'src/mocks/UserList.mocks';


@Injectable({
  providedIn: 'root'
})

export class UserService {
    //The list of User. The list is retrieved from the mock.
private Users: User[] = USERS; // Ici on initialise la valeur avec un mock User_LIST

public Users$: BehaviorSubject<User[]> = new BehaviorSubject(this.Users); // Ici on crée un observable qui va permettre de récupérer la liste des User
public UserSelected$: Subject<User> = new Subject();
private UserUrl = "http://localhost:4200" + '/Users';

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor() { }


retrieveUseres(): void {
}

addUser(User : User) {
  this.Users.push(User);
  this.Users$.next(this.Users);
}

deleteUser(User: User) {
  this.Users = this.Users.filter(u => u !== User);
  this.Users$.next(this.Users);
 }
}
