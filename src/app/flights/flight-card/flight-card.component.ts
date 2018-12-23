import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Flight } from '../model/flight.model';

@Component({
  selector: 'cs-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent {
  @Input() flight: Flight;
}
