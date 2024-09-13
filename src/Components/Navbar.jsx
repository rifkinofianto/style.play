import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

// Komponen Navbar untuk menampilkan navigasi aplikasi
function Navbar({ page }) {
  // Mengembalikan elemen header dengan logo dan tautan navigasi
  return (
    <header className="bg-blue-600 p-4 rgb-gradient">
      <div className="flex justify-center items-center">
        <div className="mr-auto flex gap-3 items-center text-lg md:text-4xl font-bold">
          <img
            className="md:w-16 w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbzc545h-aXan19MbkEgA5h4FN_A5BSJRqQ&s"
            alt="Logo..."
          />
          <h1>Style Play</h1>
        </div>
        <div className="flex gap-4 text-md md:text-2xl font-semibold">
          {page === "dashboard" && (
            <Link
              className="hover:text-white ease-in-out hover:underline hover:italic"
              to="/product"
            >
              Product
            </Link>
          )}
          <Link className="hover:text-white ease-in-out hover:underline hover:italic" to="/">
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
