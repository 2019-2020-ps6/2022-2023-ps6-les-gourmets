
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionService } from 'src/service/question.service';
import { Router } from '@angular/router';
import { Question } from 'src/models/question.model';


@Component({
    selector: 'app-ListeTheme',
    templateUrl: './ListeTheme.component.html',
    styleUrls: ['./ListeTheme.component.scss']
})
export class ListeTheme implements OnInit {
    @Output() themeSelected: EventEmitter<string> = new EventEmitter<string>();
    public quizQuestion: Question[] = [];

    constructor(private router: Router, public questionService: QuestionService) {
      this.questionService.questions$.subscribe((questions: Question[]) => {
        this.quizQuestion =  questions;
      });
    }

    ngOnInit(): void {}

    allThemes(): string[]{
        let themes:string[] = [];
        for(let question of this.quizQuestion){
            for(let questionThemes of question.themes)
            if(!themes.includes(questionThemes)){
                themes.push(questionThemes);
            }
        }
        return themes;
    }

    selectTheme(theme: string): void {
        this.themeSelected.emit(theme);
    }
  }
