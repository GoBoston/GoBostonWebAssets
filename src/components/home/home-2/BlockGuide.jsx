const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.svg",
      title: "8 лет на рынке",
      text: `Занимаемся образовательными поездками с 2016 года. Первая поездка была осуществленна на математическую олимпиаду в Гарварде.`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.svg",
      title: "Расширяем кругозор",
      text: `Наши ученики поступают в лучшие университеты Америки, Канады, Гонк-Конга, Сингапура, Кореи, России и Казахстана.`,
      delayAnim: "50",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.svg",
      title: "Даем вдохновление",
      text: `Во время каждой поездки участники посещают хотя бы 6 университетов и знакомятся с их студентами.`,
      delayAnim: "100",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
