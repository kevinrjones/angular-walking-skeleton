import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { LoggingService } from '../../shared/services/logging.service';
import { WindowsService } from '../../shared/services/windows.service';

export function getClientSettings(): UserManagerSettings {
  return {
    authority: environment.authorityUrl, // ids
    client_id: environment.clientId, 
    redirect_uri: environment.authRedirectUrl, // client's redirect URI
    post_logout_redirect_uri: environment.postLogoutRedirectUrl,
    response_type: environment.responseType, // 'id_token token',
    scope: environment.scope, // 'openid profile api1',
    filterProtocolClaims: true,
    loadUserInfo: true
  };
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: User = null;

  constructor(
    private manager: UserManager,
    private windowsService: WindowsService,
    private localStorageService: LocalStorageService,
    private logger: LoggingService
  ) {
    this.getUser().subscribe(u => (this.user = u));
  }

  isLoggedIn(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => {
        return user != null && !user.expired;
      })
    );
  }

  getClaims(): Observable<any> {
    return this.getUser()
    .pipe(map(u => u.profile));
  }

  getAuthorizationHeaderValue(): Observable<string> {
    return this.getUser().pipe(map(u => `${u.token_type} ${u.access_token}`));
  }

  startAuthentication(): Observable<void> {
    this.logger.info('start authentication');
    this.localStorageService.setItem('path_redirect', window.location.href);
    return from(this.manager.signinRedirect());
  }

  completeAuthentication(): Observable<void> {
    return from(
      this.manager.signinRedirectCallback().then(user => {
        this.user = user;
        this.windowsService.redirect(this.localStorageService.getItem('path_redirect'));
      })
    );
  }

  startSignout(): Observable<void> {
    return from(this.manager.signoutRedirect());
  }

  completeSignout(): Observable<void> {
    return from(
      this.manager.signoutRedirectCallback().then(resp => {
        this.user = undefined;
        this.windowsService.redirect('/home');
      })
    );
  }

  private getUser(): Observable<User> {
    if (this.user != null) {
      // istanbul ignore next
      return of(this.user);
    }
    return from(this.manager.getUser());
  }
}
