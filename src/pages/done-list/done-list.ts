import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { TaskPage } from '../task/task';

/**
 * Generated class for the DoneListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-done-list',
  templateUrl: 'done-list.html',
})
export class DoneListPage {

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoneListPage');
  }

  goToTaskPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    //this.navCtrl.push(TaskPage);
    this.app.getRootNav().push(TaskPage);
  }

}
