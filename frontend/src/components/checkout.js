import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    country: '',
    phone_number: '',
    delivery_location: '',
  });
  const [message, setMessage] = useState('');
  const [customers, setCustomers] = useState([]); // To store the customer data fetched from the server

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message);
      fetchCustomerData();
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred.');
    }
  };

  const fetchCustomerData = async () => {
    try {
      const response = await fetch('http://localhost:4000/customers');
      setCustomers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Fetch customer data when the component mounts
    fetchCustomerData();
  }, []);

  return (
    <div className="Checkout">
      <h1>Ultra Beauty Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        /><br/><br/>
        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        /><br/><br/>
        <label htmlFor="delivery_location">Delivery Location:</label>
        <input
          type="text"
          id="delivery_location"
          name="delivery_location"
          value={formData.delivery_location}
          onChange={handleChange}
          required
        /><br/><br/>
        <button type="submit">Checkout</button>
      </form>
      <p id="message">{message}</p>

      <h2>Customer List</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            Country: {customer.country}, Phone: {customer.phone_number}, Location: {customer.delivery_location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;