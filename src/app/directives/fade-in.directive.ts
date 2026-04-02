import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[fadeIn]',
  standalone: true,
  host: { class: 'fade-in-target' },
})
export class FadeInDirective implements OnInit, OnDestroy {
  /** Delay before the entrance animation plays (ms) */
  @Input() fadeDelay = 0;

  private el = inject(ElementRef<HTMLElement>);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;

    if (this.fadeDelay > 0) {
      el.style.transitionDelay = `${this.fadeDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in--visible');
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
