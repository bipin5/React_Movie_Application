import React from "react";

import ReactDOM from "react-dom/client";

import App from "./components/containers/App";

import { BrowserRouter as Router } from "react-router-dom";

import { I18nextProvider } from "react-i18next";

import i18next from "i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));

i18next.init({
  interpolation: { escapeValue: false },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
