import React, { useEffect, useState } from "react";
import Select from "react-select";
import cryptoList from "./cryptoList";
import Dev from "./components/dev";
import Core from "./core";
import Results from "./components/res";
import Sun from "./sun.svg";

// const WIDTH = window.innerWidth;

function App() {
  const [state, setState] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [dev, setDev] = useState(false);
  const [height, setHeight] = useState(global.innerHeight);
  const [width, setWidth] = useState(global.innerWidth);

  useEffect(() => {
    // console.log(WIDTH);

    const handleWidthResize = () => setWidth(global.innerWidth);
    global.addEventListener("resize", handleWidthResize);

    if (width >= 812) {
      setMobile(!mobile);
    } else {
      setMobile(false);
    }

    return () => {
      global.removeEventListener("resize", handleWidthResize);
    };
  }, [width]);
  return (
    <div style={{ height: window.innerHeight - 100 }}>
      <div
        style={{
          // alignItems: "center",
          backgroundImage: `url(${Sun})`,
          // backgroundRepeat: "no-repeat",

          justifyContent: "center",
          display: "flex",
          flex: "3",
        }}
      >
        {mobile ? <Dev dev={dev} setDev={setDev} /> : null}

        <Core styles={styles} />
        <Results dev={dev} />
      </div>

      {/* FOOTER */}
      <div style={{ height: "94px", backgroundColor: "transparent" }}>
        footer
      </div>
    </div>
  );
}

const styles = {
  header: {
    width: "100%",
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
    width: "100%",
    height: "100vh",
  },
  on: {
    color: "green",
  },
  off: {
    color: "#eee",
  },
};

export default App;
