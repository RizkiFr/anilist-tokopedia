/** @jsxImportSource @emotion/react */

import React from "react";
import Routes from "./app/routing/Routes";
import { BrowserRouter } from "react-router-dom";
import Context from "./app/state/Context";
import Header from "./app/components/Header";
import AppColors from "./app/styles/AppColors";

function App() {
  return (
    <Context.Provider>
      <BrowserRouter>
        <div css={{backgroundColor: AppColors.lightgrey}}>
          <div
            css={{
              maxWidth: 480,
              margin: "0 auto",
              display: "block",
              backgroundColor: "white",
            }}
          >
            <Header />
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
