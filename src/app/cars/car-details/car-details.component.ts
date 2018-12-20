import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  carForm: FormGroup;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      clientFirstName:  this.car.clientFirstName,
      clientSurname: this.car.clientSurname,
      color:  this.car.color,
      cost: this.car.cost,
      deadline:  this.car.deadline,
      deliveryDate:  this.car.deliveryDate,
      id: this.car.id,
      isFullyDamaged:  this.car.isFullyDamaged,
      model: [this.car.model, Validators.required],
      plate:  [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      power:  this.car.power,
      type:  this.car.type,
      year: this.car.year,
      key: this.car.key
    });
  }

  updateCar() {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
          this.router.navigate(['/cars']);
    });
}

  loadCar() {
    this.car = this.route.snapshot.data['car'];
  }

}
