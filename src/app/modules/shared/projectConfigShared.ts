import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectConfig } from './projectConfig';

export let AppConfig = new InjectionToken<ProjectConfig>('app.config');

export const PROJECT_CONFIG: ProjectConfig = {
    sportsballUrl: environment.sportsballUrl,
    rootUrl: environment.rootUrl,
    apiUrl: environment.apiUrl
};
