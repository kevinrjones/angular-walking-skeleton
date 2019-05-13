// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  rootUrl: 'https://sportsball.knowledgespike.local:5446',
  apiUrl: 'https://sportsball.knowledgespike.local:5447',
  sportsballUrl: '/api/sportsball',
  authorityUrl: 'https://ids.knowledgespike.local',
  authRedirectUrl: 'https://sportsball.knowledgespike.local:5446/auth-callback',
  postLogoutRedirectUrl: 'https://sportsball.knowledgespike.local:5446/signout-callback',
  responseType: 'id_token token',
  scope: 'openid profile sportsball_api',
  clientId: 'sportsball'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
