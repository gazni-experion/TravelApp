import { Time } from "@angular/common";

export class Travels {
  TravelId: number = 0;
  PassengerName: string = '';
  DateOfTravel: Date = new Date();
  TimeOfTravel: Time;
  Destination: string = '';
  Departure: string = '';
  Tickets: number = 0;
  Airline: string = '';
  TotalPrice: number = 0;
}
