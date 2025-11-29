"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Dashboard() {
  const transports = [
    {
      name: "NEW GANDHI TRANSPORT",
      locations: ["UMRETH", "DAKOR", "THASARA", "SEVALIYA", "BALASINOR", "SAVLI"],
    },
    {
      name: "MATANGI TRANSPORT",
      locations: ["DAHOD", "ZALOD"],
    },
    {
      name: "AAI KRUPA TRANSPORT",
      locations: ["DEESA", "PALANPUR", "DHANERA"],
    },
    {
      name: "SUNDHESWARI TRANSPORT",
      locations: ["SACHOR (RJ)"],
    },
    {
      name: "JOGAMAYA TRANSPORT",
      locations: ["KALOL", "CHHATRAL", "KADI"],
    },
    {
      name: "MILAN ROAD CARRIER",
      locations: ["MEHSANA", "BECHARAJI"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Transport Section */}
        <div className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transports.map((t, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-semibold text-slate-900">
                  {t.name}
                </h4>

                <div className="mt-3">
                  <h5 className="text-sm font-medium text-slate-700">
                    Locations:
                  </h5>
                  <ul className="mt-1 text-slate-500 text-sm space-y-1">
                    {t.locations.map((loc, i) => (
                      <li key={i}>• {loc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
