import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'home', component: BookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
