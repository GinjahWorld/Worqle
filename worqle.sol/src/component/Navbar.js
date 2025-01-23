import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">WORQLE</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/upload" className="hover:underline">Upload Video</Link>
          <Link to="/royalties" className="hover:underline">Royalties</Link>
          <Link to="/history" className="hover:underline">Payment History</Link>
          <Link to="/branding" className="hover:underline">Branding</Link>
          <Link to="/subscriptions" className="hover:underline">Subscriptions</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;