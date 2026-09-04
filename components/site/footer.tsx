import { profile } from '@/data/profile';
import Image from 'next/image';
import { publicPath } from '@/lib/paths';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer shell">
      <div><Image className="footer-logo" src={publicPath('/images/brand/nlc-logo.png')} alt="NLC" width={2172} height={724} sizes="108px" /><strong>{profile.name}</strong><span>{profile.role}</span></div>
      <div className="footer-links">
        {profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>}
        {profile.upworkUrl && <a href={profile.upworkUrl} target="_blank" rel="noreferrer">Upwork</a>}
      </div>
      <p>© {year} {profile.name}</p>
    </footer>
  );
}
