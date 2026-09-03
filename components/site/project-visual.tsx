import type { Project } from '@/data/projects';

const labels = {
  occupancy: ['Workplace pulse', 'Site overview', 'Working days'],
  archive: ['Archive register', 'Record age', 'Category view'],
  engagement: ['Digital experience', 'Monthly usage', 'Adoption trend'],
} as const;

export function ProjectVisual({ variant, large = false }: { variant: Project['visual']; large?: boolean }) {
  const bars = variant === 'occupancy' ? [42, 67, 54, 82, 65, 91, 74] : variant === 'archive' ? [86, 56, 72, 43, 66, 38, 58] : [31, 47, 52, 68, 61, 77, 88];
  return (
    <div className={`data-visual data-visual--${variant} ${large ? 'data-visual--large' : ''}`} aria-hidden="true">
      <div className="visual-topline"><span>{labels[variant][0]}</span><i>ANONYMIZED VIEW</i></div>
      <div className="visual-grid">
        <div className="visual-metric"><small>{labels[variant][1]}</small><strong>{variant === 'archive' ? '10 yr' : variant === 'occupancy' ? '34 sites' : '12 mo'}</strong><span>Reporting scope</span></div>
        <div className="visual-chart">
          <div className="bars">{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          <div className="axis"><span>01</span><span>04</span><span>07</span><span>10</span></div>
        </div>
      </div>
      <div className="visual-footer"><span>{labels[variant][2]}</span><span>Power BI · Data Model</span></div>
    </div>
  );
}
