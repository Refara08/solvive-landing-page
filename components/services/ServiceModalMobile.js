import Link from "next/link";
import Image from "next/image";
import CloseIcon from "../ui/close-icon";

const ServiceModalMobile = ({ onClose, content }) => {
  return (
    <div className="flex lg:hidden flex-col bg-scnd-blue w-screen h-[80vh] rounded-t-xl overflow-hidden">
      <div className="relative bg-orange-sol">
        <CloseIcon
          size="2em"
          bgColor="#E56137"
          onClick={onClose}
          className="absolute top-8 right-6"
        />
        <div className="flex flex-col justify-center items-center py-4">
          <div className="block w-[10%] h-[3px] bg-white mb-4 rounded-full" />
          <h3 className="heading col-span-8 flex justify-center mb-2">
            {content.title}
          </h3>
        </div>
        <div className="flex items-end overflow-hidden">
          <p className="pl-8 pb-4 pr-1">{content.excerpt}</p>
          <div className="">
            <Image
              src={content.images.mobile.url}
              alt={content.title}
              width={content.images.mobile.width}
              height={content.images.mobile.height}
            />
          </div>
        </div>
      </div>
      <div className="flex-[1] p-8 overflow-y-auto">
        {content.features.map((item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold">{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div onClick={onClose} className="px-8 pt-4 pb-8">
        <Link href="/#contacts" legacyBehavior className="w-full">
          <a className="button-prime w-full">{`Create ${content.tag} now`}</a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceModalMobile;
