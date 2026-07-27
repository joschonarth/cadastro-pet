import { Component, signal } from '@angular/core';
import { IPetData } from '../../../shared/models/pet-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-summary',
  imports: [RouterLink],
  templateUrl: './pet-summary.html',
  styleUrl: './pet-summary.css',
})
export class PetSummary {
  petData = signal<IPetData>(history.state.petData);
}
