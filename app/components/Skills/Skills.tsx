import React from "react";

// skill tile component
interface SkillTileProps {
  skillName: string;
}

const SkillTile: React.FC<SkillTileProps> = ({ skillName }) => {
  return (
    <div className="bg-neutral-900 w-48 h-48 m-4 rounded-md">
      <h2 className="text-center py-2 text-lg">{skillName}</h2>
    </div>
  );
};

// the skills section component
const Skills: React.FC = () => {
  // markup for skills section
  return (
    <div>
      <div className="flex">
        <SkillTile skillName="React" />
        <SkillTile skillName="NextJS" />
        <SkillTile skillName="Tailwind CSS" />
        <SkillTile skillName="Swift UI" />
      </div>
      <div className="flex">
        <SkillTile skillName="Python" />
        <SkillTile skillName="Django" />
        <SkillTile skillName="Databases" />
        <SkillTile skillName="Spark" />
      </div>
    </div>
  );
};

export default Skills;
