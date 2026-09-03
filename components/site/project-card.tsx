import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { ProjectVisual } from './project-visual';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link href={`/work/${project.slug}`} className="project-image" aria-label={`Read case study: ${project.title}`}>
        <ProjectVisual variant={project.visual} />
      </Link>
      <div className="project-body">
        <p className="project-number">0{index + 1}</p>
        <div>
          <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
          <p>{project.shortDescription}</p>
          <ul className="tag-list" aria-label="Technologies">{project.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </div>
        <Link className="round-link" href={`/work/${project.slug}`} aria-label={`Open ${project.title}`}><ArrowUpRight size={20} /></Link>
      </div>
    </article>
  );
}
