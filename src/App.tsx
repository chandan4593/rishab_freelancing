import React from 'react';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import MyProducts from "./Components/Farmer/MyProducts/MyProducts";
import {Provider} from "react-redux";
import Store from "./redux/store";
import CustomerSignin from './Components/CustomerAuth/CustomerSignin';
import DeliveryBoyLogin from './Components/DeliveryBoyLogin/DeliveryBoyLogin';
import FarmerSignin from './Components/FarmerAuth/FarmerSignin';

export const Baseurl = "http://localhost:8000"

export const Graphql = "http://localhost:8000/graphql"

function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={Store}>
          <Route exact path="/" component={Welcome}></Route>  
          <Route exact path="/farmers" component={MyProducts}></Route>  
          <Route exact path="/customersauth" component={CustomerSignin}></Route>  
          <Route exact path="/deliveryboylogin" component={DeliveryBoyLogin}></Route>  
          <Route exact path="/farmersauth" component={FarmerSignin}></Route>  
        </Provider>
      </Switch>
    </div>
  );
}
export default App;
