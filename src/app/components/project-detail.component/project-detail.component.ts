import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';
import { HeaderComponent } from '../header.component/header.component';
import { FooterComponent } from '../footer.component/footer.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  project: Project | undefined;
  heroVisible = true;

  private heroObserver: IntersectionObserver | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.project = this.projectsService.getProject(id);
      if (!this.project) {
        this.router.navigate(['/']);
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {
    const hero = document.querySelector('.proj-detail-hero');
    if (!hero) return;

    this.heroObserver = new IntersectionObserver(
      ([entry]) => {
        this.ngZone.run(() => { this.heroVisible = entry.isIntersecting; });
      },
      { threshold: 0 }
    );
    this.heroObserver.observe(hero);
  }

  ngOnDestroy() {
    this.heroObserver?.disconnect();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
