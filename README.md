## Payxn LFW (Leaf Fire Water) Game + Zombie Crush
```
Integrating TG mini app and Gaming with the BNB Chain and other protocols to attract a new generation of unique users. 
```
A fast-paced, fun Telegram game where players choose between Fire, Water, and Leaf to outwit their opponent! Fire burns Leaf, Leaf floats on Water, and Water extinguishes Fire. Challenge your friends, climb the leaderboard, and test your strategy in this quick and engaging game of wits and reflexes. 🔥💧🍃

### Telegram Bot Link:
- [x] https://t.me/lfwbnb_bot

### To do list
- [x] Create new telegram bot: @lfwbnb_bot
- [x] Create new webapp
- [x] yarn create vite 
- [x] use react
- [x] use typescript + SWC
- [x] git init, add ., commit -m
- [x] yarn add @vkruglikov/react-telegram-web-app
- [x] test run: npm run dev
- [x] deploy to vercel 
- [x] new mini-app link: https://t.me/lfwbnb_bot/lfwbnb
- [x] add webthird sdk
- [x] create client.ts for webthird sdk

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
