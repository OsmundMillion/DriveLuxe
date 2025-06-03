import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Featured Cars (for now, hardcoded)
  const cars = [
    { id: 1, name: "Lamborghini Huracan", price: "$500/day", image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Ferrari 488", price: "$650/day", image: "https://images.unsplash.com/photo-1629816816521-588e0c680056?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Porsche 911", price: "$400/day", image: "https://images.unsplash.com/photo-1619844175408-c05947985e2d?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

const [activeSet, setActiveSet] = useState(1); // To manage which set of services is visible

  // Define types for the services
  const servicesSet1 = [
    { id: 1, name: "Corporate Car Rental", image: "https://images.pexels.com/photos/4964951/pexels-photo-4964951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 2, name: "Car Rental with Driver", image: "https://images.pexels.com/photos/9519968/pexels-photo-9519968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 3, name: "Airport Transfer", image: "https://images.pexels.com/photos/29112731/pexels-photo-29112731/free-photo-of-luxury-car-and-private-jet-on-airport-tarmac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  const servicesSet2 = [
    { id: 4, name: "Self-Drive Rentals", image: "https://images.pexels.com/photos/13275527/pexels-photo-13275527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 5, name: "Event & Wedding Car Rentals", image: "https://images.pexels.com/photos/14745476/pexels-photo-14745476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 6, name: "Luxury Van & SUV Rentals", image: "https://images.pexels.com/photos/11139395/pexels-photo-11139395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  // Explicitly type the argument to be a number
  const handleSetClick = (setNumber: number) => {
    setActiveSet(setNumber);
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div>
            <h1 className="text-6xl font-semibold">
              Drive in <span className="text-luxeGold">Luxury</span>, Travel with <span className="text-luxeGold">Style</span>
            </h1>
            <p className="mt-4 text-lg">Experience the ultimate driving pleasure with our premium car rental service. Choose from our extensive fleet of luxury vehicles.</p>
            {/* Two Buttons */}
            <div className="mt-6 flex justify-center space-x-4">
              <button className="px-8 py-3 bg-luxeGold text-black rounded-full hover:bg-champagne transition-all transform hover:scale-105">
                Browse Cars
              </button>
              <button className="px-8 py-3 bg-mintCream text-black rounded-full hover:bg-champagne transition-all transform hover:scale-105">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section moved right after Hero */}
      <section className="py-12 bg-midnight text-white">
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">Our Services</h2>
        
        {/* Services Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeSet === 1 ? servicesSet1 : servicesSet2).map((service) => (
            <div key={service.id} className="bg-[#1A1F2E] p-6 rounded-lg">
              <img src={service.image} alt={service.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Circle Navigation */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-4">
            <button
              onClick={() => handleSetClick(1)}
              className={`w-8 h-8 rounded-full border-2 ${activeSet === 1 ? 'bg-luxeGold' : 'bg-transparent'} border-luxeGold`}
            >
              1
            </button>
            <button
              onClick={() => handleSetClick(2)}
              className={`w-8 h-8 rounded-full border-2 ${activeSet === 2 ? 'bg-luxeGold' : 'bg-transparent'} border-luxeGold`}
            >
              2
            </button>
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
