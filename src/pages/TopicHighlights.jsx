import { useState, useEffect } from "react";
import backgroundImage from "../assets/background.jpg"; // adjust path if needed

export default function TopicHighlights() {
  const topics = [
    "Vision 2030 – KSA as a global financial leader",
    "Digital transformation for business agility",
    "Future of digital payments",
    "Next-gen seamless banking experience",
    "360° Data & Analytics",
    "Inclusive Open Banking – Banks & Fintechs",
    "Cloud-powered business agility",
    "Future of NBFIs",
    "Digital-only banks for Gen-Z",
    "Experiential banking in the Metaverse",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h2 style={styles.heading}>Topic Highlights</h2>
      <div style={styles.carouselWrapper}>
        <div
          style={{
            ...styles.carousel,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {topics.map((topic, index) => (
            <div key={index} style={styles.card}>
              <span style={styles.icon}>💡</span>
              <p style={styles.cardText}>{topic}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.dots}>
        {topics.map((_, idx) => (
          <span
            key={idx}
            style={{
              ...styles.dot,
              backgroundColor: idx === currentIndex ? "#002b5b" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heading: {
    textAlign: "center",
    fontSize: "48px",
    marginBottom: "50px",
    fontWeight: "700",
    color: "#ffff",
  },
  carouselWrapper: {
    width: "100%",
    maxWidth: "600px",
    overflow: "hidden",
  },
  carousel: {
    display: "flex",
    transition: "transform 0.6s ease",
    width: "100%",
  },
  card: {
    flex: "0 0 100%",
    boxSizing: "border-box",
    padding: "60px 40px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "22px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "300px",
    justifyContent: "center",
  },
  cardText: {
    margin: 0,
    lineHeight: "1.5em",
  },
  icon: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  dots: {
    marginTop: "30px",
    display: "flex",
    gap: "12px",
  },
  dot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    transition: "background-color 0.3s",
  },
};
