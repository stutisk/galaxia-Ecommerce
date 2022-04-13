import React from "react";
import {Routes, Route} from 'react-router-dom';


// import {MockAPI} from "./Components/Mockman/Mockman"
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

function App() {
  return (
    <div className="App">
    <Routes>
      
    <Route path="/" element={<Homepage/>}>
           
            <Route path="/Productpage" element={<Productpage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Cartpage" element={<Cartpage />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Checkoutpage" element={<Checkoutpage />} />
            

          </Route>
          <Route path="/ForgetPassPage" element={<ForgetPassPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />

    </Routes> 
    </div>
  );
}

export default App;