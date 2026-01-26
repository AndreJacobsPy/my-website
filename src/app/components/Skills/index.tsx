import { type FunctionComponent } from "react";
import { SkillPill } from "@/app/components";

const TechStack: FunctionComponent = () => {
  // markup for skills section
  return (
    <div className="grid grid-cols-3">
      <div>
        <h2 className="m-4 text-xl font-semibold">Tech Stack</h2>
        <div>
          <SkillPill skill="Python" pixelWidth={160}/>
          <SkillPill skill="SQL" pixelWidth={160}/>
          <SkillPill skill="React" pixelWidth={140}/>
          <SkillPill skill="NextJS" pixelWidth={110}/>
          <SkillPill skill="TypeScript" pixelWidth={140}/>
          <SkillPill skill="Tailwind CSS" pixelWidth={120}/>
        </div>
      </div>

      <div>
        <h2 className="m-4 text-xl font-semibold">Platforms</h2>
        <div>
          <SkillPill skill="Databricks" pixelWidth={140}/>
          <SkillPill skill="Palantir Foundry" pixelWidth={150}/>
          <SkillPill skill="Azure" pixelWidth={100}/>
          <SkillPill skill="Docker" pixelWidth={130}/>
        </div>
      </div>

      <div>
        <h2 className="m-4 text-xl font-semibold">Skill Set</h2>
        <div>
          <SkillPill skill="Web Development" pixelWidth={120}/>
          <SkillPill skill="Data Engineering" pixelWidth={150}/>
          <SkillPill skill="Automation" pixelWidth={130}/>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
