const Footer = () => {
  return (
    <footer className="bg-midnight/90 backdrop-blur-sm text-pearlWhite py-6">
      <div className="max-w-7xl mx-auto px-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} DriveLuxe. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="text-champagne hover:text-luxeGold transition">
            Privacy Policy
          </a>
          <a href="#" className="text-champagne hover:text-luxeGold transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
