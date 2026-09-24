import { PowerBIReport } from './power-bi-report';
import { featuredReports } from '@/data/featured-reports';

const views = [
  ['Executive Service Pulse', 'Is service improving as case volume changes?', 'Read new and resolved cases alongside response SLA, first-contact resolution, positive CSAT, and open backlog.'],
  ['Case Flow', 'Where is work getting stuck?', 'Compare incoming cases, closures, open work, and cases aging beyond seven days by issue category and service team.'],
  ['Customer Experience', 'How does service feel to the customer?', 'Inspect first-response speed, repeat contacts, reopened cases, and survey results across channels and issues.'],
  ['Team Capacity', 'Does workload match the people available?', 'Compare recorded handling hours with available agent hours and look for pressure that a company-wide average can hide.'],
];

export function VelaHomeCaseStudy() {
  const report = featuredReports[3].report;
  return <article className="workplace-case">
    <div className="workplace-intro">
      <div><p className="eyebrow"><span /> VelaHome / Portfolio demonstration</p><h3>See the whole<br />service journey.</h3></div>
      <div className="workplace-copy">
        <p>A customer support team can close many cases and still leave customers waiting for a first reply. Rising volume, repeat contacts, and aging work can tell different stories from the headline resolution count.</p>
        <p>I built VelaHome to connect those signals across four Power BI pages. Leaders can start with the monthly service pulse, then trace delays through case flow, customer experience, and team capacity to decide where to investigate and what to improve.</p>
        <p className="data-note">Portfolio demonstration for a fictional smart-home company using synthetic records from January 2024–August 2026. Results and scenarios are illustrative, not client outcomes.</p>
      </div>
    </div>
    <div className="workplace-stack" aria-label="Project technologies">{['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Python', 'Git'].map(item => <span key={item}>{item}</span>)}</div>
    <PowerBIReport report={report} id="velahome-report" help="Choose a reporting month, service team, issue category, or contact channel. Move between the four pages to follow the case journey. Open the full report for more room on smaller screens." />
    <div className="report-tour">
      <div className="story-heading"><p className="section-index">Explore the story</p><h3>From first contact to resolution.</h3></div>
      <div className="report-view-grid">{views.map(([name, question, copy], index) => <section key={name}><span className="section-index">0{index + 1} / {name}</span><h4>{question}</h4><p>{copy}</p></section>)}</div>
    </div>
    <div className="workplace-insight"><p className="section-index">A question worth testing</p><h3>Can spare capacity coexist with slow replies?</h3><p>Yes. Monthly available hours can exceed recorded case-handling hours while the first response still misses its target. Channel mix, skills, and when customers contact support can create queues that an aggregate capacity figure does not show. The report puts both measures in view so the next step is a focused staffing and workflow review, not an automatic headcount decision.</p></div>
    <div className="workplace-method">
      <div className="story-heading"><p className="section-index">Behind the report</p><h3>Keep service metrics honest.</h3></div>
      <div>
        <section><h4>Match each metric to its clock</h4><p>New-case measures follow intake dates, resolution measures follow closure dates, and backlog is a month-end snapshot. These are different groups of cases and should not be added as if they were one cohort.</p></section>
        <section><h4>Define experience clearly</h4><p>Response SLA measures whether the first reply met its channel and priority target. First-contact resolution counts cases closed in one contact without reopening. Positive CSAT is the share of survey responses rated four or five, not the sentiment of every customer.</p></section>
        <section><h4>Separate workload from utilization</h4><p>Capacity used compares recorded handling hours with available agent hours. It excludes meetings, coaching, and other non-case work, so it does not claim to be full employee utilization.</p></section>
      </div>
    </div>
    <p className="workplace-result"><span>What this enables</span>A more precise discussion about whether service pressure comes from demand, the mix of issues, response workflow, or team coverage—and which change to test first.</p>
  </article>;
}
