export default function WhoWillYouMeet() {
    const roles = [
      "CIOs, CTOs, Heads of Technology",
      "Chief Digital Officers, Digital Transformation Heads",
      "Chief Marketing Officers",
      "Heads of Retail Banking",
      "Heads of Corporate Banking",
      "Heads of Customer Experience",
      "Heads of Cards & Payments",
      "Heads of Data & Analytics",
      "Governance & Compliance Leaders"
    ];
  
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Who Will You Meet?</h2>
        <div style={styles.grid}>
          {roles.map((role) => (
            <div key={role} style={styles.card}>
              <span style={styles.icon}>🌟</span>
              <p style={styles.roleText}>{role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f9f9f9",
      minHeight: "80vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "32px",
      marginBottom: "30px",
      color: "#002b5b",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    card: {
      display: "flex",
      alignItems: "center",
      padding: "15px 20px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "default",
    },
    icon: {
      fontSize: "24px",
      marginRight: "15px",
      color: "#ff9800",
    },
    roleText: {
      margin: 0,
      fontSize: "16px",
      fontWeight: "500",
      color: "#333",
    },
  };
  