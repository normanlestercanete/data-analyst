import { PowerBIReport } from '@/components/site/power-bi-report';

const reportViews = [
  { name: 'Regional Performance', question: 'Where should we look first?', copy: 'Compare capacity, headcount, occupancy, and attendance across the selected region before investigating individual locations.' },
  { name: 'Country Performance', question: 'Does the regional picture hold locally?', copy: 'Bring the sites in one country together and compare business units using the same reporting month.' },
  { name: 'Site Performance', question: 'Who is using this office?', copy: 'Explore seat demand and the mix of resident and non-resident visitors alongside twelve months of attendance and occupancy.' },
  { name: 'Workforce Trends', question: 'What is changing in the workforce?', copy: 'Follow headcount, hires, departures, transfers, and retention to put workplace demand in context.' },
];

export function WorkplaceCaseStudy() {
  return (
    <article className="workplace-case">
      <div className="workplace-intro">
        <div><p className="eyebrow"><span /> Quantara / Portfolio demonstration</p><h3>More people.<br />More space?</h3></div>
        <div className="workplace-copy">
          <p>A growing headcount can make an office look short of seats. But assigned employees, people who visit, and seats used across working days tell different stories.</p>
          <p>I built Quantara to connect those stories. It brings monthly employee snapshots, access records, seat capacity, and local working-day calendars into one Power BI model, so a reader can move from a regional pattern to the site and business unit behind it.</p>
          <p className="data-note">A fictional organization with synthetic data, created to demonstrate the analytical approach and report design.</p>
        </div>
      </div>
      <div className="workplace-stack" aria-label="Project technologies">
        {['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Git'].map(item => <span key={item}>{item}</span>)}
      </div>

      <PowerBIReport />

      <div className="report-tour">
        <div className="story-heading"><p className="section-index">Explore the story</p><h3>Start wide. Follow the question.</h3><p>Select the same month as you move between views to keep comparisons meaningful.</p></div>
        <div className="report-view-grid">
          {reportViews.map((view, index) => <section key={view.name}><span className="section-index">0{index + 1} / {view.name}</span><h4>{view.question}</h4><p>{view.copy}</p></section>)}
        </div>
      </div>

      <div className="workplace-insight">
        <p className="section-index">A question worth testing</p>
        <h3>Seat demand above 100% does not tell the whole story.</h3>
        <p>Seat demand compares headcount with capacity. A value above 100% means there are more assigned employees than seats. Read it alongside occupancy and attendance: the same location may still have unused capacity on working days. The report gives planners a starting point for investigating schedules, visitor demand, and allocation before making a space decision.</p>
      </div>

      <div className="workplace-method">
        <div className="story-heading"><p className="section-index">Behind the report</p><h3>The detail that makes the totals trustworthy.</h3></div>
        <div>
          <section><h4>Keep different grains separate</h4><p>Monthly employee snapshots describe the workforce. Access records describe visits. Shared location and calendar dimensions connect them without treating every visit as another employee.</p></section>
          <section><h4>Make comparisons fair</h4><p>Working-day logic accounts for country holidays. The selected month anchors a rolling twelve-month view, while resident and non-resident visitor measures explain who is using each location.</p></section>
          <section><h4>Validate the roll-up</h4><p>Unique visitors are deduplicated across locations. Someone visiting two offices should not become two people in the country total. Workforce movement also distinguishes internal transfers from company hires and departures.</p></section>
        </div>
      </div>
      <p className="workplace-result"><span>What this enables</span>A consistent path from a headline KPI to the geography, business unit, and monthly trend that explain it.</p>
    </article>
  );
}
