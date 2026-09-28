"use client";

import React, { useState } from "react";
import {
  Bus,
  MapPin,
  Clock,
  Download,
  AlertTriangle,
  CheckCircle2,
  Phone,
  FileText,
  UserCheck,
  Building,
  RefreshCw,
} from "lucide-react";

export interface PickupOption {
  pickupId: string;
  pickupName: string;
  morningTime: string;
  eveningTime: string;
  landmark: string;
}

export interface OriginRouteOption {
  originId: string;
  originName: string;
  routeNo: string;
  busNo: string;
  driverContact: string;
  coordinator: string;
  pickupLocations: PickupOption[];
}

export const originRoutesData: OriginRouteOption[] = [
  {
    originId: "BPL_MPNAGAR",
    originName: "Bhopal (MP Nagar / Habibganj / New Market)",
    routeNo: "Route 01 (Express)",
    busNo: "MP-04-HE-7812",
    driverContact: "+91 98260 12345",
    coordinator: "Mr. R. K. Sharma (+91 94250 88912)",
    pickupLocations: [
      {
        pickupId: "PK_MPN_01",
        pickupName: "MP Nagar Zone-1 (Near DB Mall Front Gate)",
        morningTime: "07:15 AM",
        eveningTime: "05:45 PM",
        landmark: "DB Mall Main Entry",
      },
      {
        pickupId: "PK_MPN_02",
        pickupName: "Habibganj Station (Platform 1 Bus Stop)",
        morningTime: "07:25 AM",
        eveningTime: "05:35 PM",
        landmark: "Rani Kamlapati Station Circle",
      },
      {
        pickupId: "PK_MPN_03",
        pickupName: "New Market (Near Roshanpura Square)",
        morningTime: "07:35 AM",
        eveningTime: "05:25 PM",
        landmark: "Apex Bank Crossing",
      },
      {
        pickupId: "PK_MPN_04",
        pickupName: "Polytechnic Square (Kamla Park Side)",
        morningTime: "07:45 AM",
        eveningTime: "05:15 PM",
        landmark: "Kamla Park Bus Shelter",
      },
    ],
  },
  {
    originId: "BPL_LALGHATI",
    originName: "Bhopal (Lalghati / VIP Road / Airport Area)",
    routeNo: "Route 02 (North)",
    busNo: "MP-04-HE-8921",
    driverContact: "+91 98261 54321",
    coordinator: "Mr. Suresh Verma (+91 98930 45678)",
    pickupLocations: [
      {
        pickupId: "PK_LAL_01",
        pickupName: "Lalghati Square (Near Reliance Petrol Pump)",
        morningTime: "07:20 AM",
        eveningTime: "05:40 PM",
        landmark: "Reliance Fuel Station",
      },
      {
        pickupId: "PK_LAL_02",
        pickupName: "VIP Road (Gohar Mahal Crossing)",
        morningTime: "07:30 AM",
        eveningTime: "05:30 PM",
        landmark: "Gohar Mahal Entry",
      },
      {
        pickupId: "PK_LAL_03",
        pickupName: "Bairagarh (Near Overbridge Pillar 14)",
        morningTime: "07:45 AM",
        eveningTime: "05:15 PM",
        landmark: "Sant Hirdaram Nagar Market",
      },
      {
        pickupId: "PK_LAL_04",
        pickupName: "Gandhi Nagar Square (Airport Road)",
        morningTime: "07:55 AM",
        eveningTime: "05:05 PM",
        landmark: "Gandhi Nagar Main Gate",
      },
    ],
  },
  {
    originId: "BPL_KOLAR",
    originName: "Bhopal (Kolar Road / Hoshangabad Road)",
    routeNo: "Route 03 (South)",
    busNo: "MP-04-HE-9910",
    driverContact: "+91 98262 99887",
    coordinator: "Mr. Anil Tiwari (+91 97550 12389)",
    pickupLocations: [
      {
        pickupId: "PK_KOL_01",
        pickupName: "Kolar Square (Near Chunabhatti Circle)",
        morningTime: "07:10 AM",
        eveningTime: "05:50 PM",
        landmark: "Chunabhatti Petrol Pump",
      },
      {
        pickupId: "PK_KOL_02",
        pickupName: "Bawadiya Kalan Crossing (Hoshangabad Road)",
        morningTime: "07:25 AM",
        eveningTime: "05:35 PM",
        landmark: "Aakriti Eco City Gate",
      },
      {
        pickupId: "PK_KOL_03",
        pickupName: "Misrod Square (Opposite C21 Mall)",
        morningTime: "07:40 AM",
        eveningTime: "05:20 PM",
        landmark: "C21 Mall Flyover Point",
      },
      {
        pickupId: "PK_KOL_04",
        pickupName: "Mandideep Industrial Area (Railway Crossing)",
        morningTime: "07:55 AM",
        eveningTime: "05:05 PM",
        landmark: "HEG Factory Gate",
      },
    ],
  },
  {
    originId: "SEHORE_CITY",
    originName: "Sehore (City / Bus Stand / Crescent)",
    routeNo: "Route 04 (Sehore Shuttle)",
    busNo: "MP-37-GA-4412",
    driverContact: "+91 98263 11223",
    coordinator: "Mr. Mahesh Patel (+91 94240 66778)",
    pickupLocations: [
      {
        pickupId: "PK_SEH_01",
        pickupName: "Sehore Old Bus Stand (Near Clock Tower)",
        morningTime: "07:45 AM",
        eveningTime: "05:15 PM",
        landmark: "Ghanta Ghar Square",
      },
      {
        pickupId: "PK_SEH_02",
        pickupName: "Crescent Water Park Square (Bhopal-Indore Highway)",
        morningTime: "07:55 AM",
        eveningTime: "05:05 PM",
        landmark: "Crescent Resort Entry",
      },
      {
        pickupId: "PK_SEH_03",
        pickupName: "Kothri Bypass (VIT University Entrance)",
        morningTime: "08:15 AM",
        eveningTime: "04:45 PM",
        landmark: "VIT Main Arch Gate",
      },
    ],
  },
];

export interface TransportPass {
  applicationNo: string;
  regNo: string;
  studentName: string;
  programme: string;
  originName: string;
  pickupName: string;
  morningTime: string;
  eveningTime: string;
  routeNo: string;
  busNo: string;
  address: string;
  status: "Approved" | "Pending";
  validUpto: string;
  issueDate: string;
}

export default function TransportFacility() {
  // Student Type simulation state (Hosteller by default in legacy portal view, toggleable to Day Scholar)
  const [studentType, setStudentType] = useState<"HOSTELLER" | "DAY_SCHOLAR">(
    "HOSTELLER"
  );

  // Form State
  const [selectedOriginId, setSelectedOriginId] = useState<string>("");
  const [selectedPickupId, setSelectedPickupId] = useState<string>("");
  const [pickupAddress, setPickupAddress] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [activePass, setActivePass] = useState<TransportPass | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Find currently selected origin details
  const currentOrigin = originRoutesData.find(
    (o) => o.originId === selectedOriginId
  );
  const currentPickup = currentOrigin?.pickupLocations.find(
    (p) => p.pickupId === selectedPickupId
  );

  const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const originId = e.target.value;
    setSelectedOriginId(originId);
    setSelectedPickupId("");
  };

  const handleSaveTransport = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedOriginId) {
      alert("Please select Origin.");
      return;
    }
    if (!selectedPickupId) {
      alert("Please select Pickup Location.");
      return;
    }
    if (!pickupAddress.trim()) {
      alert("Please enter Pickup Address.");
      return;
    }

    setIsProcessing(true);

    // Simulate saving transport facility
    setTimeout(() => {
      setIsProcessing(false);
      setFormSubmitted(true);

      const newPass: TransportPass = {
        applicationNo: "TF-202526-90412",
        regNo: "25MIM10100",
        studentName: "KUMAR HARSHVARDHAN",
        programme: "Integrated M.Tech. - Artificial Intelligence",
        originName: currentOrigin?.originName || "",
        pickupName: currentPickup?.pickupName || "",
        morningTime: currentPickup?.morningTime || "07:30 AM",
        eveningTime: currentPickup?.eveningTime || "05:30 PM",
        routeNo: currentOrigin?.routeNo || "Route 01",
        busNo: currentOrigin?.busNo || "MP-04-HE-7812",
        address: pickupAddress.trim(),
        status: "Approved",
        validUpto: "30-Jun-2026",
        issueDate: "08-Sep-2026",
      };

      setActivePass(newPass);
    }, 800);
  };

  const handleDownloadPass = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      alert(
        `Transport Bus Pass ${activePass?.applicationNo} downloaded successfully.`
      );
      setDownloadSuccess(false);
    }, 600);
  };

  return (
    <div className="w-full bg-[#f4f6f9] min-h-[calc(100vh-4rem)] p-3 text-[#212529] font-sans">
      <div className="max-w-[1300px] mx-auto">
        {/* Role Toggle Bar (for testing both Hosteller message and Day Scholar application) */}
        <div className="bg-white border border-[#d9d9d9] p-3 mb-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-blue-800" />
            <span className="font-bold text-xs text-gray-700">
              Student Category:
            </span>
            <span className="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded text-xs">
              {studentType === "HOSTELLER" ? "Hosteller Resident" : "Day Scholar / NLDS"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500 font-medium">Switch View Mode:</span>
            <button
              type="button"
              onClick={() => setStudentType("HOSTELLER")}
              className={`px-3 py-1 text-xs font-semibold rounded-none border cursor-pointer transition-colors ${
                studentType === "HOSTELLER"
                  ? "bg-[#d9534f] text-white border-[#d43f3a]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Hosteller View (Default)
            </button>
            <button
              type="button"
              onClick={() => setStudentType("DAY_SCHOLAR")}
              className={`px-3 py-1 text-xs font-semibold rounded-none border cursor-pointer transition-colors ${
                studentType === "DAY_SCHOLAR"
                  ? "bg-[#337ab7] text-white border-[#2e6da4]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Day Scholar Registration & Pass
            </button>
          </div>
        </div>

        {/* ================= 1. HOSTELLER MESSAGE VIEW ================= */}
        {studentType === "HOSTELLER" && (
          <div id="transportSection" className="container mt-4 max-w-3xl mx-auto">
            {/* Hosteller Message with Exact Legacy Alert Styling */}
            <div
              className="bg-[#f8d7da] border border-[#f5c6cb] text-[#721c24] text-center p-4 mt-3 rounded shadow-xs"
              role="alert"
            >
              <h5 className="text-lg font-bold m-0 flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span>Transport Facility is applicable only for Day Scholars and NLDS</span>
              </h5>
              <p className="text-xs text-gray-700 mt-2 mb-0">
                As per institutional guidelines, registered hostel residents are accommodated on
                campus and not eligible for daily bus commute facilities.
              </p>
            </div>
          </div>
        )}

        {/* ================= 2. DAY SCHOLAR APPLICATION & BUS PASS VIEW ================= */}
        {studentType === "DAY_SCHOLAR" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Active Bus Pass Banner if Form is Submitted */}
            {activePass && (
              <div className="bg-white border border-[#28a745] rounded-lg shadow-md p-5 border-t-4 border-t-[#28a745]">
                <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-3 mb-4 gap-2">
                  <div className="flex items-center gap-2.5">
                    <Bus className="w-6 h-6 text-green-700" />
                    <div>
                      <h4 className="text-base font-bold text-gray-900 m-0">
                        VIT Bhopal University - Day Scholar Bus Pass
                      </h4>
                      <span className="text-xs text-gray-500">
                        Application No: <b>{activePass.applicationNo}</b> | Academic Year: 2025-26
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block bg-[#28a745] text-white text-xs font-bold px-2.5 py-1 rounded">
                      APPROVED
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs bg-gray-50 p-4 border border-gray-200 rounded">
                  <div>
                    <span className="text-gray-500 block">Student Reg. No:</span>
                    <span className="font-bold text-blue-900 text-sm">
                      {activePass.regNo}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Student Name:</span>
                    <span className="font-bold text-gray-900 text-sm">
                      {activePass.studentName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Programme:</span>
                    <span className="font-semibold text-gray-800">
                      {activePass.programme}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Assigned Route:</span>
                    <span className="font-bold text-blue-800">
                      {activePass.routeNo}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Bus Number:</span>
                    <span className="font-bold text-gray-900 font-mono">
                      {activePass.busNo}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Boarding Point:</span>
                    <span className="font-bold text-green-800">
                      {activePass.pickupName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Morning Pickup Time:</span>
                    <span className="font-bold text-blue-900">
                      {activePass.morningTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Evening Departure Time:</span>
                    <span className="font-bold text-blue-900">
                      {activePass.eveningTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Pass Validity:</span>
                    <span className="font-bold text-emerald-700">
                      Valid upto {activePass.validUpto}
                    </span>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button
                    type="button"
                    onClick={handleDownloadPass}
                    className="inline-block bg-[#007bff] hover:bg-[#0056b3] text-white text-lg font-semibold py-3 px-7 rounded-lg transition-transform duration-200 shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
                      fontSize: "16px",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      <span>
                        {downloadSuccess ? "Generating Pass..." : "Download Bus Pass (PDF)"}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Registration Form Card */}
            <div className="bg-white border border-[#d9d9d9] rounded-lg shadow-sm">
              <div className="px-4 py-3 bg-[#f8f9fa] border-b border-[#d9d9d9] flex items-center justify-between rounded-t-lg">
                <h4 className="text-lg font-bold text-gray-800 m-0 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-blue-700" />
                  <span>Transport Facility Registration (Day Scholars & NLDS)</span>
                </h4>
                <span className="text-xs text-gray-500 font-medium">
                  Academic Year 2025-26
                </span>
              </div>

              <div className="p-5">
                <form id="transportForm" onSubmit={handleSaveTransport}>
                  <input
                    type="hidden"
                    name="_csrf"
                    value="b4a45b31-bbba-4d06-8b30-db2607b6a74b"
                  />
                  <input
                    type="hidden"
                    name="applicationNo"
                    value="TF-202526-90412"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Origin Selector */}
                    <div>
                      <label
                        htmlFor="originId"
                        className="block font-bold text-xs text-gray-700 mb-1"
                      >
                        Select Origin / Route Area <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="originId"
                        name="originId"
                        value={selectedOriginId}
                        onChange={handleOriginChange}
                        className="w-full h-[42px] border border-[#ced4da] px-3 py-2 text-xs bg-white text-gray-800 rounded focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option value="">-- Select Origin --</option>
                        {originRoutesData.map((route) => (
                          <option key={route.originId} value={route.originId}>
                            {route.originName} ({route.routeNo})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Pickup Location Selector */}
                    <div>
                      <label
                        htmlFor="pickupId"
                        className="block font-bold text-xs text-gray-700 mb-1"
                      >
                        Select Boarding / Pickup Location <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="pickupId"
                        name="pickupId"
                        value={selectedPickupId}
                        onChange={(e) => setSelectedPickupId(e.target.value)}
                        disabled={!selectedOriginId}
                        className="w-full h-[42px] border border-[#ced4da] px-3 py-2 text-xs bg-white text-gray-800 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        required
                      >
                        <option value="">-- Select Pickup Location --</option>
                        {currentOrigin?.pickupLocations.map((p) => (
                          <option key={p.pickupId} value={p.pickupId}>
                            {p.pickupName} (Pickup: {p.morningTime})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pickup Stop Details Preview Card */}
                  {currentPickup && (
                    <div className="mb-4 p-3 bg-blue-50/70 border border-blue-200 rounded text-xs space-y-1">
                      <div className="flex items-center gap-2 text-blue-950 font-bold">
                        <MapPin className="w-4 h-4 text-blue-700" />
                        <span>Pickup Stop: {currentPickup.pickupName}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-gray-700 pt-1">
                        <div>
                          <span className="text-gray-500">Morning Pickup:</span>{" "}
                          <span className="font-bold text-blue-900">
                            {currentPickup.morningTime}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Evening Drop:</span>{" "}
                          <span className="font-bold text-blue-900">
                            {currentPickup.eveningTime}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Landmark:</span>{" "}
                          <span className="font-medium">
                            {currentPickup.landmark}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pickup Address */}
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block font-bold text-xs text-gray-700 mb-1"
                    >
                      Residential / Local Pickup Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      placeholder="Enter your complete local address, house number, street, and landmark..."
                      className="w-full border border-[#ced4da] p-2.5 text-xs text-gray-800 rounded focus:outline-none focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  {/* Form Action Button */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="bg-[#007bff] hover:bg-[#0069d9] text-white font-semibold px-6 py-2.5 rounded text-sm transition-colors cursor-pointer shadow-xs disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Processing Application...</span>
                        </span>
                      ) : (
                        "Save & Apply for Transport Facility"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Complete Route & Timetable Directory */}
            <div className="bg-white border border-[#d9d9d9] rounded-lg shadow-sm p-4">
              <div className="border-b border-gray-200 pb-2 mb-3 flex items-center justify-between">
                <h4 className="text-sm font-bold text-gray-800 m-0 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span>VIT Bhopal University - Bus Routes & Timings Directory</span>
                </h4>
                <span className="text-xs text-gray-500">
                  Total Routes: <b>{originRoutesData.length}</b>
                </span>
              </div>

              <div className="space-y-4">
                {originRoutesData.map((route) => (
                  <div
                    key={route.originId}
                    className="border border-gray-200 rounded overflow-hidden"
                  >
                    <div className="bg-[#3c8dbc] text-white px-3 py-2 text-xs font-bold flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Bus className="w-4 h-4" />
                        <span>{route.originName} - {route.routeNo}</span>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-normal text-blue-100">
                        <span>Bus No: <b className="text-white">{route.busNo}</b></span>
                        <span>Coordinator: <b className="text-white">{route.coordinator}</b></span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-xs">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200 text-center">
                            <th className="p-2 border-r border-gray-200 w-[6%]">#</th>
                            <th className="p-2 border-r border-gray-200 text-left w-[44%]">
                              Boarding Stop Name
                            </th>
                            <th className="p-2 border-r border-gray-200 w-[18%]">
                              Morning Pickup
                            </th>
                            <th className="p-2 border-r border-gray-200 w-[18%]">
                              Evening Drop
                            </th>
                            <th className="p-2 text-left w-[14%]">Key Landmark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {route.pickupLocations.map((loc, idx) => (
                            <tr
                              key={loc.pickupId}
                              className={`border-b border-gray-100 text-center ${
                                idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                              } hover:bg-blue-50/50`}
                            >
                              <td className="p-2 border-r border-gray-200 font-medium">
                                {idx + 1}
                              </td>
                              <td className="p-2 border-r border-gray-200 text-left font-medium text-gray-800">
                                {loc.pickupName}
                              </td>
                              <td className="p-2 border-r border-gray-200 font-bold text-blue-900">
                                {loc.morningTime}
                              </td>
                              <td className="p-2 border-r border-gray-200 font-bold text-blue-900">
                                {loc.eveningTime}
                              </td>
                              <td className="p-2 text-left text-gray-600">
                                {loc.landmark}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
