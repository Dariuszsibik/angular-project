import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlightsModule } from './flights/flights.module';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { CarsRoutingModule } from './cars/cars-routing.module';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CoreModule } from './core-module/core-module';
import { DashboardComponent } from './core-module/dashboard/dashboard.component';
import { LoginComponent } from './core-module/login/login.component';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared-module/shared-module';
import { PageNotFoundComponent } from './core-module/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    CarsRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MaterialModule,
    FlightsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
