import Header from "./components/Header";
import Introduction from "./components/Introduction";

const Home: React.FC = () => {
  return (
    <div>
      <main id="introduction">
        <div className="sticky py-4 top-0 z-50 dark:bg-[#0a0a0a]">
          <Header />
        </div>

        <div className="my-32 mx-16">
          <Introduction />
        </div>

        <div className="my-32 mx-16" id="whatIDo">
          <p>What I Do</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
