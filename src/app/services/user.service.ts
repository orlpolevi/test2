import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://188c94174c39.ngrok.io/api/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //testing//
  getUser()
   {
     return ("Dynamic user name coming from the service")
   }
  //-------//
  
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  get_user_by_id_from_api(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
