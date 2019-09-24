import React, { useState, useEffect } from "react";

import { getProducts } from "./apiCore";
import Card from "./Card";

const Home = () => {

    const [productsByCategory, setProductsByCategory] = useState([]);
    const [error, setError] = useState(false);



    const loadProductsByCategory = () => {
        getProducts("consumer").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByCategory(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByCategory();

    }, []);

    return (
    <>


        <div className="jumbotron">
            <h2>Home</h2>

    </div>
            <h2 className="mb-4">Products</h2>
            <div className="row">
                {productsByCategory.map((product, i) => (
                    <Card key={i} product={product} />
                ))}
            </div>

          
      </>
    );
};

export default Home;
