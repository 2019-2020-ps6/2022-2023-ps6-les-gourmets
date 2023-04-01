import { Injectable } from '@angular/core';
import { User } from 'src/models/User.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { USERS } from 'src/mocks/UserList.mocks';
import { Quiz } from 'src/models/quiz.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
    getCurrentUser() : User {
      return this.UserSelected;
    }
  
    //The list of User. The list is retrieved from the mock.
private Users: User[] = USERS; // Ici on initialise la valeur avec un mock User_LIST
private UserSelected!: User; // Ici on initialise la valeur avec un mock User

public Users$: BehaviorSubject<User[]> = new BehaviorSubject(this.Users); // Ici on crée un observable qui va permettre de récupérer la liste des User
public UserSelected$: BehaviorSubject<User> = new BehaviorSubject(this.UserSelected); // Ici on crée un observable qui va permettre de récupérer un User sélectionné

private idCPT: number = 3;

private UserUrl = "http://localhost:4200" + '/Users';

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor() { }


retrieveUseres(): void {
}

addUser(value : User) {
  value.id = this.idCPT;
  this.idCPT++;
  this.Users.push(value);
  this.Users$.next(this.Users);
}
updateUser(userTochange : User, value : User) {
  this.Users = this.Users.filter(u => u.id !== userTochange.id);
  this.Users.push(value);
  this.Users$.next(this.Users);
  this.UserSelected = value;
  this.UserSelected$.next(this.UserSelected);
}

deleteUser(value: User) {
  this.Users = this.Users.filter(u => u.id !== value.id);
  this.Users$.next(this.Users);
 }

 selectUser(value: User) {
   this.UserSelected = value;
   this.UserSelected$.next(this.UserSelected);
 }

 deleteQuizForProfile(value : Quiz){
  this.UserSelected.quizzes = this.UserSelected.quizzes.filter(quiz => value !== quiz);
  this.UserSelected$.next(this.UserSelected);
 }

}
