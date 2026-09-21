import { ArrowUpRight } from 'lucide-react';
import { workplaceReport } from '@/data/workplace-report';

export function PowerBIReport({ report = workplaceReport, id = 'quantara-report', help = 'Choose a month and location in the report, then use the page navigation to explore the different views. On a smaller screen, open the full report for more room.' }: { report?: { title: string; embedUrl: string }; id?: string; help?: string }) {
  const { title, embedUrl } = report;

  return (
    <div className="report-viewer" id={id}>
      <div className="report-toolbar">
        <div><span className="report-label">Interactive Power BI report</span><h3>{title}</h3></div>
        {embedUrl && <a className="button secondary" href={embedUrl} target="_blank" rel="noopener noreferrer">Open full report <ArrowUpRight size={16} /></a>}
      </div>
      {embedUrl ? (
        <div className="report-frame">
          <iframe title={title} src={embedUrl} loading="lazy" allowFullScreen />
        </div>
      ) : (
        <div className="report-pending"><p>The interactive report will be available here shortly.</p><span>{title}</span></div>
      )}
      <p className="report-help">{help}</p>
    </div>
  );
}
