import React, { useState, useEffect } from "react";
import {
    getProducts,
    getBraintreeClientToken,
    processPayment
} from "./apiCore";
import Cart from "./Cart";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { emptyCart } from "./cartHelpers";

const Checkout = ({ products }) => {
    const [data, setData] = useState({
          loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {},
        address: "",
        isButtonDisabled: false

    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                setData({ ...data, error: data.error });
            } else {
                setData({ clientToken: data.clientToken });
            }
        });
    };

    useEffect(() => {
        getToken(userId, token);
    }, [userId, token]);

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };

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
                    amount: getTotal(products)
                };

                processPayment(userId, token, paymentData)
                    .then(response => {
                         console.log(response)
                        setData({ ...data, success: response.success });
                        emptyCart(() => {
                            console.log("payment success and empty cart");
                        });
                        // empty cart
                        // create order
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                // console.log("dropin error: ", error);
                setData({ ...data, error: error.message });
            });
    };

    const showDropIn = () => (
        <div onBlur={() => setData({ ...data, error: "" })}>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                    <DropIn
                        options={{
                            authorization: data.clientToken,
                            paypal: {
                                flow: "vault"
                            },
                        
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

    const showSuccess = success => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            Thanks! Your payment was successful!
        </div>
    );

        const showLoading = loading =>
            loading && <h2 className="text-danger">Loading...</h2>;
    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
                {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}

        </div>
    );
};

export default Checkout;
