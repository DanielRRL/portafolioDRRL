# AGENTS.md — portafoliodrrl

React 19 + TypeScript 6 + Vite 8 portfolio scaffold.

## Commands

```bash
npm run dev       # Vite dev server (HMR)
npm run build     # tsc -b (typecheck project references) then vite build
npm run lint      # eslint .
npm run preview   # Vite preview of production build
```

Build runs typecheck first. If it fails on lint, run `npm run lint` separately.

## Architecture

- **Entrypoint**: `index.html` → `src/main.tsx`
- **TypeScript**: project-references root (`tsconfig.json`) points to `tsconfig.app.json` (app code) and `tsconfig.node.json` (vite config only)
- **ESM only**: `"type": "module"` in package.json — use `import`/`export`, never `require`
- **CSS Modules**: `*.module.css` files co-located with components, imported as objects (`styles.header`)
- **Theme**: CSS custom properties in `src/styles/variables.css`, toggled via `[data-theme="dark"]` attribute set by `ThemeContext`. Theme persists to `localStorage`.

## Conventions

- `noUnusedLocals` and `noUnusedParameters` are enabled — unused imports/vars block `tsc -b`
- `verbatimModuleSyntax` is on — use `import type` for type-only imports
- `erasableSyntaxOnly` is on — no enums, no `namespace`, no parameter properties
- Components use default exports, CSS modules use named imports
- ESLint flat config in `eslint.config.js`

## Known issues

- `src/index.css` and `src/App.css` are imported by `main.tsx` and `App.tsx` but do not exist. Create them as needed.
- `Header.module.css` and `Footer.module.css` have their contents accidentally swapped — `Header.module.css` contains footer CSS classes and vice versa. Swap them back before the CSS modules work correctly.
