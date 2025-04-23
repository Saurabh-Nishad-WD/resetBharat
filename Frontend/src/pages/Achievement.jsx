import React from "react";
import AchievementsSection from "../components/AchievementCard";

const AchievementsPage = () => {
  const achievementsData = [
    {
      sectionTitle: "🌱 ResetBharat Achievements",
      items: [
        {
          title: "Tree Plantation Drive",
          description: "Planted over 10,000 trees in 5 districts.",
          image: "/images/tree-plantation.jpg",
        },
        {
          title: "Clean River Mission",
          description: "Removed 5 tons of waste from Yamuna River.",
          image: "/images/clean-river.jpg",
        },
      ],
    },
    {
      sectionTitle: "🤝 Volunteer Achievements",
      items: [
        {
          title: "Health Awareness Camp",
          description: "Provided free checkups to over 2,000 people.",
          image: "/images/health-camp.jpg",
        },
        {
          title: "Education for All",
          description: "Organized tuition for 300 underprivileged children.",
          image: "/images/education.jpg",
        },
      ],
    },
    {
      sectionTitle: "💝 Donor Achievements",
      items: [
        {
          title: "Medical Kit Distribution",
          description: "Donated 1,000+ kits in rural areas.",
          image: "/images/medical-kits.jpg",
        },
        {
          title: "Blanket Drive",
          description: "Helped 3,000 people during the winter.",
          image: "/images/blanket-drive.jpg",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-green-900">
        🏆 Our Achievements
      </h1>

      {achievementsData.map((section, index) => (
        <section key={index} className="mb-20">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center sm:text-left">
            {section.sectionTitle}
          </h2>
          <AchievementsSection achievements={section.items} />
        </section>
      ))}
    </div>
  );
};

export default AchievementsPage;
