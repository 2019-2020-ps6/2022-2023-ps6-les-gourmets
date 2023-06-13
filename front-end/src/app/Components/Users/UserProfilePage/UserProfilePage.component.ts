import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonSound } from 'src/models/ButtonSound';
import { Quiz } from 'src/models/quiz.model';
import { User } from 'src/models/User.model';
import { JouerService } from 'src/service/jouer.service';
import { UserService } from 'src/service/user.service';
@Component({
  selector: 'app-UserProfilePage',
  templateUrl: './UserProfilePage.component.html',
  styleUrls: ['./UserProfilePage.component.scss']
})
export class UserProfilePage implements OnInit {


  public User!: User;
  public UserModified!: User;
  public modifs!: FormGroup;
  public userReady: boolean = false;

  constructor(public formBuilder: FormBuilder, public userService: UserService, private jouerService: JouerService) {

    this.userService.UserSelected$.subscribe((UserSelected: User) => {
      if (UserSelected) {

        this.UserModified = UserSelected;
        console.log(this.UserModified)

        this.User = JSON.parse(JSON.stringify(this.UserModified));
        this.modifs = this.formBuilder.group({
          id: [this.UserModified.id],
          name: [this.UserModified.name],
          surname: [this.UserModified.surname],
          aggressivness: this.UserModified.aggressivness,
          passivity: this.UserModified.passivity,
          answerDisplay: this.UserModified.answerDisplay,
          music: [this.UserModified.music],

        });
        this.userReady = true;

      }
    });

    //if(this.UserModified != undefined && this.UserModified != null) {

    //}


    // userService.selectUser(this.UserModified);
  }
  ngOnInit(): void { }

  deleteQuizForProfile(value: Quiz): void {
    this.userService.deleteQuizForProfile(value);
  }

  applyChanges(): void {
    let Quizzs: Quiz[] = [];
    Quizzs = JSON.parse(JSON.stringify(this.UserModified.quizzes));
    let musics: string[] = [];
    musics = JSON.parse(JSON.stringify(this.UserModified.music));
    this.UserModified = this.modifs.getRawValue() as User;

    this.UserModified.quizzes = JSON.parse(JSON.stringify(Quizzs));
    this.UserModified.music = JSON.parse(JSON.stringify(musics));

    this.userService.updateUser(this.User, this.UserModified);
    this.User = JSON.parse(JSON.stringify(this.UserModified));
    this.userService.selectUser(this.UserModified);
  }
  cancelChanges(): void {
    this.UserModified = JSON.parse(JSON.stringify(this.User));;
    this.userService.updateUser(this.UserModified, this.User);
    this.userService.selectUser(this.UserModified);
    this.modifs['controls']['name'].setValue(this.User.name);
    this.modifs['controls']['surname'].setValue(this.User.surname);
    this.modifs['controls']['aggressivness'].setValue(this.User.aggressivness);
    this.modifs['controls']['passivity'].setValue(this.User.passivity);
    this.modifs['controls']['answerDisplay'].setValue(this.User.answerDisplay);
  }

  playBackSound(): void {
    this.jouerService.playButtonSimpleSound(ButtonSound.back)

  }
  switchPage(): void {
    this.jouerService.playButtonSimpleSound(ButtonSound.NextQuestion)
  }

  addMusic(): void {
    const input = document.getElementById(
      'music',
    ) as HTMLInputElement;
    if (!this.UserModified.music.includes(input.value)) {
      this.UserModified.music.push(input.value);
    }
  }

  deleteMusic(value: string): void {
    this.UserModified.music = this.UserModified.music.filter(m => m !== value);
  }
}
