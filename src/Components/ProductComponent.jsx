import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductComponent = () => {
  // Daftar aturan yang harus diikuti
  const rules = [
    {
      id: 1,
      description: "Dilarang merokok (Vape diperbolehkan)",
    },
    {
      id: 2,
      description: "Dilarang membuang sampah sembarangan",
    },
    {
      id: 3,
      description: "Dilarang merusak properti Style Play",
    },
    {
      id: 4,
      description: "Dilarang membawa makanan/minuman dari luar",
    },
    {
      id: 5,
      description: "Dilarang menghapus akun sembarangan",
    },
    {
      id: 6,
      description: "Dilarang download / hapus game sembarangan",
    },
    {
      id: 7,
      description: "Apabila ada pelanggaran, kami berhak melakukan denda❗️",
    },
  ];

  // Daftar produk yang tersedia untuk dipesan
  const products = [
    {
      id: 1,
      name: "PC Gaming Room",
      room_reguler_price_per_hour: 15000,
      room_VIP_price_per_hour: 30000,
      img_url:
        "https://y6a2n7m3.rocketcdn.me/wp-content/uploads/2022/08/ilustrasi-pc-gaming-ella-don-unsplash.jpg",
      capacity: "2 - 4 Person",
      description:
        "Kamu bisa bermain game dengan teman-temanmu di PC Gaming Room ini",
    },
    {
      id: 2,
      name: "PlayStation 5 Room",
      room_reguler_price_per_hour: 20000,
      room_VIP_price_per_hour: 35000,
      img_url:
        "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/11/28/867090688.jpg",
      capacity: "2 - 4 Person",
      description:
        "Kamu bisa bermain game dengan teman-temanmu di PlayStation 5 Room ini",
    },
  ];

  // Daftar kursi yang tersedia
  const seats = Array.from({ length: 10 }, (_, i) => i + 1);

  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    seat: "",
    roomType: "Reguler",
    hours: 1,
    productId: 1, // Hapus duplikasi ini
    selectedProduct: null, // Tambahkan ini
    selectedDate: "", // Tambahkan ini
  });

  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi input
    const today = new Date().toISOString().split("T")[0]; // Ambil tanggal hari ini
    if (!formData.seat || !formData.roomType || !formData.hours || !formData.selectedDate || formData.selectedDate < today) { // Tambahkan validasi untuk selectedDate
      alert("Semua field harus diisi dan tanggal tidak boleh sebelum hari ini!");
      return;
    }

    const selectedProduct = products.find(
      (product) => product.id === Number(formData.productId)
    );
    // Simpan selectedProduct ke dalam formData
    setFormData({ ...formData, selectedProduct });

    const roomPrice =
      formData.roomType === "Reguler"
        ? selectedProduct.room_reguler_price_per_hour
        : selectedProduct.room_VIP_price_per_hour;
    const totalPrice = roomPrice * formData.hours;

    const bookingDetails = {
      seat: formData.seat,
      roomType: formData.roomType,
      hours: formData.hours,
      productName: selectedProduct.name,
      date: formData.selectedDate,
      totalPrice,
    };

    // Redirect to the booking details page with the state
    navigate("/booking-details", { state: bookingDetails });
  };

  // Fungsi untuk memformat angka menjadi format Rupiah
  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className="min-h-screen md:px-56 md:py-5 px-3 py-5">
      {/* Judul dan aturan */}
      <h1 className="text-xl md:text-3xl font-bold text-center underline">
        Rules of Style Play
      </h1>
      <div className="flex flex-col gap-3 border-b-2 border-b-black py-5">
        {rules.map((rule, index) => (
          <p className="text-lg md:text-xl font-semibold" key={index}>
            {index + 1}. {rule.description}
          </p>
        ))}
      </div>
      {/* Judul dan daftar produk */}
      <h1 className="text-xl md:text-3xl font-bold text-center underline mt-10 mb-5">
        Products or Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-b-black pb-7">
        {products.map((product, index) => {
          return (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <img
                className="w-full md:h-96 h-72 object-cover rounded-md"
                src={product.img_url}
                alt={product.name}
              />
              <h2 className="text-xl font-bold mt-3">{product.name}</h2>
              <p className="text-lg">Capacity: {product.capacity}</p>
              <p className="text-lg">
                Room Reguler:{" "}
                {formatRupiah(product.room_reguler_price_per_hour)} per hour
              </p>
              <p className="text-lg">
                Room VIP: {formatRupiah(product.room_VIP_price_per_hour)} per
                hour
              </p>
              <p className="text-lg mt-2">{product.description}</p>
            </div>
          );
        })}
      </div>

      {/* Form untuk pemesanan */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-bold text-center underline">
          Book a Seat
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          {/* Pilihan kursi */}
          <div>
            <label className="block text-lg md:text-xl font-semibold mb-2">
              Choose a Seat:
            </label>
            <select
              name="seat"
              value={formData.seat}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Seat</option>
              {seats.map((seat) => (
                <option key={seat} value={seat}>
                  Seat {seat}
                </option>
              ))}
            </select>
          </div>

          {/* Pilihan jenis ruangan */}
          <div>
            <label className="block text-lg md:text-xl font-semibold mb-2">
              Room Type:
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="reguler">Reguler</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          {/* Input jam pemesanan */}
          <div>
            <label className="block text-lg md:text-xl font-semibold mb-2">
              Hours:
            </label>
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              min="1"
              className="p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Pilihan produk */}
          <div>
            <label className="block text-lg md:text-xl font-semibold mb-2">
              Choose a Product:
            </label>
            <select
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Input tanggal pemesanan */}
          <div>
            <label className="block text-lg md:text-xl font-semibold mb-2">
              Select Date:
            </label>
            <input
              type="date"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Tombol untuk mengirim form */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductComponent;
