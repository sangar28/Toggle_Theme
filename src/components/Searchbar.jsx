import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style.css";

const Searchbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("")
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1b1b1b");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };
  const handleClickOut = () => {
    setInput("")
  };

  return (
    <section
      className="container"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      {showInput ? (
        <div className="input-wrapper ">
          <input
            type="text"
            className="input-box"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaSearch onClick={handleClickOut} className="search-icon"  />
        </div>
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};
export default Searchbar;
