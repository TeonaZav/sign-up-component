import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
