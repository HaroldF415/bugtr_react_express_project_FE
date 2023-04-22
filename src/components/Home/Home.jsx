import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link to="/transactions">
        <button className="bg-teal-100 hover:bg-white text-teal-800 text-7xl rounded-full py-24 px-48 shadow-md hover:shadow-2xl transition duration-500">View Transactions</button>
      </Link>
    </div>
  );
};

export default Home;
