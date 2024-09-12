import PropTypes from 'prop-types';
import Navbar from "../Components/Navbar";
import Greetings from "../Components/Greetings";

function Dashboard({ page }) {
  return (
    <>
      <Navbar page={page} />
      <Greetings />
    </>
  );
}

Dashboard.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Dashboard;