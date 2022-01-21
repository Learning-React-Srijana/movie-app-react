import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResultPage } from "./pages/ResultPage";
function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
      <div>
        <Routes>
          <Route path="/searched-item" element={<ResultPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
