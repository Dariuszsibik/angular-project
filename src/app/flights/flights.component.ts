import { Component } from '@angular/core';
import { FlightsService } from './flights.service';
import { Observable } from 'rxjs';
import { Flight } from './model/flight.model';

@Component({
  selector: 'cs-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.less']
})
export class FlightsComponent {
  flights$: Observable<Flight[]> = this.flightsService.getFlights();
  constructor(private flightsService: FlightsService ) { }

}
