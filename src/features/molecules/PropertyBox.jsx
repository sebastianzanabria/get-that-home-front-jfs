import React from "react";

const PropertyBox = () => {
  return (
    <div>
      <p style={{ marginTop: 0 }}>Type</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label htmlFor="" style={{ display: "inline-flex" }}>
            <input type="checkbox" name="house" id="" />
            &nbsp; Houses
          </label>
        </div>
        <div>
          <label htmlFor="" style={{ display: "inline-flex" }}>
            <input type="checkbox" name="apartment" id="" />
            &nbsp; Apartments
          </label>
        </div>
      </div>
    </div>
  );
};

export default PropertyBox;
