
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonSound } from 'src/models/ButtonSound';
import { Quiz } from 'src/models/quiz.model';
import { JouerService } from 'src/service/jouer.service';
import { QuizService } from 'src/service/quiz.service';

@Component({
    selector: 'app-QuizForm',
    templateUrl: './QuizForm.component.html',
    styleUrls: ['./QuizForm.component.scss']
})
export class QuizFormComponent implements OnInit {

  public quizForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private quizService: QuizService,private jouerService : JouerService) {
    this.quizForm = this.formBuilder.group({
      id: 7,
      name: ['']
    });
  }

  ngOnInit(): void {}

  addQuiz(): void {
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    this.quizService.addQuiz(quizToCreate);
  }
  
  playBackSound(){
    this.jouerService.playButtonSimpleSound(ButtonSound.back)
  }
}
