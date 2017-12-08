import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";

/*
  Generated class for the FirebaseApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseApiProvider {
  firebaseUser;

  constructor(private afAuth: AngularFireAuth) {
    this.firebaseUser = this.afAuth.auth.currentUser;
  }

  writeTaskOnFirebase(data) {
    const key = firebase
      .database()
      .ref(this.firebaseUser.uid)
      .child("tasks")
      .push().key;

    return firebase
      .database()
      .ref(this.firebaseUser.uid)
      .child("tasks/" + key)
      .update(data);
  }

  readTaskFromFirebase(listener) {
    // Implementar listar Tarefas
  }
}
