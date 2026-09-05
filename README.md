# Engineering Portfolio

> **Architecture Before Implementation**

A premium, interactive engineering portfolio built to demonstrate 13+ years of software engineering expertise — from Java/Spring Boot backend systems to distributed architectures and AI-powered intelligent systems.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Technology

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Vite | Build tool |
| React Router | SPA routing |
| Lucide React | Icons |

## 📁 Architecture

```
src/
├── components/
│   ├── layout/        # Shell, Navigation, Footer
│   ├── ui/            # Reusable UI components
│   └── sections/      # Page sections
├── data/              # Content data (separated from presentation)
├── hooks/             # Custom React hooks
├── pages/             # Route pages
├── styles/            # Global CSS & design tokens
├── types/             # TypeScript interfaces
└── utils/             # Helpers
```

### Content Architecture

All content is separated from presentation in `src/data/content.ts`. This makes the portfolio easy to update — modify data, not components.

### Content Verification

See [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md) for the status of all portfolio content. Content marked as PROVISIONAL should be replaced with verified information before publishing.

## 🎨 Design System

- **Dark mode default** with light mode toggle
- **Typography:** Inter (UI) + JetBrains Mono (code)
- **Color palette:** Sophisticated dark surfaces with restrained blue accent
- **Animations:** Purposeful, respects `prefers-reduced-motion`

## 🌐 Deployment

### GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages on push to `main`.

**Manual deployment:**

```bash
npm run deploy
```

### Configuration

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` to trigger deployment

## 📋 Customization

1. Update `src/data/content.ts` with your information
2. Replace all `[PLACEHOLDER]` values
3. Review `CONTENT_VERIFICATION.md`
4. Add your resume to `public/` directory
5. Update meta tags in `index.html`

## 📄 License

MIT
