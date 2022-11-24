import Card from "../ui/Card";
import CardProgress from "../ui/CardProgress";

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
        <h2 className="heading">How We Work</h2>
        <p className="text-sm font-light">
          We are working in an Agile/Scrum development process
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
        {workflowCopy.map((item, index) => (
          <CardProgress item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Workflow;
