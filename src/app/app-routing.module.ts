import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { NewBookingComponent } from './new-booking/new-booking.component';

const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BookingsComponent },
  { path: 'book', component: NewBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
