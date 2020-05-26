import { Injectable } from '@angular/core';
import { User } from './model.user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  param: string;
   //inyectamos la dependencia HttpClient
   constructor(private http: HttpClient) { }

   //creamos un objeto con información para la cabecera
   //de nuestro request
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': 'Basic ' + btoa('pepe:1234')
     })
   };

   //creamos un método para hacer la consulta al API
   getUserLogin(usmail, uspass) {
     //return this.http.get('/user/login2', this.httpOptions);
      this.param = '{"usemail":"' + usmail + '","uspassword":"' + uspass + '"}';

     return this.http.post('/api/login', this.param, this.httpOptions);
   }
  }