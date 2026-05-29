import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.animateHero(), 200);
  }

  private animateHero() {
    const spans = this.el.nativeElement.querySelectorAll('.hero-name .word span');
    spans.forEach((el: HTMLElement, i: number) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease';
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      }, 100 + i * 120);
    });
  }
}
