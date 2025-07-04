// app/pay/page.tsx
"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [formData, setFormData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/payu/initiate", {
      method: "POST",
      body: JSON.stringify({ amount: "100" }),
    });
    const data = await res.json();
    setFormData(data);
    console.log(data, "DATA");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Pay Now 1
        </button>
      </form>

      {formData && (
        <form
          id="payuForm"
          method="post"
          action="https://secure.payu.in/_payment"
        >
          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}
          <button type="submit" className="hidden">
            PayU Submit 1
          </button>
        </form>
      )}

      {formData && (
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.getElementById("payuForm").submit();',
          }}
        />
      )}
    </div>
  );
}
