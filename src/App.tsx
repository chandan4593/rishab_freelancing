import React from 'react';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
<<<<<<< HEAD
import Shop from './Components/Shop/Shop';
function App() {
  return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={Shop}></Route>
          </Switch>
      </div>
=======
import MyProducts from "./Components/Farmer/MyProducts/MyProducts";
import {Provider} from "react-redux";
import Store from "./redux/store";
import CustomerSignin from './Components/CustomerAuth/CustomerSignin';
import DeliveryBoyLogin from './Components/DeliveryBoyLogin/DeliveryBoyLogin';
import FarmerSignin from './Components/FarmerAuth/FarmerSignin';
import Delivery from './Components/Delivery/Delivery';

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
          <Route exact path="/delivery" component={Delivery}></Route>  
          <Route exact path="/farmersauth" component={FarmerSignin}></Route>  
        </Provider>
      </Switch>
    </div>
>>>>>>> 740a786040b30c21587bbff2df3cfcbb9aac472a
  );
}
export default App;
