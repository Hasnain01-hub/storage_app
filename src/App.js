import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./layout/MainPage";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
