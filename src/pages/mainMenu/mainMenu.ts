import { Component } from '@angular/core';

import { NewsServiceProvider } from '@plusme/providers/news-service/news-service';
import { QuestionServiceProvider } from '@plusme/providers/question-service/question-service';

import { OpenQuestionsPage } from '@plusme/pages/openQuestions/openQuestions';
import { NewsPage } from '@plusme/pages/news/news';
import { EnterQuestionPage } from '@plusme/pages/enterQuestion/enterQuestion';
import { AnsweredQuestionsPage } from '@plusme/pages/answeredQuestions/answeredQuestions';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-main',
  templateUrl: 'mainMenu.html'
})
export class MainMenuPage {

  openQuestionsView = OpenQuestionsPage;
  answeredQuestionsView = AnsweredQuestionsPage;
  enterQuestionView = EnterQuestionPage;
  newsView = NewsPage;
  unseenAnswered = 0;
  unseenNews = 0;

  constructor(
    private newsService: NewsServiceProvider,
    private questionService: QuestionServiceProvider,
    private navCtrl: NavController,
  ) {
  }

  ionViewWillEnter() {
    // this.newsService.unseenNews().subscribe(unseen => this.unseenNews = unseen);
    // this.questionService.unseenAnsweredQuestions().subscribe(unseen => this.unseenAnswered = unseen);
  }

  public goToOpenQuestionsView() {
    // this.navCtrl.navigateForward(FrontendRoutes.SearchQuestions);
  }

  public goToAnsweredQuestionsView() {}
  public goToEnterQuestionView() {
    // this.navCtrl.navigateForward(FrontendRoutes.EnterQuestion);
  }
  public goToNewsView() {
    // this.navCtrl.navigateForward(FrontendRoutes.News)
  }

}
