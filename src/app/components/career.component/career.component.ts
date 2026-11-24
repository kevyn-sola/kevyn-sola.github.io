import { Component, isDevMode } from '@angular/core';
import { CAREER, CareerStep, isStepComplete, showCareer } from '../../services/career.data';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  /** En local, on montre aussi les étapes à compléter. */
  readonly dev = isDevMode();
  readonly steps: CareerStep[] = this.dev ? CAREER : CAREER.filter(isStepComplete);
  readonly visible = showCareer();
  readonly isComplete = isStepComplete;
}
