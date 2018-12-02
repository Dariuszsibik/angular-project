import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, AfterViewChecked } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef : TotalCostComponent
  totalCost : number
  grossCost : number
  cars: Car[];

  constructor(private carsService: CarsService,
              private router : Router) { }

  ngOnInit() {
      this.loadCars();
      this.totalCostRef.showGross();
  }

  loadCars() : void {
      this.carsService.getCars().subscribe((cars) => {
          this.cars = cars;
          this.countTotalCost();
      })
  }

  goToCarDetails(car : Car) {
      this.router.navigate(['/cars', car.id]);
  }

  ngAfterViewInit() {

  }

  showGross() : void {
      this.totalCostRef.showGross();
  }

  countTotalCost() : void {
      this.totalCost = this.cars
        .map((car) => car.cost)
        .reduce((prev, next) => prev + next)
  }

  onShownGross(grossCost : number) : void {
      this.grossCost = grossCost;
  }
}
