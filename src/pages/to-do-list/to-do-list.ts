import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TaskPage } from '../task/task';
import { FirebaseApiProvider } from '../../providers/firebase-api/firebase-api';
import { Task } from '../../shared/models/task';
import { Observable } from 'rxjs/Observable';

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
  
  tasksList: Observable<Task[]>;

  constructor(private app: App, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fireBaseApi: FirebaseApiProvider, 
  ) {
  this.tasksList = fireBaseApi
    .readTaskFromFirebase(false)
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, 
        ...c.payload.val(),
      }));
    });
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
