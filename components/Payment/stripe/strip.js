import React, {
    useEffect,
    useState
}                   from 'react';
import {Elements}   from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51K1UuwInlOA9yNcKf3LCNL3AalblKDMU2F89tl9bbAxBhaFADN4Jsa3OBrVNNo6jWc7B8CZSURP6SU3NhAAcDTFF00NgLwGVSn");

function Strip() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
                  // Create PaymentIntent as soon as the page loads
                  fetch(process.env.NEXT_PUBLIC_BACK_APP_URL + "/api/reserve",
                        {
                            method : "POST",
                            headers: {"Content-Type": "application/json"},
                            body   : JSON.stringify({items: [{id: "xl-tshirt"}]}),
                        })
                      .then((res) => res.json())
                      .then((data) => setClientSecret(data.clientSecret));
              },
              []);
    const appearance = {
        theme: 'stripe',
    };
    const options    = {
        clientSecret,
        appearance,
    };
    return (
        <div>
            {clientSecret && (
                <Elements options={options}
                          stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            )}
        </div>
    );
}

export default Strip;
