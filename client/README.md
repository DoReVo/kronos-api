# Features

- [Vite](https://vitejs.dev/guide/), [Vue 3](https://vuejs.org/guide/introduction.html), Typescript, Sass
- [File system routing](https://github.com/hannoeru/vite-plugin-pages)
- [UI Layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [Pinia](https://pinia.vuejs.org/introduction.html)
- [Google font loader](https://github.com/feat-agency/vite-plugin-webfont-dl)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [PrimeVue](https://www.primefaces.org/primevue/#/)

# Development Plugins / Dependecies
- [PostCSS](https://postcss.org/) (autoprefixer plugin installed)
- [Prettier](https://prettier.io/) (tailwind plugin installed)
- [HTML config](https://github.com/ahwgs/vite-plugin-html-config)
- Sass
- [Eslint](https://eslint.org/) (typescript, airbnb, vue, import, prettier plugin installed)

# Pages included
- Sign in
- Credits page (For any free resource used)

# Extra
- Captured browser `beforeinstallprompt` and `appinstalled` event to provide custom pwa install prompt
# FAQ

## Uninstalling PrimeVue

1. Run `npm remove primevue`
2. Run `npm remove primeicons`
3. Delete the following in src/main.ts

```javascript
// Prime vue css and theme
// Change the first import to change theme
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
```
```javascript
app.use(PrimeVue);
```

```javascript
import PrimeVue from "primevue/config";
```