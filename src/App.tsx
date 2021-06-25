import React from 'react';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome}></Route>  
      </Switch>
    </div>
  );
}
export default App;
