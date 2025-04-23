import React, { useState } from 'react';
import img1 from '../assets/pro1.jpg'


const CompletedProjectCard = ({
  title = "Untitled Project",
  description = "No description available.",
  location = "Not specified",
  goal = "Unknown",
  timeline = "N/A",
  totalVolunteers = 0,
  fundsUsed = 0,
  beforeImage = img1,
  afterImage = img1,
  moreImages = [img1,img1],
  highlights = [],
  impact = "",
  feedback = []
}) => {
  const [showMoreImages, setShowMoreImages] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-4xl mx-auto border border-green-200 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
        <div><strong>📍 Location:</strong> {location}</div>
        <div><strong>🎯 Goal:</strong> {goal}</div>
        <div><strong>📅 Timeline:</strong> {timeline}</div>
        <div><strong>👥 Volunteers:</strong> {totalVolunteers}</div>
        <div><strong>💸 Funds Used:</strong> ₹{fundsUsed.toLocaleString()}</div>
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold text-green-700 mb-2">📸 Before vs After</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <img src={beforeImage} alt="Before" className="rounded-lg w-full h-auto border" />
            <p className="text-center text-sm mt-1 text-gray-600">Before</p>
          </div>
          <div>
            <img src={afterImage} alt="After" className="rounded-lg w-full h-auto border" />
            <p className="text-center text-sm mt-1 text-gray-600">After</p>
          </div>
        </div>
      </div>

      {/* Toggle Button for More Images */}
      {moreImages.length > 0 && (
        <div className="my-4">
          <button
            className="text-green-700 font-medium underline mb-2"
            onClick={() => setShowMoreImages(!showMoreImages)}
          >
            {showMoreImages ? "Hide More Images" : "📷 Show More Images"}
          </button>

          {showMoreImages && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {moreImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`More project view ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>
      )}

      {highlights.length > 0 && (
        <div className="my-4">
          <h3 className="text-lg font-semibold text-green-700 mb-2">✨ Highlights</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {highlights.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      )}

      {impact && (
        <div className="my-4">
          <h3 className="text-lg font-semibold text-green-700 mb-2">🌍 Impact</h3>
          <p className="text-gray-700">{impact}</p>
        </div>
      )}

      {feedback.length > 0 && (
        <div className="my-4">
          <h3 className="text-lg font-semibold text-green-700 mb-2">🗣️ Feedback from Participants</h3>
          <ul className="space-y-2">
            {feedback.map((fb, idx) => (
              <li key={idx} className="bg-green-50 p-3 rounded-md border border-green-200">
                <span className="font-semibold">{fb.name}:</span> {fb.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompletedProjectCard;
