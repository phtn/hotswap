// import Select from "react-select";
import { useState } from "react";
import Flat from "../stripes.svg";
import cryptolist from "../cryptoList";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  const [power, setPower] = useState(false);

  function handleSwitch() {
    setPower(!power);
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div
          style={{
            // transform: "rotate(180deg)",
            width: "150px",
            marginRight: "100px",
            fontSize: 14,
            fontWeight: 100,
            color: "#555",
          }}
        >
          {/* <Select options={cryptolist} style={{ backgroundColor: "#ccc" }} /> */}
          by <span style={{ fontWeight: 400 }}>phtn458</span>
        </div>
        {/* <Button push color={"pink"} onClick={()=> console.log('login')} /> */}
        <span
          style={{ color: power ? "#555" : "#ccc", cursor: "pointer" }}
          onClick={handleSwitch}
        >
          Add token
        </span>
        <FaPlus
          style={{
            color: power ? "rgb(0, 131, 116)" : "hotpink",
            marginLeft: 10,
            cursor: "pointer",
          }}
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
};

export default Footer;
