import "../App.css";
export default function Greetings() {
  const bookingRules = [
    {
      id: 1,
      description:
        "Untuk menggunakan promo Room Normal di atas 4 jam dan 7 jam bisa tetap book melalui WA kami 085179558820 (Jika tidak ingin menggunakan promo bisa book secara mandiri disini)",
    },
    {
      id: 2,
      description:
        "Booking bisa DP 50% terlebih dahulu (menggunakan kode promo “DP 50”) atau bisa langsung full payment",
    },
    {
      id: 3,
      description: "NO RESCHEDULE / REFUND",
    },
    {
      id: 4,
      description: "Jika ingin cancel diharapkan infokan ke admin whatsapp",
    },
  ];

  const contactDetails = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/128/774/774156.png",
      description: "Setiap hari 05.00 - 23.00",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/128/149/149059.png",
      description: "Jl. Jendral Sudirman No. 1",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/128/2965/2965306.png",
      description: "fulan911@gmail.com",
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968841.png",
      description: "081234567890",
    },
  ];

  return (
    <>
      <div className="min-h-screen md:px-56 md:py-5 px-3 py-5">
        <div className="flex justify-center mb-5 mt-2 md:mb-10 md:mt-5">
          <img
            className="md:w-2/3 w-full"
            src="https://lostinanime.com/wp-content/uploads/2024/07/Shikanoko-Nokonoko-Koshitantan-01-05.jpg"
            alt="Gambar utama"
          />
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col gap-3 border-b-2 border-b-black pb-5">
          <h1 className="text-xl md:text-3xl font-bold text-center">
            Selamat Datang, Fulan di Style Play Gaming Center
          </h1>
          {contactDetails.map((detail, index) => (
            <div className="flex gap-2 md:text-xl text-lg items-center py-3" key={index}>
              <img className="md:w-12 w-10" src={detail.icon} alt={`icon-${index}`} />
              <p>{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Rules Section */}
        <div className="flex flex-col gap-3 border-b-2 border-b-black py-5">
          <h1 className="text-xl md:text-3xl font-bold">Booking Policy</h1>
          {bookingRules.map((rule, index) => (
            <p className="text-lg md:text-xl font-semibold" key={index}>
              - {rule.description}
            </p>
          ))}
        </div>

        {/* Product Link Section */}
        <div className="flex gap-2 items-center md:text-xl text-lg py-5">
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
            alt="product-icon"
          />
          <a className="hover:text-yellow-600 hover:italic ease-in-out" href="/product">
            Lihat Product
          </a>
        </div>
      </div>
    </>
  );
}
