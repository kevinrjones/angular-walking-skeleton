import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserManager } from 'oidc-client';
import { AppComponent } from './app.component';
import { UserManagerFactory } from './authentication/services/user-manager-factory';
import { AppRoutingModule } from './router/app-routing.module';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppConfig, PROJECT_CONFIG } from './shared/projectConfigShared';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // environment.production to enable in dev only
    }),
    EffectsModule.forRoot([]) // should be forFeature in the usermodule
  ],
  providers: [{
    provide: AppConfig,
    useValue: PROJECT_CONFIG
  },
  {
    provide: UserManager,
    useFactory: UserManagerFactory
  },
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
