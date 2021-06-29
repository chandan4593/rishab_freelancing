import React from 'react';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import MyProducts from "./Components/Farmer/MyProducts/MyProducts";
import {Provider} from "react-redux";
import Store from "./redux/store";
import CustomerSignin from './Components/CustomerAuth/CustomerSignin';
import DeliveryBoyLogin from './Components/DeliveryBoyLogin/DeliveryBoyLogin';
import FarmerSignin from './Components/FarmerAuth/FarmerSignin';
import Delivery from './Components/Delivery/Delivery';
import shop from "./Components/Shop/Shop";
import PendingOrders from './Components/CustomerOrders/PendingOrders/PendingOrders';
import AcceptedOrders from './Components/CustomerOrders/AcceptedOrders/AcceptedOrders';

export const Baseurl = "https://agrimarketapp.herokuapp.com";

export const Graphql = "https://agrimarketapp.herokuapp.com/graphql";

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
          <Route exact path="/shop" component={shop}></Route>  
          <Route exact path="/pendingOrders" component={PendingOrders}></Route>  
          <Route exact path="/acceptedOrders" component={AcceptedOrders}></Route>  
        </Provider>
      </Switch>
    </div>
  );
}
export default App;
