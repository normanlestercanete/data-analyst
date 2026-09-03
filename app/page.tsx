import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Bot, Link2, Mail } from 'lucide-react';
import { Navigation } from '@/components/site/navigation';
import { SectionHeading } from '@/components/site/section-heading';
import { ProjectCard } from '@/components/site/project-card';
import { ExperienceTimeline } from '@/components/site/experience-timeline';
import { Footer } from '@/components/site/footer';
import { profile } from '@/data/profile';
import { expertise, skills } from '@/data/skills';
import { projects } from '@/data/projects';

const workingApproach = [
  { title: 'Understand', copy: 'Clarify the business question, reporting requirements, decision context, and definitions that need to hold true.' },
  { title: 'Structure', copy: 'Profile, clean, reconcile, and model the data at the right grain with relationships that support the analysis.' },
  { title: 'Build', copy: 'Translate business rules into Power Query transformations, DAX measures, and dependable reporting logic.' },
  { title: 'Validate', copy: 'Test edge cases, filter behavior, totals, exclusions, and known examples against expected business outcomes.' },
  { title: 'Communicate', copy: 'Present the result as a clear, usable Power BI experience with the right level of detail for its audience.' },
] as const;

export default function Home() {
  const sameAs = [profile.linkedinUrl, profile.upworkUrl].filter(Boolean);
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.intro,
    address: { '@type': 'PostalAddress', addressCountry: 'PH' },
    ...(profile.siteUrl ? { url: profile.siteUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }} />
      <Navigation />

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {profile.role}</p>
          <p className="hero-name">{profile.name}</p>
          <h1>Reliable reporting.<br /><em>Clear decisions.</em></h1>
          <p className="intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View my work <ArrowDownRight size={18} /></a>
            <a className="button secondary" href="#contact">Let&apos;s connect</a>
          </div>
          <div className="pipeline" aria-label="Analytics workflow">
            {['Data', 'Model', 'Logic', 'Insight'].map((step, index) => (
              <span key={step}>{step}{index < 3 && <i aria-hidden="true">→</i>}</span>
            ))}
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image src="/images/profile/norman.png" alt="Norman Lester Canete outdoors" width={1024} height={1024} priority sizes="(max-width: 820px) 100vw, 38vw" />
            <div className="portrait-caption">
              <span>{profile.name}</span>
              <small>{profile.positioning}</small>
            </div>
          </div>
          <div className="signal" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
      </section>

      <section id="about" className="section about shell">
        <SectionHeading index="01" eyebrow="About" title="I like finding the reason a number does not make sense." />
        <div className="about-grid">
          <p className="lead">Why does this metric change under one filter? Why do these rosters not line up? Where should this business rule live—in the data, the model, or the measure?</p>
          <div className="about-copy">
            <p>Those are the problems I enjoy. My work follows the full path from data → model → logic → visualization: cleaning imperfect sources, designing scalable Power BI structures, translating operational rules into DAX, and shaping the result for the people who need to use it.</p>
            <p>I began with broader data, Excel, reporting, and freelance work, then progressively specialized in Power BI and Business Intelligence. Today, the focus is maintainable BI solutions that make complicated requirements understandable.</p>
          </div>
        </div>
      </section>

      <section id="expertise" className="section expertise shell">
        <SectionHeading index="02" eyebrow="Core expertise" title="From raw source to reliable reporting." copy="Power BI is the core platform, supported by deep work across DAX, Power Query, data modeling, business logic, visualization, and automation." />
        <div className="expertise-list">
          {expertise.map((item, index) => (
            <article key={item.title}>
              <span className="expertise-code">{item.code}</span>
              <span className="expertise-count">0{index + 1}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section work shell">
        <SectionHeading index="03" eyebrow="Selected BI work" title="The model behind the metric." copy="Anonymized case studies that show how complex reporting problems are reconciled, modeled, calculated, validated, and made usable." />
        <div className="project-list">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="section approach shell">
        <SectionHeading index="04" eyebrow="Working approach" title="A reporting answer is only as strong as the path behind it." copy="The process stays grounded in business context from the first source file to the final Power BI experience." />
        <div className="approach-list">
          {workingApproach.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ExperienceTimeline />

      <section className="section workflow shell">
        <div className="workflow-card">
          <div className="workflow-icon"><Bot size={22} /></div>
          <div>
            <p className="section-index">06 / Tools &amp; workflow</p>
            <h2>Modern analytics workflow.</h2>
          </div>
          <p>Power BI, DAX, Power Query, Excel, and reporting automation remain the core. AI-assisted development helps accelerate problem solving, documentation, debugging, prototyping, and repetitive work without replacing careful validation.</p>
        </div>
        <div className="skills-row" aria-label="Skills and technologies">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="eyebrow"><span /> Start a conversation</p>
        <h2>Have a data problem<br />worth solving?</h2>
        <p>Let&apos;s talk about Power BI projects, dashboard development, reporting improvements, analytics work, or the right professional opportunity.</p>
        {(profile.email || profile.linkedinUrl || profile.upworkUrl) && (
          <div className="contact-actions">
            {profile.email && (
              <a
                className="button primary"
                href={`mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`}
              >
                <Mail size={17} /> {profile.email}
              </a>
            )}
            {profile.linkedinUrl && <a className="button secondary" href={profile.linkedinUrl} target="_blank" rel="noreferrer"><Link2 size={17} /> LinkedIn</a>}
            {profile.upworkUrl && <a className="button secondary" href={profile.upworkUrl} target="_blank" rel="noreferrer">Upwork <ArrowUpRight size={17} /></a>}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
