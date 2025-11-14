"use client";

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
      <header className="w-full bg-white shadow-sm border-b border-slate-200 py-4 px-6 flex items-center justify-between sticky top-0 z-20">
        <h1 className="text-xl font-semibold text-slate-800">ERP Dashboard</h1>

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow-sm">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Greeting */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Welcome Back 👋
          </h2>
          <p className="text-slate-500 mt-1">
            Manage transport firms and operations easily.
          </p>
        </div>

        {/* Transport Section */}
        <div className="mt-10 bg-white border border-slate-200 shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-slate-800">
            Active Transport Firms
          </h3>

          <p className="text-sm text-slate-500 mt-1 mb-6">
            Add / edit / remove transport firms from this module.
          </p>

          {/* Cards Grid */}
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

    </div>
  );
}
