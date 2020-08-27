import React from "react";
import AmenetieOption from "../atoms/AmenetieOption";

const MoreBox = () => {
  const ameneties = [
    {
      label: "Apartment ameneties",
      options: ["label1", "label2", "label3", "label4", "label5", "label6"],
    },
    {
      label: "Building ameneties",
      options: ["label7", "label8", "label9", "label10", "label11", "label12"],
    },
    {
      label: "Close by",
      options: [
        "label13",
        "label14",
        "label15",
        "label16",
        "label17",
        "label18",
      ],
    },
  ];
  const dates = [
    { label: "Today", value: new Date() },
    { label: "Yesterday", value: new Date() },
    { label: "Last week", value: new Date() },
    { label: "Last 30 days", value: new Date() },
  ];

  const showAmeneties = ameneties.map((item, index) => (
    <div key={index} style={{ margin: "10px 0" }}>
      <span>{item.label}</span>
      <div>
        {item.options.map((option, index) => (
          <AmenetieOption key={index} name={option} />
        ))}
      </div>
    </div>
  ));

  const showDates = dates.map((date, index) => (
    <label
      key={index}
      htmlFor="date"
      style={{ display: "inline-flex", fontSize: "12px" }}
    >
      <input type="radio" name="date" id="" /> &nbsp;
      {date.label}
    </label>
  ));

  return (
    <div>
      <div>
        <span>Pets allowed</span>
      </div>
      <div>{showAmeneties}</div>
      <div>
        <span>Publication date</span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {showDates}
        </div>
      </div>
    </div>
  );
};

export default MoreBox;
