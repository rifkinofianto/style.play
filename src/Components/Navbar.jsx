import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../assets/main_logo.jpg";
import "../App.css";

// Komponen Navbar untuk menampilkan navigasi aplikasi
function Navbar({ page }) {
  // Mengembalikan elemen header dengan logo dan tautan navigasi
  return (
    <header className="bg-blue-600 md:p-4 p-2 rgb-gradient text-white">
      <div className="flex justify-center items-center">
        <div className="mr-auto flex gap-4 items-center text-lg md:text-4xl font-bold">
          <img
            className="md:w-32 md:h-24 object-cover h-18 w-16"
            src={Logo}
            alt="Logo..."
          />
          <h1>Style Play</h1>
        </div>
        <div className="flex gap-4 text-md md:text-2xl font-semibold">
          {page === "dashboard" && (
            <Link
              className="hover:text-yellow-600 ease-in-out hover:underline hover:italic"
              to="/product"
            >
              Product
            </Link>
          )}
          <Link
            className="hover:text-yellow-600 ease-in-out hover:underline hover:italic"
            to="/"
          >
            Log Out
          </Link>
        </div>
      </div>
    </header>
  );
}

// Menentukan tipe prop untuk komponen Navbar
Navbar.propTypes = {
  page: PropTypes.string.isRequired, // Halaman saat ini yang ditampilkan
};

export default Navbar;
