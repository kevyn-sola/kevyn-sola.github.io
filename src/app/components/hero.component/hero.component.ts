import { Component } from '@angular/core';
import { experienceLabel } from '../../services/experience';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  /** Calculé à partir de la date de début (06/03/2023), ex. « 3 ans ». */
  readonly experience = experienceLabel();
}
