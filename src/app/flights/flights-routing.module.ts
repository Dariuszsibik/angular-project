import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { EditFlightComponent } from './edit-flight/edit-flight.component';

const APP_ROUTERS: Route[] = [
  { path: '', loadChildren: './flights/flights.module#FlightsModule'},
  { path: '/:key', component: EditFlightComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(APP_ROUTERS)
    ],
    exports: [
        RouterModule
    ]
})

export class flightsRoutingModule {}
