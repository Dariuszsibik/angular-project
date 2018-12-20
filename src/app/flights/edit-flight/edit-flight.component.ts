import { ActivatedRoute } from '@angular/router';
import { FlightsService } from './../flights.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';
import { Flight } from '../model/flight.model';

@Component({
  selector: 'cs-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.less']
})
export class EditFlightComponent implements OnInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;
  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) { }

  ngOnInit() {
  }

  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key).pipe(
      tap(flight => this.flightForm.setFlight(flight)))
        .subscribe(flight => this.flight = flight);

  }

}
