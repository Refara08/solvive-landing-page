const DetailsDesktop = ({ content }) => {
  return (
    <>
      <div className="content mb-8">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <p>{content.excerpt}</p>
      </div>
      <div className="content pr-10">
        {content.features.map((item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsDesktop;
