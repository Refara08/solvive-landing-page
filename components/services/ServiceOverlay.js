import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-30 z-40 backdrop-blur-md"
      onClick={props.onCloseCart}
    />
  );
};

const ModalOverlay = (props) => {
  const modalRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { yPercent: 10, duration: 0.3, ease: "linear" },
      { yPercent: 0 }
    );
  }, []);

  return (
    <div
      ref={modalRef}
      className={`fixed bottom-0 lg:top-0 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-[5vh] z-50 select-none`}
    >
      <div>{props.children}</div>
    </div>
  );
};

const ServiceOverlay = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted
        ? createPortal(
            <Backdrop onCloseCart={props.onCloseCart} />,
            document.querySelector("#service-details")
          )
        : null}
      {mounted
        ? createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.querySelector("#service-details")
          )
        : null}
    </>
  );
};

export default ServiceOverlay;
