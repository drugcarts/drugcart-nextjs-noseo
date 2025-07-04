'use client';
import { useState } from "react";

export default function PaymentPage() {
  const [amount, setAmount] = useState("1");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/payu/initiate", {
  //     method: "POST",
  //     body: JSON.stringify({ amount }),
  //   });
  //   const data = await res.json();
  //   console.log(data, data.redirectUrl, "PAY");
  //   if (data.redirectUrl) {
  //     window.location.href = data.redirectUrl;
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/payu/initiate", {
      method: "POST",
      body: JSON.stringify({ amount }),
      headers: { "Content-Type": "application/json" },
    });

    const html = await res.text(); // Get HTML response
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank"); // Open in new tab
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pay Now Submit
      </button>
    </form>
  );
}
