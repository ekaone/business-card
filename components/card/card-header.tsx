import React from "react";

type CardHeaderProps = {
  currentTheme: {
    dots: string[];
    text: string;
  };
};

const CardHeader: React.FC<CardHeaderProps> = ({ currentTheme }) => (
  <div className="p-3 border-b border-gray-700 flex justify-between items-center">
    <div className="flex space-x-2">
      <div className={`w-3 h-3 rounded-full ${currentTheme.dots[0]}`}></div>
      <div className={`w-3 h-3 rounded-full ${currentTheme.dots[1]}`}></div>
      <div className={`w-3 h-3 rounded-full ${currentTheme.dots[2]}`}></div>
    </div>
    <div className={`text-center flex-1 ${currentTheme.text} font-medium`}>
      Business Card.json
    </div>
    <div className="text-gray-400">•••</div>
  </div>
);

export default CardHeader;
