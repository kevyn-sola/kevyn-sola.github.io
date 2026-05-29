import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {
    this.projects = this.projectsService.getProjects();
  }

  navigateToProject(id: string) {
    this.router.navigate(['/project', id]);
  }
}
