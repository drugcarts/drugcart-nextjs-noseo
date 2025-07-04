"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentStatusPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Run only on client
    setStatus(searchParams.get("status"));
  }, [searchParams]);

  if (!status) return <p>Loading payment status...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      {status === "success" && <p>✅ Payment successful!</p>}
      {status === "failure" && <p>❌ Payment failed.</p>}
      {status === "invalid" && <p>⚠️ Invalid payment status.</p>}
      {!["success", "failure", "invalid"].includes(status) && (
        <p>🤔 Unknown payment status.</p>
      )}
    </div>
  );
}
