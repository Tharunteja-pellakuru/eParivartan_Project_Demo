const TextContainer = () => {
  const textList = [
    {
      step: "01",
      name: "Human Touch",
      description:
        "We design with empathy ensuring every project reflects people's values, aspirations, and evolving lifestyle needs",
    },
    {
      step: "02",
      name: "Cultural Roots",
      description:
        "Our architecture draws from local traditions and materials, reinterpreting heritage through a refined contemporary perspective",
    },
    {
      step: "03",
      name: "Modern Craft",
      description:
        "We balance innovation with timeless detail crafting spaces that remain relevant, functional, and aesthetically meaningful",
    },
    {
      step: "04",
      name: "Seamless Journey",
      description:
        "From concept to execution we integrate design, management, and delivery into one purposeful fluid process",
    },
  ];

  return (
    <div className="m-15 flex flex-col justify-center items-center space-x-10 xl:flex-row font-serif">
      <h1 className="text-3xl mb-10">Designing Spaces that truly Belong</h1>

      {textList.map((item) => (
        <div key={item.step} className="flex items-start gap-4 m-2">
          <div className="w-px h-60 bg-gray-400 mt-2"></div>

          <div className="flex flex-col justify-center h-60 items-start w-60">
            <h1 className="text-[48px] m-0 p-0">{item.step}</h1>
            <p className=" mb-3 p-0 text-black">{item.name}</p>
            <p className="text-gray-700 font-sans">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextContainer;
