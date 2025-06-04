import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured Cars (10 cars)
  const cars = [
    {
      id: 1,
      name: "Lamborghini Huracan",
      price: "$500/day",
      image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Ferrari 488",
      price: "$650/day",
      image: "https://images.unsplash.com/photo-1597687228894-111db66403b6?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Porsche 911",
      price: "$400/day",
      image: "https://images.unsplash.com/photo-1619844175408-c05947985e2d?q=80&w=2565&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Aston Martin DBX",
      price: "$500/day",
      image: "https://images.unsplash.com/photo-1618486613525-c694bf152b2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Lamborghini Urus",
      price: "$750/day",
      image: "https://images.unsplash.com/photo-1630091883707-14038de8b8bd?q=80&w=2776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Range Rover Sport",
      price: "$600/day",
      image: "https://images.unsplash.com/photo-1712055997104-4098783003fd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Tesla Model X",
      price: "$700/day",
      image: "https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Maserati Levante",
      price: "$650/day",
      image: "https://images.unsplash.com/photo-1688744348032-d5a227040730?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "BMW X6",
      price: "$600/day",
      image: "https://images.unsplash.com/photo-1676409429433-503d95c21ac4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Jaguar F-PACE",
      price: "$600/day",
      image: "https://images.unsplash.com/photo-1718781457056-f3eea66776b0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

const totalCars = cars.length;
const slidesPerView = 3; // We are showing 3 cars at once

// Update nextSlide to increment the currentSlide by 1 after every 2 clicks
const nextSlide = () => {
  // Increment by 2 instead of 1 on the 3rd click
  setCurrentSlide((prev) => (prev + 1) % Math.ceil(totalCars / slidesPerView));
};

// Update prevSlide similarly
const prevSlide = () => {
  // Decrement but avoid the blank slide
  setCurrentSlide((prev) => (prev - 1 + Math.ceil(totalCars / slidesPerView)) % Math.ceil(totalCars / slidesPerView));
};



  const [activeSet, setActiveSet] = useState(1); // To manage which set of services is visible

  // Define types for the services
  const servicesSet1 = [
    {
      id: 1,
      name: "Corporate Car Rental",
      image:
        "https://images.pexels.com/photos/4964951/pexels-photo-4964951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Car Rental with Driver",
      image:
        "https://images.pexels.com/photos/9519968/pexels-photo-9519968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Airport Transfer",
      image:
        "https://images.pexels.com/photos/29112731/pexels-photo-29112731/free-photo-of-luxury-car-and-private-jet-on-airport-tarmac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const servicesSet2 = [
    {
      id: 4,
      name: "Self-Drive Rentals",
      image:
        "https://images.pexels.com/photos/13275527/pexels-photo-13275527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "Event & Wedding Car Rentals",
      image:
        "https://images.pexels.com/photos/14745476/pexels-photo-14745476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "Luxury Van & SUV Rentals",
      image:
        "https://images.pexels.com/photos/11139395/pexels-photo-11139395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  // Explicitly type the argument to be a number
  const handleSetClick = (setNumber: number) => {
    setActiveSet(setNumber);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div>
            <h1 className="text-6xl font-semibold">
              Drive in <span className="text-luxeGold">Luxury</span>, Travel with{" "}
              <span className="text-luxeGold">Style</span>
            </h1>
            <p className="mt-4 text-lg">
              Experience the ultimate driving pleasure with our premium car
              rental service. Choose from our extensive fleet of luxury
              vehicles.
            </p>
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

      {/* Our Services Section */}
      <section className="py-12 bg-midnight text-white">
        {/* "WHAT WE DO" label */}
        <p className="text-center text-champagne uppercase mb-2 tracking-widest">
          WHAT WE DO
        </p>

        {/* Main heading */}
        <h2 className="text-4xl font-semibold text-center text-white mb-8">
          <span className="text-white">Our</span>{" "}
          <span className="text-luxeGold">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeSet === 1 ? servicesSet1 : servicesSet2).map((service) => (
            <div
              key={service.id}
              className="relative bg-[#292929] p-0 rounded-2xl overflow-hidden shadow-lg transform hover:translate-y-4 transition-all duration-300 cursor-pointer"
            >
              {/* Numbered circle in the top-left */}
              <div className="absolute left-4 top-4 w-10 h-10 bg-luxeGold rounded-full flex items-center justify-center text-midnight font-bold text-lg">
                {service.id < 10 ? `0${service.id}` : service.id}
              </div>

              {/* Image with rounded corners */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Service title */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Circle Navigation (toggle between set 1 and set 2) */}
        <div className="flex justify-center mt-10 space-x-3">
          <button
            onClick={() => handleSetClick(1)}
            className={`
              w-6 h-6 rounded-full border-1 border-luxeGold 
              ${activeSet === 1 ? "bg-luxeGold" : "bg-transparent"}
            `}
          />
          <button
            onClick={() => handleSetClick(2)}
            className={`
              w-6 h-6 rounded-full border-1 border-luxeGold 
              ${activeSet === 2 ? "bg-luxeGold" : "bg-transparent"}
            `}
          />
        </div>
      </section>


      {/* Featured Cars Section */}
      <section className="py-12 bg-midnight text-white">
        {/* Vertical line above the "WHAT WE OFFER" text */}
        <div className="flex justify-center mb-6">
          <div className="w-1 h-12 bg-luxeGold"></div> {/* Single vertical line */}
        </div>

        {/* "WHAT WE OFFER" Text */}
        <p className="text-center text-champagne uppercase mb-2 tracking-widest">
          WHAT WE OFFER
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-semibold text-center text-white mb-8">
          <span className="text-white">Featured</span>{" "}
          <span className="text-luxeGold">Cars</span>
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative container mx-auto flex items-center justify-center h-[450px]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 text-white bg-black rounded-full p-4 m-2 hover:bg-luxeGold hover:scale-110 transform transition-all duration-300 ease-in-out z-10"
            style={{ zIndex: 10 }}
          >
            <FaArrowLeft size={30} />
          </button>

          {/* Car Grid (Sliding Effect) */}
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 33.33}%)`, // Correct translation for 3 slides
              }}
            >
              {cars.map((car) => (
                <div key={car.id} className="w-128 px-3">
                  {/* Car Card */}
                  <div className="bg-[#292929] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                    {/* Car Image */}
                    <div className="overflow-hidden rounded-t-2xl">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-64 object-cover transition-all duration-300 hover:opacity-80"
                      />
                    </div>

                    {/* Text and Button in the bottom part of the card */}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-luxeGold hover:text-white transition-all duration-300">
                        {car.name}
                      </h3>
                      <p className="mt-1 text-lg text-white">{car.price}</p>
                      <button
                        onClick={() => navigate(`/car-detail/${car.id}`)}
                        className="mt-4 w-full py-2 bg-luxeGold text-midnight rounded-full hover:bg-champagne transition-all duration-300 hover:scale-105"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 text-white bg-black rounded-full p-4 m-2 hover:bg-luxeGold hover:scale-110 transform transition-all duration-300 ease-in-out z-10"
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      </section>

      {/* Booking Section */}
      <section
  className="relative h-[70vh] bg-cover bg-center text-white"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1729966085578-c7b281cf11da?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundAttachment: 'fixed',
  }}
>
  {/* Overlay for better text contrast */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Centered Content: Title, Subtitle, and Form */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
    {/* "Reserve Your Ride" Text */}
    <p className="text-center text-luxeGold uppercase mb-4 tracking-widest">
      Reserve Your Ride
    </p>

    {/* Main Heading */}
    <h2 className="text-4xl font-semibold text-center text-white mb-6">
      <span className="text-white">Rent Your</span>{" "}
      <span className="text-white">Car Today</span>
    </h2>

    {/* Form Container */}
    <div className="bg-midnight px-6 py-3 rounded-full w-full md:w-3/4 lg:w-1/2">
      <div className="flex justify-between items-center">
        {/* Car Make Picker */}
        <div className="relative">
          <select
            className="
              appearance-none 
              bg-midnight 
              text-[#919191] 
              px-3 py-2 
              rounded-2xl 
              w-full sm:w-auto
            "
          >
            <option value="" disabled selected>
              Choose Car Make
            </option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="bmw">BMW</option>
          </select>
          {/* Custom dropdown arrow (luxeGold) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 text-luxeGold -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Vertical Divider */}
        <div className="h-20 border-r border-[#292929]"></div>

        {/* Pick Up Date Picker */}
        <input
          type="date"
          className="
            bg-midnight 
            text-[#919191] 
            px-3 py-2 
            rounded-2xl 
            w-full sm:w-auto
          "
          placeholder="Pick Up Date"
        />

        {/* Vertical Divider */}
        <div className="h-20 border-r border-[#292929]"></div>

        {/* Return Date Picker */}
        <input
          type="date"
          className="
            bg-midnight 
            text-[#919191] 
            px-3 py-2 
            rounded-2xl 
            w-full sm:w-auto
          "
          placeholder="Return Date"
        />

        {/* Vertical Divider */}
        <div className="h-20 border-r border-[#292929]"></div>

      {/* Rent Now Button */}
      <button className="py-5 px-8 text-md bg-luxeGold text-black rounded-full hover:bg-white transition w-auto">
        Rent Now
      </button>

      </div>
    </div>
  </div>
</section>




      {/* Testimonials Section */}
      <section className="py-12 bg-midnight text-white">
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">
          Customer Testimonials
        </h2>
        <div className="container mx-auto flex justify-center space-x-6">
          <div className="bg-[#222A36] p-6 rounded-lg w-80">
            <p className="text-lg">
              "The best car rental experience! I loved the luxury options and the
              seamless booking process."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
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
            <p className="text-lg">
              "Great service! I’ll definitely rent again. The staff was very
              helpful and the car was amazing!"
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
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
        <h2 className="text-3xl font-semibold text-center text-champagne mb-6">
          Car Rental Process
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#222A36] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Choose A Car</h3>
            <p>View our range of cars, find your perfect car for the coming days.</p>
          </div>
          <div className="bg-[#222A36] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Come In Contact</h3>
            <p>
              Our advisor team is ready to help you with the booking process or
              any questions.
            </p>
          </div>
          <div className="bg-[#222A36] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enjoy Driving</h3>
            <p>Receive the key and enjoy your car. We treat all our cars with respect.</p>
          </div>
        </div>
      </section>

      {/* Back to Top Arrow */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="p-4 bg-champagne text-midnight rounded-full hover:bg-luxeGold transition"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default Home;
