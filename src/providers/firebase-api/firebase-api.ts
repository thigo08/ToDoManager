import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from "firebase";
import { Task } from "../../shared/models/task";
import { database } from "firebase/app";

/*
  Generated class for the FirebaseApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseApiProvider {
  firebaseUser;
  private tasksListRef;
  private afDatabase: AngularFireDatabase;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.firebaseUser = this.afAuth.auth.currentUser;
    this.afDatabase = db;
    if (this.firebaseUser){
      this.tasksListRef = this.firebaseUser.uid + '/tasks';
    }
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

  readTaskFromFirebase(isDone: boolean, isHighPriority?: boolean) {
    return this.afDatabase.list<Task>(this.tasksListRef,
    ref => {
      return ref.orderByChild('isDone').equalTo(isDone);
    });
  }
} 
