# Kind Aura Healthcare Services: website

One-page React site built with Vite.

## Run it in VS Code
1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in VS Code (File > Open Folder)
3. Open the terminal (Ctrl + `) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the local address it prints (usually http://localhost:5173). Edits show up instantly.

## Where to edit
- **Text, phone, email, services, FAQs:** `src/content.js`
- **Fonts:** `src/fonts.js` (site-wide or per-section heading and body fonts; any Google Font name)
- **Colors:** top of `src/styles.css` (the `:root` block)
- **Page layout / sections:** `src/components/` (one file per section; order is set in `src/App.jsx`)
- **Images:** drop files in `public/images/`, then replace a placeholder, e.g.
  `<ImagePlaceholder src="/images/hero.jpg" alt="Describe the photo" />`

## Publish
`npm run build` creates a `dist/` folder. Upload it to Netlify, Vercel, or your host and point kindaurahealthcare.com to it.

## Before launch
- Confirm the email address with the client (Kaurahealthcare@gmail.com does not match the domain).
- Have the client review every FAQ answer and service description.
- The contact form opens the visitor's email app; connect Formspree/EmailJS if it should deliver straight to an inbox.
