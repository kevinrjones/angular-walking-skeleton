import { Injectable } from '@angular/core';
import * as userActions from '@app/modules/user/state/user.actions';
import { UserService } from '@app/modules/user/user.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from "rxjs/operators";

@Injectable()
export class UserEffects {

    constructor(private userService: UserService, private actions$: Actions) { }

    @Effect() loadCompanies$ = this
        .actions$.pipe(
            ofType(userActions.LOAD_USER),
            switchMap(() => this.userService.loadUsers().pipe(
                map(users => (new userActions.LoadUsersSuccessAction(users))))))
}