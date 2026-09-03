import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer shell">
      <div><strong>{profile.name}</strong><span>{profile.role}</span></div>
      <div className="footer-links">
        {profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>}
        {profile.upworkUrl && <a href={profile.upworkUrl} target="_blank" rel="noreferrer">Upwork</a>}
      </div>
      <p>© {year} {profile.shortName}</p>
    </footer>
  );
}
