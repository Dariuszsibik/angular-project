import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CoreModule } from './core-module/core-module';
import { SharedModule } from './shared-module/shared-module';
import { AppRoutingModule } from './app-routing-module';
import { CarsRoutingModule } from './cars/cars-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './core-module/dashboard/dashboard.component';
import { LoginComponent } from './core-module/login/login.component';
import { FlightsComponent } from './flights/flights.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FlightsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    CarsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MaterialModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
