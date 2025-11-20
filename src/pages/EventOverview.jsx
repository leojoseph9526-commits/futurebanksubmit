import overviewImage from "../assets/overview.jpg"; // add an image from your assets

export default function EventOverview() {
  const highlights = [
    "Digital transformation",
    "Next-gen technologies",
    "Customer engagement",
    "Intelligent automation",
    "Cyber security",
    "AI, Metaverse, Cloud, RegTech",
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Event Overview</h2>
      <div style={styles.contentWrapper}>
        <div style={styles.textSection}>
          <p style={styles.paragraph}>
            The banking industry worldwide is undergoing phenomenal change,
            giving banks an opportunity to <span style={styles.highlight}>relook at their business models</span>.
            <span style={styles.highlight}>Digital transformation, next-gen technologies,</span> 
            customer engagement, intelligent automation, and cyber security are redefining the future of banking.
          </p>
          <p style={styles.paragraph}>
            The 4th Annual Future Banks Summit KSA 2023 showcases innovations,
            case studies, and panel discussions that prepare KSA's banking sector
            for a future shaped by <span style={styles.highlight}>AI, digital banking, metaverse experiences, cloud migration, regtech, and advanced analytics</span>.
          </p>
          <div style={styles.highlightsGrid}>
            {highlights.map((item, idx) => (
              <div key={idx} style={styles.highlightCard}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.imageSection}>
          <img src={overviewImage} alt="Event Overview" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    minHeight: "80vh",
    backgroundColor: "#f5f9ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "42px",
    marginBottom: "50px",
    color: "#002b5b",
    fontWeight: "700",
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    maxWidth: "1200px",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textSection: {
    flex: "1 1 500px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6em",
    color: "#333",
  },
  highlight: {
    fontWeight: "700",
    color: "#002b5b",
  },
  highlightsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px",
  },
  highlightCard: {
    backgroundColor: "#002b5b",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: "500",
    fontSize: "16px",
  },
  imageSection: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
};
