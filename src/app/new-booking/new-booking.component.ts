import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TravelsService } from '../shared/travels.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent implements OnInit {
  //Declare variable
  TravelId: number;

  constructor(public travelService: TravelsService, private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    // Get users list and airline list
    this.travelService.getUsers();
    this.travelService.getAirlines();

    
    //Get TravelId from ActivatedRoute
    this.TravelId = this.route.snapshot.params['TravelId'];

    //Get employee by id
    if (this.TravelId != 0 || this.TravelId != null) {

      //Get employee by id
      this.travelService.getBookingById(this.TravelId).subscribe(
          response =>{
          console.log(response);

          //Format date
          var datePipe = new DatePipe("en-UK");
          let formattedDate:any =datePipe.transform(response.DateOfJoining, 'yyyy-MM-dd');
          response.DateOfJoining = formattedDate;
          //Assign this response to empservice formData
          this.travelService.formDataBook = Object.assign({}, response);
        },
        error => {
          console.log(error);
        }
        
      );
    }
  }

  //Submit form
  onSubmit(form: NgForm) { 
    console.log(form.value);
    let addId = this.travelService.formDataBook.TravelId;
    
    //Insert or update
    if (addId == 0 || addId == null) { 

      //Insert
      this.insertBookingRecord(form);
      this.resetForm(form);
      this.router.navigateByUrl('home');
    } else {
      //Update
      this.updateBookingRecord(form);
      this.resetForm(form);
      this.router.navigateByUrl('home');
    }
  }

  //Insert Method
  insertBookingRecord(form?: NgForm) { 
    console.log("Inserting a record....");
    this.travelService.insertBooking(form.value).subscribe(res => {
      console.log(res);
      this.toastr.success('Booking Successful', 'Travel App V2022');
    },
      err => { 
        console.log(err);
      }
    );
  }

  //Update Method
  updateBookingRecord(form?: NgForm) { 
    console.log("Updating a record....");
    this.travelService.updateBooking(form.value).subscribe(res => {
      console.log(res);
      this.toastr.success(
        'Updated Successfully',
        'Travel App V2022'
      );
    },
      err => { 
        console.log(err);
      }
    );
  }

  //Clear all contents after submit
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  }

