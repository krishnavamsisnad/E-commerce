import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(public http:HttpClient) { }

  apiurl="http://localhost:3000/users"
  getallusers(){
    return this.http.get(`${this.apiurl}`)
  }
  getbyuser(name:any){
    return this.http.get(`${this.apiurl}?username=${name}`)
  }
  AddRegistion(newuser:any){
    return this.http.post(this.apiurl,newuser)
  }
  updateuser(id:any,newuser:any){
    return this.http.put(`${this.apiurl}/${id}`,newuser)
  }
  deletuser(id:any){
    return this.http.delete(`${this.apiurl}/${id}`)
  }
  IsLogin(){
    return localStorage.getItem('username')!=null
  }
}


