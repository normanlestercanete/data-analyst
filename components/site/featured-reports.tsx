import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { featuredReports } from '@/data/featured-reports';
import { publicPath } from '@/lib/paths';

export function FeaturedReports() {
  return <div className="featured-reports">
    {featuredReports.map((report, index) => <article className={`featured-report featured-report-${index + 1}`} key={report.slug}>
      <div className="featured-report-top"><span className="section-index">0{index + 1} / {report.brand}</span><span>{report.scope}</span></div>
      <h3>{report.title}</h3>
      <Image className="featured-report-preview" src={publicPath(`/images/reports/${index === 0 ? 'quantara' : 'asterworks'}-first-page.jpg`)} alt={`${report.brand}: ${index === 0 ? 'Workplace Financial Performance' : 'Executive Performance'} report preview`} width={2213} height={1245} sizes="(max-width: 820px) 100vw, 50vw" draggable={false} />
      <p>{report.description}</p>
      <ul>{report.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      <a className="button secondary" href={publicPath(`/work/${report.slug}.html`)}>View case study <ArrowUpRight size={17} /></a>
      <small>Power BI · Synthetic data</small>
    </article>)}
  </div>;
}
