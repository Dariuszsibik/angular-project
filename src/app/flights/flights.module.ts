import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { FlightsComponent } from './flights.component';
import { CoreModule } from '../core-module/core-module';
import { SharedModule } from '../shared-module/shared-module';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ],
  exports: [FlightsComponent,FlightCardComponent]
})
export class FlightsModule { }
