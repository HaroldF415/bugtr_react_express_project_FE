import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, Transactions, ShowTransaction, NewTransaction } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="transactions/new" element={<NewTransaction />} />
          <Route path="/transactions/:index" element={<ShowTransaction />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
