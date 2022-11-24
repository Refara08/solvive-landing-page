import Image from "next/image";
import RoundedArrowRightIcon from "./rounded-arrow-right-icon";

const CardProgress = ({ item }) => {
  return (
    <div
      className={`relative mb-6 grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 items-center h-[100px] md:h-[125px] lg:h-[150px] rounded-xl transition duration-300`}
    >
      {item.num !== "01." && (
        <RoundedArrowRightIcon
          size="2em"
          className="absolute -left-8 hidden lg:block"
        />
      )}
      <div className="px-6 col-span-3 md:col-span-1 lg:col-span-3">
        {item.num && <h2 className="font-extrabold ">{item.num}</h2>}
        <h3 className={`leading-5 transition duration-300 origin-left`}>
          {item.text}
        </h3>
      </div>
      <div className="relative col-span-2 md:col-span-1 lg:col-span-2 h-full w-full">
        <div className="hidden lg:block absolute bottom-0 right-0 w-full aspect-auto">
          <Image
            src={item.desktop.img}
            alt={item.text}
            width={item.desktop.width}
            height={item.desktop.height}
            className={`h-full w-full origin-bottom-right transition duration-300`}
          />
        </div>
        <div className="block lg:hidden absolute bottom-0 right-0 h-full aspect-auto">
          <Image
            src={item.mobile.img}
            alt={item.text}
            width={item.mobile.width}
            height={item.mobile.height}
            className={`h-full w-full origin-bottom-right transition duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default CardProgress;
