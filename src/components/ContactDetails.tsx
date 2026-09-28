import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export interface ContactItem {
  id: string;
  department: string;
  institution: string;
  email: string;
  phone?: string;
  officeHours?: string;
}

export const contactDirectory: ContactItem[] = [
  {
    id: "dean-academics",
    department: "Office of the Dean (Academics)",
    institution: "VIT Bhopal",
    email: "info@vitbhopal.ac.in",
    phone: "+91 7560 254500",
  },
  {
    id: "admissions",
    department: "Admissions Office",
    institution: "VIT Bhopal",
    email: "admissions@vitbhopal.ac.in",
    phone: "+91 7560 254501",
  },
  {
    id: "proctor-office",
    department: "Office of the Student Welfare / Proctor",
    institution: "VIT Bhopal",
    email: "proctor@vitbhopal.ac.in",
    phone: "+91 7560 254502",
  },
  {
    id: "controller-examinations",
    department: "Controller of Examinations (CoE)",
    institution: "VIT Bhopal",
    email: "coe@vitbhopal.ac.in",
    phone: "+91 7560 254503",
  },
  {
    id: "pat-office",
    department: "Placement & Training Cell (PAT)",
    institution: "VIT Bhopal",
    email: "pat@vitbhopal.ac.in",
    phone: "+91 7560 254504",
  },
  {
    id: "hostel-warden",
    department: "Hostel & Estate Office",
    institution: "VIT Bhopal",
    email: "hostel@vitbhopal.ac.in",
    phone: "+91 7560 254505",
  },
  {
    id: "finance-office",
    department: "Finance & Accounts Office",
    institution: "VIT Bhopal",
    email: "finance@vitbhopal.ac.in",
    phone: "+91 7560 254506",
  },
  {
    id: "transport-facility",
    department: "Transport & Facilities Management",
    institution: "VIT Bhopal",
    email: "transport@vitbhopal.ac.in",
    phone: "+91 7560 254507",
  },
  {
    id: "health-centre",
    department: "Health Centre & Emergency Services",
    institution: "VIT Bhopal",
    email: "healthcenter@vitbhopal.ac.in",
    phone: "+91 7560 254508",
  },
];

export default function ContactDetails() {
  return (
    <div className="w-full" id="main-section">
      <div className="px-3">
        <div className="w-full">
          {/* Main Container Card */}
          <div className="w-full mx-auto bg-white border-0 shadow-lg rounded-none">
            {/* Main Header */}
            <div className="border-0 py-3 text-center">
              <strong className="font-bold text-2xl sm:text-3xl text-blue-700">
                VIT Bhopal Campus Contact Details
              </strong>
            </div>

            {/* Sub-header text area */}
            <div className="text-red-600 text-center text-xs font-bold min-h-2" />

            {/* Card Body with Contact Grid */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {contactDirectory.map((contact) => (
                  <div key={contact.id} className="h-full">
                    {/* Individual Contact Card */}
                    <div className="bg-white rounded-lg shadow-md h-full flex flex-col overflow-hidden border border-gray-200">
                      {/* Department Title Header */}
                      <div className="bg-[#2672a4] text-center py-2.5 px-3">
                        <strong className="text-white font-bold text-sm sm:text-base leading-snug block">
                          {contact.department}
                        </strong>
                      </div>

                      {/* Card Body */}
                      <div className="bg-[#f8f9fa] text-gray-900 text-center p-3 sm:p-4 flex-1 flex flex-col justify-center space-y-1">
                        <p className="text-[13px] text-gray-800 font-normal flex items-center justify-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-500 inline shrink-0" />
                          <span>{contact.institution}</span>
                        </p>
                        
                        <p className="text-green-600 font-bold text-[14px] flex items-center justify-center gap-1.5 break-all">
                          <Mail className="w-3.5 h-3.5 text-green-600 inline shrink-0" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="hover:underline text-green-600"
                          >
                            {contact.email}
                          </a>
                        </p>

                        {contact.phone && (
                          <p className="text-[12px] text-gray-600 font-medium flex items-center justify-center gap-1 mt-1">
                            <Phone className="w-3 h-3 text-gray-500 inline shrink-0" />
                            <span>{contact.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <noscript>
        <h2 className="text-red-600 text-center font-bold mt-4">
          Enable JavaScript to Access VTOP
        </h2>
      </noscript>
    </div>
  );
}
