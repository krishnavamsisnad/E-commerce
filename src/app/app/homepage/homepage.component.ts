import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  username = '';
  password = '';
  userdata: any;
  localdata: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    const data = localStorage.getItem('user');
    if (data) {
      this.localdata = JSON.parse(data);
    }
  }

  login(user: NgForm) {
    if (user.valid) {
      this.http.get('http://localhost:3000/signin').subscribe(
        (res: any) => {
          console.log(res);
          this.userdata = res;
          const login = this.userdata.find(
            (a: any) => a.username === user.value.username && a.password === user.value.password
          );
          if (login) {
            console.log('Login successful');
            this.toast.success('Login successful', 'Success');
            this.router.navigate(['/dashboard']);
          } else {
            console.log('Login failed');
            this.toast.error('Invalid username or password', 'Error');
          }
        },
        (error) => {
          console.error('Error fetching user data:', error);
          this.toast.error('An error occurred while trying to log in. Please try again later.', 'Error');
        }
      );
    } else {
      console.log('Form is invalid');
      this.toast.warning('Please fill in all required fields', 'Warning');
    }
  }
}
