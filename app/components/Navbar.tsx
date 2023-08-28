import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from "lucide-react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="bg-white w-full shadow-md  sticky z-10   top-0 ">
      <div className="flex p-2  items-center w-full max-w-7xl mx-auto justify-between">
        {/* TITLE */}
        <h1 className="text-3xl font-bold underline">STOR-E</h1>
        {/* Centre Section */}
        <div>
          <ul className="flex space-x-4">
            <li className="font-medium cursor-pointer hover:opacity-60">
              Home
            </li>
            <li className="font-medium cursor-pointer hover:opacity-60">
              About
            </li>
            <li className="font-medium cursor-pointer hover:opacity-60">
              Services
            </li>
            <li className="font-medium cursor-pointer hover:opacity-60">
              Facilities
            </li>
            <li className="font-medium cursor-pointer hover:opacity-60">
              More
            </li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="flex space-x-12 items-center">
          <div className="flex space-x-4">
            <Search className="cursor-pointer hover:opacity-60" />
            <ShoppingBag className="cursor-pointer hover:opacity-60" />
          </div>
          <div className="flex space-x-4 items-center">
            <p className="font-semibold cursor-pointer">Sign in</p>
            <Button className="rounded-full">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
