import Header from "./components/Header";
import Introduction from "./components/Introduction";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <Header />

        <div className="my-32 mx-16">
          <Introduction />
        </div>
      </main>
    </div>
  );
};

export default Home;
