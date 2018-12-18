import { Component, Input } from '@angular/core';
import { Flight } from '../model/flight.model';

@Component({
  selector: 'cs-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.less']
})
export class FlightCardComponent {
  @Input() flight: Flight;
}
