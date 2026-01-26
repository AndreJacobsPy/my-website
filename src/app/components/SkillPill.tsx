import { type FunctionComponent } from "react";

interface SkillPillProps {
  skill: string;
  pixelWidth: number;
}

const SkillPill: FunctionComponent<SkillPillProps> = ({ skill, pixelWidth }) => {
  return (
    <div className="relative dark:bg-neutral-800 bg-neutral-200 h-15 w-90 p-4 rounded-lg m-4 align-middle">
      <h2 className="text-md">{skill}</h2>
      <div className="absolute top-6 left-40 h-2 w-40 bg-neutral-700 rounded-md z-10"/>
      <div className={`absolute top-6 left-40 h-2 bg-blue-500 rounded-md z-50`} style={{ width: `${pixelWidth}px` }}/>
    </div>
  );
};

export default SkillPill;