import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QUIZ_LIST } from 'src/mocks/QuizList.mocks';
import { ButtonSound } from 'src/models/ButtonSound';
import { JouerService } from 'src/service/jouer.service';

@Component({
    selector: 'app-UserForm',
    templateUrl: './UserForm.component.html',
    styleUrls: ['../../../../styles.scss','./UserForm.component.scss']
})
export class UserForm implements OnInit {

    public userForm: FormGroup;

    constructor(public router : Router, public formBuilder: FormBuilder, private userService: UserService,private jouerService: JouerService) {
      this.userForm = this.formBuilder.group({
        name: [''],
        surname: [''],
        quizzes: [],
        aggressivness: 0.5,
        music : [[]],
        answerDisplay: false,
      });
    }

    ngOnInit() : void {}

    addUser() : void {
      this.jouerService.playButtonSimpleSound(ButtonSound.SelectingObject)
      const userToCreate: User = this.userForm.getRawValue() as User;
      // initialize the quizzes list empty
      userToCreate.quizzes = [];
      this.userService.addUser(userToCreate);
      this.userService.selectUser(userToCreate);
    }

toggleAnswerDisplay() {
  if(this.userForm.get('answerDisplay')!=null){
    
    if(this.userForm.get('answerDisplay')?.value == false){
      this.userForm.get('answerDisplay')?.setValue(true);
    }
    else{
      this.userForm.get('answerDisplay')?.setValue(false);
    }
  }


}
playBackSound(){
  this.jouerService.playButtonSimpleSound(ButtonSound.back)
}
}
