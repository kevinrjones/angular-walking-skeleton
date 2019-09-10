import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/models/app-state';
import { User } from '@app/models/user';
import * as userActions from '@app/modules/user/state/user.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(state => state.users);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(new userActions.LoadUsersAction());
  }
}
