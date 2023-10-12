import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { I18n } from "src/configs/i18n/i18n";
import "react-toastify/dist/ReactToastify.css";

import { store } from "src/stores";
import { Suspense } from "./components";
import RootRouter from "./routers/Root";

import "./App.less";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={I18n}>
        <React.Suspense fallback={<Suspense />}>
          <BrowserRouter>
            <RootRouter />
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </BrowserRouter>
        </React.Suspense>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
