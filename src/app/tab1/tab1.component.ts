import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { NavService } from '../nav.service';

/**
 * @title Using tabs with a custom label template
 */
@Component({
  selector: 'tab1',
  templateUrl: 'tab1.component.html',
  styleUrls: ['tab1.component.css'],
})
export class Tab1 {
  userAddressValidations: FormGroup;
  firstError: string;
  constructor(
    private formBuilder: FormBuilder,
    private navService: NavService
  ) {}

  // private onFormValid() {
  //   console.log('form is valid');
  // }

  private onFormValid(val: string) {
    console.log("ufhebh", val);
    if (val == "VALID"){
      console.log('ths');
      this.navService.validateFormState();
    }if (val == "INVALID"){
      console.log('skdjkj');
      this.navService.inValidateFormState();
    }
    
  }

  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
            Validators.pattern('[a-zA-Z]+'),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
        location: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
          ],
        ],
      },
      {
        updateOn: 'change',
      }
    );

    // this.userAddressValidations.statusChanges
    //   .pipe(
    //     filter((status: string) => {
    //       console.log(status);
    //       return this.userAddressValidations.valid;
    //     })
    //   )
    //   .subscribe(() => this.onFormValid());

    this.userAddressValidations.statusChanges
      
      .subscribe(value => {
        console.log("values ", value);
        this.onFormValid(value)}
        );
  }
  onSubmit() {
    const props = Object.keys(this.userAddressValidations.value);
    this.firstError = '';
    if (this.userAddressValidations.valid) {
      alert(
        'Form Submitted succesfully!!!\n Check the values in browser console.'
      );
      console.table(this.userAddressValidations.value);
    }
  }
}
