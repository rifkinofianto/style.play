import "../App.css";
export default function Greetings() {
  const rules = [
    {
      id: 1,
      description:
        " Untuk menggunakan promo Room Normal di atas 4 jam dan 7 jam bisa tetap book melalui WA kami 085179558820 (Jika tidak ingin menggunakan promo bisa book secara mandiri disini)",
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
  return (
    <>
      <div className="text-white rgb-gradient min-h-screen md:px-56 md:py-5 px-3 py-5">
        <div className="flex justify-center mb-5 mt-2 md:mb-10 md:mt-5">
          <img
            className="md:w-2/3 w-full"
            src="https://lostinanime.com/wp-content/uploads/2024/07/Shikanoko-Nokonoko-Koshitantan-01-05.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 border-b-2 pb-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Selamat Datang, Fulan di Style Play Gaming Center
          </h1>
          <div className="flex gap-2 md:text-xl text-lg items-center py-3">
            <img
              className="md:w-12 w-10"
              src="https://cdn-icons-png.flaticon.com/128/774/774156.png"
              alt=""
            />
            <p>Setiap hari 05.00 - 23.00</p>
          </div>
          <div className="flex gap-2 md:text-xl text-lg items-center py-3">
            <img
              className="md:w-12 w-10"
              src="https://cdn-icons-png.flaticon.com/128/149/149059.png"
              alt=""
            />
            <p>Jl. Jendral Sudirman No. 1</p>
          </div>
          <div className="flex gap-3 md:text-xl text-lg items-center py-3">
            <img
              className="md:w-10 w-8"
              src="https://cdn-icons-png.flaticon.com/128/2965/2965306.png"
              alt=""
            />
            <p>fulan911@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center md:text-xl text-lg py-3">
            <img
              className="md:w-10 w-8"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
              alt=""
            />
            <p>081234567890</p>
          </div>
          
        </div>
        <div className="flex flex-col gap-3 border-b-2 py-5 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl md:text-3xl font-bold">Rules</h1>
            {rules.map((rule, index) => (
              <p className="text-lg md:text-xl font-semibold" key={index}>
                - {rule.description}
              </p>
            ))}
          </div>
          <div className="flex gap-2 items-center md:text-xl text-lg">
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
              alt=""
            />
            <a
              className="hover:text-yellow-600 hover:italic ease-in-out"
              href="/product"
            >
              Lihat Product
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
