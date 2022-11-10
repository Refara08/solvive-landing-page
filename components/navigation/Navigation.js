import Image from "next/image";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Navigation = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <div className="py-2">
      <div className="container-default flex justify-between items-center">
        <div>
          <Image
            src="/images/solvive-logo.png"
            alt="logo of Solvive"
            width="128"
            height="16"
          />
        </div>
        <Hamburger
          toggle={setBurgerIsOpen}
          toggled={burgerIsOpen}
          color="#FAFBFD"
          size={24}
        />
      </div>
    </div>
  );
};

export default Navigation;
