import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-regiters',
  templateUrl: './regiters.component.html',
  styleUrls: ['./regiters.component.css']
})
export class RegitersComponent {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: ''
  };

  constructor(
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthService
  ) {}

  signin(f: NgForm) {
    if (f.valid) {
      this.authService.postCustomer(this.user).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Registration successful', 'Success');
          this.router.navigateByUrl('/login'); 
        },
        (error) => {
          console.error(error);
          this.toastr.error('Registration failed', 'Error');
        }
      );
    } else {
      this.toastr.warning('Please fill out all fields correctly', 'Warning');
    }
  }
}