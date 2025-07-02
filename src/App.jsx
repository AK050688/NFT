import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ConnectWallet from "./pages/Wallet";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import WalletConnected from "./pages/ConnectedWallet";
import NavBar from "./pages/NavBar";
import WelcomeOverlay from "./components/WelcomePage";
import TrendingBids from "./pages/Dashboard/TrendingBids";
import Saved from "./pages/Dashboard/Saved";
import Collections from "./pages/Dashboard/Collections";
import LoginPage from "./components/Login";
import Marketplace from "./pages/MarketPlace";


function AppLayout() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/dash","/trending-bids","/saved","/collections","/rare-NFTS"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <WelcomeOverlay />
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <NavBar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/market-place" element={<Marketplace />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/connected-wallet" element={<WalletConnected />} />
          <Route path="/NFTS-login" element={<LoginPage />} />
       
          <Route path="/dash" element={<Dashboard />} />
          <Route path='/trending-bids' element={<TrendingBids/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path="/collections" element={<Collections/>}/>
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

// Root App component where Router wraps everything
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
