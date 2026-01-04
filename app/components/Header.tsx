import Navigation from "./Navigation";

// header component
const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">Andre Jacobs</h1>
      <Navigation />
    </div>
  );
};

export default Header;
