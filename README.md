<p align="center">
  <img src="https://res.cloudinary.com/ddjsyskef/image/upload/v1746155544/public/hqzb7vmkncwmr0qfsina.png" alt="Business Card Generator"/>
</p>


# Business Card Generator

A modern, customizable digital business card generator built with Next.js, React, TypeScript, and Tailwind CSS. Instantly create, preview, and export beautiful business cards with multiple themes and advanced UI components.

## Features

- **Live Editing:** Instantly update your business card information (name, title, email, website) with a real-time preview.
- **Theme Support:** Choose from multiple developer-inspired themes (VSCode, Monokai, Dracula, GitHub, Nord).
- **Export Options:** Download your card as a PNG image or JSON file.
- **Clipboard Support:** Copy card data to clipboard with a single click.
- **Responsive Design:** Fully responsive and mobile-friendly.
- **Modern UI:** Built with shadcn/ui, Radix UI, and Tailwind CSS for a sleek interface.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Installation
```bash
pnpm install
# or
npm install
```

### Development
```bash
pnpm dev
# or
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build
```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                # Application entry, layout, and main page
│   ├── globals.css     # Global styles (Tailwind CSS)
│   ├── layout.tsx      # Root layout and metadata
│   └── page.tsx        # Main business card editor UI
├── components/         # Reusable UI and card components
│   ├── card/           # Card-specific components (header, form, export, etc.)
│   └── ui/             # shadcn/ui and custom UI primitives
├── data/
│   └── themes.ts       # Theme definitions
├── hooks/
│   └── use-mobile.ts   # Responsive/mobile detection hook
├── lib/
│   └── utils.ts        # Utility functions (e.g., class merging)
├── public/             # Static assets (SVGs, icons)
├── package.json        # Project metadata and dependencies
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Technologies Used
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [html-to-image](https://github.com/bubkoo/html-to-image)

## Contributing
Pull requests and issues are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://github.com/ekaone/business-card?tab=MIT-1-ov-file#readme)