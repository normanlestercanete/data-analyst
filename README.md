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
- `data/workplace-report.ts` — public Power BI embed URL and report title
- `components/site/workplace-case-study.tsx` — featured Quantara project story and exploration guide
- `data/projects.ts` — earlier case studies retained at their existing URLs
- `data/skills.ts` — expertise and skills
- `data/experience.ts` — verified employment history; the section stays hidden while the array is empty

Empty links are intentionally not rendered. Add Norman's verified LinkedIn, Upwork, and production domain in `data/profile.ts`. The contact email and prefilled inquiry subject are configured there as well.

## Add the profile photo

The current supplied portrait is at `public/images/profile/norman.png`. To replace it, use the same filename or update the path in `app/page.tsx`. A square image of at least 1200×1200 pixels works well.

The navigation and footer logo is stored at `public/images/brand/nlc-logo.png`.

## Add project screenshots

The homepage Work section now features the live Quantara report instead of illustrative dashboard cards. Update its public URL in `data/workplace-report.ts` using the `src` from Power BI's **Publish to web** iframe. The same URL powers the responsive embed and the **Open full report** link. Keep the report at 16:9 with Fit to page; the website reserves extra height for Power BI's navigation bar. Regional Performance is the recommended landing page. The story identifies the report as a demonstration using synthetic data.

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

## Deploy to GitHub Pages

The included workflow publishes the portfolio to `https://normanlestercanete.github.io/data-analyst/` after every push to `main`. It builds with the `/data-analyst` base path so navigation, project pages, and images work from the repository URL.

## Connect a custom domain

In the Vercel project, open **Settings → Domains**, add the domain, and follow the DNS instructions. Once the domain is active, update `siteUrl` in `data/profile.ts` and redeploy.

## Structure

```text
app/
  layout.tsx              global metadata and fonts
  page.tsx                homepage
  work/[slug]/page.tsx    generated case-study pages
public/robots.txt          crawler hint and sitemap location
public/sitemap.xml         indexable homepage and case-study URLs
components/site/          reusable portfolio components
data/                     editable professional content
public/images/            profile, project, and social images
public/resume/            downloadable résumé
```

## Featured Power BI reports

The homepage shows concise cards for Quantara, AsterWorks, and Northline Supply. Their interactive reports, narratives, and email calls to action live on separate `/work/` case-study pages. Edit summaries, preview images, and the AsterWorks and Northline public embed URLs in `data/featured-reports.ts`; Quantara’s URL remains in `data/workplace-report.ts`. Existing case-study URLs remain available.

## Search visibility

The GitHub Pages build publishes a static sitemap at `https://normanlestercanete.github.io/data-analyst/sitemap.xml`. Update `public/sitemap.xml` whenever you add or remove a case-study URL; the sitemap must contain the same canonical URLs that the pages use. `public/robots.txt` is also published under the project path, though crawler rules for the shared `github.io` host are controlled at the host root, which this repository cannot edit.

To monitor indexing, add `https://normanlestercanete.github.io/data-analyst/` as a **URL-prefix property** in Google Search Console, verify ownership using the method it offers, and submit the sitemap URL. Inspect the homepage and featured case-study URLs there to see whether Google has indexed them. A sitemap helps discovery but does not guarantee indexing or ranking. Keep titles and case-study copy accurate to the work shown, and link to the portfolio from relevant professional profiles.
