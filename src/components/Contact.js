import React, { useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls form visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('https://formspree.io/f/xjkbqzyw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormSubmitted(true);
          console.log('Form data submitted:', formData);
        } else {
          setError('Something went wrong. Please try again.');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        setError('Failed to send your message. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section className="fixed bottom-0 right-0 p-6 z-50">
      {/* Floating action button */}
      <button
        className="bg-oceanLight text-white p-4 rounded-full shadow-lg hover:bg-oceanBlue transition duration-300 ease-in-out fixed bottom-6 right-6"
        onClick={() => setIsVisible(!isVisible)}
      >
        <i className="fas fa-envelope"></i>
      </button>

      {/* Backdrop overlay */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsVisible(false)} // Close form when backdrop is clicked
        />
      )}

      {/* Sliding contact form */}
      <div
        className={`transition-transform duration-700 ease-in-out transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'
        } fixed bottom-0 right-0 w-full md:w-1/3 bg-white p-8 shadow-lg rounded-t-lg z-50`}
      >
        {formSubmitted ? (
          <p className="text-center text-green-500">Thank you for your message! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-oceanBlue mb-6">Contact Me</h2>
            {error && <p className="text-center text-red-500">{error}</p>}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oceanLight"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oceanLight"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oceanLight"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-oceanLight text-white px-6 py-3 rounded-md hover:bg-oceanBlue transition duration-300 ease-in-out w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
