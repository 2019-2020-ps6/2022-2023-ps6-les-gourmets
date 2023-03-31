import { Injectable } from '@angular/core';
import { User } from 'src/models/User.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { USERS } from 'src/mocks/UserList.mocks';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  

  /*
    can be called by:
    @HostListener("document:mousedown",['$event'])
    onClick(event: MouseEvent){this.userService.mouseClickInQuiz(event);}
  */
    private rage = false;
    private dateTab : number[] = []
    public mouseClickInQuiz(event : MouseEvent) {
        const now : number = Date.now();
        const agressive = this.UserSelected!=undefined? this.UserSelected.aggressivness : 1;
        this.dateTab = this.dateTab.filter(date => date > now - 1000 * (1/agressive));
        this.dateTab.push(now);
        console.log(this.dateTab.length)
        if(this.dateTab.length>5) this.triggerRage();
    }
  
    public triggerRage(){
      if(this.rage) return;
      const music = new Audio('assets/Music/ZenMusic.mp3');
      music.loop = true;
      music.play();
      this.rage = true;
    }

  
    //The list of User. The list is retrieved from the mock.
private Users: User[] = USERS; // Ici on initialise la valeur avec un mock User_LIST
private UserSelected!: User; // Ici on initialise la valeur avec un mock User

public Users$: BehaviorSubject<User[]> = new BehaviorSubject(this.Users); // Ici on crée un observable qui va permettre de récupérer la liste des User
public UserSelected$: BehaviorSubject<User> = new BehaviorSubject(this.UserSelected); // Ici on crée un observable qui va permettre de récupérer un User sélectionné
private UserUrl = "http://localhost:4200" + '/Users';

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor() { }


retrieveUseres(): void {
}

addUser(value : User) {
  this.Users.push(value);
  this.Users$.next(this.Users);
}
updateUser(userTochange : User, value : User) {
  this.Users = this.Users.filter(u => u !== userTochange);
  this.Users.push(value);
  this.Users$.next(this.Users);
}

deleteUser(value: User) {
  this.Users = this.Users.filter(u => u !== value);
  this.Users$.next(this.Users);
 }

 selectUser(value: User) {
   this.UserSelected = value;
   this.UserSelected$.next(this.UserSelected);
 }
}
