import { Component, inject } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected portfolio = inject(PortfolioService);
}
