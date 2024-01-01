import React from "react";
import DonorCard from "../donor-card";

const donorData = [
  {
    name: "Mohammad Ali",
    profession: "Business",
  },
  {
    name: "Mohammad Bilal",
    profession: "Job",
  },
  {
    name: "Ali Ahmad",
    profession: "Business",
  },
  {
    name: "Mohammad Jubayer",
    profession: "Business",
  },
  {
    name: "Omar ",
    profession: "Business",
  },
  {
    name: "Unais",
    profession: "Business",
  },
  {
    name: "Sahidur Rahman",
    profession: "Business",
  },
  {
    name: "Imtiaz Ali",
    profession: "Services",
  },
];
const SectionDonor = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-10">Honorable Donor's List</h1>
        <div className="grid grid-cols-4 gap-[30px]">
          {donorData?.map((item, i) => {
            return <DonorCard key={i} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionDonor;
