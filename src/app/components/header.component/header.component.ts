import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { showCareer } from '../../services/career.data';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly showCareer = showCareer();
  isScrolled = false;
  isMenuOpen = false;
  lastScrollY = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY;
    this.isScrolled = y > 40;
    if (y < this.lastScrollY - 10 || y < 100) {
      // Nav visible
    } else if (y > this.lastScrollY + 10 && y > 200) {
      // Nav hidden
    }
    this.lastScrollY = y;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Le nom est déjà en grand dans le hero : on ne l'affiche dans le menu
   * qu'une fois le header affiché avec son fond (au scroll).
   */
  get showLogo(): boolean {
    return this.isScrolled;
  }

  /** Échap ferme le menu mobile. */
  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  /** Repasser en largeur desktop referme le menu mobile. */
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) this.closeMenu();
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  goHome() {
    this.router.navigate(['/']);
    this.closeMenu();
  }
}
