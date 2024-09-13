import { useLocation, useNavigate } from "react-router-dom";

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className="min-h-screen md:px-56 md:py-5 px-3 py-5 bg-gray-100">
      <h1 className="text-xl md:text-3xl font-bold text-center text-green-600 mb-5">
        Berhasil Booking
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {bookingDetails ? (
          <>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Seat:</strong> {bookingDetails.seat}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Room Type:</strong> {bookingDetails.roomType}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Product:</strong> {bookingDetails.productName}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Hours:</strong> {bookingDetails.hours}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Date:</strong> {bookingDetails.date}
            </p>
            <p className="text-lg mb-5">
              <strong className="text-gray-800">Total Price:</strong>{" "}
              {formatRupiah(bookingDetails.totalPrice)}
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Kembali ke Dashboard
            </button>
          </>
        ) : (
          <p>No booking details available</p>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
