import { Injectable } from '@angular/core';
import { ClientComponent } from './client/client.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
        id : 923426,
        username: 'admin',
        password: '1234',

    },
    {   
        id : 946821,
        username: "Kemmer",
        pasword: "12345",
    },
    
  ];

  session: any;

  constructor() { }

  login(username: string, password: string){
    let user = this.users.find((u)=>u.username===username && u.password===password)
    if(user){
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session))
    }
    return user;
  }

}
