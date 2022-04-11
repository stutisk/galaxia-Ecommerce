import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import App from "./App";
import {
    Homepage,
    Productpage,
    Profile,
    Wishlist,
    Cartpage,
    Checkoutpage,
    ForgetPassPage,
    LoginPage,
    SignupPage,
  } from "./Pages";

  const Routes = () => {
    return (
      <Router>
        
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/Productpage" element={<Productpage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Cartpage" element={<Cartpage />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Checkoutpage" element={<Checkoutpage />} />
          </Route>
          <Route path="/ForgetPassPage" element={<ForgetPassPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
       
      </Router>
    );
  };
  
  export default Routes;