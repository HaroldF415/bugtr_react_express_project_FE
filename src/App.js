import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Transactions } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
