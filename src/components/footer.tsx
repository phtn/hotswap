import React from "react";
import Flat from "../stripes.svg";
// import { Button } from "react-desktop";
const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* <Button push color={"pink"} onClick={()=> console.log('login')} /> */}
        login
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
    color: "#eee",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 100,
    fontSize: 24,
  },
};

export default Footer;
