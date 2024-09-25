import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "../Hook/useIntersectionObserver";

const ProductComponent = () => {
  const rules = [
    { id: 1, description: "Dilarang merokok (Vape diperbolehkan)" },
    { id: 2, description: "Dilarang membuang sampah sembarangan" },
    { id: 3, description: "Dilarang merusak properti Style Play" },
    { id: 4, description: "Dilarang membawa makanan/minuman dari luar" },
    { id: 5, description: "Dilarang menghapus akun sembarangan" },
    { id: 6, description: "Dilarang download / hapus game sembarangan" },
    {
      id: 7,
      description: "Apabila ada pelanggaran, kami berhak melakukan denda❗️",
    },
  ];

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

  const seats = Array.from({ length: 10 }, (_, i) => i + 1);

  const [formData, setFormData] = useState({
    seat: "",
    roomType: "Reguler",
    selectedTime: "",
    endTime: "", // tidak ada diinput
    hours: 1,
    productId: 1,
    selectedProduct: null,
    selectedDate: "",
    paymentMethod: "", // Menambahkan state untuk metode pembayaran
  });

  const paymentMethods = [
    {
      id: "bayar-langsung",
      name: "Bayar Langsung",
    },
    {
      id: "Alfamart",
      name: "Alfamart",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg",
    },
    {
      id: "Mandiri",
      name: "Bank Mandiri",
      img_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Bank_Mandiri_logo.svg/2560px-Bank_Mandiri_logo.svg.png",
    },
    {
      id: "BCA",
      name: "Bank BCA",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    },
    {
      id: "Gopay",
      name: "GoPay",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png",
    },
    {
      id: "Ovo",
      name: "OVO",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png",
    },
    {
      id: "Dana",
      name: "Dana",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png",
    },
  ];

  const chooseTime = [
    { id: 1, time: 0 },
    { id: 2, time: 1 },
    { id: 3, time: 2 },
    { id: 4, time: 3 },
    { id: 5, time: 4 },
    { id: 6, time: 5 },
    { id: 7, time: 6 },
    { id: 8, time: 7 },
    { id: 9, time: 8 },
    { id: 10, time: 9 },
    { id: 11, time: 10 },
    { id: 12, time: 11 },
    { id: 13, time: 12 },
    { id: 14, time: 13 },
    { id: 15, time: 14 },
    { id: 16, time: 15 },
    { id: 17, time: 16 },
    { id: 18, time: 17 },
    { id: 19, time: 18 },
    { id: 20, time: 19 },
    { id: 21, time: 20 },
    { id: 22, time: 21 },
    { id: 23, time: 22 },
    { id: 24, time: 23 },
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodSelect = (methodId) => {
    setFormData({ ...formData, paymentMethod: methodId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    if (
      !formData.seat ||
      !formData.roomType ||
      !formData.selectedTime ||
      !formData.hours ||
      !formData.selectedDate ||
      formData.selectedDate < today ||
      !formData.paymentMethod
    ) {
      alert(
        "Semua field harus diisi dan tanggal tidak boleh sebelum hari ini!"
      );
      return;
    }

    const selectedProduct = products.find(
      (product) => product.id === Number(formData.productId)
    );
    setFormData({ ...formData, selectedProduct });

    const roomPrice =
      formData.roomType === "Reguler"
        ? selectedProduct.room_reguler_price_per_hour
        : selectedProduct.room_VIP_price_per_hour;
    const totalPrice = roomPrice * formData.hours;

    // Hitung endTime
    const selectedHour = Number(formData.selectedTime);
    const hoursToAdd = Number(formData.hours);
    const endTime = selectedHour + hoursToAdd; // Menghitung endTime dengan menambahkan hours

    // Mengambil jam dari endTime
    const endTimeHour = endTime % 24; // Menggunakan % 24 untuk memastikan jam tidak lebih dari 23
    const isNextDay = endTime >= 24; // Memeriksa apakah endTime lebih dari atau sama dengan 24
    const endTimeFormatted =
      endTimeHour < 10 ? `0${endTimeHour}.00` : `${endTimeHour}.00`; // Format menjadi xx.00

    // Tambahkan keterangan "Keesokan Harinya"
    const endTimeDisplay = isNextDay
      ? `${endTimeFormatted} (Keesokan Harinya)`
      : endTimeFormatted;

    // Mengirim data booking ke halaman booking-details
    const bookingDetails = {
      seat: formData.seat,
      roomType: formData.roomType,
      time: formData.selectedTime,
      endTime: endTimeDisplay,
      hours: formData.hours,
      productName: selectedProduct.name,
      date: formData.selectedDate,
      totalPrice,
      paymentMethod: formData.paymentMethod,
    };

    navigate("/booking-details", { state: bookingDetails });
  };

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(number);
  }

  const handleIntersect = (entry) => {
    const isVisible = entry.isIntersecting;
    if (isVisible) {
      entry.target.classList.add("animate__animated", "animate__fadeIn");
    } else {
      entry.target.classList.remove("animate__animated", "animate__fadeIn");
    }
  };

  // Menggunakan custom hook
  const sectionsRef = useIntersectionObserver(handleIntersect);

  return (
    <div className="min-h-screen md:px-32 lg:px-56 md:py-5 px-5 py-8 bg-gray-50">
      {/* Section: Rules */}
      <div
        className="mb-10"
        ref={(refElement) => (sectionsRef.current[0] = refElement)}
      >
        <h1 className="text-xl md:text-3xl font-bold text-center underline mb-5">
          Rules of Style Play
        </h1>
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 py-5">
          {rules.map((rule, index) => (
            <p className="text-lg md:text-xl font-semibold" key={index}>
              {index + 1}. {rule.description}
            </p>
          ))}
        </div>
      </div>

      {/* Section: Products */}
      <div
        className="mb-10"
        ref={(refElement) => (sectionsRef.current[1] = refElement)}
      >
        <h1 className="text-xl md:text-3xl font-bold text-center underline mb-5">
          Products or Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg"
              ref={(refElement) => (sectionsRef.current[2] = refElement)}
            >
              <img
                className="w-full md:h-72 h-60 object-cover rounded-md"
                src={product.img_url}
                alt={product.name}
              />
              <h2 className="text-xl md:text-2xl font-bold mt-4">
                {product.name}
              </h2>
              <p className="text-md md:text-lg mt-2">
                Capacity: {product.capacity}
              </p>
              <p className="text-md md:text-lg mt-2">
                Reguler: {formatRupiah(product.room_reguler_price_per_hour)} per
                hour
              </p>
              <p className="text-md md:text-lg mt-2">
                VIP: {formatRupiah(product.room_VIP_price_per_hour)} per hour
              </p>
              <p className="text-md md:text-lg mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Booking Form */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg mt-10"
        ref={(refElement) => (sectionsRef.current[3] = refElement)}
      >
        <h2 className="text-xl md:text-3xl font-bold text-center underline mb-5">
          Book a Seat
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Choose Seat */}
          <div ref={(refElement) => (sectionsRef.current[4] = refElement)}>
            <label className="block text-lg font-semibold mb-2">
              Choose a Seat:
            </label>
            <select
              name="seat"
              value={formData.seat}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Seat</option>
              {seats.map((seat) => (
                <option key={seat} value={seat}>
                  Seat {seat}
                </option>
              ))}
            </select>
          </div>

          {/* Room Type */}
          <div ref={(refElement) => (sectionsRef.current[5] = refElement)}>
            <label className="block text-lg font-semibold mb-2">
              Room Type:
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="reguler">Reguler</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          {/* Jam */}
          <div ref={(refElement) => (sectionsRef.current[6] = refElement)}>
            <label className="block text-lg font-semibold mb-2">Jam:</label>
            <select
              name="selectedTime"
              value={formData.selectedTime}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Time</option> {/* Default option */}
              {chooseTime.map((times) => (
                <option key={times.id} value={times.time}>
                  {times.time}.00
                </option>
              ))}
            </select>
          </div>

          {/* Hours */}
          <div ref={(refElement) => (sectionsRef.current[6] = refElement)}>
            <label className="block text-lg font-semibold mb-2">Hours:</label>
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              min="1"
              max="12"
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Choose Product */}
          <div ref={(refElement) => (sectionsRef.current[7] = refElement)}>
            <label className="block text-lg font-semibold mb-2">
              Choose a Product:
            </label>
            <select
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select Date */}
          <div ref={(refElement) => (sectionsRef.current[8] = refElement)}>
            <label className="block text-lg font-semibold mb-2">
              Select Date:
            </label>
            <input
              type="date"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Section: Payment Methods */}
          <div
            className="mt-4"
            ref={(refElement) => (sectionsRef.current[9] = refElement)}
          >
            <h2 className="text-md md:text-2xl font-bold text-center underline mb-5">
              Pilih Metode Pembayaran
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              ref={(refElement) => (sectionsRef.current[9] = refElement)}
            >
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center justify-center ${
                    formData.paymentMethod === method.id
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300"
                  }`}
                  onClick={() => handlePaymentMethodSelect(method.id)}
                >
                  {method.img_url ? (
                    <>
                      <img
                        src={method.img_url}
                        alt={method.name}
                        className="w-full h-20 object-contain mb-4"
                      />
                      <p className="text-center font-semibold">{method.name}</p>
                    </>
                  ) : (
                    <p className="text-center font-semibold">{method.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white font-bold rounded-md w-full mt-5"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductComponent;
