Run locally

Follow these steps to run the project on your machine.

1) Prerequisites

- Node.js installed (recommended: Node 18 or Node 20). Verify with:

```bash
node -v
```

2) Install dependencies

From the project root (where `package.json` is) run one of:

```bash
npm install
# or, if you use pnpm:
pnpm install
# or, if you use yarn:
yarn install
```

3) Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The dev server uses port 3000 by default.

If you need a different port for development:

```bash
npm run dev -- -p 3001
```

4) Build and run production

Create an optimized production build:

```bash
npm run build
```

Start the production server (serves the build from `.next`):

```bash
npm run start
```

To run production on a different port:

```bash
PORT=4000 npm run start
```

5) Linting

```bash
npm run lint
```

Troubleshooting

- If `npm install` fails, check your Node version and consider using `nvm` to switch Node versions.
- If you see runtime errors about missing environment variables, look for a `.env` file or check `app/` and `lib/` for required variables.
- If something looks broken after dependency updates, try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

Learn more

- Next.js docs: https://nextjs.org/docs
- Deploy on Vercel: https://nextjs.org/docs/app/building-your-application/deploying
