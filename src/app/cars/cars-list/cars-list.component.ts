import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, AfterViewChecked } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  cars: Car[];
  carsList: Observable<Car[]>;
  carForm: FormGroup;


  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
      this.loadCars();
      this.carForm = this.buildCarForm();
  }

  buildCarForm() {
      return this.formBuilder.group({
        model: ['', Validators.required],
        type:  '',
        plate:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
        deliveryDate:  '',
        deadline:  '',
        cost: '',
        color:  '',
        power:  '',
        clientFirstName:  '',
        clientSurname: '',
        isFullyDamaged:  '',
        year: ''
    });
  }

  loadCars(): void {
      this.carsService.getCars().subscribe((cars) => {
          this.cars = cars;
          this.countTotalCost();
      });
  }

  addCar() {
       this.carsService.addCar(this.carForm.value);
  }

  goToCarDetails(car: Car) {
      this.router.navigate(['/cars', car.key]);
  }

  removeCar(car: Car, event) {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
  }

  ngAfterViewInit() {

  }

  showGross(): void {
      this.totalCostRef.showGross();
  }

  countTotalCost(): void {
      this.totalCost = this.cars
        .map((car) => car.cost)
        .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
      this.grossCost = grossCost;
  }
}
