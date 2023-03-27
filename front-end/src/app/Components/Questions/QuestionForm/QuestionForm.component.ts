// QuestionForm.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/models/question.model';
import { QuestionService } from 'src/service/question.service';

@Component({
    selector: 'app-QuestionForm',
    templateUrl: './QuestionForm.component.html',
    styleUrls: ['./QuestionForm.component.scss']
})
export class QuestionFormComponent implements OnInit {

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private questionService: QuestionService) {
    this.questionForm = this.formBuilder.group({
      id: 7,
      label: [''],
      answers: this.formBuilder.array([
        this.formBuilder.group({
          type: [''],
          value: [''],
          isCorrect: [false],
        }),
        this.formBuilder.group({
          type: [''],
          value: [''],
          isCorrect: [false],
        }),
        this.formBuilder.group({
          type: [''],
          value: [''],
          isCorrect: [false],
        }),
        this.formBuilder.group({
          type: [''],
          value: [''],
          isCorrect: [false],
        }),
      ])
    });
  }

  ngOnInit(): void {}

  addQuestion(): void {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.questionService.addQuestion(questionToCreate);
  }


}
