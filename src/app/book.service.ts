import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Book} from './book';
// import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class BookService {

  constructor(private http: HttpClient) {}

  public saveBook(book) {
    return this.http.post('http://localhost:8080/saveBook', book, {responseType: 'text' as 'json'}) ;
  }

  public getBooks() {
    return this.http.get('http://localhost:8080/getAll');
  }

  public getBook(bid: number) {
    return this.http.get('http://localhost:8080/getBook/' + bid);
  }

  public updateBook(bid: number, availability: string) {
    return this.http.put('http://localhost:8080/updateBook/' + bid + '/' + availability, null);
  }

  public deleteBook(bid: number) {
    // console.log(bid);
    return this.http.delete('http://localhost:8080/deleteBook/' + bid );
  }
}

