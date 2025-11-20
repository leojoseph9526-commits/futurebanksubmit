import React from "react";
import videoFile from "../assets/hero.mp4";

const HeroVideo = () => {
  return (
    <div style={styles.container}>
      <video autoPlay loop muted playsInline style={styles.video}>
        <source src={videoFile} type="video/mp4" />
      </video>

      <div style={styles.overlay}>
        <h1 style={styles.title}>Future Banks Summit KSA</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(70%)",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: "48px",
    fontWeight: "700",
    textAlign: "center",
    textShadow: "0px 0px 10px rgba(0,0,0,0.7)",
  },
};

export default HeroVideo;
