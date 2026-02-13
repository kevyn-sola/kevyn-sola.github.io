import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const hero = this.el.nativeElement.querySelector('.hero') as HTMLElement;
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--flair-x', `${e.clientX - rect.left}px`);
    hero.style.setProperty('--flair-y', `${e.clientY - rect.top}px`);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    const hero = this.el.nativeElement.querySelector('.hero') as HTMLElement;
    hero.classList.add('hero--flair-visible');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const hero = this.el.nativeElement.querySelector('.hero') as HTMLElement;
    hero.classList.remove('hero--flair-visible');
  }
}
