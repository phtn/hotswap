import { useState } from "react";

type CoreTypes = {
  styles: any;
};

const Core = (props: CoreTypes) => {
  //   const { styles } = props;
  const [state, setState] = useState(0);
  return (
    <div style={{ backgroundColor: "rgba(20,31,42, .985)" }}>
      <div style={styles.navbar}>
        <div style={styles.header}>
          hot<span style={{ fontWeight: "bolder" }}>Swap</span>
        </div>
      </div>
      {/* <p> test </p> */}

      <div style={styles.select}>
        <div style={styles.one}>
          {/* <Select options={cryptoList} /> */}
          <div>
            <button style={styles.allIn} onClick={() => setState(state + 1)}>
              all in
              {state}
            </button>
          </div>
          {/* <Select options={cryptoList} /> */}
          <div>
            <button style={styles.allIn} onClick={() => setState(state + 1)}>
              buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    width: "1000px",
    height: "100%",
    fontSize: 16,
    // fontFamily: "Courier New",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 100,
    color: "hotpink",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.3)",
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTop: "1px solid rgba(20,31,42, 1)",
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
};

export default Core;
