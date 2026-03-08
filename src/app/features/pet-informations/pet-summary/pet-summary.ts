import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pet-summary',
  imports: [],
  templateUrl: './pet-summary.html',
  styleUrl: './pet-summary.css',
})
export class PetSummary {
  especie = signal('dog');
}
