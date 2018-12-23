import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { LoginComponent } from './core-module/login/login.component';
import { DashboardComponent } from './core-module/dashboard/dashboard.component';
import { EditFlightComponent } from './flights/edit-flight/edit-flight.component';
import { LoginGuard } from './core-module/login/login.guard';
import { FlightsComponent } from './flights/flights.component';
import { PageNotFoundComponent } from './core-module/page-not-found/page-not-found.component';

const APP_ROUTERS: Route[] = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard ] },
    { path: 'cars', component: CarsListComponent, canActivate: [LoginGuard ] },
    { path: 'flights', component: FlightsComponent, canActivate: [LoginGuard] },
    { path: 'flights/:key', component: EditFlightComponent, canActivate: [LoginGuard] },

    {path: '**', component: DashboardComponent}
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
