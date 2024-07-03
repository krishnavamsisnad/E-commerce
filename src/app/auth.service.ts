import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44378/api/Customers';

  constructor(private http: HttpClient) { }

  getuser(){
    return this.http.get<any[]>(this.apiUrl)
  }

  login(username: string, password: string) {
    return this.getuser().pipe(
      map((customers: any[]) => {
        const customer = customers.find((c: any) => c.email === username && c.password === password);
        if (customer) {
          return { success: true, customer };
        } else {
          return { success: false };
        }
      })
    );
  }

  postCustomer(customer: any) {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, customer,{ headers: headers });
  }
}