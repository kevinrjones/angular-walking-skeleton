import { Routes } from '@angular/router';
// @app sett settings for baseUrl and paths in tsconfig.json
import { PageNotFoundComponent } from '@app/modules/shared/components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('@app/modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'users',
        loadChildren: () => import('@app/modules/user/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }

];