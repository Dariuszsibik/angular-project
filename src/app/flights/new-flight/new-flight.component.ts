import { FlightFormComponent } from './../flight-form/flight-form.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'cs-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.less']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }
}
