import { Injectable } from '@angular/core';
import { Articoli } from '../interface/phone';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class articoliService {

  url = 'http://localhost:4201/products';

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Articoli[]>(this.url).pipe(catchError(err => {
      return throwError(() => new Error(err));
    }));
  };

  getSingleProduct(id: number) {
    return this.http.get<Articoli>(`${this.url}/${id}`);
  }


}
