import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import RadioBox2 from "./RadioBox2";
import Card from "./Card";
import { isAuthenticated } from "../auth"
import { getCategories, getFilteredProducts} from "./apiCore";
import { sizes } from "./Sizes";


const TshirtShop = () => {


      const [myFilters, setMyFilters] = useState({
          filters: { category: [], size: [] }
      });
      const [categories, setCategories] = useState([]);
      const [error, setError] = useState(false);
      const [limit, setLimit] = useState(6);
      const [skip, setSkip] = useState(0);
      const [size, setSize] = useState(0);
      const [sortBy, setSortBy] = useState("size");
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
          getFilteredProducts(skip, limit, sortBy, newFilters).then(data => {
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
          getFilteredProducts(toSkip, limit, sortBy, myFilters.filters).then(data => {
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
                  <button onClick={loadMore} className="btn btn-outline-warning mb-5">
                      Load more
                  </button>
              )
          );
      };

      const handleTitle= () => {
        if (!isAuthenticated()){ return ""};
        if (isAuthenticated() && isAuthenticated().user.role === "Registered User") { return ""};
        if (isAuthenticated() && isAuthenticated().user.role === "Agricultural Commercial") { return "Agricultural Commercial Pricing"};
        if (isAuthenticated() && isAuthenticated().user.role === "Wholesale") { return "Wholesale Pricing"};
        if (isAuthenticated() && isAuthenticated().user.role === "Distributor 25") { return "Distributor 25 Pricing"};
          if (isAuthenticated() && isAuthenticated().user.role === "Distributor 32") {return "Distributor 32 Pricing"};
          if (isAuthenticated() && isAuthenticated().user.role === "Admin") {return "Retail Pricing"};

      }

      const handleRole = () => {
                 handleFilters(  ["5e305974ea41d558888fd36c"] , "category");

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

          loadFilteredResults(myFilters.filters);
          setMyFilters(newFilters);
      };


    return (



      <section className="new_product_area section_gap_top section_gap_bottom_custo" id="products">
        <div className="container">
          <div className="row justify-content-center">


            <div className="col-lg-12">
              <div className="section-header">
                <h3>T-SHIRTS</h3>
                <h4>SELECT SIZE</h4>



              </div>
            </div>
          </div>
          <div className="row">
          <RadioBox2
              sizes={sizes}
              handleFilters={filters =>
                  handleFilters(filters, "size")
              }
          />
</div>
          <div className="row">

              {filteredResults.map((product, i) => (

                      <Card key={i}  product={product} />

              ))}
          </div>
          <hr />

          </div>

      </section>
    );
};

export default TshirtShop;
