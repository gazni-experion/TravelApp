import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { ToastrModule } from 'ngx-toastr';
import { TravelsService } from './shared/travels.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookingsComponent,
    NewBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [TravelsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
