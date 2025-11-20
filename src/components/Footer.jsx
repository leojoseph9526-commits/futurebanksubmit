import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/event-overview">Event Overview</Link>
        <Link style={styles.link} to="/who-you-will-meet">Who Will You Meet</Link>
        <Link style={styles.link} to="/topic-highlights">Topic Highlights</Link>
        <Link style={styles.link} to="/why-attend">Why Attend</Link>
      </div>

      <p style={{ marginTop: "10px", opacity: 0.7 }}>
        © 2023 Future Banks Summit KSA • All Rights Reserved
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#002b5b",
    color: "white",
    textAlign: "center",
    padding: "30px 20px",
    marginTop: "50px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "10px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
  },
};

export default Footer;