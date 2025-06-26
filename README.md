# BantuPay Super-App

This repository contains a minimal React Native scaffold for a mobile Super-App inspired by AliPay's mobile wallet. The platform provides a simple MiniApp framework so third‑party developers can publish lightweight experiences inside the main app. Fintech functionality is enabled through the MoMo Open API.

## Structure

- `app/` &ndash; React Native source code
  - `App.js` &ndash; entry component with stack navigation
  - `index.js` &ndash; entry point registered with React Native
  - `miniapps/` &ndash; directory containing MiniApps
  - `momo-api/` &ndash; thin wrapper around MoMo Open API
- `package.json` &ndash; React Native dependencies and scripts

## Getting Started

1. Install dependencies with `npm install`.
2. Run the Metro server using `npm start`.
3. Launch the app on Android or iOS using `npm run android` or `npm run ios`.

MoMo API credentials need to be configured inside `app/momo-api/index.js`.

This scaffold is intentionally lightweight and can be expanded with additional MiniApps and features.

## Using a Web-Based Server

If `npm` is unavailable on your local machine, you can run the project in a
web-based development environment such as Gitpod or Replit. These services come
with Node and npm preinstalled.

1. Fork this repository and open it in your chosen web IDE.
2. Install dependencies with `npm install` inside the IDE terminal.
3. Start the Metro server using `npm start`.
4. Launch the app using the emulator options provided by the service.

Running the project this way lets you avoid local npm issues while still
testing the React Native application.
