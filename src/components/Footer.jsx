import React from "react";
import { footer } from "../constants";
const Footer = () => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10 pt-10'>
        {footer?.map((item) => (
          <img
            onClick={() => window.open(item.link, "_blank")}
            src={item.icon}
            alt='source code'
            className=' object-contain w-7 h-7 rounded-full flex justify-center items-center cursor-pointer'
          />
        ))}
      </div>
      <p className='text-center py-3'>Crafted with ❤️ by Kushagra Krishna</p>
    </>
  );
};

export default Footer;
