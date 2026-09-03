import { experience } from '@/data/experience';
import { SectionHeading } from './section-heading';

export function ExperienceTimeline() {
  if (!experience.length) return null;
  return (
    <section id="experience" className="section shell">
      <SectionHeading index="05" eyebrow="Experience" title="A career progressing toward deeper BI specialization." />
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.company}-${item.position}`}>
            <p>{item.startDate} — {item.endDate}</p>
            <div><h3>{item.position}</h3><h4>{item.company} · {item.location}</h4><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
