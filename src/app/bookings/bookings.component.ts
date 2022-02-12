import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../shared/travels.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  /*headElements = [
    'Travel Id',
    'Passenger Name',
    'Date Of Travel',
    'Time Of Travel',
    'Destination',
    'Departure',
    'Tickets',
    'Airline Name',
    'Total Price',
  ];*/

  constructor(public travelService: TravelsService) {}

  ngOnInit(): void {
    //Calling the getTravels method from TravelsService
    this.travelService.getTravels();
  }
}
