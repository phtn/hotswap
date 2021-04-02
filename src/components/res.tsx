import Toggle from "react-toggle";
import { FaSave, FaEdit } from "react-icons/fa";
import cryptoList from "../cryptoList";
import Select from "react-select";

type ResTypes = {
  dev: boolean;
  //   setDev: any;
};

const Results = (props: ResTypes) => {
  const { dev } = props;

  return (
    <div style={styles.resContainer}>
      <div style={styles.navbar}>
        <div style={styles.navlist}>INFO</div>
        <div style={styles.navlist}>DEFI</div>
        {/* <div style={styles.navlist}>STAKE</div> */}
        <div
          style={{
            marginRight: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div style={styles.resContent}>
        {/* // DEV Component */}

        <div style={styles.resComp}>res content</div>
      </div>
    </div>
  );
};

const styles = {
  resContainer: {
    borderBottom: "5px solid rgba(255,105,180, 1.0)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  resContent: {
    backgroundColor: "rgba(20,31,42, 0.7)",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resComp: {
    width: "85%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(204,204,204, 0.1)",
  },
  navbar: {
    height: 50,
    // width: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    borderTop: "1px solid #222",
    borderBottom: "1px solid #222",
    paddingLeft: 10,
  },
  navlist: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid rgba(59,232,176, 1)",
    // borderRadius: "3px",
    margin: "0px 10px",
    padding: "5px 10px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "10px",
    fontWeight: 300,
    cursor: "pointer",
    letterSpacing: "1px",
    // color: "rgba(59,232,176, 1)",
    color: "#eee",
    // width: 100,
  },
  toolbar: {
    // color: "green",
    borderBottom: "5px solid rgba(255,105,180, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  redbar: {
    // color: "green",
    borderBottom: "5px solid #999",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
};

export default Results;
