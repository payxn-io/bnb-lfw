## Payxn LFW (Leaf Fire Water) Game + Zombie Crush
```
Integrating TG mini app and Gaming with the BNB Chain and other protocols to attract a new generation of unique users. 
```
A fast-paced, fun Telegram game where players choose between Fire, Water, and Leaf to outwit their opponent! Fire burns Leaf, Leaf floats on Water, and Water extinguishes Fire. Challenge your friends, climb the leaderboard, and test your strategy in this quick and engaging game of wits and reflexes. 🔥💧🍃

### Telegram Bot Link:
- [x] https://t.me/lfwbnb_bot

### Deployed Smart Contract BNB Smartchain Testnet
- [x] https://testnet.bscscan.com/address/0x044E9c04c0Bb6Dc82f86da4ae0B1269Dbd3c804a

### Deployed Smart contracts BNB Smartchain Mainnet
- [x] ERC-721 Worker NFT: https://bscscan.com/address/0x02Dc83855c897d7a057AA35b35BC74509dFb4860
- [x] ERC-20 BitGold: https://bscscan.com/address/0x98141090c12bc2dB4bbD57f9617A9796175e773d
- [x] ERC-1155 Business: https://bscscan.com/address/0xF585607e0516b8e099F5e857CaDa0d07E473493e
- [x] Staking contract: https://bscscan.com/address/0xfe1C530aBE44D21Af594eCe101866e4dA01Bd1E7
- [x] AccountFactory: https://bscscan.com/address/0x58cC6C8F91bEbd1FF531922679D5566aFC0C7E1c

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
- [x] Build the fire, water & leaf game

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
