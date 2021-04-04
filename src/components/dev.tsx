import { useEffect, useState } from "react";
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

  const [price, setPrice] = useState(57435.35);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  function comma(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleInputChange = (e: any) => {
    setCount(e.target.value);

    console.log(typeof e.target.value);
  };
  useEffect(() => {
    // handleInputChange();
    // setTotal(count * price)
    // setTotal()
    return () => {
      null;
    };
  });

  const handleEditSave = () => {
    setDev(!dev);
  };
  return (
    <div style={styles.redbar}>
      <div style={styles.navbar}>
        <div style={{ width: "150px", margin: "0px 10px" }}>
          <Select options={cryptoList} />
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={styles.header}>
            hot<span style={{ fontWeight: "bolder" }}>Swap</span>
          </div>
        </div>
        <div
          style={{
            marginRight: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: 25,
          }}
        >
          {/* <Toggle
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
          /> */}
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
            // onClick={() => handleEditSave()}
          >
            Add
          </span>
        </div>
      </div>
      <div style={styles.devContainer}>
        {/* // DEV Component */}

        <div style={styles.devComp}>
          {currencies.map((val, idx) => {
            // setTotal(count * val.price);
            const fixedPrice: any = val.price.toFixed(4);
            const t = count * fixedPrice;

            return (
              <div key={idx} style={styles.cryptos}>
                <div style={styles.icon}>
                  <img src={val.icon} />
                </div>
                <div style={styles.crypto}>
                  <div style={{ border: "0px solid papayawhip" }}>
                    <span style={styles.cryptolabel}>{val.label}</span>
                  </div>
                  <div
                    style={{
                      // border: "1px solid pink",
                      height: "10px",
                      padding: 0,
                      margin: 0,
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 100,
                      fontSize: 14,
                      letterSpacing: 1,
                    }}
                  >
                    {/* PRICE */}
                    <span style={styles.dollar}>$</span> {comma(val.price)}
                  </div>
                </div>
                <div style={{ flex: 1, display: "flex", width: "100%" }}></div>
                {/* Right side crypto data list */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      // border: "1px solid red",
                      marginTop: -20,
                    }}
                  >
                    <div
                      style={
                        {
                          // border: "1px solid pink",
                        }
                      }
                    >
                      <input
                        type="number"
                        name="amount"
                        placeholder={(0).toFixed(4)}
                        style={styles.amount}
                        disabled={false}
                        width={300}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div style={styles.ticker}>{val.ticker}</div>
                  </div>
                  {/* balance label */}
                  <div
                    style={{
                      // border: "1px solid papayawhip",
                      height: 12,
                      padding: 0,
                      float: "right",
                      marginRight: "10px",
                      // position: "absolute",
                      // width: 55,
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 100,
                      fontSize: 14,
                      letterSpacing: 1,
                    }}
                  >
                    <span style={styles.dollar}>$</span>
                    {comma(t)}
                  </div>
                </div>
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
    backgroundColor: "rgba(20,31,42, 0.90)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: 600,
  },
  devComp: {
    width: "100%",
    height: "80vh",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "0px solid #ccc",
    overflow: "auto",
  },

  header: {
    // width: "1000px",
    height: "100%",
    fontSize: 16,
    // fontFamily: "Courier New",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 100,
    color: "hotpink",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0,0,0, 0.3)",
  },
  //  Width of the component
  navbar: {
    height: 50,
    // width: "400px",
    display: "flex",
    // flex: "1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(20,31,42, 1)",

    borderTop: "1px solid rgba(20,31,42, 1)",
  },
  toolbar: {
    // color: "green",
    // borderBottom: "5px solid hotpink",
    justifyContent: "center",
    alignItems: "center",
    // width: "100px",
    height: "100%",
  },
  redbar: {
    // color: "green",
    borderBottom: "5px solid rgba(20,31,42, .985)",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  cryptos: {
    height: 85,
    color: "white",
    borderBottom: "1px solid rgba(20,31,42, 1)",
    alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    width: "100%",

    // backgroundColor: "red",
  },
  icon: {
    marginLeft: 15,
    opacity: "0.7",
  },
  crypto: {
    margin: 15,
    // border: "1px solid cyan",
    height: 50,
  },
  cryptolabel: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    fontWeight: 400,
    flex: 1,
  },
  amount: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 300,
    fontSize: "20px",
    width: 95,
    // textAlign: "right",
    // direction: "ltr",
    border: "0px",
    // padding: "5px 10px",
    // color: "rgba(20,31,42, 1.0)",
    color: "rgba(59,232,176, 1)",
    backgroundColor: "transparent",
    // borderBottom: "1px solid black",
  },
  ticker: {
    // border: "1px solid pink",
    margin: "0px 10px",
    // color: "rgba(20,31,42, 1)",
    color: "#777",
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
  },
  dollar: {
    fontWeight: 600,
    fontSize: 18,
    fontFamily: "Courier New",
    color: "#008374",
    marginRight: 5,
  },
};

export default Dev;
