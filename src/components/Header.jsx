import React from "react";
import { Banner1, Banner2, Banner3, Bg, Banner5 } from '../images';
const images = [Banner1, Banner2, Banner3, Bg, Banner5];
import Nav from "./Nav";



function Header({title,image,type}) {
  
  return (
    <div>
     <div className='absolute z-10 top-0 h-auto w-full'>
        <Nav/> 
        </div>
        <div className="absolute w-full h-full">
        <div className="absolute w-full h-full bg-black opacity-60"></div>
      <img className="w-full h-full object-cover" src={image ?? images[Math.floor(Math.random() * images.length)]} alt="hero img" />
    </div>
      <div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent z-8  flex flex-col items-center justify-center pt-20 2xl:pt-20 px-4 ">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
       {title}
        </h1>
{type && (<p className="bg-black text-sm font-medium mt-4 text-center text-red-500 px-8 py-5 rounded-full ">
  Your go-to source for limitless recipes, where every culinary craving finds its perfect match<br className="hidden md:block"></br> Welcome to a world of flavors at your fingertips!.
</p>)}
</div>

    </div>
    </div>
  );
}

export default Header;
