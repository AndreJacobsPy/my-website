"use client";

import { useState } from "react";
import styles from "./index.module.css";

// navigation client component
const Navigation: React.FC = () => {
  // state management for the active button
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // dynamically rendering sections
  const sections: string[] = [
    "Introduction",
    "Skills",
    "Experience",
    "Projects",
  ];

  return (
    <div className="flex space-x-12">
      {sections.map((value, index) => (
        <button
          className={`${styles.navbutton} ${
            index === activeIndex ? "text-blue-500 underline" : ""
          }`}
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
