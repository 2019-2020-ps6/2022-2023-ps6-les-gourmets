import { Injectable } from '@angular/core';
import { User } from 'src/models/User.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { Stat } from 'src/models/stat.model';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from 'src/configs/server.config';


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
private Users: User[] = [];
private UserSelected!: User;

private UserStats: Stat[] = [];


public Users$: BehaviorSubject<User[]> = new BehaviorSubject(this.Users);
public UserSelected$: BehaviorSubject<User> = new BehaviorSubject(this.UserSelected);
public UserStats$: BehaviorSubject<Stat[]> = new BehaviorSubject(this.UserStats);

private UserUrl = serverUrl + '/users';
private StatUrl = serverUrl + '/stats';

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

retrieveUserStats(): void {
  this.http.get<Stat[]>(this.StatUrl + '/' + this.UserSelected.id).subscribe((statList) => {
    this.UserStats = statList;
    this.UserStats$.next(this.UserStats);
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

updateUser(value : User) {
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
  this.http.delete<Stat>(this.StatUrl + '/' + this.UserSelected.id + '/' + value.id).subscribe(() => {
    this.retrieveUserStats();
  });
  this.updateUserQuizzes();
 }

 addQuizForUser(value : Quiz){
  this.UserSelected.quizzes.push(value);
  this.http.post<Stat>(this.StatUrl, {userId: this.UserSelected.id, quizId: value.id}).subscribe(() => {
    this.retrieveUserStats();
  });
  this.updateUserQuizzes();
  }

  updateUserQuizzes(){
    const quizIds:number[] = [];
    this.UserSelected.quizzes.forEach(quiz => {
      quizIds.push(quiz.id);
    });
    this.http.patch<User>(this.UserUrl + '/' + this.UserSelected.id , quizIds).subscribe(() => {
      this.retrieveUsers();
      this.selectUser(this.UserSelected);
    });

  }


 updateUserStats(quiz: Quiz,questions: Question[],answers: boolean[], timer: number){
  this.http.put(this.StatUrl + '/' + this.UserSelected.id + '/answers', {quizId: quiz.id, questions: questions, answers: answers}).subscribe();
  this.http.put(this.StatUrl + '/' + this.UserSelected.id + '/timer', {quizId: quiz.id, timer: timer}).subscribe();
 }

 updateQuit(quiz: Quiz){
  this.http.put(this.StatUrl + '/' + this.UserSelected.id + '/quit', {quizId: quiz.id}).subscribe();
 }
}
