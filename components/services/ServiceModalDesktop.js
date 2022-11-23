import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

import ContactForm from "../contacts/ContactForm";
import ArrowLeftIcon from "../ui/arrow-left-icon";
import ArrowRightIcon from "../ui/arrow-right-icon";
import CloseIcon from "../ui/close-icon";
import DetailsDesktop from "./DetailsDesktop";

const ServiceModalDesktop = ({
  onClose,
  content,
  onNextContent,
  onPreviousContent,
}) => {
  const contentRef = useRef();
  const q = gsap.utils.selector(contentRef);

  useEffect(() => {
    q(".content").forEach((item) => {
      gsap.fromTo(
        item,
        { yPercent: 10, opacity: 0, duration: 0.3, ease: "linear" },
        { yPercent: 0, opacity: 1 }
      );
    });
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="hidden lg:grid grid-cols-11 w-[1000px] h-[750px] rounded-3xl overflow-hidden"
    >
      <div className="relative col-span-6 bg-scnd-blue p-10 pr-0 pt-36">
        <div className="absolute top-24 left-10 flex gap-2">
          <ArrowLeftIcon size="2em" className="" onClick={onPreviousContent} />
          <ArrowRightIcon size="2em" className="" onClick={onNextContent} />
        </div>
        <div className="content w-[38%] float-right -mt-20 py-4 pl-4">
          <Image
            src={content.images.desktop.url}
            alt={content.title}
            width={content.images.desktop.width}
            height={content.images.desktop.height}
          />
        </div>
        <DetailsDesktop content={content} />
      </div>
      <div className="relative col-span-5 bg-dark-blue p-8 pt-24">
        <CloseIcon
          onClick={onClose}
          size="2em"
          bgColor="#03142A"
          className="absolute top-10 right-10"
        />
        <ContactForm textAreaRows="2" />
      </div>
    </div>
  );
};

export default ServiceModalDesktop;
