import React from "react";
import "./App.css";
import CheckoutForm from "./components/card-detailed";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// publishable key may be obtained from the BE upon /checkout, 
// *this env variable is just a placeholder.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "you need a stripe key");

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};
function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm totalAmount={5}/>
      </Elements>
    </div>
  );
}

export default App;
