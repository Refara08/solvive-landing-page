import Image from "next/image";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const navCopy = [
  { text: "Our Services", link: "/#services" },
  { text: "How we work", link: "/#workflow" },
];

const Navigation = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <div className="py-2 md:py-4">
      <div className="container-default flex justify-between items-center">
        <div>
          <Image
            src="/images/solvive-logo.png"
            alt="logo of Solvive"
            width="128"
            height="16"
          />
        </div>
        <div className="block md:hidden">
          <Hamburger
            toggle={setBurgerIsOpen}
            toggled={burgerIsOpen}
            color={burgerIsOpen ? "#E56137" : "#FAFBFD"}
            size={24}
          />
        </div>
        <ul className="hidden md:flex gap-4 items-center">
          {navCopy.map((item, index) => (
            <li
              key={index}
              className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-white-sol before:w-0 hover:before:w-full before:hover:transition-all before:hover:duration-300 py-2 cursor-pointer text-xs lg:text-sm"
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
