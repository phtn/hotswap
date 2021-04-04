// import Select from "react-select";
// import cryptolist from "../cryptoList";
import { useState } from "react";
import Flat from "../stripes.svg";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  const [power, setPower] = useState(false);

  function handleSwitch() {
    setPower(!power);
  }

  function handleAddToken() {
    if (power) {
      return "#555";
    }
    return "#ccc";
  }

  function handlePlus() {
    if (power) {
      return "rgb(0, 131, 116)";
    }
    return "hotpink";
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.credit}>
          by <span style={styles.phtn458}>phtn458</span>
        </div>
        <span
          style={Object.assign({}, styles.addtoken, {
            color: handleAddToken(),
          })}
          onClick={handleSwitch}
        >
          Add token
        </span>
        <FaPlus
          style={Object.assign({}, styles.plus, {
            color: handlePlus(),
          })}
          onClick={handleSwitch}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${Flat})`,
    backgroundPosition: "center",
    repeat: "no-repeat",
    height: "94px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(20,31,42, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ccc",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: 14,
    pointer: "cursor",
  },
  credit: {
    width: "150px",
    marginRight: "100px",
    fontSize: 14,
    fontWeight: 100,
    color: "#555",
  },
  phtn458: { fontWeight: 400 },
  addtoken: { cursor: "pointer" },
  plus: {
    marginLeft: 10,
    cursor: "pointer",
  },
};

export default Footer;
