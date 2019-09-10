import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserEffects } from '@app/modules/user/state/user.effects';
import { userReducer } from '@app/modules/user/state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list.component';
import { UserComponent } from './containers/user-shell.component';
import { userRoutes } from './user.routes';

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    SharedModule, RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
