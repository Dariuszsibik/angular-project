import * as core from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@core.Component({
  selector: 'cs-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.less']
})
export class FlightFormComponent implements core.OnInit {
  form: FormGroup;
  jobs = [
    { label: 'Stwaredess', value: 'stweradess'},
    { label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    { label: 'Pilot', value: 'pilot'},
    { label: 'Co-Pilot', value: 'co_pilot'},
    { label: 'Mechanic', value: 'mechanic'},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember() {
    this.crew.push(this.buildCrewMember());
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: ''
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', { validators: [Validators.required]} ],
      destination: ['', { validators: [Validators.required]}],
      departureTime: ['', { validators: [Validators.required]}],
      returnTime: ['', { validators: [Validators.required]}],
      code: ['SK', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7) ] }],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }
}
