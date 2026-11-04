# Meena Events website

Premium wedding and event planning website for Meena Events, Indore.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Run locally

    npm install
    npm run dev        # development server on http://localhost:3000
    npm run build      # production build (type-checks and prerenders all routes)
    npm run start      # serve the production build

## Where to edit things

| What | File |
| --- | --- |
| Phone, WhatsApp number, address, Instagram and Google Reviews URLs | `config/site.ts` |
| Statistics (2014, 100+ events, rating, review count) and their verification flags | `config/content.ts` (`trustStats`) |
| Services, portfolio projects, review themes, enquiry form options, section switches | `config/content.ts` |
| Extended service copy (intros, inclusions, benefits) | `config/service-details.ts` |
| Every image path and alt text | `config/images.ts` |
| Colours and fonts | `app/globals.css` (`@theme`) and `app/fonts.ts` |

## Before launch checklist

1. Replace every image in `config/images.ts`. Current files in `public/images/placeholders/` are labelled illustrations, not photographs.
2. Confirm each statistic in `config/content.ts`. A statistic appears publicly only when BOTH `enabled: true` and `verified: true`.
3. Add the verified Instagram URL and Google Reviews URL in `config/site.ts`. Both are hidden until set.
4. Replace the `demo: true` portfolio entries in `config/content.ts` with verified projects. Set `showPlaceholderNotice: false` in `config/site.ts` once done.
5. Confirm the business email if it should be shown (`site.contact.email`).
6. Have the Privacy Policy and Terms and Conditions reviewed by a legal adviser, then remove the "draft for review" notices in `app/privacy/page.tsx` and `app/terms/page.tsx`.
7. Set `NEXT_PUBLIC_SITE_URL=https://meenaevents.com` in production. Vercel preview deployments are automatically configured to be noindex/nofollow and use their preview URL for metadata.
8. Confirm the review themes in `config/content.ts` reflect public feedback accurately.

## Enquiry form

The form validates every field and shows errors next to each input. It has no backend, so nothing is stored or emailed. On a valid submit, the visitor is shown a WhatsApp message pre-filled with their details, which they review and send themselves. To store enquiries, add a route handler under `app/api/` and connect an email or CRM service. Keep API keys in environment variables, never in client code.

## Structured data and SEO

`lib/schema.ts` produces LocalBusiness structured data. It includes only verified statistics. A statistic is publicly displayed only when both `enabled` and `verified` are true. Vercel preview deployments and local development are noindex/nofollow; demo portfolio detail pages are also noindex until replaced with real projects. `app/sitemap.ts` and `app/robots.ts` generate the production sitemap and robots file.

## Notes

- Social preview images (Open Graph) need JPG or PNG files. SVG placeholders are skipped for social previews.
- Fonts are self-hosted from `app/fonts/` (Cormorant Garamond and Manrope, Latin subsets, WOFF2).

## Motion

Motion is built with Framer Motion and lives in:

- `components/home/Hero.tsx`: arches draw in, headline reveals word by word, image settles from a slight zoom.
- `components/ui/ClipReveal.tsx`: images unveil from the bottom on scroll.
- `components/ui/StatValue.tsx`: statistics count up when they scroll into view.
- `components/ui/Reveal.tsx`: a single quiet entrance for list items.
- `components/layout/ScrollProgress.tsx`: a thin progress line across the top of the page.

All motion respects the reduced-motion preference: visitors who have it enabled see the final layout immediately. Timings are set inline in each component.

## Photo permissions and review verification

- Do not copy photos from Google Maps or third-party directories into this website unless Meena Events confirms it has the rights to reuse each image. See `PHOTO-ASSET-CLEARANCE.md` for the requested asset set and sources reviewed.
- Review-theme summaries remain hidden until their `verified` flag is set to `true` in `config/content.ts` after checking the underlying public review and receiving approval to use the summary.
- Confirm the business phone and address with Meena Events, then set `businessContactDetailsVerified` to `true` in `config/site.ts` before relying on those details in LocalBusiness structured data.


### Google Maps listing and photos

The Contact page embeds the Meena Events Indore map location and links visitors to the public Google Maps listing. The Portfolio page also links to the listing's Photos section. Listing photos are viewed on Google Maps and are not downloaded, copied, or republished by this project. To add photos to the site's own gallery, obtain original files and written permission from Meena Events and the relevant rights holders.
