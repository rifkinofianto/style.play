import Navbar from "../Components/Navbar";
import PropTypes from "prop-types";

const Product = ({ page }) => {
  return (
    <>
      <Navbar page={page} />
    </>
  );
};

Product.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Product;