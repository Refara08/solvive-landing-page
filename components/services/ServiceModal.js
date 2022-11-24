import ServiceOverlay from "./ServiceOverlay";
import ServiceModalMobile from "./ServiceModalMobile";
import { servicesDetailCopy } from "../copywriting/service-copy";
import ServiceModalDesktop from "./ServiceModalDesktop";

const ServiceModal = ({
  onClose,
  loadedContentIndex,
  onNextContent,
  onPreviousContent,
}) => {
  const content = servicesDetailCopy[loadedContentIndex];

  return (
    <ServiceOverlay onCloseCart={onClose}>
      <ServiceModalMobile content={content} onClose={onClose} />
      <ServiceModalDesktop
        content={content}
        onClose={onClose}
        onNextContent={onNextContent}
        onPreviousContent={onPreviousContent}
      />
    </ServiceOverlay>
  );
};

export default ServiceModal;
