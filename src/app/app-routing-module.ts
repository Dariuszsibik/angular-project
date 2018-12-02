import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";

const APP_ROUTERS: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'cars' },
    { path: 'cars', component: <any>CarsListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTERS)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}