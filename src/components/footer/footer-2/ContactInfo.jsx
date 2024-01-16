const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Мобильный номер",
      action: "tel:+77771796886",
      text: "+7 777 179 6886",
    },
    {
      id: 2,
      title: "Instagram",
      action: "https://instagram.com/goboston.kz",
      text: "@goboston.kz",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-white mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
