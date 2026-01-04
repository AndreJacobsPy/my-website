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
    "What I Do",
    "Experience",
    "Projects",
  ];
  const ids: string[] = ["introduction", "whatIDo", "experience", "projects"];

  return (
    <div className="flex space-x-12">
      {sections.map((value, index) => (
        <button
          className={`${styles.navbutton} ${
            index === activeIndex ? "text-blue-500 underline" : ""
          }`}
          key={index}
          onClick={() => {
            setActiveIndex(index);

            // get section and scroll using id
            const element = document.getElementById(ids[index]);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
