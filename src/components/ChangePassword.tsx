"use client";

import React, { useState } from "react";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    captchaInput: "",
  });

  const [captchaCode, setCaptchaCode] = useState<string>("7W9K2");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [systemMessage, setSystemMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  // Generate random 5-character alphanumeric captcha
  const refreshCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (systemMessage.text) {
      setSystemMessage({ text: "", type: "" });
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      captchaInput: "",
    });
    setSystemMessage({ text: "", type: "" });
    refreshCaptcha();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Basic Required Validation
    if (!formData.oldPassword.trim()) {
      setSystemMessage({
        text: "Please enter your current (old) password.",
        type: "error",
      });
      return;
    }

    if (!formData.newPassword.trim()) {
      setSystemMessage({
        text: "Please enter your new password.",
        type: "error",
      });
      return;
    }

    if (!formData.confirmPassword.trim()) {
      setSystemMessage({
        text: "Please confirm your new password.",
        type: "error",
      });
      return;
    }

    // 2. Password Match Validation
    if (formData.newPassword !== formData.confirmPassword) {
      setSystemMessage({
        text: "Password mismatch! New Password and Confirm Password do not match.",
        type: "error",
      });
      return;
    }

    // 3. New password cannot be same as old password
    if (formData.oldPassword === formData.newPassword) {
      setSystemMessage({
        text: "New Password cannot be identical to the Old Password.",
        type: "error",
      });
      return;
    }

    // 4. Strict Password Policy Checks
    const pass = formData.newPassword;
    const hasMinLen = pass.length >= 8 && pass.length <= 20;
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasDigit = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass);

    if (!hasMinLen || !hasUpper || !hasLower || !hasDigit || !hasSpecial) {
      setSystemMessage({
        text: "Password does not meet institutional complexity requirements. Please review the Password Policy rules on the right.",
        type: "error",
      });
      return;
    }

    // 5. Captcha Verification
    if (formData.captchaInput.trim().toUpperCase() !== captchaCode) {
      setSystemMessage({
        text: "Invalid Captcha entered. Please re-enter the verification code.",
        type: "error",
      });
      refreshCaptcha();
      return;
    }

    // Simulate Server Update
    setIsSubmitting(true);
    setSystemMessage({ text: "", type: "" });

    setTimeout(() => {
      setIsSubmitting(false);
      setSystemMessage({
        text: "Password updated successfully! Please use your new credentials on your next login.",
        type: "success",
      });
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        captchaInput: "",
      });
      refreshCaptcha();
    }, 600);
  };

  return (
    <div
      className="bootstrap3-iso w-full bg-[#f4f6f9] text-[#333333] font-sans antialiased"
      id="page-wrapper"
    >
      <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3" id="main-section">
        <div className="row">
          <div className="col-12 bg-white">
            {/* VTOP Card Frame */}
            <div className="card mt-2 mb-5 border border-[#d2d6de] shadow-none rounded-none bg-white">
              {/* Card Header with legacy primaryBorderTop border */}
              <div className="card-header border-b border-[#e5e5e5] border-t-4 border-t-[#295b86] bg-[#f9fafb] px-4 py-3">
                <strong className="text-xl sm:text-2xl font-bold text-[#333333] block">
                  Change Password & Account Security
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                {/* Institutional Student Header Info Bar */}
                <div className="bg-[#eef2f7] border border-[#d2d6de] p-3 mb-5 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div>
                      <span className="font-bold text-[#295b86]">User ID: </span>
                      <span className="font-semibold text-[#333333]">25MIM10100 (STUDENT)</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Name: </span>
                      <span className="font-semibold text-[#333333]">KUMAR HARSHVARDHAN</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Last Changed: </span>
                      <span className="font-semibold text-[#333333]">12-Jan-2026 14:32:10</span>
                    </div>
                  </div>
                </div>

                {/* System Message Banner */}
                {systemMessage.text && (
                  <div
                    id="Message"
                    className={`mb-5 p-3 text-center text-xs sm:text-sm font-bold border ${
                      systemMessage.type === "error"
                        ? "bg-[#f2dede] border-[#ebccd1] text-[#a94442]"
                        : "bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]"
                    }`}
                  >
                    <p id="pageMessage" className="m-0">
                      {systemMessage.text}
                    </p>
                  </div>
                )}

                {/* Main 2-Column Rigid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Rigid Form Table */}
                  <div className="lg:col-span-7">
                    <form
                      id="changePasswordForm"
                      name="changePasswordForm"
                      role="form"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <table className="table w-full border-collapse border border-[#d2d6de] text-xs sm:text-sm mb-4">
                        <tbody>
                          {/* User ID Row (Readonly) */}
                          <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                            <th className="w-1/3 px-3 py-2.5 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                              User ID / Reg. No
                            </th>
                            <td className="w-2/3 px-3 py-2.5 text-[#555555] font-semibold bg-[#eaeaea] align-middle">
                              25MIM10100
                            </td>
                          </tr>

                          {/* Old Password */}
                          <tr className="border-b border-[#d2d6de] bg-white">
                            <th className="px-3 py-2.5 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                              Old Password <span className="text-red-600">*</span>
                            </th>
                            <td className="px-3 py-2.5 align-middle">
                              <input
                                tabIndex={1}
                                type="password"
                                name="oldPassword"
                                id="oldPassword"
                                value={formData.oldPassword}
                                onChange={handleInputChange}
                                placeholder="Enter current password"
                                maxLength={30}
                                className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                              />
                            </td>
                          </tr>

                          {/* New Password */}
                          <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                            <th className="px-3 py-2.5 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                              New Password <span className="text-red-600">*</span>
                            </th>
                            <td className="px-3 py-2.5 align-middle">
                              <input
                                tabIndex={2}
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                placeholder="Enter new password"
                                maxLength={30}
                                className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                              />
                            </td>
                          </tr>

                          {/* Confirm Password */}
                          <tr className="border-b border-[#d2d6de] bg-white">
                            <th className="px-3 py-2.5 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                              Confirm Password <span className="text-red-600">*</span>
                            </th>
                            <td className="px-3 py-2.5 align-middle">
                              <input
                                tabIndex={3}
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Re-enter new password"
                                maxLength={30}
                                className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                              />
                            </td>
                          </tr>

                          {/* Captcha Verification */}
                          <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                            <th className="px-3 py-2.5 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                              Verification Code <span className="text-red-600">*</span>
                            </th>
                            <td className="px-3 py-2.5 align-middle">
                              <div className="flex items-center gap-2">
                                <div className="bg-[#2c3e50] text-[#f1c40f] font-mono tracking-widest px-3 py-1 text-sm font-bold select-none border border-[#1a252f] line-through decoration-slate-400">
                                  {captchaCode}
                                </div>
                                <button
                                  type="button"
                                  onClick={refreshCaptcha}
                                  title="Refresh Captcha"
                                  className="text-xs bg-[#e0e0e0] hover:bg-[#d0d0d0] text-[#333333] px-2 py-1 border border-[#ccc] rounded-none cursor-pointer"
                                >
                                  ↻
                                </button>
                                <input
                                  tabIndex={4}
                                  type="text"
                                  name="captchaInput"
                                  id="captchaInput"
                                  value={formData.captchaInput}
                                  onChange={handleInputChange}
                                  placeholder="Enter code"
                                  maxLength={6}
                                  className="w-28 h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] uppercase focus:border-[#66afe9] focus:outline-none"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          tabIndex={5}
                          type="submit"
                          disabled={isSubmitting}
                          className={`text-xs sm:text-sm font-bold py-1.5 px-4 rounded-none border transition-colors cursor-pointer ${
                            isSubmitting
                              ? "bg-gray-400 text-white border-gray-500 cursor-not-allowed"
                              : "bg-[#337ab7] hover:bg-[#286090] text-white border-[#2e6da4]"
                          }`}
                        >
                          {isSubmitting ? "Updating..." : "Update Password"}
                        </button>
                        <button
                          tabIndex={6}
                          type="button"
                          onClick={handleReset}
                          className="text-xs sm:text-sm font-semibold py-1.5 px-4 rounded-none border bg-[#f0ad4e] hover:bg-[#ec971f] text-white border-[#eea236] transition-colors cursor-pointer"
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right Column: Rigid Password Policy Box */}
                  <div className="lg:col-span-5">
                    <div className="bg-[#fff9e6] border border-[#ffe082] p-4 text-xs text-[#8a6d3b]">
                      <div className="pb-2 mb-2 border-b border-[#ffe082]">
                        <strong className="text-sm font-bold text-[#6d4c41] block">
                          Password Complexity Policy
                        </strong>
                      </div>
                      <p className="mb-2 text-[11px] text-[#795548] leading-tight">
                        To maintain high university cyber security standards, your new password must strictly satisfy the following criteria:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-[#5d4037]">
                        <li>Length must be between <strong>8 and 20 characters</strong>.</li>
                        <li>Must contain at least <strong>1 uppercase alphabet (A - Z)</strong>.</li>
                        <li>Must contain at least <strong>1 lowercase alphabet (a - z)</strong>.</li>
                        <li>Must contain at least <strong>1 numeric digit (0 - 9)</strong>.</li>
                        <li>
                          Must contain at least <strong>1 special character</strong>:
                          <code className="block bg-[#fff3e0] text-[#bf360c] px-1 py-0.5 mt-0.5 font-mono text-[11px] border border-[#ffe0b2]">
                            ! @ # $ % ^ * ( ) _ + - = [ ]
                          </code>
                        </li>
                        <li>Cannot be identical to your previous 3 passwords.</li>
                        <li>Should not contain your name, registration number, or birth year.</li>
                      </ul>

                      <div className="mt-4 pt-3 border-t border-[#ffe082] text-[11px] text-[#795548]">
                        <strong>Security Note:</strong> Never share your VTOP password or OTP with anyone. SDC staff will never ask for your password.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Authentication & Access Management Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
