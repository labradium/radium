## Radium Next.js General Template

### Get Started

```sh
bunx create-next-app@latest -e https://github.com/silver-radium/templates/tree/main/next/general
```

```sh
cd radium-app
```

```sh
bun i
```

```sh
bun run dev
```

### Stack

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Turbo](https://turbo.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Geist Font](https://vercel.com/font)
- [Next Themes](https://next-themes.vercel.app/)

### Add-Ons

- Import statements and TailwindCSS utility classes sorted using
  prettier-plugins.
- Dark and Light themes added using next-themes.
- Proper folder structure to function properly.
- Remote images added to work with Vercel Storage.
- Auto-Generated robots.txt and sitemap.xml added.
- Layout setup for SEO.
- OG images support added.

### Structure

- `app` : used for routes and api's
- `lib` : used for hooks, utils, functions, configs, fonts etc.
- `styles` : used for layout css styles
- `ui` : used to hold componenets, primitives and icons.
- `ui/components` : used for components (components designed using `shadcn-ui`
  components and other resuable components)
- `ui/primitives` : used for primitives (`shadcn-ui` components)

### Report Bug or Feature Request

Please [create an issue](https://github.com/silver-radium/templates/issues/new)
for bug reports or feature requests.
