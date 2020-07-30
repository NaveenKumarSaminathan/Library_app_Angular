import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})

export class ViewallComponent implements OnInit {

  books: any;
  len: number;
  constructor(private viewallService: BookService, private http: HttpClient) { }

  ngOnInit() {
    this.viewallService.getBooks().subscribe((data: any[]) => {
      console.log(data);
      this.books = data;
      this.len = data.length;
    });
    // this.http.get('http://localhost:8080/getAll').subscribe((data) => this.books = data);
  }
}
