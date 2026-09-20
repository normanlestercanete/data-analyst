import { PowerBIReport } from '@/components/site/power-bi-report';

const reportViews = [
  { name: 'Regional Performance', question: 'Where should we look first?', copy: 'Compare capacity, headcount, occupancy, and attendance across the selected region before investigating individual locations.' },
  { name: 'Country Performance', question: 'Does the regional picture hold locally?', copy: 'Bring the sites in one country together and compare business units using the same reporting month.' },
  { name: 'Site Performance', question: 'Who is using this office?', copy: 'Explore seat demand and the mix of resident and non-resident visitors alongside twelve months of attendance and occupancy.' },
  { name: 'Workplace Financial Performance', question: 'What does our workplace footprint cost?', copy: 'Connect monthly lease payments and space changes to cost per employee, cost per seat, and physical seat utilization. Compare sites to identify where a closer review could be worthwhile.' },
  { name: 'Workforce Trends', question: 'What is changing in the workforce?', copy: 'Follow headcount, hires, departures, transfers, and retention to put workplace demand in context.' },
];

export function WorkplaceCaseStudy() {
  return (
    <article className="workplace-case">
      <div className="workplace-intro">
        <div><p className="eyebrow"><span /> Quantara / Portfolio demonstration</p><h3>People. Space.<br />The cost of both.</h3></div>
        <div className="workplace-copy">
          <p>A growing headcount can make an office look short of seats. But assigned employees, people who visit, and seats used across working days tell different stories.</p>
          <p>I built Quantara to connect those stories. It brings employee snapshots, access records, seat capacity, local working-day calendars, and a monthly lease schedule into one Power BI model. Across five pages, leaders can connect workforce movement to workplace demand, then examine the financial implications at each location.</p>
          <p className="data-note">Portfolio demonstration using synthetic data. Lease payments, floor areas, expansions, and reductions are simulated using published market rent benchmarks; they are not actual company costs or realized savings.</p>
        </div>
      </div>
      <div className="workplace-stack" aria-label="Project technologies">
        {['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Git'].map(item => <span key={item}>{item}</span>)}
      </div>

      <PowerBIReport />

      <div className="report-tour">
        <div className="story-heading"><p className="section-index">Explore the story</p><h3>Start wide. Follow the question.</h3><p>Explore all five pages using the report navigation. Select the same month and geography across views to keep comparisons meaningful.</p></div>
        <div className="report-view-grid">
          {reportViews.map((view, index) => <section key={view.name}><span className="section-index">0{index + 1} / {view.name}</span><h4>{view.question}</h4><p>{view.copy}</p></section>)}
        </div>
      </div>

      <div className="workplace-insight">
        <p className="section-index">A question worth testing</p>
        <h3>Before adding space, understand the demand - and the cost.</h3>
        <p>Seat demand compares headcount with capacity. A value above 100% means there are more assigned employees than seats. Read it alongside occupancy and attendance: the same location may still have unused capacity on working days. Workforce Trends adds context through hires, departures, and retention. The financial page then shows whether lease costs and space changes are keeping pace with that demand. High cost per employee alongside low utilization is a reason to investigate; it does not establish that space can be surrendered or savings recovered.</p>
      </div>

      <div className="workplace-method">
        <div className="story-heading"><p className="section-index">Behind the report</p><h3>The detail that makes the totals trustworthy.</h3></div>
        <div>
          <section><h4>Keep different grains separate</h4><p>Monthly employee snapshots describe the workforce. Access records describe visits. Shared location and calendar dimensions connect them without treating every visit as another employee.</p></section>
          <section><h4>Make comparisons fair</h4><p>Working-day logic accounts for country holidays. The selected month anchors a rolling twelve-month view, while resident and non-resident visitor measures explain who is using each location.</p></section>
          <section><h4>Make the financial assumptions visible</h4><p>Monthly rent follows a reproducible synthetic lease schedule, with occasional floor or suite changes and annual escalation. Amounts use a fixed USD exchange-rate basis. Annualized rent is the selected month multiplied by twelve, while cost per employee uses total rent divided by headcount. Financial utilization uses physical seats; the operational pages use business-unit seat allocations.</p></section>
          <section><h4>Validate the roll-up</h4><p>Unique visitors are deduplicated across locations. Someone visiting two offices should not become two people in the country total. Workforce movement also distinguishes internal transfers from company hires and departures.</p></section>
        </div>
      </div>
      <p className="workplace-result"><span>What this enables</span>A shared basis for workforce, workplace, and real-estate conversations: where demand is changing, what the footprint costs, and which sites deserve closer investigation.</p>
    </article>
  );
}
