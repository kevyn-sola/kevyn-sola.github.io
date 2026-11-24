import { Component, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

/** Technos mises en avant dans les badges des projets. */
const FOCUS_TECHS = new Set(['Angular', 'TypeScript', 'PHP', 'Java']);

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[];
  /** En local, les blocs vides des études de cas s'affichent « à compléter ». */
  readonly dev = isDevMode();

  isFocus(tech: string): boolean {
    return FOCUS_TECHS.has(tech);
  }

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {
    this.projects = this.projectsService.getProjects();
  }

  hasScreenshots(project: Project): boolean {
    return this.projectsService.hasScreenshots(project);
  }

  cover(project: Project): string | undefined {
    return this.projectsService.getScreenshots(project)[0]?.src;
  }

  navigateToProject(project: Project) {
    if (!this.hasScreenshots(project)) return;
    this.router.navigate(['/project', project.id]);
  }
}
