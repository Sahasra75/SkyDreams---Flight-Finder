import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Payment Successful!');
      navigate('/'); // or wherever you want to redirect after success
    }, 2000); // Simulate payment delay
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto 0 auto', padding: '20px' }}>
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          name="name"
          placeholder="Name on Card"
          value={paymentDetails.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number (16 digits)"
          maxLength="16"
          value={paymentDetails.cardNumber}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry (MM/YY)"
          value={paymentDetails.expiry}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          maxLength="3"
          value={paymentDetails.cvv}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
