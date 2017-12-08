import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TaskPage } from '../task/task';

/**
 * Generated class for the ToDoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-to-do-list',
  templateUrl: 'to-do-list.html',
})
export class ToDoListPage {

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToDoListPage');
  }

  goToTaskPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    //this.navCtrl.push(TaskPage);
    this.app.getRootNav().push(TaskPage);
  }

}
