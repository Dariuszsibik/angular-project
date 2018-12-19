import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { FlightsComponent } from './flights.component';
import { CoreModule } from '../core-module/core-module';
import { SharedModule } from '../shared-module/shared-module';
import { NewFlightComponent } from './new-flight/new-flight.component';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent],
  entryComponents: [NewFlightComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ],
  exports: [FlightsComponent,FlightCardComponent]
})
export class FlightsModule { }
