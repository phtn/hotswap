import Toggle from "react-toggle";
import { FaSave, FaEdit, FaBitcoin } from "react-icons/fa";
import cryptoList from "../cryptoList";
import currencies from "../cc";
import Select from "react-select";

type DevTypes = {
  dev: boolean;
  setDev: any;
};

const Dev = (props: DevTypes) => {
  const { dev, setDev } = props;

  const handleEditSave = () => {
    setDev(!dev);
  };
  return (
    <div style={dev ? styles.toolbar : styles.redbar}>
      <div style={styles.nav}>
        <div style={{ width: "200px", margin: "0px 10px" }}>
          <Select options={cryptoList} />
        </div>
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            marginRight: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: 25,
          }}
        >
          <Toggle
            className="custom-classname"
            checked={dev}
            aria-label="No label tag"
            onChange={() => handleEditSave()}
            icons={{
              checked: (
                <FaSave
                  style={Object.assign(
                    {},
                    dev ? { color: "#444" } : { color: "#eee" },
                    { height: 10 }
                  )}
                />
              ),
              unchecked: (
                <FaEdit
                  style={Object.assign(
                    {},
                    dev ? { color: "#eee" } : { color: "#ccc" },
                    { height: 10 }
                  )}
                />
              ),
            }}
            // style={{ backgroundColor: "black", marginRight: 10 }}
          />
          <span
            style={{
              marginLeft: 20,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              color: dev ? "rgba(59,232,176, 1)" : "#eee",
              cursor: "pointer",
              width: 25,
            }}
            onClick={() => handleEditSave()}
          >
            {dev ? "Save" : "Edit"}
          </span>
        </div>
      </div>
      <div style={styles.devContainer}>
        {/* // DEV Component */}

        <div style={styles.devComp}>
          {currencies.map((val, idx) => {
            return (
              <div key={idx} style={styles.cryptos}>
                <div style={styles.icon}>
                  <img src={val.icon} />
                </div>
                <div style={styles.ticker}>
                  <span style={styles.tickerLabel}>{val.label}</span>
                </div>
                {/* <hr style={{ height: "1px", width: 100, color: "#ccc" }} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  devContainer: {
    backgroundColor: "rgba(20,31,42, 0.7)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: 200,
  },
  devComp: {
    width: "100%",
    height: "80vh",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "0px solid #ccc",
    overflow: "auto",
  },
  nav: {
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    border: "1px solid #222",
  },
  toolbar: {
    // color: "green",
    borderBottom: "5px solid hotpink",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100%",
  },
  redbar: {
    // color: "green",
    borderBottom: "5px solid hotpink",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  cryptos: {
    height: 70,
    color: "white",
    borderBottom: "1px solid rgba(10,31,42, 0.3)",
    alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    width: "100%",
    // backgroundColor: "red",
  },
  icon: {
    marginLeft: 15,
  },
  ticker: {
    margin: 15,
  },
  tickerLabel: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    fontWeight: 400,
  },
};

export default Dev;
