import React from "react";

const PaymentHistory = () => {
  const payments = [
    { id: 1, date: "2025-01-10", amount: "$500", currency: "BTC" },
    { id: 2, date: "2025-01-05", amount: "$300", currency: "BTC" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Currency</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="border px-4 py-2">{payment.date}</td>
              <td className="border px-4 py-2">{payment.amount}</td>
              <td className="border px-4 py-2">{payment.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;