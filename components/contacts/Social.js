import Image from "next/image";
import { useState } from "react";

const Social = ({ item }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span
        className={`block w-[40px] aspect-square ${
          isHover && "scale-110"
        } transition duration-300`}
      >
        <Image src={item.icon} alt={item.tag} width="108" height="108" />
      </span>
      <span className="hidden md:block">{item.info}</span>
    </a>
  );
};

export default Social;
