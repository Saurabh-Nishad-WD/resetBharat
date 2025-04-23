import React, { useState } from 'react';
import img1 from '../assets/place_2.jpeg'


const UpcomingProjectCard = ({
  title = "Untitled Project",
  description = "No description available.",
  location = "Unknown",
  goal = "General Goal",
  timeline = "TBD",
  totalVolunteers = 0,
  seatsLeft = 0,
  donors = [],
  volunteers = [],
  neededFunds = 0,
  status = "Planning",
  placeImage = img1
}) => {
  const [showDonors, setShowDonors] = useState(false);
  const [showVolunteers, setShowVolunteers] = useState(false);

  return (
    <div className="bg-gradient-to-b from-green-200 via-white to-green-200 rounded-2xl shadow-lg p-6 w-full max-w-3xl mx-auto my-6 border border-green-200 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-2">{title}</h2>

      <p className="text-gray-700 mb-4">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div><strong>📍 Location:</strong> {location}</div>
        <div><strong>🎯 Goal:</strong> {goal}</div>
        <div><strong>📅 Timeline:</strong> {timeline}</div>
        <div><strong>📌 Status:</strong> {status}</div>
        <div><strong>🤝 Volunteers Needed:</strong> {totalVolunteers}</div>
        <div><strong>🚻 Seats Left:</strong> {seatsLeft}</div>
        <div><strong>💰 Needed Funds:</strong> ₹{neededFunds.toLocaleString()}</div>
      </div>

      {placeImage && (
        <div className="my-4">
          <img
            src={placeImage}
            alt="Project Location"
            className="w-full h-auto rounded-lg border"
          />
          <p className="text-center text-sm text-gray-600 mt-1">📍 Project Location</p>
        </div>
      )}

      <div className="mt-4 flex space-x-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
          Join as Volunteer
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
          Donate Now
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {/* Volunteer List Toggle */}
        <div>
          <button
            onClick={() => setShowVolunteers(!showVolunteers)}
            className="text-green-700 font-semibold hover:underline"
          >
            👥 Show Volunteers ({volunteers.length})
          </button>
          {showVolunteers && (
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              {volunteers.length > 0
                ? volunteers.map((v, idx) => <li key={idx}>{v}</li>)
                : <li>No volunteers yet</li>}
            </ul>
          )}
        </div>

        {/* Donors List Toggle */}
        <div>
          <button
            onClick={() => setShowDonors(!showDonors)}
            className="text-yellow-700 font-semibold hover:underline"
          >
            💝 Show Donors ({donors.length})
          </button>
          {showDonors && (
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              {donors.length > 0
                ? donors.map((d, idx) => <li key={idx}>{d}</li>)
                : <li>No donors yet</li>}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjectCard;
