import React from "react";
import Logo1 from "../../assets/logo-1.png";
import Logo2 from "../../assets/logo-2.png";
import Logo3 from "../../assets/logo-3.png";
import Logo4 from "../../assets/logo-4.png";

const Serviec = () => {
  const Servicelist = [
    {
      id: 1,
      label: "Design",
      Image: Logo1,
      Paragraph:
        "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
    },
    {
      id: 2,
      label: "Branding",
      Image: Logo2,
      Paragraph:
        "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
    },
    {
      id: 3,
      label: "UX Research",
      Image: Logo3,
      Paragraph:
        "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
    },
    {
      id: 4,
      label: "Usability Testing",
      Image: Logo4,
      Paragraph:
        "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center md:w-2xl mx-auto pt-10 space-y-2 px-3">
        <h2 className="font-bold text-4xl">Services</h2>
        <p>
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {Servicelist.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-4 space-y-2"
          >
            <img src={service.Image} alt="" className="img" />
            <h3 className="text-lg font-semibold">{service.label}</h3>
            <p className="text-gray-600">{service.Paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serviec;
