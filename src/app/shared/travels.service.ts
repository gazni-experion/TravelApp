import { Injectable } from '@angular/core';
import { Travels } from './travels';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  //Declaring a variable to hold the list of travel bookings
  travels: Travels[];
  
  constructor(private http: HttpClient) { }

  //Get list of travel bookings
  getTravels() { 
    return this.http
      .get(environment.apiUrl + '/bookings/getallbookings')
      .toPromise()
      .then((response) => {
        console.log('from service...');
        console.log(response);
        this.travels = response as Travels[];
      });
  }

}
