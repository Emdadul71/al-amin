import React from "react";
import DonorCard from "../donor-card";

const donorData = [
  {
    name: "Mohammad Ali",
    profession: "Business",
    imgSrc: "/images/misc/donors-icon.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Senbag, Noakhali",
  },
  {
    name: "Mohammad Bilal",
    profession: "Job",
    imgSrc: "/images/misc/donor-icon-2.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Dohar, Dhaka",
  },
  {
    name: "Ali Ahmad",
    profession: "Business",
    imgSrc: "/images/misc/donor-icon-3.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Dohar, Dhaka",
  },
  {
    name: "Mohammad Jubayer",
    profession: "Business",
    imgSrc: "/images/misc/donors-icon.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Dohar, Dhaka",
  },
  {
    name: "Omar ",
    profession: "Business",
    imgSrc: "/images/misc/donor-icon-3.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Tongi, Dhaka",
  },
  {
    name: "Unais",
    profession: "Business",
    imgSrc: "/images/misc/donor-icon-2.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Dohar, Dhaka",
  },
  {
    name: "Mohammad Jubayer",
    profession: "Business",
    imgSrc: "/images/misc/donors-icon.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Tongi, Dhaka",
  },
  {
    name: "Unais",
    profession: "Business",
    imgSrc: "/images/misc/donor-icon-2.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "NarayanGonj, Dhaka",
  },
  {
    name: "Omar ",
    profession: "Business",
    imgSrc: "/images/misc/donor-icon-3.png",
    companyName: "ABC Company",
    designation: "CEO",
    address: "Gazipur, Dhaka",
  },
];
const SectionDonor = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-10">Honorable Donor's List</h1>
        <div className="grid grid-cols-3 gap-[30px]">
          {donorData?.map((item, i) => {
            return <DonorCard key={i} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionDonor;
