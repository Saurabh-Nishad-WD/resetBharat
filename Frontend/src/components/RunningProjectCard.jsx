import React from 'react';
import img11 from '../assets/pro1.jpg'
const RunningProjectCard = ({
  title = "Untitled Project",
  description = "No description provided.",
  location = "Unknown",
  goal = "Not specified",
  timeline = "TBD",
  progress = "In progress...",
  neededFunds = 0,
  currentUser = "",
  volunteers = [],
  images = [img11,img11,img11]
}) => {
  const isVolunteer = volunteers.includes(currentUser);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl mx-auto my-6 border border-blue-200 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>

      <p className="text-gray-700 mb-3">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
        <div><strong>📍 Location:</strong> {location}</div>
        <div><strong>🎯 Goal:</strong> {goal}</div>
        <div><strong>📅 Timeline:</strong> {timeline}</div>
        <div><strong>💰 Funds Gained:</strong> ₹{neededFunds.toLocaleString()}</div>
        <div className="md:col-span-2"><strong>🚧 Progress:</strong> {progress}</div>
      </div>

      {images.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">🖼️ Project Progress Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden border">
                <img src={img} alt={`Project progress ${index + 1}`} className="w-full h-52 object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {isVolunteer && (
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            ✏️ Update Progress
          </button>
        </div>
      )}
    </div>
  );
};

export default RunningProjectCard;
