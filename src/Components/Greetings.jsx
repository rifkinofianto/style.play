import "../App.css";
import Logo from "../assets/main_picture.jpg";

export default function Greetings() {
  const bookingRules = [
    {
      id: 1,
      description:
        "Pemesanan hanya dapat dilakukan melalui website resmi atau langsung di lokasi.",
    },
    {
      id: 2,
      description:
        "Pembayaran penuh harus dilakukan di muka saat pemesanan melalui website.",
    },
    {
      id: 3,
      description:
        "Jika pelanggan datang terlambat, waktu pemesanan tetap dihitung sejak waktu yang dijadwalkan.",
    },
    { id: 4, description: "NO RESCHEDULE / REFUND" },
    {
      id: 5,
      description: "Jika ingin cancel diharapkan infokan ke admin whatsapp",
    },
  ];

  const contactDetails = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/128/774/774156.png",
      description: "24 jam kecuali hari minggu dan libur nasional",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/128/149/149059.png",
      description: "Jl. Jendral Sudirman No. 1",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/128/2965/2965306.png",
      description: "styleplay@gmail.com",
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968841.png",
      description: "081234567890",
    },
  ];

  return (
    <>
      <div className="min-h-screen md:px-56 px-3 py-10 bg-gray-100">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-10">
          <img
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            src={Logo}
            alt="Gambar utama"
          />
          <h1 className="md:text-3xl text-2xl font-bold text-center text-gray-800 mt-8">
            Selamat Datang, Fulan di Style Play Gaming Center
          </h1>
        </div>

        {/* Booking Policy Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="md:text-2xl text-xl font-semibold text-gray-700 mb-5 border-b-2 pb-3">
            Kebijakan Booking
          </h2>
          <ul className="list-disc ml-5 md:text-xl text-lg space-y-2">
            {bookingRules.map((rule) => (
              <li className="text-lg text-gray-600" key={rule.id}>
                {rule.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Link Section */}
        <div className="flex justify-center md:mb-6 mb-3">
          <a
            href="/product"
            className="bg-blue-600 md:text-lg text-md text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors ease-in-out duration-300"
          >
            Booking Sekarang!
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white md:py-10 py-5">
        <div className="container mx-auto px-3">
          <h2 className="md:text-2xl text-xl font-semibold mb-6 text-center md:text-left">
            Kontak Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-5">
            {contactDetails.map((detail) => (
              <div
                className="flex items-center gap-4 md:text-xl text-lg"
                key={detail.id}
              >
                <img
                  className="w-10 h-10 md:w-12 md:h-12"
                  src={detail.icon}
                  alt={`icon-${detail.id}`}
                />
                <p className="">{detail.description}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 md:mt-8 mt-4 md:pt-6 pt-3 text-center text-gray-400">
            <p>&copy; 2024 Style Play Gaming Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
