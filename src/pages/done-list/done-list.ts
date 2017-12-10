import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { TaskPage } from '../task/task';
import { FirebaseApiProvider } from "../../providers/firebase-api/firebase-api";
import { Observable } from 'rxjs/Observable';
import { Task } from './../../shared/models/task';

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

  tasksList: Observable<Task[]>;

  constructor(private app: App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fireBaseApi: FirebaseApiProvider, 
    ) {
    this.tasksList = fireBaseApi
      .readTaskFromFirebase(true)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val(),
        }));
      });
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
