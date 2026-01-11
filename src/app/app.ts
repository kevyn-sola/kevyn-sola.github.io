import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component/header.component';
import { HeroComponent } from './components/hero.component/hero.component';
import { AboutComponent } from './components/about.component/about.component';
import { SkillsComponent } from './components/skills.component/skills.component';
import { ProjectsComponent } from './components/projects.component/projects.component';
import { ContactComponent } from './components/contact.component/contact.component';
import { FooterComponent } from './components/footer.component/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'portfolio-kevyn';
}
