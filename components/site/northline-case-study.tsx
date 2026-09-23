import { PowerBIReport } from './power-bi-report';
import { featuredReports } from '@/data/featured-reports';

const views = [
  ['Operations Overview', 'Is service improving as stock investment changes?', 'Read shipment volume, on-time-in-full performance, fill rate, backlog, inventory value, and cycle time together before drilling into a warehouse.'],
  ['Inventory Health', 'Is the right stock available?', 'Compare month-end value, aging, turnover, demand cover, and days with zero available stock by product category and SKU.'],
  ['Order Fulfillment', 'Where is the promise breaking?', 'Follow orders due in each month, open and overdue units, and the warehouse stages holding unshipped demand.'],
  ['Supplier Performance', 'Are inbound delays part of the problem?', 'Compare receipt lead time and purchase-order delivery reliability across suppliers and product categories.'],
  ['Warehouse Throughput', 'Which processing step is limiting flow?', 'Inspect stage capacity, completions, waiting time, and queues to see where a bottleneck shifts after capacity changes.'],
];

export function NorthlineCaseStudy() {
  return <article className="workplace-case">
    <div className="workplace-intro">
      <div><p className="eyebrow"><span /> Northline Supply / Portfolio demonstration</p><h3>From supply<br />to shipment.</h3></div>
      <div className="workplace-copy">
        <p>A warehouse can have inventory on its books and still miss an order promise. The product may be unavailable, an inbound purchase may arrive late, or units may wait in a processing queue.</p>
        <p>I built Northline Supply to let operations, supply-chain, and logistics teams trace those questions across five connected Power BI pages. The report links supplier receipts, owned stock, customer orders, partial shipments, and warehouse stage activity so leaders can distinguish stock exposure from fulfillment and throughput constraints.</p>
        <p className="data-note">Portfolio demonstration using synthetic data for a fictional US industrial-maintenance distributor, January 2024–August 2026. The scenarios and outcomes are illustrative, not client results.</p>
      </div>
    </div>
    <div className="workplace-stack" aria-label="Project technologies">{['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Python', 'Git'].map(item => <span key={item}>{item}</span>)}</div>
    <PowerBIReport report={featuredReports[2].report} id="northline-report" help="Select a reporting month and warehouse, then move between Operations Overview, Inventory Health, Order Fulfillment, Supplier Performance, and Warehouse Throughput. Open the full report for more space on smaller screens." />
    <div className="report-tour">
      <div className="story-heading"><p className="section-index">Explore the story</p><h3>Follow the order through the operation.</h3></div>
      <div className="report-view-grid">{views.map(([name, question, copy], index) => <section key={name}><span className="section-index">0{index + 1} / {name}</span><h4>{question}</h4><p>{copy}</p></section>)}</div>
    </div>
    <div className="workplace-insight"><p className="section-index">A question worth testing</p><h3>Does more inventory solve a late-order problem?</h3><p>Not necessarily. At Columbus DC, queued units rise from 441 in September 2025 to 6,978 in February 2026 during a packing-capacity constraint. They fall to 1,759 by August after capacity increases, while the report still allows a check for remaining downstream queues. That pattern invites a stage-by-stage investigation before increasing stock or making a broader capacity decision.</p></div>
    <div className="workplace-method">
      <div className="story-heading"><p className="section-index">Behind the report</p><h3>Make the operational clocks agree.</h3></div>
      <div>
        <section><h4>Keep event dates and snapshots distinct</h4><p>Orders carry promised dates; partial shipments have dispatch dates. Inventory, backlog, and stage queues are month-end snapshots. The measures use the relevant date for each question so open units are not counted again every month as new demand.</p></section>
        <section><h4>Define service levels precisely</h4><p>On time in full is based on orders completed by their promised ship date. Due-month fill rate counts units shipped by month-end from orders due that month. Neither measure claims to track delivery to the customer.</p></section>
        <section><h4>Reconcile stock and flow</h4><p>Opening stock plus receipts less shipments equals closing owned stock. Stored inventory uses receipt-lot age, while picked and packed stock remains owned but sits outside the stored-stock aging buckets.</p></section>
        <section><h4>Keep the scenario reproducible</h4><p>The synthetic generator uses a fixed seed. Source checks reconcile 32 months of inventory, shipments, backlog, and capacity; model checks compare sampled DAX results with independent source aggregations.</p></section>
      </div>
    </div>
    <p className="workplace-result"><span>What this enables</span>A more focused discussion about whether a service issue starts with inbound supply, the stock mix, or warehouse processing—and which location or stage deserves attention first.</p>
  </article>;
}
