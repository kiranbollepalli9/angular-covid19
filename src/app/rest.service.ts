import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

   }

   getCountrywiseReports(){
    return this.http.get('https://disease.sh/v2/countries');
   }
}
