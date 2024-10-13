import Image from "next/image";
import React from "react";
import PPlogo from "../app/public/PPlogo.png";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className='py-4 px-36 flex w-full items-center justify-between'>
      <div className='w-12'>
        <Link href='/'>
          <Image src={PPlogo} width={100} height={100} alt='PPlogo' />
        </Link>
      </div>
      <div className='flex gap-2'>
        <div>
          <Button variant='outline' className='bg-transparent'>
            Sell Item +
          </Button>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
