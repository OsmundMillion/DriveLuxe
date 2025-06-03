import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false); // To track scroll
  const [activeTab, setActiveTab] = useState<string>(""); // To track active tab

  // Set active tab based on the URL path
  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path); // Sets active tab based on current URL
  }, [window.location.pathname]);

  // Handle navbar background change on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); // Add background tint after scrolling
    } else {
      setScrolling(false); // Remove background tint when back at the top
    }
  };

  // Event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolling ? "bg-midnight/80" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading text-champagne">
          DriveLuxe
        </Link>

        {/* Nav links */}
        <div className="space-x-6 text-base">
          <Link
            to="/"
            className={`${
              activeTab === "/"
                ? "text-luxeGold font-semibold border-b-2 border-luxeGold"
                : "text-pearlWhite hover:text-champagne hover:scale-x-100 hover:border-b-2 hover:border-champagne transition-transform duration-300"
            } relative inline-block`}
          >
            Home
            <span
              className={`${
                activeTab === "/"
                  ? "w-full absolute bottom-0 left-0 transform scale-x-100"
                  : "w-0 absolute bottom-0 left-0 transform scale-x-0"
              } bg-luxeGold h-[2px] transition-all duration-300`}
            ></span>
          </Link>
          <Link
            to="/cars"
            className={`${
              activeTab === "/cars"
                ? "text-luxeGold font-semibold border-b-2 border-luxeGold"
                : "text-pearlWhite hover:text-champagne hover:scale-x-100 hover:border-b-2 hover:border-champagne transition-transform duration-300"
            } relative inline-block`}
          >
            Cars
            <span
              className={`${
                activeTab === "/cars"
                  ? "w-full absolute bottom-0 left-0 transform scale-x-100"
                  : "w-0 absolute bottom-0 left-0 transform scale-x-0"
              } bg-luxeGold h-[2px] transition-all duration-300`}
            ></span>
          </Link>
          <Link
            to="/reservations"
            className={`${
              activeTab === "/reservations"
                ? "text-luxeGold font-semibold border-b-2 border-luxeGold"
                : "text-pearlWhite hover:text-champagne hover:scale-x-100 hover:border-b-2 hover:border-champagne transition-transform duration-300"
            } relative inline-block`}
          >
            Reservations
            <span
              className={`${
                activeTab === "/reservations"
                  ? "w-full absolute bottom-0 left-0 transform scale-x-100"
                  : "w-0 absolute bottom-0 left-0 transform scale-x-0"
              } bg-luxeGold h-[2px] transition-all duration-300`}
            ></span>
          </Link>
          <Link
            to="/contact"
            className={`${
              activeTab === "/contact"
                ? "text-luxeGold font-semibold border-b-2 border-luxeGold"
                : "text-pearlWhite hover:text-champagne hover:scale-x-100 hover:border-b-2 hover:border-champagne transition-transform duration-300"
            } relative inline-block`}
          >
            Contact
            <span
              className={`${
                activeTab === "/contact"
                  ? "w-full absolute bottom-0 left-0 transform scale-x-100"
                  : "w-0 absolute bottom-0 left-0 transform scale-x-0"
              } bg-luxeGold h-[2px] transition-all duration-300`}
            ></span>
          </Link>
          <Link
            to="/signin"
            className={`${
              activeTab === "/signin"
                ? "text-luxeGold font-semibold border-b-2 border-luxeGold"
                : "text-pearlWhite hover:text-champagne hover:scale-x-100 hover:border-b-2 hover:border-champagne transition-transform duration-300"
            } relative inline-block`}
          >
            Sign In
            <span
              className={`${
                activeTab === "/signin"
                  ? "w-full absolute bottom-0 left-0 transform scale-x-100"
                  : "w-0 absolute bottom-0 left-0 transform scale-x-0"
              } bg-luxeGold h-[2px] transition-all duration-300`}
            ></span>
          </Link>
          <Link
            to="/signup"
            className={`${
              activeTab === "/signup"
                ? "text-luxeGold font-semibold border-b-2 border-luxeGold"
                : "text-pearlWhite hover:text-champagne hover:scale-x-100 hover:border-b-2 hover:border-champagne transition-transform duration-300"
            } relative inline-block`}
          >
            Sign Up
            <span
              className={`${
                activeTab === "/signup"
                  ? "w-full absolute bottom-0 left-0 transform scale-x-100"
                  : "w-0 absolute bottom-0 left-0 transform scale-x-0"
              } bg-luxeGold h-[2px] transition-all duration-300`}
            ></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
