import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private usersUrl: string;
  private usersAddUrl: string;
  private usersdeleteurl: string;
  private usersupdateurl: string;
  
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/employees/getAllCustomers';
    this.usersAddUrl = 'http://localhost:8080/employees/addusers';
    this.usersdeleteurl = 'http://localhost:8080/employees/deleteuser';
    this.usersupdateurl = 'http://localhost:8080/employees/updateuser';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersAddUrl, user);
  }
  
  public delete(id:string): Observable<any> {
    return this.http.delete(this.usersdeleteurl+"/"+id,{observe:'response'})
    .pipe(map(response => {
      return response;}));
  }
  
  public update(user:User) {
    return this.http.put<User>(this.usersupdateurl,user);
  }
}
