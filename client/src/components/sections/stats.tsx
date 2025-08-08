
export default function StatsSection() {
  const customers = [
    { name: "African American Alliance of CDFI CEOs", logo: "/slider1_1754629751130.png" },
    { name: "Central County Community Development Corporation", logo: "/slider2_1754629751129.webp" },
    { name: "South Carolina Community Loan Fund", logo: "/slider3_1754629751129.png" },
    { name: "Baltimore Community Lending", logo: "/slider4_1754629751129.png" },
    { name: "Neighborhood Development Center", logo: "/slider5_1754629751129.png" },
    { name: "Customer 6", logo: "/slider6_1754629751128.png" }
  ];

  return (
    <section className="py-16 bg-zen-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Leading CDFIs</h2>
          <p className="text-white opacity-80">
            Organizations we're proud to serve and protect
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {customers.map((customer, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg h-24">
              <img 
                src={customer.logo} 
                alt={customer.name}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
