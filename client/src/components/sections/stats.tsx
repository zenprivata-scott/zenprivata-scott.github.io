export default function StatsSection() {
  const stats = [
    { value: "150+", label: "CDFIs Protected" },
    { value: "98%", label: "Average Compliance" },
    { value: "$2.5B", label: "Data Protected" },
    { value: "99%", label: "Incident Reduction" }
  ];

  return (
    <section className="py-16 bg-zen-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-zen-orange mb-2">{stat.value}</div>
              <div className="text-white opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
