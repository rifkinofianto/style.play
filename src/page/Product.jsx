import Navbar from "../Components/Navbar";
import PropTypes from "prop-types";
import ProductComponent from "../Components/ProductComponent";

const Product = ({ page }) => {
  return (
    <>
      <Navbar page={page} />
      <ProductComponent />
    </>
  );
};

Product.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Product;
