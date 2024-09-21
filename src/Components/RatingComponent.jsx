import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../App.css";
import { useNavigate } from "react-router-dom";

const RatingComponent = ({ navigateLink }) => {
  // State for rating and comment
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Handle star rating click
  const handleStarClick = (value) => {
    setSelectedRating(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRating) {
      alert("Please provide a rating.");
      return;
    }

    if (!comment.trim()) {
      alert("Please provide a comment.");
      return;
    }

    setShowPopup(true);
    setSelectedRating(0);
    setComment("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Mencegah perilaku default jika kondisi tidak terpenuhi
      if (selectedRating && comment.trim()) {
        handleSubmit(e); // Panggil handleSubmit jika rating dan komentar sudah terisi
      }
    }
  };
  // Close popup and navigate
  const closePopup = () => {
    setShowPopup(false);
    navigate(navigateLink);
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100">
        <div className="flex flex-col justify-center items-center max-w-2xl w-full mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-center text-3xl font-bold mb-6">
            Review Product
          </h1>
          <div className="flex space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`text-4xl cursor-pointer transition-colors duration-200 ${
                  value <= selectedRating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => handleStarClick(value)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <form id="reviewForm" onSubmit={handleSubmit} className="w-full">
            <textarea
              id="comment"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-32 p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-md text-lg transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
              <p className="text-gray-700 text-lg mb-8">
                Thank you for rating the product!
              </p>
              <button
                onClick={closePopup}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md text-lg transition-all duration-200"
              >
                Kembali ke dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// Validasi props
RatingComponent.propTypes = {
  navigateLink: PropTypes.string.isRequired, // Pastikan navigateLink adalah string dan wajib
};

export default RatingComponent;
