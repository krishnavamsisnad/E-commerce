import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchQuery: string = '';

  sortPrice(order: string): void {
    if (order === 'highToLow') {
      // Implement sorting logic for high to low
    } else if (order === 'lowToHigh') {
      // Implement sorting logic for low to high
    }
  }

  search(event: Event): void {
    event.preventDefault();
    // Implement search logic
    console.log('Search query:', this.searchQuery);
  }
}
