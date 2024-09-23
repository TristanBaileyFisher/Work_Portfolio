import React from "react";

const contacts = [
  {
    name: "Email",
    info: "tristanbaileyfisher@gmail.com",
    icon: "📧",
  },
  {
    name: "Phone",
    info: "0277884016",
    icon: "📱",
  },
  {
    name: "LinkedIn",
    info: "https://www.linkedin.com/in/tristan-fisher-36624629a/",
    icon: "🔗",
  },
  {
    name: "GitHub",
    info: "https://github.com/TristanBaileyFisher",
    icon: "🐙",
  },
];

const ContactCard = ({ name, info, icon }) => (
  <div className="bg-gray-300 shadow-lg rounded-lg p-4 mb-4 flex items-center">
    <div className="text-3xl">{icon}</div>
    <div className="ml-4">
      <h3 className="font-Drexs text-lg">{name}</h3>
      <p className="text-gray-600 font-Duru">{info}</p>
    </div>
  </div>
);

const ContactMe = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-center text-3xl md:text-5xl font-Drexs text-white pt-10">
          GET IN TOUCH
        </h1>
        <div className="mt-8">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
