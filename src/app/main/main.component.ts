import { Component, OnInit } from '@angular/core';
import { Question } from '../model.question';
import { MainService } from '../main.service';
import { Option } from '../model.option';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  questionInfo: Question[];
  options: Option[];
  // Current question:
  i = 0;

  ngOnInit(): void {
    this.mainService.loadQuestionDetails().subscribe(data => this.questionInfo = data);
    console.log('Data loaded!');
  }

  answerSelected(): void {

  }

  nextQuestion(): void {
    if (this.i < 4) {
      this.i++;
    }
    console.log(this.i);
  }

  prevQuestion(): void {
    if (this.i < 0) {
      this.i--;
    }
    console.log(this.i);
  }

  submit(): void {

  }
}
