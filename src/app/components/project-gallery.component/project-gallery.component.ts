import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GalleryImage } from '../../services/projects.service';

/**
 * Carrousel d'images d'un projet : une image à la fois, flèches, points,
 * glissement au doigt, flèches du clavier, et agrandissement en plein écran.
 */
@Component({
  selector: 'app-project-gallery',
  imports: [],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.scss',
})
export class ProjectGalleryComponent {
  @Input({ required: true }) images: GalleryImage[] = [];
  @Input() label = 'Galerie';

  @ViewChild('lightbox') lightbox?: ElementRef<HTMLDialogElement>;

  index = 0;
  private touchStartX: number | null = null;

  get current(): GalleryImage {
    return this.images[this.index];
  }

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.index = (this.index + 1) % this.images.length;
  }

  goTo(i: number) {
    this.index = i;
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prev();
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.next();
      event.preventDefault();
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    if (this.touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - this.touchStartX;
    this.touchStartX = null;
    if (Math.abs(delta) < 40) return;
    delta > 0 ? this.prev() : this.next();
  }

  open() {
    this.lightbox?.nativeElement.showModal();
  }

  close() {
    this.lightbox?.nativeElement.close();
  }

  /** Un clic sur le fond (hors image et boutons) ferme le plein écran. */
  onBackdropClick(event: MouseEvent) {
    if (event.target === this.lightbox?.nativeElement) this.close();
  }
}
