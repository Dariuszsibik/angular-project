import { Component } from '@angular/core';
import { FlightsService } from './flights.service';
import { Observable } from 'rxjs';
import { Flight } from './model/flight.model';
import { MatDialog } from '@angular/material';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'cs-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.less']
})
export class FlightsComponent {
  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private dialog: MatDialog,
    private flightsService: FlightsService ) { }

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent);
  }

  showDetails(flight) {
    this.dialog.open(DetailsComponent, {data: flight});
  }
}
