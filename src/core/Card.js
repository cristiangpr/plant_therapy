import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { getProducts } from "./apiCore";
import ShowImage from "./ShowImage";
import { addItem, updateItem, removeItem } from "./cartHelpers";



const Card = ({ product,   showAddToCartButton = true, cartUpdate = false, showRemoveProductButton = false}) => {
    const [redirect, setRedirect] = useState(false);
      const [count, setCount] = useState(product.count);



    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true);
        });
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCart = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button
                    onClick={addToCart}

                    className="btn btn-outline-warning mt-2 mb-2"
                >
                    Add to cart
                </button>
            )
        );
    };

    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock</span>
        ) : (
            <span className="badge badge-primary badge-pill">Out of Stock</span>
        );
    };
    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => removeItem(product._id)}
                    className="btn btn-outline-danger mt-2 mb-2"
                >
                    Remove Product
                </button>
            )
        );
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">

                        </div>
                        <input
                            type="number"
                            className="form-control"
                            value={count}
                            onChange={handleChange(product._id)}
                        />
                    </div>
                </div>
            )
        );
    };

    return (
        <div className="col-4 mb-3">
          <div className="single-product wow fadeIn" >
          <div className="card">
              <div className="card-header name">{product.name}</div>
              <div className="card-body">
                  {shouldRedirect(redirect)}
                  <ShowImage item={product} url="product" />
                  <p className="lead mt-2">
                      {product.description.substring(0, 100)}
                  </p>
                  <p className="black-10">${product.price}</p>



                  {showStock(product.quantity)}
                  <br />


     {showAddToCart(showAddToCartButton)}
      {showRemoveButton(showRemoveProductButton)}
      {showCartUpdateOptions(cartUpdate)}
              </div>
          </div>

      </div>
  </div>
    );
};

export default Card;
