import React, { useState } from "react";

const Checkbox2 = ({ sizes, handleFilters }) => {
    const [checked, setCheked] = useState([]);

    const handleToggle = c => () => {
        // return the first index or -1
        const currentSizeId = checked.indexOf(c);
        const newCheckedSizeId = [...checked];
        // if currently checked was not already in checked state > push
        // else pull/take off
        if (currentSizeId === -1) {
            newCheckedSizeId.push(c);
        } else {
            newCheckedSizeId.splice(currentSizeId, 1);
        }
        // console.log(newCheckedCategoryId);
        setCheked(newCheckedSizeId);
        handleFilters(newCheckedSizeyId);
    };

    return sizes.map((c, i) => (
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(c._id)}
                value={checked.indexOf(c._id === -1)}
                type="checkbox"
                className="form-check-input"
            />
            <label className="form-check-label">{c.name}</label>
        </li>
    ));
};

export default Checkbox2;
