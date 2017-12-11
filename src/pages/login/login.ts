import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, ToastController } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { User } from "../../shared/models/user";
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = { email: "alex@gmail.com", password: "1234567" } as User;
  @ViewChild("form") form: NgForm;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  public login() {
    if (this.form.form.valid) {
      this.afAuth.auth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.navCtrl.setRoot("TabsPage");
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({
            duration: 3000,
            position: "bottom"
          });
          if (error.code == "auth/invalid-email") {
            toast.setMessage("O e-mail digitado não é valido.");
          } else if (error.code == "auth/user-disabled") {
            toast.setMessage("O usuário está desativado.");
          } else if (error.code == "auth/user-not-found") {
            toast.setMessage("O usuário não foi encontrado.");
          } else if (error.code == "auth/wrong-password") {
            toast.setMessage("A senha digitada não é valida.");
          }
          toast.present();
        });
    }
  }

  public register() {
    this.navCtrl.push("RegisterPage");
  }
}
