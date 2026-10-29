# Junk or No
A beginner-friendly Next.js application using JavaScript and Tailwind CSS.

## Run locally
1. Run `npm install`.
2. Run `npm run dev`.
3. Visit http://localhost:3000.

`npm run build` creates a static site in `out/`.

## How it works
`app/page.js` contains the interactive interface. `lib/foods.js` holds a small food guide and an exact-name lookup. Add comma-separated food names to the appropriate group to extend it. Results are general educational guidance, not personalized nutritional advice. Unknown names are explicitly identified; no external AI or API is used.
