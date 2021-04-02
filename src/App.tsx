import React, { useState } from "react";
import Select from "react-select";
import cryptoList from "./cryptoList";
import Dev from "./components/dev";
import Results from "./components/res";

function App() {
  const [state, setState] = useState(0);
  const [dev, setDev] = useState(false);

  return (
    <div style={{ height: window.innerHeight - 100 }}>
      <div
        style={{
          // alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Dev dev={dev} setDev={setDev} />

        <div style={{ backgroundColor: "rgba(20,31,42, 1.0)" }}>
          <div style={styles.navbar}>
            <div style={styles.header}>
              hot<span style={{ fontWeight: "bolder" }}>Swap</span>
            </div>
          </div>
          {/* <p> test </p> */}

          <div style={styles.select}>
            <div style={styles.one}>
              <Select options={cryptoList} />
              <div>
                <button
                  style={styles.allIn}
                  onClick={() => setState(state + 1)}
                >
                  all in
                  {state}
                </button>
              </div>
              <Select options={cryptoList} />
              <div>
                <button
                  style={styles.allIn}
                  onClick={() => setState(state + 1)}
                >
                  buy
                </button>
              </div>
            </div>
          </div>
        </div>
        <Results dev={dev} />
      </div>

      {/* FOOTER */}
      <div style={{ height: "94px", backgroundColor: "#333" }}>footer</div>
    </div>
  );
}

const styles = {
  header: {
    width: 800,
    height: "100%",
    fontSize: 16,
    // fontFamily: "Courier New",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 100,
    color: "hotpink",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    border: "1px solid #222",
  },
  allIn: {
    height: 100,
    width: "100%",
  },
  select: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 100,
  },
  one: {
    width: 400,
  },
  results: {
    display: "flex",
    backgroundColor: "black",
    width: "100%",
    height: "100vh",
  },
  on: {
    color: "green",
  },
  off: {
    color: "#eee",
  },
  devContent: {
    margin: 12,
    border: "1px solid green",
  },
};

export default App;
