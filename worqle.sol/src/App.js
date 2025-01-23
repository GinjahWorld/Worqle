import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import VideoUpload from "./pages/VideoUpload";
import RoyaltyManagement from "./pages/RoyaltyManagement";
import PaymentHistory from "./pages/PaymentHistory";
import Branding from "./pages/Branding";
import SubscriptionManagement from "./pages/SubscriptionManagement";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="/royalties" element={<RoyaltyManagement />} />
          <Route path="/history" element={<PaymentHistory />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/subscriptions" element={<SubscriptionManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;