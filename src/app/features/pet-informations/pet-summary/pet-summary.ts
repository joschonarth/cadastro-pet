import { Component, signal } from '@angular/core';
import { IPetData } from '../../../shared/models/pet-data';

@Component({
  selector: 'app-pet-summary',
  imports: [],
  templateUrl: './pet-summary.html',
  styleUrl: './pet-summary.css',
})
export class PetSummary {
  petData = signal<IPetData>(history.state.petData);

  especie = signal('dog');
}
