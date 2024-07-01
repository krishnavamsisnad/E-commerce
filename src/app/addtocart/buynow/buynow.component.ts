import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {

  constructor(private router:Router){}

  onSubmit(orderForm: NgForm) {
    if (orderForm.valid) {
      console.log('Form Submitted!', orderForm.value);
      // Perform your order placement logic here
      // this.showModal();
    }
  }

  continueShopping(){
    this.router.navigate(['/dashboard'])
  }

  // showModal() {
  //   const modalElement = document.getElementById('orderSuccessModal');
  //   if (modalElement) {
  //     const modal = new bootstrap.Modal(modalElement);
  //     modal.show();
  //   }
  // }

  orderStatus(){
    alert("Your order has been successfully placed")
  }
}
