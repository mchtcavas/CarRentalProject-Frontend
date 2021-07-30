import { Rent } from './../models/rent';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) {}

  getRents(): Observable<ListResponseModel<Rent>> {
    let newPath = this.apiUrl + 'rentals/getrentaldtos';
    return this.httpClient.get<ListResponseModel<Rent>>(newPath);
  }
}
