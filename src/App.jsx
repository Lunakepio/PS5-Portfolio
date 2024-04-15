import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { useEffect, useState } from "react";
import { About } from "./pages/About";

function App() {
  const [isMessageShow, setIsMessageShow] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/projects") {
      setIsMessageShow(false);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMessageShow={isMessageShow}
                setIsMessageShow={setIsMessageShow}
              />
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
