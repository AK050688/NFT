import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ConnectWallet from "./pages/Wallet";
import Footer from "./components/Footer";
import WalletConnected from "./pages/ConnectedWallet";
import NavBar from "./pages/NavBar";
import WelcomeOverlay from "./components/WelcomePage";
import LoginPage from "./components/Login";
import Marketplace from "./pages/MarketPlace";
import Signup from "./components/Signup";
import UserDashboardHome from "./pages/Dashboard/UserDashboard/UserDashboardHome";
import ProfileDashboard from "./pages/Dashboard/UserDashboard/ProfileDashboard";
import Saved from "./pages/Dashboard/UserDashboard/Saved";
import Collections from "./pages/Dashboard/UserDashboard/Collections";
import Search from "./pages/Dashboard/UserDashboard/Search";
import AdminDashboardLayout from "./pages/Dashboard/AdminDashboard/Layout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/Dashboard";
import UserDetails from "./pages/Dashboard/AdminDashboard/UserDetails";
import CreateNFT from "./pages/Dashboard/AdminDashboard/UploadNFT";
import MarketPlace from "./pages/Dashboard/AdminDashboard/MarketPlace";
import Transactions from "./pages/Dashboard/AdminDashboard/Transactions";
// import BidDetails from "./pages/Dashboard/AdminDashboard/BidDetails";
import CreateLevel from "./pages/Dashboard/AdminDashboard/CreateLevel";
import ReferralDetails from "./pages/Dashboard/AdminDashboard/ReferralDetails";
import ArtistPage from "./pages/ArtistPage";
import NFTDetail from "./pages/NFTDetail";
import * as jwt_decode from "jwt-decode";
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import ChangePassword from './pages/ChangePassword';
import MintNFT from './pages/MintNFT';
import NFTGenerator from './pages/NFTGenerator';
import Contact from './pages/Contact';
import RotatingStone from './pages/RotatingStone';
import MintedNFTs from "./pages/Dashboard/AdminDashboard/MintedNFTs";

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
          <Route path="/NFTS-login" element={<LoginPage />} />
          <Route path="/NFTS-signup" element={<Signup/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<UserDashboardHome />} />
            <Route path="dashboard" element={<ProfileDashboard/>} />
            <Route path="saved" element={<Saved />} />
            <Route path="collections" element={<Collections />} />
            <Route path="search" element={<Search />} />
          </Route>
          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserDetails />} />
            <Route path="create-nft" element={<CreateNFT />} />
            <Route path="minted-nfts" element={<MintedNFTs />} />
            <Route path="market-place" element={<MarketPlace />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="create-level" element={<CreateLevel />} />
            <Route path="referral-details" element={<ReferralDetails />} />
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="/market-place" element={<Marketplace />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/connected-wallet" element={<WalletConnected />} />
          <Route path="/mint-nft" element={<MintNFT />} />
          <Route path="/generate-nft" element={<NFTGenerator />} />
          <Route path="/wallet" element={<WalletConnected />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rotating-stone" element={<RotatingStone />} />
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
