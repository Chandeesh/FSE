import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user';
import { UserLogin } from '../model/userlogin';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { Complaint } from '../model/complaint';

@Injectable()
export class UserService {

  private login: string;
  private register: string;
  private confirm: string;
  private addproduct: string;
  private getproduct: string;
  private address: string;
  private complainturl: string;
  private getUser: string;

  constructor(private http: HttpClient) {
    this.login = 'http://localhost:8080/customers/login';
    this.register = 'http://localhost:8080/customers/registeruser';
    this.confirm = 'http://localhost:8080/customers/confirmuser?token=';
    this.addproduct = 'http://localhost:8080/products/sellproducts';
    this.getproduct = 'http://localhost:8080/products/getproducts';
    this.address = 'http://localhost:8080/customers/getAddress?email=';
    this.complainturl = 'http://localhost:8080/products/raiseissue';
    this.getUser = 'http://localhost:8080/customers/getCustomers';
  }

  // tslint:disable-next-line: typedef
  public save(user: User) {
    return this.http.put<User>(this.register, user, {observe: 'response'}).pipe(map(response => {
      return response; }));
  }

  // tslint:disable-next-line: typedef
  public loginuser(userlogin: UserLogin) {
    return this.http.post<UserLogin>(this.login, userlogin, {observe: 'response'}).pipe(map(response => {
      return response; }));
  }

   // tslint:disable-next-line: typedef
  public confirmuser(token: string) {
    return this.http.get(this.confirm + token, {observe: 'response'}).pipe(map(response => {
      return response; }));
  }

   // tslint:disable-next-line: typedef
  public addProduct(product: Product) {
    return this.http.put<Product>(this.addproduct, product, {observe: 'response'}).pipe(map(response => {
      return response; }));
  }

  // tslint:disable-next-line: typedef
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getproduct);
  }
  
  public getCustomers(): Observable<User[]> {
	    return this.http.get<User[]>(this.getUser);
	  }
  
  public getAddress(email: string) {
	  return this.http.get(this.address+email,{responseType: 'text'}).pipe(map(response => {
	      return response; }));
  }
  
  public raiseComplaint(complaint: Complaint) {
	  return this.http.put<Complaint>(this.complainturl, complaint, {observe: 'response'}).pipe(map(response => {
	      return response; }));
  }
}
