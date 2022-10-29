import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
const Header = () => {
  return (
    <div className=" bg-[#1E90FF] w-full h-24 flex items-center justify-between p-10">
      <div>
        <SiYourtraveldottv className=" w-40 h-20 text-white cursor-pointer" />
      </div>
      <div>
        <h1 className="text-white sm:text-xl">Sua viagem em nossas mãos!</h1>
      </div>
    </div>
  );
};

export default Header;
