# Kind Aura Healthcare Services website

Next.js (App Router) + TypeScript.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Where to edit
- Services, age-group lists, counties, FAQs, phone/email/address: `lib/content.ts`
- Page layout and wording: `app/page.tsx`
- Colors and styling: `app/globals.css` (colors are in the `:root` block)
- Images: `public/images/`

## Deploy on Netlify
Push to GitHub, then in Netlify choose "Add new site > Import an existing project".
Build command `npm run build`. Netlify detects Next.js automatically.
The contact form uses Netlify Forms; submissions appear under Forms in the dashboard after deploy.
