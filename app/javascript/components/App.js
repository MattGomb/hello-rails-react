import React from "react";
import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import Store from "../redux/ConfigureStore";
import Greeting from "./Greeting";

const App = () => {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/random" element={<Greeting />} />
      </Routes>
    </Provider>
  );
};

export default App;
