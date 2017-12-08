import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Task } from "../../shared/models/task";
import { FirebaseApiProvider } from "../../providers/firebase-api/firebase-api";

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
  task = {
    key: "",
    title: "",
    resume: "",
    priority: true,
    isDone: false
  } as Task;

  constructor(
    private firebase: FirebaseApiProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TaskPage");
  }

  save() {
    // Implementar serviço para salvar
    console.log(this.task);
    this.firebase
      .writeTaskOnFirebase(this.task)
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
