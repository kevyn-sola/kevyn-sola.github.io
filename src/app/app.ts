import { Component, AfterViewInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './components/header.component/header.component';
import { HeroComponent } from './components/hero.component/hero.component';
import { AboutComponent } from './components/about.component/about.component';
import { ProjectsComponent } from './components/projects.component/projects.component';
import { CareerComponent } from './components/career.component/career.component';
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
export class App {
  title = 'portfolio-kevyn';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    CareerComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-projects></app-projects>
      <app-career></app-career>
      <app-about></app-about>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppHome implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
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
