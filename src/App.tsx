import React from 'react';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Shop from './Components/Shop/Shop';
function App() {
  return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={Shop}></Route>
          </Switch>
      </div>
  );
}
export default App;
