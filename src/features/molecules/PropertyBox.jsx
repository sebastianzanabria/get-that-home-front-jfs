import React from "react";

const PropertyBox = () => {
  return (
    <div>
      <p style={{ marginTop: 0 }}>Type</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <label htmlFor="house" style={{ display: "inline-flex" }}>
            <input type="checkbox" name="house" id="house" value="house" />
            &nbsp; Houses
          </label>
        </div>
        <div>
          <label htmlFor="apartment" style={{ display: "inline-flex" }}>
            <input
              type="checkbox"
              name="apartment"
              id="apartment"
              value="apartment"
            />
            &nbsp; Apartments
          </label>
        </div>
      </div>
    </div>
  );
};

export default PropertyBox;
