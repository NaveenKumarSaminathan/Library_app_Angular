import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  books: any;
  availability: string;
  len: number;

  constructor(private editService: BookService) { }

  ngOnInit(): void {
    this.editService.getBooks().subscribe((data: any[]) => {
      console.log(data);
      this.books = data;
      this.len = data.length;
    });
  }

  public onDelete(bid: number) {
    this.editService.deleteBook(bid).subscribe((data: any) => {
      console.log(data);
      this.books = data;
      this.len = data.length;
    });
  }

  public onUpdate(bid: number, bookAvailability: string) {
    if (bookAvailability === 'true') {
      this.availability = 'false';
    } else {
      this.availability = 'true';
    }
    this.editService.updateBook(bid, this.availability).subscribe((data: any) => {
      console.log(data);
      this.books = data;
    });
    this.editService.getBooks().subscribe((data: any) => {
      console.log(data);
      this.books = data;
      this.len = data.length;
    });
  }
}
