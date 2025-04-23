import React from 'react';

const AboutPage = ({ user }) => {
  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white mt-10 rounded-2xl shadow-lg border border-green-200">
      <div className="flex flex-col items-center space-y-4">
        {/* Big Profile Image */}
        <img
          src={user.profileImage || "https://via.placeholder.com/200"}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-green-500 shadow-md object-cover"
        />

        {/* User Info */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-green-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          {user.phone && <p className="text-gray-500">📞 {user.phone}</p>}
          {user.location && <p className="text-gray-500">📍 {user.location}</p>}
        </div>

        {/* Bio or Additional Section */}
        {user.bio && (
          <div className="mt-6 bg-green-50 p-4 rounded-xl border border-green-100 w-full text-center text-gray-700">
            <p>{user.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
