import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.data';

export interface ProjectImage {
  ratio?: string;
  label?: string;
  /** Chemin de la capture (ex: 'assets/projects/kanban/board.png'). Sans src, l'image n'est pas affichée. */
  src?: string;
  items?: Array<{ ratio: string; label: string; src?: string }>;
  type?: string;
}

/**
 * Étude de cas affichée dans la liste des projets.
 * Chaque bloc vide (chaîne vide ou tableau vide) n'est pas affiché :
 * on peut remplir progressivement sans publier de texte provisoire.
 */
export interface CaseStudy {
  /** Le problème ou le besoin de départ. */
  context?: string;
  /** Choix faits et, idéalement, pourquoi. */
  decisions?: string[];
  /** Ce que ça a produit : chiffres, retours, mise en production. */
  results?: string[];
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
  caseStudy?: CaseStudy;
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

  /** Toutes les captures disponibles (avec src), lignes aplaties. */
  getScreenshots(project: Project): Array<{ src: string; label?: string }> {
    return (project.images ?? [])
      .flatMap((img): Array<{ src?: string; label?: string }> =>
        img.type === 'row' ? img.items ?? [] : [img])
      .filter((img): img is { src: string; label?: string } => !!img.src);
  }

  /** Un projet n'a de page détail que s'il a au moins une capture. */
  hasScreenshots(project: Project): boolean {
    return this.getScreenshots(project).length > 0;
  }
}
