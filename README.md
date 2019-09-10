# Walking Skeleton

This project is an outline Angular and NgRx template. 

It highlights several techniques such as NgRx actions and effects; lazy loading of module; presentational and container components

## Modules
### Home
Contains the `Home` component

### User
Has presentational and container components, `UserList` and `UserShell`

- The `UserShell` consists of the `User` component which 

    1. Has an `Observable` users collection
    1. Gets the users from the store when constructed by dispatching the `userActions.LoadUsersAction` action
        1. `UserEffects` gets the data from the `UserService` (and loads it into the store?), the `userReducer` functon manages the user state in the store and both the effect and the store are loaded in `user.module.ts`
- The `UserList` component has a `User[]` `@input` called `users` that's wired up in `user-shell-component.html` by
   ```html
        <app-user-list 
          [users]="users$ | async">
        </app-user-list>
   ```
   where `app-user-list` is the `UserList` component