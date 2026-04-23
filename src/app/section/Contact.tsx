import React from "react";
import Image from "next/image";
import Container from "../layout/Container";
import Button from "../components/Button/Button";

export default function Contact() {
  return (
    <section className="mt-8">
      <Container className="py-[39px] bg-[#88C9FD] relative overflow-hidden xl:w-[1020px] xl:rounded-2xl xl:flex xl:justify-center xl:flex-col xl:items-center z-0">
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none z-0">
          <Image
            src="/Mask.svg"
            width={300}
            height={300}
            alt=""
            priority
            className="w-auto h-full object-cover object-left-top opacity-80"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="relative text-[29.45px] font-bold text-center xl:text-[40px] xl:max-w-[450px] leading-tight">
            Want to talk to a marketing expert?
            
            <span className="absolute -right-6 -top-2 xl:-right-10 xl:-top-4 pointer-events-none select-none">
              <Image
                src="/sparkle-white.svg"
                width={44}
                height={44}
                alt=""
                className="w-6 h-6 xl:w-11 xl:h-11"
              />
            </span>
          </h1>
          
          <div className="flex justify-center">
            <Button variant="black" className="mt-[32px]">
              Contact with us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}