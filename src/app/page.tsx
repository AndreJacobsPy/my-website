import { type FunctionComponent } from "react";
import { Experience, Header, Introduction, Skills } from "@/app/components";

const Home: FunctionComponent = () => {
  return (
    <div>
      <main id="introduction">
        <div className="sticky py-4 top-0 z-80 dark:bg-[#0a0a0a]">
          <Header/>
        </div>

        <div className="my-32 mx-16">
          <Introduction/>
        </div>

        <div className="my-16 mx-16" id="whatIDo">
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">What I Do</h2>
            <p className="text-md text-neutral-800 dark:text-neutral-400 my-4 mx-4">With 3 years of experience working
              with various clients,
              I have worked on a wide range of projects, including web development, data engineering, and software
              development.
            </p>

            <Skills/>
          </div>
        </div>

        <div className="my-16 mx-16" id="experience">
          <h2 className="text-2xl font-semibold text-blue-500">Experience</h2>

          <Experience/>
        </div>
      </main>
    </div>
  );
};

export default Home;
