import React, { useState, useEffect } from "react";
import {
    getProducts,
    getBraintreeClientToken,
    processPayment,
        createOrder,

} from "./apiCore";

import Cart from "./Cart";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import "braintree-web";
import DropIn from "braintree-web-drop-in-react";
import { emptyCart } from "./cartHelpers";
import Search from "./Search";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-154425185-1');
ReactGA.plugin.require('ecommerce', {debug: true});
const Checkout = ({ products }) => {
    const [data, setData] = useState({



          loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {},
        address: "",


        isButtonDisabled: false,
        address: ""

    });
    const [discount, setDiscount]= useState(0);
      const [code, setCode]= useState(0);


    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {

        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                setData({ ...data, error: data.error });
            } else {
                setData({ clientToken: data.clientToken });
                console.log(data.loading)
            }
        });
    };

    useEffect(() => {
        getToken(userId, token);
    }, []);

    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };



    const getTotal = () => {

        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price * ((100 - discount) * .01);
        }, 0);
    };
    const getTax = () => {
      if (!isAuthenticated()){
        return getTotal() * .0725;
      }
else  if ( isAuthenticated() && isAuthenticated().user.role === "Retail"
  || isAuthenticated().user.role === "Registered User"
  || isAuthenticated().user.role === "Agricultural Commercial"){
  return getTotal() * .0725;
} else {
  return 0
}
    }
    const getFinalTotal = () => {
        return getTotal() + getTax();

    }


    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };
        let deliveryAddress = data.address;

    const buy = () => {


    setData({ isButtonDisabled: true, loading: true})

        // send the nonce to your server
        // nonce = data.instance.requestPaymentMethod()
        let nonce;
        let getNonce = data.instance
            .requestPaymentMethod()
            .then(data => {
                // console.log(data);
                nonce = data.nonce;
                // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
                // and also total to be charged
                // console.log(
                //     "send nonce and total to process: ",
                //     nonce,
                //     getTotal(products)
                // );
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: parseFloat(getFinalTotal()).toFixed(2)
                };

                processPayment(userId, token, paymentData)
                    .then(response => {
                        console.log(response);
                        // empty cart
                        // create order

                        const createOrderData = {
                            products: products,
                            transaction_id: response.transaction.id,
                            amount: response.transaction.amount,
                            address: deliveryAddress,
                            discount_code: code,
                            discount_rate: discount

                        };

                      console.log(createOrderData)
                        createOrder(userId, token, createOrderData)
                            .then(response => {
                                 emptyCart(() => {
                                     console.log("payment success and empty cart");
                                     setData({ loading: false, success: true });
                                 });
                            })
                            .catch(error => {
                                console.log(error);
                                setData({ loading: false });
                            });



                            ReactGA.plugin.execute(
                              'ecommerce',
                              'addTransaction',
                              {
                                id:  response.transaction.id, // the same as for addItem to connect them
                                revenue: response.transaction.amount, // obviously it's price * quantity
                              }
                            );
                            console.log( response.transaction.id);

                            var i;
                            for (i=0; i < products.length; i ++) {
                                console.log(products[i].name);
                            ReactGA.plugin.execute(
                              'ecommerce',
                              'addItem',
                              {
                                id:  response.transaction.id, // the same as for addItem to connect them
                                name: products[i].name, // obviously it's price * quantity
                                sku: products[i]._id,
                                category: products[i].category.name,
                                price: products[i].price,
                                quantity: products[i].count
                              }
                            );
                          };
                            ReactGA.plugin.execute('ecommerce', 'send');
                            ReactGA.plugin.execute('ecommerce', 'clear');
                            console.debug("GA|Transaction Sent: ");



                    })
                    .catch(error => {
                        console.log(error);
                        setData({ loading: false });
                    });
            })
            .catch(error => {
                // console.log("dropin error: ", error);
                setData({ ...data, error: error.message });
            });
    };

    const showDropIn = () => (
        <div  onBlur={() => setData({ ...data, error: "" })}>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                <div className="form-group mb3">
                    <label className="text-muted">Delivery address:</label>
                    <input
                        onChange={handleAddress}
                        className="form-control"
                        value={data.address}
                        placeholder="Type your delivery address here..."
                    />
  </div>
                   <Search  setDiscount={setDiscount} setCode={setCode}/>
                    <DropIn
                        options={{


                            authorization: data.clientToken,
                            paypal: {
                                flow: "vault"
                            }


                        }}
                        onInstance={instance => (data.instance = instance)}
                    />

                    <button
                        onClick={buy}
                        disabled={data.isButtonDisabled}
                        className="btn btn-success btn-block"
                    >
                      Buy

                    </button>
                </div>
            ) : null}
        </div>
    );

    const showError = error => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );


    const showLoading = loading =>
        loading && <h2 className="text-danger">Loading...</h2>;


    const showSuccess = success => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
          <h2>  Thanks! Your payment was successful!</h2>
        </div>
    );


    return (
        <div>
            <label className="text-bold">Sub Total: ${parseFloat(getTotal()).toFixed(2)}</label> <br/>
            <label className="text-muted">Tax: ${parseFloat(getTax()).toFixed(2)}</label>  <br/>
            <label className="text-muted">Total: ${parseFloat(getFinalTotal()).toFixed(2)}</label>
                {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}

            {showCheckout()}

        </div>
    );
};

export default Checkout;
