import React from 'react';

const PaymentStripeBlik: React.FC = () => {
    return (
    <div className="border-b border-gray-200 py-2 relative">
      <span className="absolute -top-6 text-gray-700 text-base-regular">
        BLIK code
      </span>
      <input name="code" placeholder="000000" required />
    </div>
  );
}

export default PaymentStripeBlik