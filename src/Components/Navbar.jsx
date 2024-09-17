import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../icon.png";
import "../App.css";

// Komponen Navbar untuk menampilkan navigasi aplikasi
function Navbar({ page }) {
  // Mengembalikan elemen header dengan logo dan tautan navigasi
  return (
    <header className="bg-blue-600 md:p-4 pr-4 rgb-gradient text-white">
      <div className="flex justify-center items-center">
        <div className="mr-auto flex md:gap-3 gap-1 items-center text-lg md:text-4xl font-bold">
          <img
            className="md:w-32 h-24 object-cover w-20"
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
