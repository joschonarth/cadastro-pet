import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShelterNameValidatorDirective } from '../../../shared/directives/shelter-name-validator-directive';

@Component({
  selector: 'app-pet-form',
  imports: [FormsModule, ShelterNameValidatorDirective],
  templateUrl: './pet-form.html',
  styleUrl: './pet-form.css',
})
export class PetForm {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
