import { PowerBIReport } from './power-bi-report';
import { featuredReports } from '@/data/featured-reports';

const views = [
  ['Executive Performance', 'Is growth translating into performance?', 'Start with the overall revenue and acquisition picture, then follow the measures that need attention into the specialist pages.'],
  ['Marketing Effectiveness', 'Which channels deserve a closer look?', 'Compare direct campaign costs, lead creation, qualification, and new customers. Read period acquisition cost alongside lead quality rather than judging campaigns by volume alone.'],
  ['Sales Pipeline & Conversion', 'Where is potential revenue getting stuck?', 'Compare historical month-end pipeline, booked annual recurring revenue, closed-deal win rates, sales cycles, stage age, and loss reasons.'],
  ['Customer Growth & Retention', 'Does growth last beyond the first sale?', 'Separate new, expansion, contraction, and churned monthly recurring revenue. Examine existing-customer revenue retention and compare cohorts after they reach twelve months.'],
];

export function AsterWorksCaseStudy() {
  return <article className="workplace-case">
    <div className="workplace-intro">
      <div><p className="eyebrow"><span /> AsterWorks / Portfolio demonstration</p><h3>From first touch<br />to lasting revenue.</h3></div>
      <div className="workplace-copy">
        <p>More leads do not automatically mean stronger growth. Acquisition can look efficient while deals stall, and new sales can hide revenue lost from existing customers.</p>
        <p>I built AsterWorks around a fictional B2B workplace-management software company to connect those questions. Four Power BI pages follow campaign activity through sales outcomes to recurring revenue, giving marketing, sales, and executive audiences a shared view of performance.</p>
        <p className="data-note">Portfolio demonstration using synthetic data, January 2024–August 2026. AsterWorks is fictional; the results illustrate analytical methods, not client outcomes.</p>
      </div>
    </div>
    <div className="workplace-stack">{['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Git'].map(item => <span key={item}>{item}</span>)}</div>
    <PowerBIReport report={featuredReports[1].report} id="asterworks-report" help="Choose a reporting month, then explore Executive Performance, Marketing Effectiveness, Sales Pipeline & Conversion, and Customer Growth & Retention. Use each page’s filters to investigate channels, plans, or customer groups. On smaller screens, open the full report for more room." />
    <div className="report-tour">
      <div className="story-heading"><p className="section-index">Explore the story</p><h3>Follow growth beyond the headline.</h3></div>
      <div className="report-view-grid">{views.map(([name, question, copy], index) => <section key={name}><span className="section-index">0{index + 1} / {name}</span><h4>{question}</h4><p>{copy}</p></section>)}</div>
    </div>
    <div className="workplace-insight"><p className="section-index">A question worth testing</p><h3>Are we acquiring revenue we can retain?</h3><p>A low cost per lead is a starting point. Pair it with qualification, closed sales, and the recurring revenue those customers contribute. If new revenue grows while existing-customer revenue shrinks, the executive total alone can hide a retention problem. This report provides a way to investigate that pattern without treating marketing attribution as proof of causation.</p></div>
    <div className="workplace-method">
      <div className="story-heading"><p className="section-index">Behind the report</p><h3>Give every metric the right clock.</h3></div>
      <div>
        <section><h4>Separate events from snapshots</h4><p>Lead creation, qualification, and deal closure use their own event dates. Open pipeline comes from one month-end snapshot, so a deal carried across months is not counted repeatedly in a selected month.</p></section>
        <section><h4>Define acquisition cost precisely</h4><p>Direct campaign acquisition cost divides the selected period’s campaign costs by new customers in that period. It is not a fully loaded or cohort acquisition cost. Channel reporting uses first-touch attribution.</p></section>
        <section><h4>Reconcile recurring revenue</h4><p>Opening monthly recurring revenue plus new and expansion revenue, less contraction and churn, reconciles to closing revenue. Net revenue retention excludes new-customer revenue to isolate the existing customer base.</p></section>
        <section><h4>Avoid looking into the future</h4><p>Twelve-month customer retention is shown only for cohorts old enough to qualify. Historical stage age uses events observed by the selected snapshot date. Sampled monthly results were reconciled against the source data, including the opening month with no customers.</p></section>
      </div>
    </div>
    <p className="workplace-result"><span>What this enables</span>A connected discussion about where to invest, where sales momentum slows, and whether customer growth is sustainable.</p>
  </article>;
}
