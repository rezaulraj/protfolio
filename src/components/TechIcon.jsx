import React from "react";

const TechIcon = ({ icon }) => {
  return (
    <div className="md:w-32 md:h-32 w-20 h-20 bg-black-200 flex items-center justify-center gradient-border hover:-translate-y-3 transition-all duration-700 marquee-item">
      <img src={icon.image} alt={icon.name} className="md:size-16 size-14" />
    </div>
  );
};

export default TechIcon;
