import { Injectable } from '@angular/core';
import { User } from 'src/models/User.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { USERS } from 'src/mocks/UserList.mocks';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
    getCurrentUser() : User {
      return this.UserSelected;
    }
    getUsers(): User[] {
      return this.Users;
    }

    //The list of User. The list is retrieved from the mock.
private Users: User[] = []; // Ici on initialise la valeur avec un mock User_LIST
private UserSelected!: User; // Ici on initialise la valeur avec un mock User

public Users$: BehaviorSubject<User[]> = new BehaviorSubject(this.Users); // Ici on crée un observable qui va permettre de récupérer la liste des User
public UserSelected$: BehaviorSubject<User> = new BehaviorSubject(this.UserSelected); // Ici on crée un observable qui va permettre de récupérer un User sélectionné

private UserUrl = "http://localhost:9428/api" + '/users';

// The service's constructor. Le constructeur peut prendre en paramètre les dépendances du service - comme ici, HttpClient qui va permettre de récupérer les données d'un serveur
constructor(private http: HttpClient) {
  this.retrieveUsers();
}

retrieveUsers(): void {
  this.http.get<User[]>(this.UserUrl).subscribe((userList) => {
    this.Users = userList;
    this.Users.forEach(user =>{
      this.http.get<Quiz[]>(this.UserUrl + '/' + user.id + '/quizzes').subscribe((quizzes) => {
        user.quizzes = quizzes;
        });
    })
    this.Users$.next(this.Users);
  });

}

retrieveUsersAndSelect(value: User): void {
  this.http.get<User[]>(this.UserUrl).subscribe((userList) => {
    this.Users = userList;
    this.Users$.next(this.Users);
    this.UserSelected = value;
    this.UserSelected$.next(this.UserSelected);
  });
}

addUser(value : User) {
  this.http.post<User>(this.UserUrl, value).subscribe((value) => this.retrieveUsersAndSelect(value));
}

updateUser(userTochange : User, value : User) {
  const quizIds:number[] = [];
    this.UserSelected.quizzes.forEach(quiz => {
      quizIds.push(quiz.id);
    });
  this.http.put<User>(this.UserUrl + '/' + value.id, value).subscribe(() => this.retrieveUsers());
}

deleteUser(value: User) {
  this.http.delete<User>(this.UserUrl + '/' + value.id).subscribe(() => this.retrieveUsers());
  this.updateUserQuizzes();
 }

 selectUser(value: User) {
  this.http.get<User>(this.UserUrl + '/' + value.id).subscribe((user) => {
  this.UserSelected = user;
  this.UserSelected$.next(this.UserSelected);
 })}

 deleteQuizForProfile(value : Quiz){
  this.UserSelected.quizzes = this.UserSelected.quizzes.filter(quiz => value.id !== quiz.id);
  this.updateUserQuizzes();
  this.UserSelected$.next(this.UserSelected);
 }

 addQuizForUser(value : Quiz){
  this.UserSelected.quizzes.push(value);
  this.updateUserQuizzes();
  this.UserSelected$.next(this.UserSelected);
  }

  updateUserQuizzes(){
    const quizIds:number[] = [];
    this.UserSelected.quizzes.forEach(quiz => {
      quizIds.push(quiz.id);
    });
    this.http.patch<Quiz>(this.UserUrl + '/' + this.UserSelected.id , quizIds).subscribe(() => this.retrieveUsers());

  }


 updateUserStats(quiz: Quiz,questions: Question[],answers: boolean[]){
  for(let i=0; i< this.UserSelected.quizzes.length;i++){
    if(quiz.id==this.UserSelected.quizzes[i].id){
      for(let j=0; j<answers.length; j++){
        for(let k=0; k<this.UserSelected.quizzes[i].questions.length; k++){
          if(this.UserSelected.quizzes[i].questions[k].id==questions[j].id){
            if (answers[j]){
              this.UserSelected.quizzes[i].questions[k].trueAnswer+=1;
            } else {
              this.UserSelected.quizzes[i].questions[k].falseAnswer+=1;
            }
          }
        }
      }
    }
  }
 }

 updateUserTimer(quiz: Quiz,timer: number){
  for(let i=0; i< this.UserSelected.quizzes.length;i++){
    if(quiz.id==this.UserSelected.quizzes[i].id){
      this.UserSelected.quizzes[i].timerMoyen=((this.UserSelected.quizzes[i].timerMoyen*this.UserSelected.quizzes[i].times)+timer)/(this.UserSelected.quizzes[i].times+1);
      this.UserSelected.quizzes[i].times+=1;
  }
 }
}

}
