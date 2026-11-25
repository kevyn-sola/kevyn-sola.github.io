import { Component, Input, isDevMode } from '@angular/core';
import { Project } from '../../services/projects.service';

/**
 * Étude de cas d'un projet (contexte, rôle, décisions, résultats).
 * Source unique du contenu des projets.
 * Un bloc vide n'est pas affiché, sauf en local où il apparaît « à compléter ».
 */
@Component({
  selector: 'app-case-study',
  imports: [],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
})
export class CaseStudyComponent {
  @Input({ required: true }) project!: Project;

  readonly dev = isDevMode();
}
