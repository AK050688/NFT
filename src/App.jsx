import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Profile from "./pages/Profile";
import Marketplace from "./pages/MarketPlace";
import DashboardPage from "./pages/Dashboard";
import ConnectWallet from "./pages/Wallet";
import { useSelector } from "react-redux";
import WalletConnected from "./pages/ConnectedWallet";
import WelcomeOverlay from "./components/WelcomePage";

// import Navbar from "./components/Navbar"; // Uncomment if you have it

const App = () => {
  const isConnected = useSelector((state) => state.wallet.connected);

  //   const location = useLocation();
  // const hideNavbarOnRoutes = [""];
  // const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <WelcomeOverlay/>
        {/* Navbar here (if available) */}
        <NavBar />

        <main className="flex-grow">
          <Routes>
         
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/market-place" element={<Marketplace />} />
            <Route path="/dash" element={<DashboardPage />} />
            {/* <Route
              path="/"
              element={<Navigate to={isConnected ? "/wallet" : "/connect"} />}
            /> */}
            <Route path="/connect" element={<ConnectWallet />} />
            <Route path="/connected-wallet" element={<WalletConnected />} />
            {/* <Route
              path="/wallet"
              element={
                isConnected ? <WalletConnected /> : <Navigate to="/connect" />
              }
            /> */}
            {/*  <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
