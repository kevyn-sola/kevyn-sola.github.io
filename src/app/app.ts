import { Component, AfterViewInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './components/header.component/header.component';
import { HeroComponent } from './components/hero.component/hero.component';
import { AboutComponent } from './components/about.component/about.component';
import { SkillsComponent } from './components/skills.component/skills.component';
import { ProjectsComponent } from './components/projects.component/projects.component';
import { ContactComponent } from './components/contact.component/contact.component';
import { FooterComponent } from './components/footer.component/footer.component';
import { ProjectDetailComponent } from './components/project-detail.component/project-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class App implements AfterViewInit {
  title = 'portfolio-kevyn';

  ngAfterViewInit() {
    this.initCustomCursor();
  }

  private initCustomCursor() {
    const follower = document.querySelector('.cursor-follower') as HTMLElement;
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.left = (mouseX - 4) + 'px';
        dot.style.top = (mouseY - 4) + 'px';
      }
    });

    const animateFollower = () => {
      followerX += (mouseX - followerX - 20) * 0.2;
      followerY += (mouseY - followerY - 20) * 0.2;

      if (follower) {
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
      }

      requestAnimationFrame(animateFollower);
    };

    animateFollower();
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-about></app-about>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppHome implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.setupRevealAnimation();
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }

  private setupRevealAnimation() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.06 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}

export const routes: Routes = [
  {
    path: '',
    component: AppHome,
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
  },
];
