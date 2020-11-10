import { Component, OnInit } from '@angular/core';
import { Question } from '../model.question';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  // Question data from JSON:
  questionInfo: Question[];

  // All logged answers:
  isCorrect: boolean[] = [false, false, false, false, false];
  selected: number[] = [-1, -1, -1, -1, -1];

  // Current question and index:
  q: Question;
  i: number = 0;

  // Total number of questions:
  length: number = 0;

  // Page checker:
  page: string = "quiz";

  // Final score
  score: number = 0;

  ngOnInit(): void {
    this.mainService.loadQuestionDetails().subscribe(data => {
      this.questionInfo = data;
      // Do not write above this line
      for (let x of Object.keys(this.questionInfo)) {
        length++;
      }
      console.log(length);

    });
    console.log('Data loaded!');
  }

  answerSelected(isAnswer: boolean, oid: number): void {
    console.log(isAnswer);
    this.isCorrect[this.i] = isAnswer;
    this.selected[this.i] = oid;
    if (isAnswer) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.i < 4) {
      this.i++;
    }
    console.log(this.i);
  }

  prevQuestion(): void {
    if (this.i > 0) {
      this.i--;
    }
    console.log(this.i);
  }

  submit(): void {
    for (let a of this.isCorrect) {
      console.log(a);
    }
    // Set page
    this.page = "submit";
  }
  
  tryAgain() {
    // Reset all answers to false
    for (let j in this.isCorrect) {
      this.isCorrect[j] = false;
      this.selected[j] = -1;
    }
    console.log(this.isCorrect);
    console.log(this.selected);

    // Set page
    this.page = "quiz";
    // Set question
    this.i = 0;
    // Reset score
    this.score = 0;
  }
}
