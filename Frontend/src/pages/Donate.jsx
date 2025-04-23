import React, { useState } from 'react';

const DonatePage = ({ user }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customAmount || isNaN(customAmount) || Number(customAmount) <= 0) return;

    const donationData = {
      name: user?.name || 'Anonymous',
      email: user?.email || 'N/A',
      amount: Number(customAmount)
    };

    console.log('Donation submitted:', donationData);
    setSubmitted(true);
  };

  const handleQuickSelect = (amt) => {
    setCustomAmount(amt.toString());
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center p-8 bg-green-50 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You! 💚</h2>
        <p className="text-gray-700">Your donation has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-10 border border-green-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌱 Donate to Support</h2>

      <div className="text-gray-600 mb-6">
        Donating as: <span className="font-semibold">{user?.name || 'Guest'}</span> ({user?.email || 'Not logged in'})
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Choose Amount</label>
          <div className="flex flex-wrap gap-2">
            {[100, 250, 500, 1000].map((amt) => (
              <button
                type="button"
                key={amt}
                onClick={() => handleQuickSelect(amt)}
                className={`px-4 py-2 border rounded-md ${
                  customAmount === amt.toString() ? 'bg-green-600 text-white' : 'bg-white'
                } hover:bg-green-100`}
              >
                ₹{amt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Or Enter Custom Amount</label>
          <input
            type="number"
            min="1"
            placeholder="₹ Enter amount"
            className="w-full border rounded-md p-2"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          💝 Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonatePage;
