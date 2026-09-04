export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  challenge: string;
  data: string;
  approach: string[];
  solution: string;
  outcome: string;
  featured: boolean;
  visual: 'occupancy' | 'archive' | 'engagement';
  featuredImage?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: 'workplace-occupancy-attendance-analytics',
    title: 'Multi-Site Workplace Attendance & Occupancy Analytics',
    shortDescription: 'A multi-source Power BI model for attendance, occupancy, roster allocation, location, and geography-aware working-day analysis. Its insights informed an organizational reshuffle, improving space and resource allocation while delivering substantial cost savings.',
    description: 'A workplace reporting environment spanning multiple offices, buildings, employees, teams, business streams, resident classifications, roster allocations, attendance records, holidays, and monthly reporting.',
    role: 'Power BI development · Advanced DAX · Data modeling · Power Query',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Business Rules', 'Data Quality'],
    challenge: 'Metrics needed to remain correct across months, sites, buildings, teams, business segments, resident classifications, and employee exclusions—even when slicers created complex filter contexts. Invalid buildings or unmatched employees could not be allowed to contaminate aggregation.',
    data: 'Workplace attendance records, current and historical rosters, employee identities that varied across systems, building and site mappings, team and stream allocations, geography-specific holiday calendars, working-day rules, and controlled exclusions.',
    approach: [
      'Profiled identity and roster gaps, then built Power Query cleansing, historical matching, and fallback reconciliation logic.',
      'Designed fact, dimension, and bridge structures to separate attendance events from reusable employee, location, calendar, and business attributes.',
      'Encoded geography-aware holidays, dynamic working days, exclusions, and resident classifications as maintainable model logic.',
      'Used filter-context techniques including virtual tables, TREATAS, KEEPFILTERS, SUMX, and AVERAGEX where business grain required controlled evaluation.',
      'Validated totals across individual buildings and combined site views to prevent incorrect cross-location aggregation.',
    ],
    solution: 'A maintainable Power BI solution with reconciled roster history, governed dimensions, controlled relationship paths, reusable working-day logic, and context-sensitive attendance measures.',
    outcome: 'Created a consistent analytical view across sites, teams, and business segments, reduced ambiguity in attendance calculations, and made month-to-month reporting more reliable.',
    featured: true,
    visual: 'occupancy',
  },
  {
    slug: 'document-retention-archive-analytics',
    title: 'Historical Document Retention Analytics',
    shortDescription: 'Historical archive reporting that makes a large, inconsistent register easier to classify, explore by decade, and understand over time.',
    description: 'A large archive and document-retention register containing carton records, inconsistent classifications, incomplete fields, individual years, and historical year ranges.',
    role: 'Data transformation · Power BI · Historical analysis',
    technologies: ['Power BI', 'Power Query', 'DAX', 'Data Transformation', 'Historical Data Analysis'],
    challenge: 'Mixed category names, dirty or incomplete values, and dates represented as both individual years and ranges made record-age, decade, and retention analysis difficult to model consistently.',
    data: 'A high-volume archive register containing carton and document records, source categories, historical year values and ranges, location references, and descriptive register fields.',
    approach: [
      'Profiled recurring category, date, and completeness issues before defining repeatable transformation rules.',
      'Normalized categories and parsed both single-year and year-range formats while preserving source traceability.',
      'Introduced reusable year and decade dimensions, with bridge logic where a record spanned multiple historical periods.',
      'Built record-age measures and interactive exploration paths while keeping cleansing separate from report calculations.',
    ],
    solution: 'A Power BI model with normalized categories, reusable time dimensions, range-parsing logic, bridge structures, and DAX measures for age and historical period analysis.',
    outcome: 'Created a consistent reporting model that made a difficult historical register easier to explore and improved maintainability of retention logic.',
    featured: true,
    visual: 'archive',
  },
  {
    slug: 'workplace-engagement-digital-experience-reporting',
    title: 'Workplace Digital Engagement & Operational Reporting',
    shortDescription: 'An early-stage reporting solution unifying its first 12 months of application traffic, sessions, downloads, engagement, program content, and business-unit activity.',
    description: 'This report is in its early stages and currently covers its first 12 months, combining workplace and digital experience measures into a consistent monthly analytical view designed to grow over time.',
    role: 'Reporting design · Metric definition · Data modeling',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Visualization', 'KPI Design'],
    challenge: 'Application, content, scheme, usage, and business-unit metrics arrived from different sources and grains. They needed common reporting periods, consistent definitions, and a presentation business users could understand without source-system knowledge.',
    data: 'Monthly application traffic, sessions, downloads, engagement, usage, program content, scheme activity, and business-unit reporting inputs from multiple operational sources.',
    approach: [
      'Mapped source grains and aligned metric definitions before designing calculations or visuals.',
      'Standardized transformations and built reusable dimensions for month, program, scheme, and business-unit analysis.',
      'Created a measurement layer for consistent month-over-month tracking and cross-source comparison.',
      'Designed a restrained information hierarchy that separates headline indicators from diagnostic detail.',
    ],
    solution: 'A consolidated Power BI reporting experience with reusable monthly logic, consistent dimensions, supporting breakdowns, and clearly defined operational measures.',
    outcome: 'Established an initial month-to-month reporting foundation and a single analytical view across engagement, usage, and business activity, ready to expand as new reporting periods are added.',
    featured: true,
    visual: 'engagement',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
