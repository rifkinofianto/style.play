import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar({ page }) {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex font-bold text-md md:text-xl justify-center items-center">
        <div className="mr-auto">
          <h1>Style Play</h1>
        </div>
        <div className="flex gap-4">
          {page === "dashboard" && <Link className="hover:text-white ease-in-out" to="/product">Product</Link>}
          <Link to="/">Log Out</Link>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Navbar;
