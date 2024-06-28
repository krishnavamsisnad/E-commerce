import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface products{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:number
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  apiUrl="https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }

  getProducts():Observable<products[]>{
    return this.http.get<products[]>(this.apiUrl);
  }
}
