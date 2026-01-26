import { type FunctionComponent } from "react";
import { ButtonModal } from "@/app/components";

const Introduction: FunctionComponent = () => {
  return (
    <>
      <h1 className="text-8xl">Andre Jacobs</h1>
      <h2 className="text-4xl text-blue-500">Software Engineer</h2>

      <p className="my-16 text-neutral-400">
        Developer based in Phoenix, AZ. I specialize in data driven web and
        mobile applications.
      </p>

      <ButtonModal/>
    </>
  );
};

export default Introduction;
