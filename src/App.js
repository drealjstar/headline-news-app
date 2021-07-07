import React from "react";
import News from "./Component/news";
import "./App.css";
import Tags from "./Component/tag";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>

        <Route path="/tags">
          <Tags/>
        </Route>

        <Route exact path="/">
          <Redirect to="/tags" />
        </Route>
        <Route  path="/news/:country_code"  render={ props =>  <News {...props}/> } />

        </Switch>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
