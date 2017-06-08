import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuestionServiceProvider} from "../../providers/question-service/question-service";

@Component({
  selector: 'page-trendingQuestions',
  providers: [QuestionServiceProvider],
  templateUrl: 'trendingQuestions.html'
})
export class TrendingQuestionsPage {

  public questions: any;

  constructor(public navCtrl: NavController, public questionService: QuestionServiceProvider) {
    this.loadQuestions();
  }

  ionViewWillEnter() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.loadAllQuestions().subscribe(data => {
      if (data !== undefined && data !== []) {
        if (data.hasOwnProperty('results')) {
          this.questions = data.results;
        }
      }
    });
  }

}
