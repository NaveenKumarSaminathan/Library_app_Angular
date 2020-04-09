import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  book: Book = new Book(0, '', '', '', '');
  message: any;
  submitted = false;

  constructor(private saveBookserv: BookService,
              private route: Router) {
  }

  ngOnInit(): void {
  }
  public onSave() {
    // console.log(this.book)
    this.saveBookserv.saveBook(this.book).subscribe(
      data => (this.message = data),
      error => (this.message = error));
    this.book = new Book(null, '', '', '', '');
    this.submitted = true;
    // this.route.navigate(['/home']);
  }
}
