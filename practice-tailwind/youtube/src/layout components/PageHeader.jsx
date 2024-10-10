import youtube from "../assets/youtube.png";
import { Menu } from "lucide-react";

export const PageHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center ">
        <a href="/">
          <img className="w-10 h-10 bg-blue-300 " src={youtube} />
        </a>
      </div>
      <div> search </div>
      <div> icons </div>
    </div>
  );
};
