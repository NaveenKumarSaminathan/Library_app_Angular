import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  bid: number;
  book: any;
  bookPresent = false;
  firstTime = true;
  constructor(private getBookServ: BookService) { }

  ngOnInit(): void {
  }

  public onView(bid: number) {
    this.firstTime = false;
    this.getBookServ.getBook(bid).subscribe((data: any) => {
      // console.log(data);
      // console.log(this.bookPresent);
      this.book = data;
      this.bookPresent = (this.book.bid !== 0);
    }, (error: any) => {
      console.log(error.text);
    });
  }
}
