// import { Injectable } from '@angular/core';
// import { User } from '../models/user';

// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) { }

  
//   getUser(username: string, password: string): Observable<User> {
//     const url = `https://localhost:44337/api/costume/Get?username=${username}&password=${password}`;
//     console.log("url");
//     console.log(url);

    
//     return this.http.get<User>(url);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string, password: string): Observable<User> {
    const url = 'https://localhost:44337/api/costume/Get';
    const body = { username: username, password: password };
    return this.http.post<User>(url, body);
  }
}

