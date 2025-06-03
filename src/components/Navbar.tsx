import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-midnight/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo placeholder */}
        <Link to="/" className="text-xl font-heading text-champagne">
          DriveLuxe
        </Link>

        {/* Nav links */}
        <div className="space-x-6 text-sm">
          <Link
            to="/cars"
            className="text-pearlWhite hover:text-champagne transition"
          >
            Cars
          </Link>
          <Link
            to="/reservations"
            className="text-pearlWhite hover:text-champagne transition"
          >
            Reservations
          </Link>
          <Link
            to="/contact"
            className="text-pearlWhite hover:text-champagne transition"
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className="text-pearlWhite hover:text-champagne transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-pearlWhite hover:text-champagne transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
