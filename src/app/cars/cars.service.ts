import { Injectable } from '@angular/core';
import {Car} from "./models/car";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';
import 'rxjs-compat/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = "/cars";

  constructor(
    private db: AngularFireDatabase,
    private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.db.list<Car>(this.apiUrl).snapshotChanges()
      .pipe(map(response => response.map(car => this.assignKey(car))));
  }

  getCar(key: string) : Observable<Car> {
     return this.http.get(`https://angular-project-1880d.firebaseio.com/cars/${key}/.json`)
       .map((res) => res.json())
    // return this.db.object<Car>(`${this.apiUrl}/${key}`).snapshotChanges()
    //   .pipe(map(car => this.assignKey(car)));
  }

  updateCar(id: number, data) : Observable<Car> {
    return this.http.put(`https://angular-project-1880d.firebaseio.com/${id}`, data)
    .map((res) => res.json())
  }

  addCar(car: Car) {
    return this.db.list<Car>(this.apiUrl).push(car);
  }

  removeCar(id: number) : Observable<Car> {
    return this.http.delete(`https://angular-project-1880d.firebaseio.com/${id}`)
    .map((res) => res.json())
  }

  private assignKey(car) {
    return {...car.payload.val(), key: car.key}
  }

}
