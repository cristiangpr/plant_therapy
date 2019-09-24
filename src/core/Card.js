import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "./apiCore";
import ShowImage from "./ShowImage";

const Card = ({ product }) => {
    return (
        <div className="col-4 mb-3">
          <div className="single-product wow fadeIn" >
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                      <ShowImage item={product} url="product" />
                    <p>{product.description}</p>
                    <p>${product.price}</p>

                    <a href="#" >
                      <i className="ti-shopping-cart" id="shopping-cart-icon"></i>
                    </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
