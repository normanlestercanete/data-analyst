import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/site/navigation';
import { ProjectVisual } from '@/components/site/project-visual';
import { Footer } from '@/components/site/footer';
import { getProject, projects } from '@/data/projects';
import { profile } from '@/data/profile';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = profile.siteUrl ? `${profile.siteUrl}/work/${project.slug}` : undefined;
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { title: project.title, description: project.description, type: 'article', url, images: [] },
    twitter: { card: 'summary', title: project.title, description: project.description, images: [] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="case-page">
      <Navigation />
      <article>
        <header className="case-hero shell">
          <Link className="back-link" href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>
          <p className="eyebrow"><span /> Anonymized case study · 0{index + 1}</p>
          <h1>{project.title}</h1>
          <div className="case-intro">
            <div className="case-role"><small>Role &amp; focus</small><span>{project.role}</span></div>
            <p>{project.shortDescription}</p>
          </div>
        </header>

        <div className="case-visual shell"><ProjectVisual variant={project.visual} large /></div>

        <div className="shell">
          <section className="case-content"><h2>01 / Context</h2><div><p>{project.description}</p></div></section>
          <section className="case-content"><h2>02 / Challenge</h2><div><p>{project.challenge}</p></div></section>
          <section className="case-content"><h2>03 / Data complexity</h2><div><p>{project.data}</p></div></section>
          <section className="case-content">
            <h2>04 / Approach</h2>
            <div><ol>{project.approach.map((step) => <li key={step}>{step}</li>)}</ol><div className="case-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          </section>
          <section className="case-content"><h2>05 / Technical solution</h2><div><p>{project.solution}</p></div></section>
          <section className="case-content"><h2>06 / Result</h2><div><p>{project.outcome}</p></div></section>

          <Link className="next-project" href={`/work/${nextProject.slug}`}>
            <div><span>Next case study</span><strong>{nextProject.title}</strong></div>
            <ArrowRight size={28} />
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
