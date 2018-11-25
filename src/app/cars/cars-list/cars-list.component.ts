import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {
  totalCost: number
  cars: Car[] = [
    {
        id: 1,
        model: 'Mazda Rx7',
        plate: 'GD2121E',
        deliveryDate: '21-04-2017',
        deadline: '05-05-2016',
        client: {
            firstName: 'Jan',
            surname: 'Kowalski'
        },
        cost: 300,
        isFullyDamaged: true
    },
    {
        id: 1,
        model: 'Mazda Rx7',
        plate: 'GD2121E',
        deliveryDate: '21-04-2017',
        deadline: '05-05-2016',
        client: {
            firstName: 'Jan',
            surname: 'Kowalski'
        },
        cost: 300,
        isFullyDamaged: false
    },
    {
        id: 1,
        model: 'Mazda Rx7',
        plate: 'GD2121E',
        deliveryDate: '21-04-2017',
        deadline: '05-05-2016',
        client: {
            firstName: 'Jan',
            surname: 'Kowalski'
        },
        cost: 300,
        isFullyDamaged: true
    }
]

  constructor() { }

  ngOnInit() {
      this.countTotalCost();
  }

  countTotalCost() : void {
      this.totalCost = this.cars
        .map((car) => car.cost)
        .reduce((prev, next) => prev + next)
  }
}
