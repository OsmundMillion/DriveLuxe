import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Featured Cars (for now, hardcoded)
  const cars = [
    { id: 1, name: "Lamborghini Huracan", price: "$500/day", image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Ferrari 488", price: "$650/day", image: "https://images.unsplash.com/photo-1533190286941-2fbb69b0c3e0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8Y2FyJTIwcmVudGFsJTIwYnVzaW5lc3N8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 3, name: "Porsche 911", price: "$400/day", image: "https://images.unsplash.com/photo-1564542044-2d2b8361b235?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YnVzaW5lc3N8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div>
            <h1 className="text-5xl font-semibold">Drive in Luxury, Travel with Style</h1>
            <p className="mt-4 text-lg">Experience the ultimate driving pleasure with our premium car rental service. Choose from our extensive fleet of luxury vehicles.</p>
            <button className="mt-6 px-8 py-3 bg-champagne text-midnight rounded-lg hover:bg-luxeGold transition">Browse Cars</button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative bg-[#1A1F2E] py-12 text-white">
        <div className="container mx-auto flex justify-center">
          <div className="bg-[#222A36] p-8 rounded-lg w-full md:w-3/4">
            <h2 className="text-3xl mb-6 text-center">Book Auto Rental</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" className="px-4 py-2 bg-[#1A1F2E] text-white border border-slateGray rounded-lg" placeholder="Choose Car Type" />
              <input type="text" className="px-4 py-2 bg-[#1A1F2E] text-white border border-slateGray rounded-lg" placeholder="Pick Up Location" />
              <input type="date" className="px-4 py-2 bg-[#1A1F2E] text-white border border-slateGray rounded-lg" placeholder="Pick Up Date" />
              <input type="text" className="px-4 py-2 bg-[#1A1F2E] text-white border border-slateGray rounded-lg" placeholder="Drop Off Location" />
              <input type="date" className="px-4 py-2 bg-[#1A1F2E] text-white border border-slateGray rounded-lg" placeholder="Return Date" />
            </div>
            <button className="mt-6 w-full py-2 bg-champagne text-midnight rounded-lg hover:bg-luxeGold transition">Rent Now</button>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-12 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">Luxury Car Fleet</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-[#1A1F2E] p-6 rounded-lg">
              <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-lg text-champagne">{car.price}</p>
              <button onClick={() => navigate(`/car-detail/${car.id}`)} className="mt-4 w-full py-2 bg-champagne text-midnight rounded-lg hover:bg-luxeGold transition">Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-12 bg-[#222A36] text-white">
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1A1F2E] p-6 rounded-lg">
            <FaWhatsapp className="w-8 h-8 text-champagne mb-4" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-lg">We're always available to assist you with any queries or concerns.</p>
          </div>
          <div className="bg-[#1A1F2E] p-6 rounded-lg">
            <FaFacebook className="w-8 h-8 text-champagne mb-4" />
            <h3 className="text-xl font-semibold">Free Delivery</h3>
            <p className="text-lg">We deliver your rental car directly to your location at no extra cost.</p>
          </div>
          <div className="bg-[#1A1F2E] p-6 rounded-lg">
            <FaYoutube className="w-8 h-8 text-champagne mb-4" />
            <h3 className="text-xl font-semibold">Full Insurance</h3>
            <p className="text-lg">Your car is fully insured, so you can drive with peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">Customer Testimonials</h2>
        <div className="container mx-auto flex justify-center space-x-6">
          <div className="bg-[#222A36] p-6 rounded-lg w-80">
            <p className="text-lg">"The best car rental experience! I loved the luxury options and the seamless booking process."</p>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <div className="flex">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-400">☆</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#222A36] p-6 rounded-lg w-80">
            <p className="text-lg">"Great service! I’ll definitely rent again. The staff was very helpful and the car was amazing!"</p>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <div className="flex">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-400">☆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Rental Process Section */}
      <section className="py-12 bg-[#1A1F2E] text-white">
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">Car Rental Process</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#222A36] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Choose A Car</h3>
            <p>View our range of cars, find your perfect car for the coming days.</p>
          </div>
          <div className="bg-[#222A36] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Come In Contact</h3>
            <p>Our advisor team is ready to help you with the booking process or any questions.</p>
          </div>
          <div className="bg-[#222A36] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enjoy Driving</h3>
            <p>Receive the key and enjoy your car. We treat all our cars with respect.</p>
          </div>
        </div>
      </section>

      {/* Back to Top Arrow */}
      <div className="fixed bottom-6 right-6">
        <button onClick={() => window.scrollTo(0, 0)} className="p-4 bg-champagne text-midnight rounded-full hover:bg-luxeGold transition">
          ↑
        </button>
      </div>
    </div>
  );
};

export default Home;
