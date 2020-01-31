import React, { useState,useEffect } from "react";

const RadioBox2 = ({ sizes, handleFilters }) => {
    const [value, setValue] = useState();

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };



    return sizes.map((s, i) => (
        <div key={i}     className=" col-md-3 mr-4 ml-4">
            <input
                onChange={handleChange}
                value={`${s._id}`}
                name={s}
                type="radio"

            />
            <label className="form-check-label">{s.name}</label>
        </div>
    ));
};

export default RadioBox2;
