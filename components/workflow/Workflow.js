import Card from "../ui/Card";

const Workflow = () => {
  const workflowCopy = [
    {
      num: "01.",
      text: "Hire Us And Request Your Design",
      desktop: {
        img: "/images/workflow1-desktop.png",
        width: "369",
        height: "399",
      },
      mobile: {
        img: "/images/workflow1-mobile.png",
        width: "305",
        height: "291",
      },
    },
    {
      num: "02.",
      text: "Chill, And Maintain Daily Communication",
      desktop: {
        img: "/images/workflow2-desktop.png",
        width: "357",
        height: "399",
      },
      mobile: {
        img: "/images/workflow2-mobile.png",
        width: "312",
        height: "288",
      },
    },
    {
      num: "03.",
      text: "Final Delivery With Your Approval",
      desktop: {
        img: "/images/workflow3-desktop.png",
        width: "375",
        height: "399",
      },
      mobile: {
        img: "/images/workflow3-mobile.png",
        width: "303",
        height: "288",
      },
    },
  ];

  return (
    <section id="workflow" className="mb-24">
      <div className="mb-8">
        <h2 className="text-xl font-bold">How We Work</h2>
        <p className="text-sm font-light">
          We are working in an Agile/Scrum development process
        </p>
      </div>
      {workflowCopy.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </section>
  );
};

export default Workflow;