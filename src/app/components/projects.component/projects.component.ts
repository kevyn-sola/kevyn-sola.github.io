import { Component } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';
import { ProjectGalleryComponent } from '../project-gallery.component/project-gallery.component';
import { CaseStudyComponent } from '../case-study.component/case-study.component';

/** Technos mises en avant dans les badges des projets. */
const FOCUS_TECHS = new Set(['Angular', 'TypeScript', 'PHP', 'Java']);

@Component({
  selector: 'app-projects',
  imports: [ProjectGalleryComponent, CaseStudyComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[];

  constructor(projectsService: ProjectsService) {
    this.projects = projectsService.getProjects();
  }

  isFocus(tech: string): boolean {
    return FOCUS_TECHS.has(tech);
  }
}
