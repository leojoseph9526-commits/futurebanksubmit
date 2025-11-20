export default function WhyAttend() {
  const reasons = [
    {
      text: "Gain insights from top global industry leaders",
      icon: "🌍",
    },
    {
      text: "Network with peers in a solution-oriented environment",
      icon: "🤝",
    },
    {
      text: "Discuss partnerships and collaborations",
      icon: "💼",
    },
    {
      text: "Learn practical digital transformation strategies",
      icon: "📈",
    },
    {
      text: "Explore case studies and expert panel discussions",
      icon: "🎤",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Why Attend?</h2>
      <div style={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} style={styles.card}>
            <span style={styles.icon}>{reason.icon}</span>
            <p style={styles.text}>{reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    minHeight: "80vh",
    background: "#f0f8ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "50px",
    color: "#002b5b",
    fontWeight: "700",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "1000px",
  },
  card: {
    background: "#fff",
    padding: "40px 20px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  icon: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.5em",
  },
};
