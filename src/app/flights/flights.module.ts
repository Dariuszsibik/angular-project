import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { FlightsComponent } from './flights.component';
import { CoreModule } from '../core-module/core-module';
import { SharedModule } from '../shared-module/shared-module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent, DetailsComponent, EditFlightComponent],
  entryComponents: [NewFlightComponent, DetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FlightsComponent, FlightCardComponent]
})
export class FlightsModule { }
