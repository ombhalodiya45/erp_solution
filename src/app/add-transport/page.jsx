"use client";
import { useState } from "react";

export default function AddTransport() {
  const [transportName, setTransportName] = useState("");
  const [locations, setLocations] = useState([""]);

  const addLocationField = () => {
    setLocations([...locations, ""]);
  };

  const updateLocation = (index, value) => {
    const updated = [...locations];
    updated[index] = value;
    setLocations(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Add New Transport
        </h1>

        {/* Form Section */}
        <div className="space-y-6">

          {/* Transport Name */}
          <div>
            <label className="text-gray-700 font-semibold">Transport Name</label>
            <input
              type="text"
              placeholder="Enter transport name"
              value={transportName}
              onChange={(e) => setTransportName(e.target.value)}
              className="
                w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                transition duration-200 outline-none bg-gray-50
                placeholder-gray-500 text-gray-800
              "
            />
          </div>

          {/* Locations */}
          <div>
            <label className="text-gray-700 font-semibold">Locations</label>

            <div className="space-y-3 mt-2">
              {locations.map((loc, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Location ${i + 1}`}
                  value={loc}
                  onChange={(e) => updateLocation(i, e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-xl border border-gray-300 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition duration-200 outline-none bg-gray-50
                    placeholder-gray-500 text-gray-800
                  "
                />
              ))}
            </div>

            <button
              onClick={addLocationField}
              className="
                mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-xl
                hover:bg-blue-700 transition font-semibold shadow-md
              "
            >
              + Add Location
            </button>
          </div>
        </div>

        {/* Save Button (Changed to Blue) */}
        <button
          className="
            w-full mt-10 py-4 bg-blue-600 text-white text-lg font-semibold 
            rounded-xl shadow-md hover:bg-blue-700 transition
          "
        >
          Save Transport
        </button>
      </div>
    </div>
  );
}
