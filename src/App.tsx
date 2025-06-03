import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="font-body bg-midnight text-pearlWhite min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
