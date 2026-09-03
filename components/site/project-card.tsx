import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { publicPath } from '@/lib/paths';
import { ProjectVisual } from './project-visual';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <a href={publicPath(`/work/${project.slug}.html`)} className="project-image" aria-label={`Read case study: ${project.title}`}>
        <ProjectVisual variant={project.visual} />
      </a>
      <div className="project-body">
        <p className="project-number">0{index + 1}</p>
        <div>
          <h3><a href={publicPath(`/work/${project.slug}.html`)}>{project.title}</a></h3>
          <p>{project.shortDescription}</p>
          <ul className="tag-list" aria-label="Technologies">{project.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </div>
        <a className="round-link" href={publicPath(`/work/${project.slug}.html`)} aria-label={`Open ${project.title}`}><ArrowUpRight size={20} /></a>
      </div>
    </article>
  );
}
