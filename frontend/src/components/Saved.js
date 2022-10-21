import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Saved = () => {
  const [savedLengths, setValue] = useState("");

  const getData = () => {
    return localStorage.getItem("saved_lengths");
  };

  useEffect(() => {
    setValue(getData());
  }, []);

  return (
    <div className="saved">
      <h1>saved</h1>
      <div className="saved-result">
        <p>{savedLengths}</p>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Saved;
