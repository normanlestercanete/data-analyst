import { workplaceReport } from './workplace-report';

export const featuredReports = [
  {
    slug: 'quantara-workplace-analytics',
    brand: 'Quantara',
    title: 'Workplace, Workforce & Lease Analytics',
    description: 'Connect people, office utilization, and monthly lease costs. Explore where demand is changing, what the workplace footprint costs, and which locations deserve a closer look.',
    scope: '5 report pages',
    topics: ['Workplace utilization', 'Workforce movement', 'Lease costs'],
    report: workplaceReport,
  },
  {
    slug: 'asterworks-revenue-analytics',
    brand: 'AsterWorks',
    title: 'Revenue Growth & Marketing Performance',
    description: 'Follow the path from campaign spending to sales outcomes and recurring revenue. Explore acquisition efficiency, pipeline health, and whether existing customers are growing or leaving.',
    scope: '4 report pages',
    topics: ['Marketing effectiveness', 'Sales conversion', 'Customer retention'],
    report: { title: 'AsterWorks | Revenue Growth & Marketing Performance', embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDg1YmZkODMtMDNiZS00ODVhLWI3YWYtNmM4ZjFhYTJjODZmIiwidCI6IjAyZGM5Y2UwLTU4YWQtNDMxNS1hZDA2LTM3ZTdiNTgzZGU1YSIsImMiOjEwfQ%3D%3D' },
  },
];

export const getFeaturedReport = (slug: string) => featuredReports.find(report => report.slug === slug);
