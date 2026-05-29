import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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

  closeMenu() {
    this.isMenuOpen = false;
  }

  goHome() {
    this.router.navigate(['/']);
    this.closeMenu();
  }
}
