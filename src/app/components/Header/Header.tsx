"use client";

import { useState } from "react";
import Logo from "../Logo/Logo";
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import Button from "../Button/Button";
import Container from "../../layout/Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#F1DFD5]">
      <Container className="flex items-center justify-between py-4 px-4 xl:px-14">
        <div className="flex items-center gap-[88px]">
          <div>
            <Logo />
          </div>
          <div className="hidden lg:block">
            <HeaderNav />
          </div>
        </div>

        <div className="hidden lg:flex gap-4">
          <Button variant="invise">Sign in</Button>
          <Button variant="black">Get started free</Button>
        </div>

        <div className="block lg:hidden">
          <button 
            onClick={() => setOpen(!open)} 
            className="relative z-50 p-2"
          >
            <Image 
              src="/menu.svg"
              alt="menu" 
              width={24} 
              height={24} 
            />
          </button>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full bg-[#F1DFD5] shadow-xl lg:hidden p-6 border-t border-black/5">
            <HeaderNav />
          </div>
        )}
      </Container>
    </header>
  );
}