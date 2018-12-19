import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'cs-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.less']
})
export class NewFlightComponent {

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }
}
