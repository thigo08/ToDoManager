import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Task } from "../../shared/models/task";

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-task",
  templateUrl: "task.html"
})
export class TaskPage {
  task = { priority: false, isDone: false } as Task;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TaskPage");
  }

  save() {
    // Implementar serviço para salvar
    console.log(this.task);
  }
}
