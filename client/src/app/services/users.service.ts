import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    url: string = 'http://localhost:3000/api/users';

    constructor(private http: HttpClient) { }

    loginUser(email: String, password: String): Observable<User> {
        return this.http.post(`${this.url}/login`, { email: email, password: password }) as Observable<User>;
    }

    registerUser(email: String, name: String, password: String): Observable<any> {
        console.log('registerUser', email, name, password);
        
        return this.http.post(`${this.url}/register`,
            {
                email: email,
                name: name,
                password: password
            });
    }

    getUserById(id: string): Observable<User> {
        return this.http.get(`${this.url}/${id}`) as Observable<User>
    }
}
