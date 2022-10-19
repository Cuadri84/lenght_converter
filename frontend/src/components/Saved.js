import { useEffect, useState } from "react";

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
      <p>{savedLengths}</p>
    </div>
  );
};

export default Saved;
