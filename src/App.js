import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, Transactions } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
