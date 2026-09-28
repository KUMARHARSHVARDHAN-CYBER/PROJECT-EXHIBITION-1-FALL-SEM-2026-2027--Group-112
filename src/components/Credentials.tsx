"use client";

import React from "react";

// Mock JSON dataset extracted from legacy VTOP Credentials payload
const mockCredentialsData = {
  authorizedID: "25MIM10100",
  csrfName: "_csrf",
  csrfValue: "11158dce-fb5a-4779-9cd6-7a8373346b26",
  accountCredentials: [
    {
      id: "gmail",
      account: "Gmail",
      username: "kumar.25mim10100@vitbhopal.ac.in",
      defaultCredentials: "25mim10100",
      urlText: "Click here",
      urlHref: "https://gmail.com",
      supportMail: "sdc@vitbhopal.ac.in",
      supportMailHref: "mailto:sdc@vitbhopal.ac.in",
    },
    {
      id: "two-step",
      account: "Two Step Verification Number",
      username: "25MIM10100",
      defaultCredentials: "",
      urlText: "",
      urlHref: "",
      supportMail: "",
      supportMailHref: "",
    },
  ],
  wifiDetails: [
    { label: "SSID", value: "VITBPL" },
    { label: "Username / Identity", value: "25MIM10100" },
    { label: "Password", value: "l892fd" },
  ],
  eapConfiguration: [
    { property: "EAP Method", value: "PEAP" },
    { property: "Phase-2 Authentication", value: "MSCHAPV2" },
    { property: "CA Certificate", value: "Unspecified / None / Do not validate / Trust on first use" },
    { property: "Anonymous Identity", value: "Leave blank" },
    { property: "Privacy Settings", value: "Use Device MAC / Phone MAC / Fixed MAC" },
  ],
  macWarning: {
    heading: "❌ Do NOT use Randomised/Rotating MAC Address.",
    note: '(For iPhone/MacBook users: Disable "Limit IP Address Tracking")',
  },
  guidelines: [
    {
      id: "support",
      content: "Should the issue persist, please email us at",
      emailLink: "wifi.issues@vitbhopal.ac.in",
      emailHref: "mailto:wifi.issues@vitbhopal.ac.in",
      suffix: "or visit the CTS Office with your device for personalised technical assistance.",
      hasHighlight: true,
    },
    {
      id: "vpn",
      content: "Avoid using a VPN, as it may cause speed or connectivity issues.",
      hasHighlight: false,
    },
    {
      id: "device-limit",
      prefix: "Limit usage to",
      boldText: "two devices per user",
      suffix: ". Additional devices can be connected via hotspot sharing.",
      hasHighlight: false,
    },
    {
      id: "confidential",
      content: "Do not share your Wi-Fi credentials with anyone. Keep them confidential.",
      hasHighlight: false,
    },
  ],
  closingMessage: {
    line1: "We look forward to and appreciate your cooperation.",
    line2: "Wishing you a smooth and uninterrupted browsing experience!",
  },
  moodleNotice: {
    prefix: "For Moodle Credentials:",
    instruction: "Please enter only the Registration Number as user name in the link",
    linkText: "Click here",
    linkHref: "https://moovit.vit.ac.in/login/forgot_password.php",
    suffix: ". Mail with instructions will be sent to your VIT email ID",
  },
};

export default function Credentials() {
  const credentials = mockCredentialsData;

  return (
    <div className="w-full mt-[30px]" id="page-wrapper">
      {/* Main Bootstrap 3 / AdminLTE Style Box */}
      <div className="w-full bg-white border border-[#d2d6de] border-t-[3px] border-t-[#00c0ef] rounded-none shadow-none">
        {/* Box Header */}
        <div className="border-b border-[#f4f4f4] px-4 py-2.5">
          <h3 className="text-lg font-bold text-[#444] m-0 leading-tight">
            <b>Credentials</b>
          </h3>
        </div>

        {/* Hidden Legacy Form Parameters */}
        <form
          className="hidden"
          method="post"
          action="addStudents"
          id="employeeForm"
          autoComplete="off"
        >
          <input
            type="hidden"
            name="authorizedID"
            id="authorizedID"
            value={credentials.authorizedID}
          />
          <input
            type="hidden"
            name={credentials.csrfName}
            value={credentials.csrfValue}
          />
        </form>

        {/* Details Container with Legacy 20px margins */}
        <div id="showDetails" className="m-5">
          <div className="overflow-x-auto">
            <div id="fixedTableContainer" className="w-full">
              {/* Primary Account & Wi-Fi Procedures Table */}
              <table className="w-full border-collapse border border-[#ddd] text-xs text-gray-800">
                <tbody>
                  {/* Table Header */}
                  <tr className="bg-[#f5f5f5] font-bold border-b border-[#ddd]">
                    <td className="border border-[#ddd] p-2 text-left font-bold">
                      Account
                    </td>
                    <td className="border border-[#ddd] p-2 text-left font-bold">
                      User Name
                    </td>
                    <td className="border border-[#ddd] p-2 text-left font-bold">
                      Default Credentials
                    </td>
                    <td className="border border-[#ddd] p-2 text-left font-bold">
                      URL
                    </td>
                    <td className="border border-[#ddd] p-2 text-left font-bold">
                      Support Mail
                    </td>
                  </tr>

                  {/* Dynamically Mapped Account Credentials Rows */}
                  {credentials.accountCredentials.map((account) => (
                    <tr key={account.id} className="border-b border-[#ddd] bg-white">
                      <td className="border border-[#ddd] p-2 font-bold">
                        {account.account}
                      </td>
                      <td className="border border-[#ddd] p-2">
                        {account.username}
                      </td>
                      <td className="border border-[#ddd] p-2">
                        {account.defaultCredentials || ""}
                      </td>
                      <td className="border border-[#ddd] p-2">
                        {account.urlText ? (
                          <a
                            href={account.urlHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline text-blue-800 hover:text-blue-900"
                          >
                            {account.urlText}
                          </a>
                        ) : null}
                      </td>
                      <td className="border border-[#ddd] p-2">
                        {account.supportMail ? (
                          <a
                            href={account.supportMailHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline text-blue-800 hover:text-blue-900"
                          >
                            {account.supportMail}
                          </a>
                        ) : null}
                      </td>
                    </tr>
                  ))}

                  {/* Wi-Fi Connectivity Procedures Collapsed Sub-table Section */}
                  <tr className="border-b border-[#ddd]">
                    <td
                      colSpan={5}
                      className="p-5 bg-[#f9f9f9] border border-[#ddd]"
                    >
                      {/* Section Title */}
                      <h4 className="text-base font-bold text-[#0b5394] mt-0 mb-3.5">
                        <b>📶 Wi-Fi Connectivity Procedures (Mobile Phones)</b>
                      </h4>

                      {/* Subsection 1: Wi-Fi Details */}
                      <h5 className="text-sm font-bold text-gray-900 mb-2">
                        <b>🔹 Wi-Fi Details</b>
                      </h5>

                      <table className="w-full border-collapse border border-[#ddd] text-xs mb-3.5 bg-white">
                        <tbody>
                          {credentials.wifiDetails.map((detail, idx) => (
                            <tr key={idx} className="border-b border-[#ddd]">
                              <td className="border border-[#ddd] p-2 font-bold w-[30%] bg-[#fafafa]">
                                <b>{detail.label}</b>
                              </td>
                              <td className="border border-[#ddd] p-2">
                                {detail.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Subsection 2: Mobile Wi-Fi Configuration */}
                      <h5 className="text-sm font-bold text-gray-900 mb-2">
                        <b>📱 Mobile Wi-Fi Configuration (802.1x EAP)</b>
                      </h5>

                      <table className="w-full border-collapse border border-[#ddd] text-xs mb-3.5 bg-white">
                        <tbody>
                          {credentials.eapConfiguration.map((config, idx) => (
                            <tr key={idx} className="border-b border-[#ddd]">
                              <td className="border border-[#ddd] p-2 font-bold w-[35%] bg-[#fafafa]">
                                <b>{config.property}</b>
                              </td>
                              <td className="border border-[#ddd] p-2">
                                {config.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* MAC Address Policy Warning */}
                      <div className="text-red-600 font-bold mb-3.5 text-xs leading-relaxed">
                        {credentials.macWarning.heading}
                        <br />
                        {credentials.macWarning.note.includes('"Limit IP Address Tracking"') ? (
                          <>
                            (For iPhone/MacBook users: Disable{" "}
                            <b>&quot;Limit IP Address Tracking&quot;</b>)
                          </>
                        ) : (
                          credentials.macWarning.note
                        )}
                      </div>

                      {/* Subsection 3: Additional Guidelines */}
                      <h5 className="text-sm font-bold text-gray-900 mb-2">
                        <b>📌 Additional Guidelines</b>
                      </h5>

                      <ul className="text-xs text-gray-800 list-disc pl-5 space-y-1 leading-7">
                        {credentials.guidelines.map((guideline) => (
                          <li key={guideline.id}>
                            {guideline.id === "support" ? (
                              <>
                                {guideline.content}{" "}
                                <a
                                  href={guideline.emailHref}
                                  className="font-bold text-blue-800 hover:underline"
                                >
                                  <b>{guideline.emailLink}</b>
                                </a>{" "}
                                or visit the <b>CTS Office</b> with your device for
                                personalised technical assistance.
                              </>
                            ) : guideline.id === "device-limit" ? (
                              <>
                                {guideline.prefix} <b>{guideline.boldText}</b>
                                {guideline.suffix}
                              </>
                            ) : (
                              guideline.content
                            )}
                          </li>
                        ))}
                      </ul>

                      {/* Closing Cooperative Message */}
                      <div className="mt-3.5 text-green-700 font-bold text-xs leading-relaxed">
                        {credentials.closingMessage.line1}
                        <br />
                        {credentials.closingMessage.line2}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Moodle Credentials Notice Section */}
              <div className="mt-5 text-xs leading-relaxed">
                <span className="text-red-600 underline">
                  {credentials.moodleNotice.prefix}{" "}
                </span>
                <span className="text-red-600">
                  {credentials.moodleNotice.instruction}{" "}
                  <a
                    href={credentials.moodleNotice.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-red-600 hover:text-red-700"
                  >
                    {credentials.moodleNotice.linkText}
                  </a>
                  {credentials.moodleNotice.suffix}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <noscript>
        <h2 className="text-red-600 font-bold text-base mt-2">
          Enable JavaScript to Access VTOP
        </h2>
      </noscript>
    </div>
  );
}
