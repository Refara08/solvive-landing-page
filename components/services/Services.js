import { useEffect, useState } from "react";

import Card from "../ui/Card";
import ServiceModal from "./ServiceModal";
import { servicesCopy } from "../copywriting/service-copy";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const [initialLoadContent, setInitialLoadContent] = useState(0);

  const changeLoadContentHandler = (num) => {
    setInitialLoadContent(num);
  };

  const nextContentHandler = () => {
    if (initialLoadContent === 2) {
      setInitialLoadContent((prev) => prev - 2);
    } else {
      setInitialLoadContent((prev) => prev + 1);
    }
  };

  const previousContentHandler = () => {
    if (initialLoadContent === 0) {
      setInitialLoadContent((prev) => prev + 2);
    } else {
      setInitialLoadContent((prev) => prev - 1);
    }
  };

  return (
    <section id="services" className="mb-24">
      <div className="mb-8">
        <h2 className="heading">Our Services</h2>
        <p className="text-sm font-light">
          We are accelerating your digital needs
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {servicesCopy.map((item, index) => (
          <Card
            onOpenModal={openModalHandler}
            onChangeContent={changeLoadContentHandler}
            item={item}
            key={index}
          />
        ))}
      </div>
      {isOpen && (
        <ServiceModal
          onClose={closeModalHandler}
          loadedContentIndex={initialLoadContent}
          onNextContent={nextContentHandler}
          onPreviousContent={previousContentHandler}
        />
      )}
    </section>
  );
};

export default Services;
