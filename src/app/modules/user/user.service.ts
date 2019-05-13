import { Injectable } from '@angular/core';
import { User } from '@app/models/user';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    constructor() { }

    loadUsers(): Observable<User[]> {
        var user1 = new User()
        user1.id = 1;
        user1.name = "Kevin"
        user1.score = 20;
        var user2 = new User()
        user2.id = 1;
        user2.name = "Alice"
        user2.score = 25;
        return of([user1, user2])
    }
}
