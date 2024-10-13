import React from "react";
import iPhoneDeals from "../app/public/banners/iphone-deals.png";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <Image src={iPhoneDeals} width={2000} height={300} alt='iPhoneDeals' />
    </div>
  );
};

export default Slider;
