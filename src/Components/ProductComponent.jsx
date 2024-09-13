const ProductComponent = () => {
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
  
    const products = [
      {
        id: 1,
        name: "PC Gaming Room",
        price_per_hour: 15000,
        img_url:
          "https://y6a2n7m3.rocketcdn.me/wp-content/uploads/2022/08/ilustrasi-pc-gaming-ella-don-unsplash.jpg",
        capacity: "2 - 4 Person",
        description:
          "Kamu bisa bermain game dengan teman-temanmu di PC Gaming Room ini",
      },
      {
        id: 2,
        name: "PlayStation 5 Room",
        price_per_hour: 20000,
        img_url:
          "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/11/28/867090688.jpg",
        capacity: "2 - 4 Person",
        description:
          "Kamu bisa bermain game dengan teman-temanmu di PlayStation 5 Room ini",
      },
    ];

    function formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 2,
        }).format(number);
      }
  
    return (
      <div className="min-h-screen md:px-56 md:py-5 px-3 py-5">
        <h1 className="text-xl md:text-3xl font-bold text-center underline">
          Rules of Club Rusa
        </h1>
        <div className="flex flex-col gap-3 border-b-2 border-b-black py-5">
          {rules.map((rule, index) => (
            <p className="text-lg md:text-xl font-semibold" key={index}>
              {index + 1}. {rule.description}
            </p>
          ))}
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-center underline mt-10 mb-5">
          Products or Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-lg">Price: {formatRupiah(product.price_per_hour)} per hour</p>
                <p className="text-lg mt-2">{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default ProductComponent;
  