import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../shared/models/user";
import { AngularFireAuth } from "angularfire2/auth";

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {email: 'alex@gmail.com', password: '1234567'} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot("TabsPage");
      }
    } catch (e) {
      this.showAlert(e);
    }
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot("TabsPage");
      }
    } catch (e) {
      this.showAlert(e);
    }
  }

  private showAlert(e) {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: e.message,
      buttons: ['OK']
    });
    alert.present();
  }
}
