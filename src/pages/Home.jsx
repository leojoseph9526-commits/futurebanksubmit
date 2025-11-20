import { Link } from "react-router-dom";
import HeroVideo from "../components/HeroVideo";

export default function Home() {
  return (
    <div>

      {/* HERO VIDEO SECTION */}
      <HeroVideo />

      {/* Event Overview */}
      <Section bg="#ffffff" title="Event Overview">
        <p style={styles.text}>
          The banking industry is transforming at lightning speed and the Future Banks Summit KSA 
          highlights innovations, digital transformation, AI, cloud, cyber security, open banking,
          and the future of customer experience.
        </p>
        <Link to="/event-overview" style={styles.buttonLight}>Learn More →</Link>
      </Section>

      {/* Who Will You Meet */}
      <Section bg="#002b5b" title="Who Will You Meet?" textColor="white">
        <p style={styles.textLight}>
          Meet CIOs, CTOs, Digital Transformation Chiefs, Banking Leaders, 
          Customer Experience Heads, and Policy & Compliance Authorities 
          from across the Kingdom’s financial ecosystem.
        </p>
        <Link to="/who-you-will-meet" style={styles.buttonWhite}>Learn More →</Link>
      </Section>

      {/* Topic Highlights */}
      <Section bg="#ffffff" title="Topic Highlights">
        <p style={styles.text}>
          Discover the latest in AI Banking, Open Banking, Metaverse Experiences, Cloud Migration, 
          Digital Payments, 360° Data Analytics, and more.
        </p>
        <Link to="/topic-highlights" style={styles.buttonLight}>Learn More →</Link>
      </Section>

      {/* Why Attend */}
      <Section bg="#E8E8E8" title="Why Attend?" textColor="black">
        <p style={styles.textDark}>
          Gain insights from global experts, network with industry leaders, explore real case studies, 
          and accelerate your organization’s digital innovation strategy.
        </p>
        <Link to="/why-attend" style={styles.buttonDark}>Learn More →</Link>
      </Section>

    </div>
  );
}

/* --------------------------------------------
   REUSABLE SECTION COMPONENT
--------------------------------------------- */
function Section({ bg, title, textColor = "black", children }) {
  return (
    <section style={{ ...styles.section, background: bg, color: textColor }}>
      <h2 style={{ ...styles.title, color: textColor }}>{title}</h2>
      {children}
    </section>
  );
}

/* --------------------------------------------
   REUSABLE STYLES
--------------------------------------------- */
const styles = {
  section: {
    padding: "60px 40px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  text: {
    maxWidth: "700px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "black",
  },

  textLight: {
    maxWidth: "700px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "white",
  },

  textDark: {
    maxWidth: "700px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#000",
  },

  /* BUTTON STYLES */
  buttonLight: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 18px",
    background: "white",
    color: "#002b5b",
    borderRadius: "5px",
    fontWeight: "600",
    textDecoration: "none",
  },

  buttonDark: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 18px",
    background: "#002b5b",
    color: "white",
    borderRadius: "5px",
    fontWeight: "600",
    textDecoration: "none",
  },

  buttonWhite: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 18px",
    background: "white",
    color: "black",
    borderRadius: "5px",
    fontWeight: "600",
    textDecoration: "none",
  },
};
