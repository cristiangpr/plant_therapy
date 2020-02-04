import React, { useState, useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Checkbox from "./Checkbox";
import ShowImage from "./ShowImage";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import { getInventories} from "../admin/apiAdmin";


const Card = ({ product, history,  showAddToCartButton = true, cartUpdate = false, showRemoveProductButton = false}) => {
    const [redirect, setRedirect] = useState(false);
      const [count, setCount] = useState(product.count);
      const [inventories, setInventories] = useState([]);
      const [inventory, setInventory] = useState('');



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

                    className=" btn btn-outline-success mt-2"
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
                    Remove
                </button>
            )
        );
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-2">
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

    const getSizeOptions = () => {
          getInventories().then(data => {
        if (data.error){
          console.log(data.error);
        } else {
          setInventories(data);

        }
          });

    }

     const filteredItems = inventories.filter(inventory => inventory.name.toLowerCase().includes(product.name.toLowerCase()));

     const inventoryItems = filteredItems.map((inventory) =>
            <option key={inventory._id} value={inventory._id}>{inventory.name}</option>
                              );



          useEffect(() => {

              getSizeOptions();

            }, []);

    return (
      <div className= {history.location.pathname === "/cart"  ? "col-md-6 mb-3" : "col-md-4 mb-3"}>
          <div className="dark-card h-100 single-product wow fadeIn" >
          <div className="dark-card text-center-bottom" id="">
        <ShowImage item={product} url="product"  />
              <div className="card-body">

                  {shouldRedirect(redirect)}

                  <p className="mt-auto mb-2" >
                      {product.name}
                  </p>




                  <p className="mb-2 mt-0">${parseFloat(product.price).toFixed(2)}</p>



                         {showStock(product.inventory.quantity)}
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

export default withRouter(Card);
