import Flat from "../stripes.svg";

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>footer</div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${Flat})`,
    backgroundPosition: "center",
    repeat: "no-repeat",
    height: "94px",
  },
  content: {
    height: "94px",
    width: "parent",
    backgroundColor: "rgba(20,31,42, 0.95)",
  },
};

export default Footer;
