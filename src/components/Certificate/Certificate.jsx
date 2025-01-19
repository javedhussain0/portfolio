import React from "react";
import Certificate1 from "../../assets/certifiacate/MERN Certificate.png";
import Certificate2 from "../../assets/certifiacate/DataStructure certificate.png";
import Certificate3 from "../../assets/certifiacate/Kubernates&docker.png";
import Certificate4 from "../../assets/certifiacate/ML certifiacte.jpeg";
import "./Certificate.css";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Certificate",
    Platform: "30_days_Coding",
    description:
      "This certificate is awarded for completing a comprehensive MERN Stack training.",
    image: Certificate1,
  },
  {
    id: 2,
    title: "Data Structure Certificate",
    Platform: "Infosys",

    description:
      "This certificate is awarded for complete the course  of data structures and algorithms.",
    image: Certificate2,
  },
  {
    id: 3,
    title: "Kubernetes & Docker Certificate",
    Platform: "Mind luster",

    description:
      "This certificate is awarded for completing Kubernetes and Docker training.",
    image: Certificate3,
  },
  {
    id: 4,
    title: "Machine Learning Certificate",
    Platform: "Mangalayatan University ",

    description:
      "This certificate is awarded for completing Webinar and also explain the impotents of ML and AI  .",
    image: Certificate4,
  },
];

export const Certificate = () => {
  return (
    <div className="container">
      <h2 className="main-heading"> Certificate</h2>
      <div className="image-container">
        {certificates.map((certificate) => (
          <div key={certificate.id}>
            <img
              className="image-style"
              src={certificate.image}
              alt={certificate.title}
            />
            <h3 className="heading">{certificate.title}</h3>
            <h3 className="platform">{certificate.Platform}</h3>
            <p className="peragraph">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
