import { Routes } from '@angular/router';
// @app sett settings for baseUrl and paths in tsconfig.json
import { PageNotFoundComponent } from '@app/modules/shared/components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: 'home',
        loadChildren: '@app/modules/home/home.module#HomeModule'
    },
    {
        path: 'users',
        loadChildren: '@app/modules/user/user.module#UserModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }

];