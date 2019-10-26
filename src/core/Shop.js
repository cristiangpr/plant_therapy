import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { isAuthenticated } from "../auth"
import { getCategories, getFilteredProducts} from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";

const Shop = () => {


      const [myFilters, setMyFilters] = useState({
          filters: { category: [], price: [] }
      });
      const [categories, setCategories] = useState([]);
      const [error, setError] = useState(false);
      const [limit, setLimit] = useState(6);
      const [skip, setSkip] = useState(0);
      const [size, setSize] = useState(0);
      const [filteredResults, setFilteredResults] = useState([]);

      const init = () => {
          getCategories().then(data => {
              if (data.error) {
                  setError(data.error);
              } else {
                  setCategories(data);
              }
          });
      };

      const loadFilteredResults = newFilters => {
          // console.log(newFilters);
          getFilteredProducts(skip, limit, newFilters).then(data => {
              if (data.error) {
                  setError(data.error);
              } else {
                  setFilteredResults(data.data);
                  setSize(data.size);
                  setSkip(0);
              }
          });
      };

      const loadMore = () => {
          let toSkip = skip + limit;
          // console.log(newFilters);
          getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
              if (data.error) {
                  setError(data.error);
              } else {
                  setFilteredResults([...filteredResults, ...data.data]);
                  setSize(data.size);
                  setSkip(toSkip);
              }
          });
      };

      const loadMoreButton = () => {
          return (
              size > 0 &&
              size >= limit && (
                  <button onClick={loadMore} className="btn btn-warning mb-5">
                      Load more
                  </button>
              )
          );
      };

      const handleRole = () => {
                if (!isAuthenticated()){ handleFilters(  ["5dab5350fe6153076c4c808e"] , "category")};
                if (isAuthenticated() && isAuthenticated().user.role === "Registered User") { handleFilters(  ["5dab5350fe6153076c4c808e"] , "category")};
                if (isAuthenticated() && isAuthenticated().user.role === "Agricultural Commercial") { handleFilters(  ["5dab877c9f624f3d5839d8e5"] , "category")};
                if (isAuthenticated() && isAuthenticated().user.role === "Wholesale") { handleFilters(  ["5dab86889f624f3d5839d8e2"] , "category")};
                if (isAuthenticated() && isAuthenticated().user.role === "Distributor 25") { handleFilters(  ["5dab878a9f624f3d5839d8e6"] , "category")};
                
      }

      useEffect(() => {
          init();
        handleRole(
        () =>  loadFilteredResults(skip, limit, myFilters.filters));

          console.log(myFilters);
      }, []);

      const handleFilters = (filters, filterBy) => {
          // console.log("SHOP", filters, filterBy);
          const newFilters = { ...myFilters };
          newFilters.filters[filterBy] = filters;

          if (filterBy === "price") {
              let priceValues = handlePrice(filters);
              newFilters.filters[filterBy] = priceValues;
          }
          loadFilteredResults(myFilters.filters);
          setMyFilters(newFilters);
      };

      const handlePrice = value => {
          const data = prices;
          let array = [];

          for (let key in data) {
              if (data[key]._id === parseInt(value)) {
                  array = data[key].array;
              }
          }
          return array;
      };
    return (



      <section className="new_product_area section_gap_top section_gap_bottom_custo" id="products">
        <div className="container">
          <div className="row justify-content-center">


            <div className="col-lg-8">
              <div className="section-header">
                <h3>PRODUCTS</h3>
                <p>Find a presentation to fit your needs</p>
              </div>
            </div>
          </div>

          <div className="row">
              {filteredResults.map((product, i) => (

                      <Card key={i}  product={product} />

              ))}
          </div>
          <hr />
          {loadMoreButton()}
          </div>

      </section>
    );
};

export default Shop;
