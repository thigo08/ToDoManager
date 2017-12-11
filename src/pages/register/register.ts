import { LoginPage } from "./../login/login";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, ToastController } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { User } from "../../shared/models/user";

import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  user = {} as User;
  @ViewChild("form") form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth
  ) {}

  createUser() {
    if (this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 3000, position: "bottom" });

      this.afAuth.auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((user: any) => {
          user.sendEmailVerification();

          toast.setMessage("Usuário criado com sucesso.");
          toast.present();

          this.navCtrl.setRoot(LoginPage);
        })
        .catch((error: any) => {
          if (error.code == "auth/email-already-in-use") {
            toast.setMessage("O e-mail digitado já está em uso.");
          } else if (error.code == "auth/invalid-email") {
            toast.setMessage("O e-mail digitado não é valido.");
          } else if (error.code == "auth/operation-not-allowed") {
            toast.setMessage("Não está habilitado criar usuários.");
          } else if (error.code == "auth/weak-password") {
            toast.setMessage("A senha digitada é muito fraca.");
          }
          toast.present();
        });
    }
  }
}
