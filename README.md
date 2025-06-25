# BantuPay Super-App

This repository contains a minimal React Native scaffold for a mobile Super-App inspired by AliPay's mobile wallet. The platform provides a simple MiniApp framework so third‑party developers can publish lightweight experiences inside the main app. Fintech functionality is enabled through the MoMo Open API.

## Structure

- `app/` &ndash; React Native source code
  - `App.js` &ndash; entry component with stack navigation
  - `index.js` &ndash; entry point registered with React Native
  - `miniapps/` &ndash; directory containing MiniApps
  - `momo-api/` &ndash; thin wrapper around MoMo Open API
- `package.json` &ndash; React Native dependencies and scripts
- `src/` &ndash; UI component library and theme provider
- `tokens/` &ndash; design tokens used across the app
- `storybook/` &ndash; Storybook configuration and stories

## Getting Started

1. Install dependencies with `npm install`.
2. Run the Metro server using `npm start`.
3. Launch the app on Android or iOS using `npm run android` or `npm run ios`.
4. Launch Storybook using `npm run storybook` to preview components.
5. Run unit tests with `npm test`.

MoMo API credentials need to be configured inside `app/momo-api/index.js`.

This scaffold is intentionally lightweight and can be expanded with additional MiniApps and features.
