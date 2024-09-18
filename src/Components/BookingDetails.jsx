import { useLocation, useNavigate } from "react-router-dom";

const BookingDetails = () => {
  // Mengambil lokasi dan fungsi navigasi dari React Router
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state; // Mendapatkan detail booking dari state lokasi

  // Fungsi untuk memformat angka menjadi format Rupiah
  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Judul halaman */}
      <h1 className="text-xl md:text-3xl font-bold text-center text-green-600 mb-5">
        Berhasil Booking
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {bookingDetails ? (
          <>
            {/* Menampilkan detail booking */}
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Seat :</strong>{" "}
              {bookingDetails.seat}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Room Type :</strong>{" "}
              {bookingDetails.roomType}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Product :</strong>{" "}
              {bookingDetails.productName}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Hours :</strong>{" "}
              {bookingDetails.hours}
            </p>
            <p className="text-lg mb-3">
              <strong className="text-gray-800">Date :</strong>{" "}
              {new Date(bookingDetails.date).toLocaleDateString("id-ID")}
            </p>
            <p className="text-lg mb-5">
              <strong className="text-gray-800">Total Price :</strong>{" "}
              {formatRupiah(bookingDetails.totalPrice)}
            </p>
            <p className="text-lg mb-5">
              <strong className="text-gray-800">Payment Method :</strong>{" "}
              {bookingDetails.paymentMethod}
            </p>
            <p className="text-lg mb-5">
              <strong className="text-gray-800">Note :</strong> Konfirmasi
              langsung ke WhatsApp admin (081234567890) dan pilih jamnya.
            </p>
            {/* Tombol untuk kembali ke dashboard */}
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Kembali ke Dashboard
            </button>
          </>
        ) : (
          <p>No booking details available</p> // Pesan jika tidak ada detail booking
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
