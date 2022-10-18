import Select from "react-select";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const Convert = () => {
  const [fromUnit, setFromUnit] = useState("KM");
  const [toUnit, setToUnit] = useState("MILES");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [currentConversion, setCurrentConversion] = useState("");

  const options = [
    { value: "1", label: "km to miles" },
    { value: "2", label: "miles to km" },
    { value: "3", label: "foot to meter" },
    { value: "4", label: "meter to foot" },
    { value: "5", label: "cm to inch" },
    { value: "6", label: "inch to cm" },
  ];

  //method to select the type of converter
  const onSelectedChange = (selectedOption) => {
    const value = selectedOption.value;
    setCurrentConversion(value);
    setValue("");
    setResult("");
    if (value === "1") {
      setFromUnit("KM");
      setToUnit("MILES");
    } else if (value === "2") {
      setFromUnit("MILES");
      setToUnit("KM");
    } else if (value === "3") {
      setFromUnit("FT");
      setToUnit("M");
    } else if (value === "4") {
      setFromUnit("M");
      setToUnit("FT");
    } else if (value === "5") {
      setFromUnit("CM");
      setToUnit("INCH");
    } else {
      setFromUnit("INCH");
      setToUnit("CM");
    }
  };

  //method of the converter
  const onValueChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "") {
      setResult("");
    } else {
      if (currentConversion === "1") {
        setResult(parseFloat(event.target.value) * (0.621371).toFixed(2));
      } else if (currentConversion === "2") {
        setResult(parseFloat(event.target.value) * (1.60934).toFixed(2));
      } else if (currentConversion === "3") {
        setResult(parseFloat(event.target.value) * (0.3048).toFixed(2));
      } else if (currentConversion === "4") {
        setResult(parseFloat(event.target.value) * (3.28084).toFixed(2));
      } else if (currentConversion === "5") {
        setResult(parseFloat(event.target.value) * (0.393701).toFixed(2));
      } else {
        setResult(parseFloat(event.target.value) * (2.54).toFixed(2));
      }
    }
  };

  //method of swap
  const handleClick = (event) => {
    // TODO hacer el swap
  };

  return (
    <div className="convert">
      <h1>convert</h1>
      <div className="firstRow">
        <div className="firstHalfFirstRow">
          <Select
            className="lengths"
            options={options}
            onChange={onSelectedChange}
            defaultValue={options[0]}
          />
          <SwapHorizIcon onClick={handleClick} />
        </div>
        <div className="secondHalfFirstRow">
          <input type="number" value={value} onChange={onValueChange} />
          <label>{fromUnit}</label>
        </div>
      </div>
      <div className="secondRow">
        <FavoriteBorderIcon />
        <div className="lengths2">
          <input type="number" value={result} />
          <label>{toUnit}</label>
        </div>
      </div>
    </div>
  );
};

export default Convert;
