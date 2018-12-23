import * as core from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Flight, Crew } from '../model/flight.model';
import { Input } from '@angular/core';
import { flightCodeValidator } from './code.validator';

@core.Component({
  selector: 'cs-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.less']
})
export class FlightFormComponent implements core.OnInit {
  @Input() editMode: false;
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

  setFlight(flight: Flight) {
    const {key, ...formData} = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || ''
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      departureTime: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      code: ['SK', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7),
          flightCodeValidator
        ] }],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    })
  }
}

