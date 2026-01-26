import { type FunctionComponent } from "react";
import { Navigation } from "@/app/components";

// header component
const Header: FunctionComponent = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-bold rounded-full p-3 bg-blue-500">AJ</h1>
      <Navigation />
    </div>
  );
};

export default Header;
