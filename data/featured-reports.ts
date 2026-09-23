import { workplaceReport } from './workplace-report';

export const featuredReports = [
  {
    slug: 'quantara-workplace-analytics',
    brand: 'Quantara',
    title: 'Workplace, Workforce & Lease Analytics',
    description: 'Connect people, office utilization, and monthly lease costs. Explore where demand is changing, what the workplace footprint costs, and which locations deserve a closer look.',
    scope: '5 report pages',
    preview: 'quantara-first-page.jpg',
    previewAlt: 'Quantara Workplace Financial Performance report preview',
    topics: ['Workplace utilization', 'Workforce movement', 'Lease costs'],
    report: workplaceReport,
  },
  {
    slug: 'asterworks-revenue-analytics',
    brand: 'AsterWorks',
    title: 'Revenue Growth & Marketing Performance',
    description: 'Follow the path from campaign spending to sales outcomes and recurring revenue. Explore acquisition efficiency, pipeline health, and whether existing customers are growing or leaving.',
    scope: '4 report pages',
    preview: 'asterworks-first-page.jpg',
    previewAlt: 'AsterWorks Executive Performance report preview',
    topics: ['Marketing effectiveness', 'Sales conversion', 'Customer retention'],
    report: { title: 'AsterWorks | Revenue Growth & Marketing Performance', embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDg1YmZkODMtMDNiZS00ODVhLWI3YWYtNmM4ZjFhYTJjODZmIiwidCI6IjAyZGM5Y2UwLTU4YWQtNDMxNS1hZDA2LTM3ZTdiNTgzZGU1YSIsImMiOjEwfQ%3D%3D' },
  },
  {
    slug: 'northline-operations-analytics',
    brand: 'Northline Supply',
    title: 'Operations & Inventory Analytics',
    description: 'Trace order service from supplier receipts and stock availability through warehouse queues to shipment. Find where aging inventory and bottlenecks coexist with overdue demand.',
    scope: '5 report pages',
    preview: 'northline-first-page.jpg',
    previewAlt: 'Northline Supply Operations Overview report preview',
    topics: ['Inventory health', 'Order fulfillment', 'Warehouse throughput'],
    report: { title: 'Northline Supply | Operations & Inventory Analytics', embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMTdlYzhjMDgtYTI4OC00MTFlLWI4ZDktYmQyMDJhMjMwNTRhIiwidCI6IjAyZGM5Y2UwLTU4YWQtNDMxNS1hZDA2LTM3ZTdiNTgzZGU1YSIsImMiOjEwfQ%3D%3D' },
  },
];

export const getFeaturedReport = (slug: string) => featuredReports.find(report => report.slug === slug);
