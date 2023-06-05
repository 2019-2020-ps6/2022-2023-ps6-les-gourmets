// QuestionForm.ts

import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/models/question.model';
import { QuestionService } from 'src/service/question.service';

@Component({
    selector: 'app-QuestionForm',
    templateUrl: './QuestionForm.component.html',
    styleUrls: ['../../../../styles.scss','./QuestionForm.component.scss']
})
export class QuestionFormComponent implements OnInit {

  public questionForm: FormGroup;
  private question!:Question;
  private edit!:boolean;
  constructor(public formBuilder: FormBuilder, private questionService: QuestionService) {
    this.questionService.questionSelected$.subscribe((question: Question) => {
      this.question = JSON.parse(JSON.stringify(question));
    });
    this.questionService.edit$.subscribe((edit: boolean) => {
      this.edit = JSON.parse(JSON.stringify(edit));
    });
    this.questionForm = this.formBuilder.group({
      id: this.question.id,
      label: [this.question.label],
      theme: [this.question.theme],
      estFacile:[false],
      answers: this.formBuilder.array([
        this.formBuilder.group({
          type: [this.question.answers[0].type],
          value: [this.question.answers[0].value],
          isCorrect: [this.question.answers[0].isCorrect],
        }),
        this.formBuilder.group({
          type: [this.question.answers[1].type],
          value: [this.question.answers[1].value],
          isCorrect: [this.question.answers[1].isCorrect],
        }),
        this.formBuilder.group({
          type: [this.question.answers[2].type],
          value: [this.question.answers[2].value],
          isCorrect: [this.question.answers[2].isCorrect],
        }),
        this.formBuilder.group({
          type: [this.question.answers[3].type],
          value: [this.question.answers[3].value],
          isCorrect: [this.question.answers[3].isCorrect],
        }),
      ]),
      trueAnswer: 0,
      falseAnswer: 0
    });
  }

  ngOnInit(): void {
  }

  addQuestion(): void {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.questionService.addQuestion(questionToCreate);
  }

  updateQuestion(): void {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.questionService.updateQuestion(this.question,questionToCreate);
  }

  getAnswersFormArray(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  getEdit(): boolean{
    return this.edit;
  }

  getPreview(): Question {
    return this.questionForm.getRawValue() as Question;
  }

  onAnswerSelected(index: number): void {
    const answersFormArray = this.getAnswersFormArray();
    for (let i = 0; i < 4; i++) {
      answersFormArray.at(i).patchValue({ isCorrect: i === index });
    }
  }

}
