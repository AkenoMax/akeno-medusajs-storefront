import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  className="h-[100vh] w-full relative bg-black">
      <div className="absolute inset-6 bottom-20">
      <Image
        data-aos="zoom-in" 
        data-aos-duration="2500"
        data-aos-delay="500"
        src="/hero.png"
        layout="fill"
        loading="eager"
        priority={true}
        quality={100}
        objectFit="cover"
        alt="AKENO Logo"
        className="absolute inset-0 bottom-0"
        draggable="false"
      />
      </div>
      <div data-aos="fade-up" data-aos-duration="2500" data-aos-delay="1500" className="text-white absolute inset-x-0 bottom-24 small:bottom-0 z-4 flex flex-col justify-end items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-white">
          "Hometown" is out now!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-white">
          Preorder starts on 21/10/2022 at 18:00
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
    </div>
  )
}

export default Hero
