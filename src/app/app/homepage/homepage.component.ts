import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from 'src/app/author.service'; // Adjust the path as per your project structure

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
    private authService: AuthorService
  ) {}

  login(user: NgForm) {
    if (user.valid) {
      this.authService.getbyuser(user.value.username).subscribe(
        (res: any) => {
          console.log(res);
          const login = res.find((a: any) => a.username === user.value.username && a.password === user.value.password);
          if (login) {
            localStorage.setItem('user', JSON.stringify(login));
            console.log('Login successful');
            this.toastr.success('Login successful', 'Success');
            this.router.navigate(['/dashboard']);
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

  navigateToDashboard(){
    this.router.navigate(['/dashboard'])
  }
}


