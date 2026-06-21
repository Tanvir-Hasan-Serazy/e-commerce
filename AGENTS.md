# e-commerce

Two packages in `backend/` and `frontend/` — **no workspace tool**. Install and run separately.

---

## Backend (`backend/`)

- Express 5 + ESM (`"type": "module"`)
- Dev: `npm run dev` (nodemon `src/index.js`)
- Entry: `src/index.js` → mounts routes under `/api`
- API: `/api/home-banner`, `/api/categories`, `/api/products`, `/api/users`
- No build step — runs directly in Node
- No test suite configured

### Prisma 7 (PostgreSQL via Neon)

- Schema is multi-file: `prisma/` directory with models in `prisma/models/`
- Config: `prisma.config.js` (new `defineConfig` style)
- **Client output** is non-default: `../src/generated/prisma` (import from `../generated/prisma/client.ts`)
- Adapter: `@prisma/adapter-pg` (configured in `src/prisma/client.js`)
- Commands from `backend/`:
  - `npx prisma generate` — regenerates client
  - `npx prisma db push` — sync schema
  - Seed: `node prisma/seed.js` (creates admin user from `./.env`)

### Uploads

- `multer` memory storage → Cloudinary
- Product images: field `images` (`upload.array("images", 5)`)
- Category/HomeBanner images: field `image` (`upload.single("image")`)
- 10 MB limit, images only

### Validation

- Zod schemas in `src/schemas/`, applied via `validate` middleware (`src/middlewares/validateMiddleware.js`)
- Supports `body`, `query`, `params` sources

### Auth

- `jsonwebtoken` in deps, but **not wired into any route yet**
- bcrypt used for password hashing (`src/controllers/user.controller.js`)
- RBAC helper in `src/lib/rbac.js` (not yet plugged into routes)
- Roles: `ADMIN`, `STAFF`, `USER` (Prisma enum)

---

## Frontend (`frontend/`)

- Next.js 16.2.9 + React 19.2.4 with **React Compiler** enabled
- `src/` directory, App Router
- Dev: `npm run dev` (port 3000)
- Lint: `npm run lint` (ESLint 9 flat config)
- No typecheck or test scripts
- Tailwind CSS v4 + `@tailwindcss/postcss`
- shadcn/ui (Radix-Nova style) — see `components.json`
- Path alias `@/` → `./src/`
- `@/lib/utils` exports `cn(...)` (clsx + tailwind-merge)
- UI components at `src/components/ui/`

### ⚠ Next.js 16 + React 19

This version has breaking changes from your training data. Before writing code, check `node_modules/next/dist/docs/` for relevant guides. The existing `frontend/AGENTS.md` also flags this.

### Conventions

- Font: Overpass via `next/font/google`
- Dark mode via `next-themes`
- Layout: `src/app/layout.tsx` includes `<Header />` and `<Toaster />` (sonner)
- Route `src/app/page.tsx` is placeholder
