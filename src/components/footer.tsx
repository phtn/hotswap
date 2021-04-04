import Select from "react-select";
import Flat from "../stripes.svg";
import cryptolist from "../cryptoList";
import { FaSignInAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div
          style={{
            // transform: "rotate(180deg)",
            width: "150px",
            marginRight: "100px",
            fontSize: 14,
            color: "#555",
          }}
        >
          {/* <Select options={cryptolist} style={{ backgroundColor: "#ccc" }} /> */}
          by <span style={{ fontWeight: 400 }}>phtn458</span>
        </div>
        {/* <Button push color={"pink"} onClick={()=> console.log('login')} /> */}
        login
        <FaSignInAlt style={{ color: "hotpink", marginLeft: 10 }} />
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
    fontSize: 18,
  },
};

export default Footer;
