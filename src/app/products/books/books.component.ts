import { Component } from '@angular/core';
import { booksData } from 'src/data/books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookInfo=booksData;
}
