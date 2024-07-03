import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  login(user: NgForm) {
    if (user.valid) {
      this.authService.login(user.value.username, user.value.password).subscribe(
        (res: any) => {
          console.log(res)
          if (res.success) {
            console.log('Login successful');
            this.toastr.success('Login successful', 'Success');
            localStorage.setItem('currentUser', JSON.stringify(res.customer));
            this.router.navigate(['/']);
          } else {
            console.log('Login failed');
            this.toastr.error('Invalid username or password', 'Error');
          }
        },
        (error: any) => {
          console.error('Error fetching user data:', error);
          this.toastr.error('An error occurred while trying to log in. Please try again later.', 'Error');
        }
      );
    } else {
      console.log('Form is invalid');
      this.toastr.warning('Please fill in all required fields', 'Warning');
    }
  }
}