import React from 'react';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import MyProducts from "./Components/Farmer/MyProducts/MyProducts";
import {Provider} from "react-redux";
import Store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={Store}>
          <Route exact path="/" component={Welcome}></Route>  
          <Route exact path="/farmers" component={MyProducts}></Route>  
        </Provider>
      </Switch>
    </div>
  );
}
export default App;
