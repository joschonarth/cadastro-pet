import { Directive, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { SheltersApi } from '../../core/services/shelters-api';

@Directive({
  selector: '[appShelterNameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ShelterNameValidatorDirective,
      multi: true,
    },
  ],
})
export class ShelterNameValidatorDirective implements AsyncValidator {
  private readonly _sheltersApi = inject(SheltersApi);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const controlValue = control.value?.toLowerCase().trim();

    return this._sheltersApi.getAcceptedShelters().pipe(
      map((sheltersList) => {
        const exists = sheltersList.some((s) => s.toLowerCase() === controlValue);

        return exists ? { shelterAlreadyExists: true } : null;
      }),
    );
  }
}
