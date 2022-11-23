import CloseIcon from "../ui/close-icon";
import DetailsMobile from "./DetailsMobile";

const ServiceModalMobile = ({ onClose, content }) => {
  return (
    <div className="relative grid lg:hidden grid-cols-1 bg-scnd-blue w-screen h-[80vh] rounded-t-xl overflow-hidden">
      <CloseIcon
        size="2em"
        bgColor="#16263B"
        className="absolute top-8 right-8"
        onClick={onClose}
      />
      <div className="block absolute top-4 left-1/2 -translate-x-1/2 w-[20%] h-[3px] bg-white" />
      <div className="pt-32 flex flex-col justify-between">
        <DetailsMobile content={content} onClose={onClose} />
      </div>
    </div>
  );
};

export default ServiceModalMobile;
