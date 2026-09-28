import React from "react";
import BankInfo from "@/components/BankInfo";

export const metadata = {
  title: "Student Bank Information | Enhanced VTOP",
  description: "View and update student bank account details, IFSC code, and passbook attachments.",
};

export default function BankInfoPage() {
  return <BankInfo />;
}
