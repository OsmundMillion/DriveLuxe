import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center border-b border-slateGray">
      <Link to="/" className="text-xl font-heading text-champagne">
        DriveLuxe
      </Link>
      <div className="space-x-4 text-sm">
        <Link to="/cars">Cars</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
