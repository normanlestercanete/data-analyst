import { ArrowLeft, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { publicPath } from '@/lib/paths';

export function ReportContact() {
  return <section className="report-contact">
    <p className="section-index">Turn your data into a clearer decision</p>
    <h2>Have a reporting challenge in mind?</h2>
    <p>Tell me what your team needs to understand. Let’s talk about a Power BI report built around your data and business questions.</p>
    <div className="contact-actions">
      <a className="button primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Let’s discuss a Power BI project')}`}><Mail size={17} /> Email me</a>
      <a className="button secondary" href={publicPath('/#work')}><ArrowLeft size={17} /> See other sample works</a>
    </div>
  </section>;
}
