import React, { useState, useEffect } from "react";
import { getCoupon } from "./apiCore";
import Card from "./Card";

const Search = ({setDiscount, setCode}) => {
    const [data, setData] = useState({

        code: "",
        discountRate: 0,
        searched: false,

    });

    const { code, searched, discountRate} = data;


const [result, setResult] = useState({})
    const searchData = () => {
        console.log(code);
        if (code) {
            getCoupon(code).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, discountRate: response.data.discount, searched: true, });

                        if (response){
                          console.log(response.data.discount)
                        }







                        }
                    }

            )

        }

    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData()

    };
    useEffect(() => {
        setDiscount(data.discountRate);
        setCode(data.code)
    }, [data.discountRate]);

    const handleChange = code => event => {
        setData({ ...data, [code]: event.target.value, searched: false });
    };

    const searchMessage = (searched, result) => {
        if (searched && result.length > 0) {
            return `Coupon found`;
        }
        if (searched && result.length < 1) {
            return `No coupon found`;
        }
    };

    const searchedProducts = (result = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, result)}
                </h2>


            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-lg">


                    <input
                        type="search"
                        className="form-control"
                        onChange={handleChange("code")}
                        placeholder="Enter discount code here"
                    />
                </div>
                <div
                    className="btn input-group-append"
                    style={{ border: "none" }}
                >
                    <button className="input-group-text">Apply discount</button>
                </div>
            </span>
        </form>
    );

    return (
        <div className="row">
            <div className="container mb-3">{searchForm()}</div>
            <div className="container-fluid mb-3">
                {searchedProducts(result)}
            </div>
        </div>
    );
};

export default Search;
