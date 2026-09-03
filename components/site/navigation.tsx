import { Download, Menu } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { publicPath } from '@/lib/paths';

const links = [
  ['About', '/#about'],
  ['Expertise', '/#expertise'],
  ['Work', '/#work'],
  ...(experience.length ? [['Experience', '/#experience'] as const] : []),
  ['Contact', '/#contact'],
] as const;

export function Navigation() {
  return (
    <header className="site-header">
      <a className="wordmark" href={publicPath('/#top')} aria-label="Norman Lester Canete, home">
        <Image className="brand-logo" src={publicPath('/images/brand/nlc-logo.png')} alt="NLC" width={2172} height={724} priority sizes="128px" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={label} href={publicPath(href)}>{label}</a>)}
        {profile.resumeUrl && <a className="resume-link" href={publicPath(profile.resumeUrl)} download><Download size={14} /> Resume</a>}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><Menu size={20} /></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={label} href={publicPath(href)}>{label}</a>)}
          {profile.resumeUrl && <a href={publicPath(profile.resumeUrl)} download>Download résumé</a>}
        </nav>
      </details>
    </header>
  );
}
