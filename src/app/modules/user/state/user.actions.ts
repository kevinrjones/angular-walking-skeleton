import { User } from '@app/models/user';

export const LOAD_USER = '[User] LOAD USER;'
export const LOAD_USER_SUCCESS = '[User] LOAD USER_SUCCESS;'

export class LoadUsersAction {
    readonly type = LOAD_USER;
    constructor() { }
}

export class LoadUsersSuccessAction {
    readonly type = LOAD_USER_SUCCESS;
    constructor(public payload: User[]) { }
}

export type Action
    = LoadUsersAction
    | LoadUsersSuccessAction



