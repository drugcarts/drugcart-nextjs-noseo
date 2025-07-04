'use client';
import axios from 'axios';
import { useState } from 'react';

export default function PayPage() {
  const [loading, setLoading] = useState(false);

  const handlePayU = async () => {
    setLoading(true);
    const txnid = 'Txn' + Date.now();

    try {
      const { data } = await axios.post('/api/payu/initiate', {
        txnid,
        amount: '1.00',
        firstname: 'John',
        email: 'john.doe@test.com',
        phone: '9999999999',
        productinfo: 'Test Product',
      });

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.action;

      Object.entries(data).forEach(([key, value]) => {
        if (key === 'action') return;
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      await sessionStorage.setItem("orderId", "25080401")
    } catch (error) {
      console.error('Payment setup failed:', error);
      alert('Failed to initiate payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handlePayU}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? 'Redirecting to PayU...' : 'Pay ₹10.00 via PayU (Test)'}
      </button>
    </div>
  );
}
