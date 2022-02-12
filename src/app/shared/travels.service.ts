import { Injectable } from '@angular/core';
import { Travels } from './travels';
import { Users } from './users';
import { Airline } from './airline';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  //Declaring a variable to hold the list of travel bookings
  travels: Travels[];
  users: Users[];
  airline: Airline[];
  book: Book[];
  formData: Travels = new Travels();
  formDataBook: Book = new Book();

  constructor(private http: HttpClient) {}

  //Get list of travel bookings
  getTravels() {
    return this.http
      .get(environment.apiUrl + '/bookings/getallbookings')
      .toPromise()
      .then((response) => {
        console.log('bookings from service...');
        console.log(response);
        this.travels = response as Travels[];
      });
  }

  //Get list of users
  getUsers() {
    return this.http
      .get(environment.apiUrl + '/bookings/users')
      .toPromise()
      .then((response) => {
        console.log('users from service...');
        console.log(response);
        this.users = response as Users[];
      });
  }

  //Get list of airlines
  getAirlines() {
    return this.http
      .get(environment.apiUrl + '/bookings/airline')
      .toPromise()
      .then((response) => {
        console.log('airline from service...');
        console.log(response);
        this.airline = response as Airline[];
      });
  }

  //Get booking by id
  getBookingById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/bookings/' + id);
  }

  //Insert 
  insertBooking(book: Book): Observable<any> {
    return this.http.post(environment.apiUrl + '/bookings/newbooking', book);
  }

  //Update Employee
  updateBooking(book: Book): Observable<any> {
    return this.http.put(environment.apiUrl + '/bookings/update', book);
  }

  //Delete Employee
  deleteEmployee(id: number) {
    return this.http.delete(
      environment.apiUrl + '/bookings/' + id
    );
  }
}
