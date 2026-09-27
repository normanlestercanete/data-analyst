import { ArrowUpRight } from 'lucide-react';
import { publicPath } from '@/lib/paths';

export function TechnicalProof() {
  return <aside className="technical-proof" aria-labelledby="technical-proof-title">
    <div className="technical-proof-intro">
      <p className="section-index">Inside the model / Quantara example</p>
      <h3 id="technical-proof-title">A metric is only useful when its inputs agree.</h3>
      <p>The workplace report connects a modeled monthly lease schedule with workforce and access records. This is one example of the logic behind the visuals.</p>
    </div>

    <ol className="technical-proof-flow" aria-label="From source data to a Power BI measure">
      <li><span>01 / Sources</span><strong>Lease schedule · employee snapshots · access logs</strong></li>
      <li><span>02 / Model</span><strong>Shared site and month dimensions, with local working-day rules</strong></li>
      <li><span>03 / Measure</span><strong>Monthly lease cost ÷ working-day person-site visits</strong></li>
    </ol>

    <div className="technical-proof-detail">
      <div><span className="section-index">Metric definition</span><h4>Cost per occupied day</h4><p>The selected month’s modeled lease cost divided by qualifying visits across the selected sites. Aggregates divide the total cost by total visits, rather than averaging site-level ratios.</p></div>
      <div><span className="section-index">Validation check</span><h4>Reconcile before presenting</h4><p>The source checks cover 2,040 site-month lease records across 34 sites. Missing lease months fail refresh, so the report cannot silently carry forward an old payment.</p></div>
    </div>
    <div className="technical-proof-foot"><small>Portfolio demonstration using synthetic data and modeled lease costs.</small><a href={publicPath('/work/quantara-workplace-analytics.html')}>Explore the Quantara case study <ArrowUpRight size={16} /></a></div>
  </aside>;
}
