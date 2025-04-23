import React from 'react';

const AchievementsSection = ({ achievements = [] }) => {
  if (achievements.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16 text-xl">
        🎉 No achievements yet. Start contributing to earn your first badge!
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto px-6 py-20">

      <div className="flex flex-wrap justify-center gap-12">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="w-[400px] sm:w-[500px] bg-white rounded-3xl shadow-2xl border border-green-300 p-10 flex flex-col items-center text-center hover:shadow-3xl transition-all duration-300"
          >
            <img
              src={item.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              alt={item.title}
              className="w-44 h-44 mb-8 rounded-full object-cover border-4 border-green-100"
            />
            <h3 className="text-3xl font-bold text-green-700 mb-2">{item.title}</h3>
            <p className="text-lg text-gray-700">{item.description}</p>
            {item.date && (
              <span className="mt-6 text-md text-gray-400">🏅 {item.date}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
