import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";
import "../styles.css";
import Footer from '../components/Footer'



const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getCart());
    }, [items]);

    const showItems = items => {
        return (
<>

                <hr />
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        showStock={false}
                    />
                ))}
          </>
        );
    };



    return (
      <>
        <Layout
            title="Shopping Cart"
            description=""
            className="container-fluid"
        >
        <div className="container">
         <Link to="/consumer">Continue shopping</Link>
            <div className="row" >

                  <div className="col-md-6">
                  <div className="card-deck">
                    { showItems(items)}
</div>
</div>
            <div className="col-md-2">
            </div>

                <div className="col-md-4" id="checkout">
                  <div className="card" id="dark-card">
                   <div className="card-body">
                    <h4 className="">Checkout</h4>
                    <hr />
                    <Checkout products={items} />
                    </div>
                </div>
                </div>
            </div>
          </div>
        </Layout>
        <Footer/>
        </>
    );
};

export default Cart;
