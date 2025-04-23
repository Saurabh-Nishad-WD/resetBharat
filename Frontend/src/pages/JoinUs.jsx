import React, { useState } from 'react';

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend (API call placeholder)
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full border border-green-200">
        <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">Join Us</h1>
        <p className="text-gray-600 mb-6 text-center">
          Be a part of a growing community working to protect and restore nature in India. Fill the form below to join our upcoming efforts!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Area of Interest</label>
              <input
                type="text"
                name="interest"
                placeholder="Tree plantation, waste management, etc."
                value={formData.interest}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Your Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-green-700 font-semibold text-lg">
            🎉 Thank you for joining us! We will contact you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsPage;
