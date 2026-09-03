# Norman Lester Canete — Power BI & Business Intelligence Portfolio

A dark-first, responsive portfolio for a Power BI and Data Analytics specialist. Built with the Next.js App Router API, TypeScript, Tailwind CSS, and the lightweight Vinext runtime.

## Run locally

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

For a production build:

```bash
pnpm lint
pnpm build
```

## Update content

All professional content is separated from presentation:

- `data/profile.ts` — name, positioning, contact links, résumé path, and production URL
- `data/projects.ts` — anonymized case studies and project technology tags
- `data/skills.ts` — expertise and skills
- `data/experience.ts` — verified employment history; the section stays hidden while the array is empty

Empty links are intentionally not rendered. Add Norman's verified LinkedIn, Upwork, email, and production domain in `data/profile.ts`.

## Add the profile photo

The current supplied portrait is at `public/images/profile/norman.png`. To replace it, use the same filename or update the path in `app/page.tsx`. A square image of at least 1200×1200 pixels works well.

The navigation and footer logo is stored at `public/images/brand/nlc-logo.png`.

## Add project screenshots

Put anonymized images in `public/images/projects/`. Add `featuredImage` and `gallery` paths to a project in `data/projects.ts`, then replace or extend the `ProjectVisual` component in `components/site/project-visual.tsx` to render them. Never publish confidential names or source data.

## Add the résumé

Place the file at:

`public/resume/norman-lester-canete-resume.pdf`

Then set `resumeUrl` to `/resume/norman-lester-canete-resume.pdf` in `data/profile.ts`. The navigation hides the résumé link until this value is configured.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use `pnpm build` as the build command.
4. Use `dist/client` as the output directory.
5. Deploy, then set `siteUrl` in `data/profile.ts` to the final HTTPS URL and redeploy so canonical, sitemap, Open Graph, and Twitter metadata use the correct domain.

## Connect a custom domain

In the Vercel project, open **Settings → Domains**, add the domain, and follow the DNS instructions. Once the domain is active, update `siteUrl` in `data/profile.ts` and redeploy.

## Structure

```text
app/
  layout.tsx              global metadata and fonts
  page.tsx                homepage
  work/[slug]/page.tsx    generated case-study pages
  robots.ts               robots policy
  sitemap.ts              sitemap generated from project data
components/site/          reusable portfolio components
data/                     editable professional content
public/images/            profile, project, and social images
public/resume/            downloadable résumé
```
