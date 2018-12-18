import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";
import { LoginComponent } from "./core-module/login/login.component";
import { DashboardComponent } from "./core-module/dashboard/dashboard.component";
import { FlightsComponent } from "./flights/flights.component";

const APP_ROUTERS: Route[] = [
    { path: '', redirectTo: '/login' ,pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'cars', component: CarsListComponent},
    { path: 'flights', component: FlightsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTERS, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}