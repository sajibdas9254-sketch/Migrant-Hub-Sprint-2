import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import MustDoPage from './pages/MustDoPage';
import CommunityPage from './pages/CommunityPage';
import Search from "./pages/Search";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/must-do" element={<MustDoPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;