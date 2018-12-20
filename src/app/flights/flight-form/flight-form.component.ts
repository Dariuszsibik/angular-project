import * as core from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@core.Component({
  selector: 'cs-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.less']
})
export class FlightFormComponent implements core.OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: '',
      destination: '',
      departureTime: '',
      returnTime: '',
      code: '',
      additionalInformation: '',
      withSKPlanesDiscount: false
    });
  }
}
