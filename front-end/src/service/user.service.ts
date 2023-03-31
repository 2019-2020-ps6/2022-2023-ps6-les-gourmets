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


   /*
    can be called by:
    @HostListener("document:mousedown",['$event'])
    onClick(event: MouseEvent){this.userService.mouseClickInQuiz(event);}
  */
    private music !: HTMLAudioElement ;
    private rage = false;
    private dateTab : number[] = [];
    private musicFade : any;
    public mouseClickInQuiz(event : MouseEvent) {
        const now : number = Date.now();
        const agressive = this.UserSelected!=undefined? this.UserSelected.aggressivness : 1;
        this.dateTab = this.dateTab.filter(date => date > now - 3000 * (1/agressive));
        this.dateTab.push(now);
        console.log(this.dateTab.length)
        if(this.dateTab.length>5) this.triggerRage();
    }
  
    private triggerRage(){
      if(this.rage) return;
      this.playMusic();
      this.rage = true;
    }
    public playMusic(){
      const audiopath = this.UserSelected.music.sort(()=>Math.random()-0.5)[0];
      this.music = new Audio('assets/Music/'+audiopath);
      this.music.loop = true;
      this.music.volume=0;
      this.music.play();
      this.fadeVolume(true);

    }public stopMusic(){
      if(this.music==null) return;
      clearInterval(this.musicFade);
      const interval =50;
      let fadeVolume = this.music.volume;
      const fade = setInterval(()=>{
        if(fadeVolume-0.01 >= 0)fadeVolume -=0.01;
        else {
          this.music.volume = 0;
          this.music.pause();
          this.music.currentTime=0;
          clearInterval(fade);
        }
        this.music.volume=fadeVolume;
        

      }, interval)
    }

    
    public fadeVolume(fadeIn:boolean){
      if (this.music ==null) return;
      const interval = 20;
      const increment = fadeIn ? 0.01 : -0.01;
      clearInterval(this.musicFade);

      this.musicFade = setInterval(() => {
        if (fadeIn && this.music.volume+increment >= 1) {
          this.music.volume = 1;
          clearInterval(this.musicFade);
        }
        else if (!fadeIn && this.music.volume+increment <= 0) {
          this.music.volume = 0;
          clearInterval(this.musicFade);
        }
        else this.music.volume += increment;
      }, interval);
    }
}
