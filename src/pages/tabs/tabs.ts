import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { DoneListPage } from '../done-list/done-list';
import { ToDoListPage } from '../to-do-list/to-do-list';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DoneListPage;
  tab2Root = ToDoListPage;

  constructor() {

  }
}
