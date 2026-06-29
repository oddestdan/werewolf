# Ultimate Werewolf App Implementation

I have successfully bootstrapped and built the Ultimate Werewolf instructions web app! 🐺

## Summary of Changes
- **Project Structure**: Created a new Next.js project using Tailwind CSS (`/home/deck/Projects/werewolf`).
- **Aesthetic**: Implemented a minimalist, book-like theme using the Merriweather serif font, an off-white background (`#fdfaf6`), and high-contrast text (`#2b2b2b`).
- **Images**: Generated 8 vibrant, high-quality playing-card style character images and placed them in the `public/` directory:
  - Werewolf, Mason, Seer, Robber, Troublemaker, Insomniac, Tanner, Hunter.
- **Localization**: Created a custom dictionary (`src/locales/dict.ts`) to support both Ukrainian (default) and English.
- **UI Architecture**: Built a single, unified `page.tsx` that includes:
  - A responsive language toggle header.
  - A formatted rulebook section displaying the **Waking Order**, **Static Roles**, and **Discussion Time** (6 minutes).
  - A grid of beautiful `RoleCard` components mapping each character to their specific playing card suit/rank and description.

## Verification
- Run `npm run dev` in `/home/deck/Projects/werewolf`.
- The application will be served at `http://localhost:3000`.
- I have started the development server in the background for you. You can visit the URL in your browser to interact with the bilingual, responsive UI!

> [!TIP]
> You can try clicking the UK/EN button at the top right to instantly switch languages. Notice how the card hover effects bring the app to life!
