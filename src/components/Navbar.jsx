import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/futurebanks-logo.png";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      {/* LOGO + TITLE */}
      <div style={styles.leftSection}>
        <img src={logo} alt="Future Banks Summit Logo" style={styles.logoImg} />
        <h2 style={styles.logoText}>Future Banks Summit KSA</h2>
      </div>

      {/* MENU LINKS */}
      <ul style={styles.navLinks}>
        <li><Link style={styles.link} to="/">Home</Link></li>
        <li><Link style={styles.link} to="/event-overview">Event Overview</Link></li>
        <li><Link style={styles.link} to="/who-you-will-meet">Who Will You Meet</Link></li>
        <li><Link style={styles.link} to="/topic-highlights">Topic Highlights</Link></li>
        <li><Link style={styles.link} to="/why-attend">Why Attend</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 30px",
    background: "#002b5b",
    color: "white",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoImg: {
    height: "55px",
    width: "auto",
  },

  logoText: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "600",
    color: "white",
  },

  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
  },

  link: {
    color: "white",
    textDecoration: "none",   // removes underline
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default Navbar;
