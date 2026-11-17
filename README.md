# yarramnikhil.com

Source for my personal site: **[yarramnikhil.com](https://yarramnikhil.com)**

A single-page portfolio covering my work as a backend engineer on Chewy's orders platform, my side projects ([identity-broker](https://github.com/nyarram/identity-broker), [litmus](https://github.com/nyarram/litmus), [astrodigest](https://github.com/nyarram/astrodigest), [lims](https://github.com/nyarram/lims)), and my experience.

## Stack

- **Next.js 15** (App Router) and **React 19**, written in TypeScript
- **Tailwind CSS** for styling, with a light/dark theme toggle
- **Framer Motion** for scroll and entrance animations
- Deployed on **Vercel**. Every push to `main` ships to production.

## Structure

```
src/
├── app/            # layout, metadata, and the single page
├── components/     # Hero, About, Experience, Projects, Skills, Contact, ...
├── context/        # theme (light/dark) provider
└── styles/         # global CSS
public/             # static assets
```

Content lives directly in the components. For example, projects are an array in `src/components/Projects.tsx` and roles are in `src/components/Experience.tsx`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run lint
```

## License

See [LICENSE](LICENSE).
