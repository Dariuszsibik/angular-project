import { FlightsService } from './../flights.service';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'cs-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.less']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;

  constructor(
    private flightsService: FlightsService,
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private toast: MatSnackBar
  ) { }

  createFlight() {
    // console.log(this.flightForm);
    this.flightsService.addFlight(this.flightForm.form.value)
     .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Flight has been successfuly created', '', {panelClass: 'toast-success'});
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }
}
