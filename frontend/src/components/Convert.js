import Select from "react-select";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import Saved from "./Saved";

const Convert = () => {
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("miles");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [currentConversion, setCurrentConversion] = useState("");
  const [arrowConversion, setArrowConversion] = useState("");
  const [arrowValue, setArrowValue] = useState("");
  const [arrowResult, setArrowResult] = useState("");
  const [savedData, setSavedData] = useState(false);

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
    setArrowConversion(value);
    if (value === "1") {
      setFromUnit("km");
      setToUnit("miles");
    } else if (value === "2") {
      setFromUnit("miles");
      setToUnit("km");
    } else if (value === "3") {
      setFromUnit("ft");
      setToUnit("m");
    } else if (value === "4") {
      setFromUnit("m");
      setToUnit("ft");
    } else if (value === "5") {
      setFromUnit("cm");
      setToUnit("inch");
    } else {
      setFromUnit("inch");
      setToUnit("cm");
    }
  };

  //method of the converter
  const onValueChange = (event) => {
    setValue(event.target.value);
    setArrowValue(event.target.value);
    if (event.target.value === "") {
      setResult("");
      setSavedData(false);
    } else {
      if (currentConversion === "1") {
        setResult(parseFloat(event.target.value) * (0.621371).toFixed(2));
        setArrowResult(parseFloat(event.target.value) * (0.621371).toFixed(2));
      } else if (currentConversion === "2") {
        setResult(parseFloat(event.target.value) * (1.60934).toFixed(2));
        setArrowResult(parseFloat(event.target.value) * (1.60934).toFixed(2));
      } else if (currentConversion === "3") {
        setResult(parseFloat(event.target.value) * (0.3048).toFixed(2));
        setArrowResult(parseFloat(event.target.value) * (0.3048).toFixed(2));
      } else if (currentConversion === "4") {
        setResult(parseFloat(event.target.value) * (3.28084).toFixed(2));
        setArrowResult(parseFloat(event.target.value) * (3.28084).toFixed(2));
      } else if (currentConversion === "5") {
        setResult(parseFloat(event.target.value) * (0.393701).toFixed(2));
        setArrowResult(parseFloat(event.target.value) * (0.393701).toFixed(2));
      } else {
        setResult(parseFloat(event.target.value) * (2.54).toFixed(2));
        setArrowResult(parseFloat(event.target.value) * (2.54).toFixed(2));
      }
    }
  };

  //method of swap arrows
  const handleClickArrows = (event) => {
    if (event.target.value === "") {
      setResult("");
    } else {
      if (currentConversion === "1") {
        setCurrentConversion("2");
        setResult(arrowValue);
        setValue(arrowResult);
        setFromUnit("miles");
        setToUnit("km");
      } else if (currentConversion === "2") {
        setCurrentConversion("1");
        setResult(arrowValue);
        setValue(arrowResult);
        setFromUnit("km");
        setToUnit("miles");
      } else if (currentConversion === "3") {
        setCurrentConversion("4");
        setResult(arrowValue);
        setValue(arrowResult);
        setFromUnit("m");
        setToUnit("ft");
      } else if (currentConversion === "4") {
        setCurrentConversion("3");
        setResult(arrowValue);
        setValue(arrowResult);
        setFromUnit("ft");
        setToUnit("m");
      } else if (currentConversion === "5") {
        setCurrentConversion("6");
        setResult(arrowValue);
        setValue(arrowResult);
        setFromUnit("inch");
        setToUnit("cm");
      } else {
        setCurrentConversion("5");
        setResult(arrowValue);
        setValue(arrowResult);
        setFromUnit("cm");
        setToUnit("inch");
      }
    }
  };

  //Method save Lenghts with heart icon
  var savedLengths = [];
  const handleSaveHeart = (e) => {
    var newLength = {
      value: value,
      fromUnit: fromUnit,
      result: result,
      toUnit: toUnit,
    };
    savedLengths.push(newLength);
    localStorage.setItem("saved_lengths", JSON.stringify(savedLengths));
    // localStorage.setItem("valor", value);
    setSavedData(true);
  };

  return (
    <div>
      <div className="navbar">
        <SwapHorizIcon />
        <label>unit converter</label>
      </div>
      <div className="together">
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
              <SwapHorizIcon
                onClick={handleClickArrows}
                value={{ arrowConversion, arrowValue }}
              />
            </div>
            <div className="secondHalfFirstRow">
              <input
                className="value"
                type="number"
                value={value}
                onChange={onValueChange}
              />
              <label>{fromUnit}</label>
            </div>
          </div>
          <div className="secondRow">
            <FavoriteBorderIcon onClick={handleSaveHeart} />
            <div className="lengths2">
              <input className="result" type="number" value={result} />
              <label>{toUnit}</label>
            </div>
          </div>
        </div>
        {!!savedData && <Saved />}
      </div>
    </div>
  );
};

export default Convert;
