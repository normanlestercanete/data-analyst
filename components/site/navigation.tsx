import { Download, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';

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
      <Link className="wordmark" href="/#top" aria-label="Norman Lester Canete, home">
        <Image className="brand-logo" src="/images/brand/nlc-logo.png" alt="NLC" width={2172} height={724} priority sizes="128px" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        {profile.resumeUrl && <a className="resume-link" href={profile.resumeUrl} download><Download size={14} /> Resume</a>}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><Menu size={20} /></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          {profile.resumeUrl && <a href={profile.resumeUrl} download>Download résumé</a>}
        </nav>
      </details>
    </header>
  );
}
