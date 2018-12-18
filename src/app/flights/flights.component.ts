import { Component, OnInit } from '@angular/core';
import { FlightsService } from './flights.service';

@Component({
  selector: 'cs-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.less']
})
export class FlightsComponent implements OnInit {

  constructor(private flightsService: FlightsService ) { }

  ngOnInit() {
    this.flightsService.getFlights().subscribe(console.log);
  }

}
