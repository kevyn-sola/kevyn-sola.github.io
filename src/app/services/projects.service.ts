import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.data';

export interface ProjectImage {
  ratio?: string;
  label?: string;
  items?: Array<{ ratio: string; label: string }>;
  type?: string;
}

export interface Project {
  id: string;
  label: string;
  title: string;
  year: string;
  tagline: string;
  gradient: string;
  mainTechs: string[];
  allTechs: string[];
  featured?: boolean;
  type?: string;
  role?: string;
  intro?: string;
  features?: string[];
  images?: ProjectImage[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = PROJECTS;

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
