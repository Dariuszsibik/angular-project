import { Component, Inject } from '@angular/core';
import { Flight } from '../model/flight.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {
  flight: Flight;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight
  ) { this.flight = data; }

  goToEditFlight() {
    this.dialogRef.close();
    this.router.navigate( ['/flights', this.flight.key]);
  }

  close() {
    this.dialogRef.close();
  }


}
