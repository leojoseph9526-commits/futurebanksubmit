import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventOverview from "./pages/EventOverview";
import WhoWillYouMeet from "./pages/WhoWillYouMeet";
import TopicHighlights from "./pages/TopicHighlights";
import WhyAttend from "./pages/WhyAttend";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div style={styles.page}>
        <Navbar />

        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event-overview" element={<EventOverview />} />
            <Route path="/who-you-will-meet" element={<WhoWillYouMeet />} />
            <Route path="/topic-highlights" element={<TopicHighlights />} />
            <Route path="/why-attend" element={<WhyAttend />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // full viewport height
  },
  content: {
    flex: 1, // takes up remaining space, pushing footer down
  },
};

export default App;
