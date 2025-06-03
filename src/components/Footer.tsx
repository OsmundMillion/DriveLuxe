import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
<footer className="bg-midnight text-pearlWhite py-12">
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
    {/* Brand Info */}
    <div className="flex flex-col items-center md:flex-row md:justify-between mb-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-champagne mb-2">DriveLuxe</h2>
        <p className="text-pearlWhite mb-4">
          Experience the ultimate driving pleasure with our premium car rental service. Choose from our extensive fleet of luxury vehicles.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://wa.me/+8619719592630" className="text-champagne hover:text-luxeGold">
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/DriveLuxe"
            className="text-champagne hover:text-luxeGold"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://youtube.com/DriveLuxe" className="text-champagne hover:text-luxeGold">
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 md:mt-0">
        <h4 className="text-xl font-semibold text-champagne mb-2">Quick Links</h4>
        <ul className="text-pearlWhite space-y-2">
          <li>
            <a href="/about" className="hover:text-champagne">About</a>
          </li>
          <li>
            <a href="/cars" className="hover:text-champagne">Cars</a>
          </li>
          <li>
            <a href="/team" className="hover:text-champagne">Team</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-champagne">Contact</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Subscribe Section */}
    <div className="mt-8">
      <h4 className="text-xl font-semibold text-champagne mb-2">Subscribe</h4>
      <p className="text-pearlWhite mb-4">
        Want to be notified about our services? Just sign up and we'll send you a notification by email.
      </p>
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 w-80 rounded-l-lg bg-[#1A1F2E] text-pearlWhite placeholder-slateGray focus:outline-none"
        />
        <button className="px-6 py-2 rounded-r-lg bg-champagne text-midnight font-semibold hover:bg-luxeGold transition">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-8 text-center text-slateGray text-xs">
    <p>&copy; 2025 DriveLuxe. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
