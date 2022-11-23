import Link from "next/link";
import Image from "next/image";

const DetailsMobile = ({ content, onClose }) => {
  return (
    <>
      <div className="text-sm md:text-base w-[100%] pl-8">
        <div className="float-right w-[30%] aspect-auto ">
          <Image
            src={content.images.mobile.url}
            alt={content.title}
            width={content.images.mobile.width}
            height={content.images.mobile.height}
          />
        </div>
        <div className="mb-6">
          <h3 className="absolute top-8 left-1/2 -translate-x-1/2 heading mb-3 min-w-max">
            {content.title}
          </h3>
          <p>{content.excerpt}</p>
        </div>
        <div className="pr-8">
          {content.features.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div onClick={onClose} className="px-8 pt-4 pb-8">
        <Link href="/#contacts" legacyBehavior className="w-full">
          <a className="button-prime w-full">{`Create ${content.tag} now`}</a>
        </Link>
      </div>
    </>
  );
};

export default DetailsMobile;
