# Products Page 

## This page is a template page of product app.

## See [Demo](https://konradbauer.github.io/Products-Page/)

## Desktop view:

![example](https://github.com/KonradBauer/Products-Page/blob/main/src/images/ReadmeAnimation.gif)

## Mobile view:

<div align="center">
  <img src="https://github.com/KonradBauer/Products-Page/blob/main/src/images/ReadmeAnimationMobile.gif">
</div>

## Files Structure
```
public/
src/
├─ components/
│ ├─ Button/
│ │ ├─ Button.tsx
│ ├─ Card/
│ │ ├─ Card.tsx
│ ├─ Extension/
│ │ ├─ Extension.tsx
│ ├─ FAQ/
│ │ ├─ Faq.tsx
│ ├─ Collapse/
│ │ ├─ Collapse.tsx
│ ├─ Features/
│ │ ├─ Features.tsx
│ │ ├─ FeatureElement.tsx
│ ├─ Footer/
│ │ ├─ Footer.tsx
│ ├─ GlobalContainer/
│ │ ├─ GlobalContainer.tsx
│ ├─ Modal/
│ │ ├─ Modal.tsx
│ │ ├─ ModalElement.tsx
│ ├─ Header/
│ │ ├─ Header.tsx
│ ├─ Subheader/
│ │ ├─ Subheader.tsx
│ ├─ SvgComponents/
│ │ ├─ ErrorIcon.tsx
│ │ ├─ FacebookIcon.tsx
│ │ ├─ TwitterIcon.tsx
├─ index.css
├─ main.tsx
├─ vite-env.d.ts
├─ App.tsx
├─ images/
.eslintrc.cjs
.gitignore
index.html
package-lock.json
package.json
postcss.config.js
prettier.config.cjs
README.md
tailwind.config.js
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Technologies and libraries:
- TypeScript
- React
- React Hooks
- Vite
- Tailwind
- DaisyUI

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

