import Image from "next/image";
import Link from "next/link";
import React from "react";

const DonorCard = ({ data }: any) => {
  return (
    <Link
      href="#"
      className={`hover:text-inherit group border border-[#DBDADE] rounded-md inline-block hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)] `}
    >
      <div>
        <Image
          src={data?.imgSrc}
          alt="Blog Card"
          width={270}
          height={182}
          className={`w-full object-cover rounded-t-md`}
        />
      </div>
      <div className="flex flex-col gap-[10px] p-[15px]">
        <div className="flex flex-col gap-[6px]">
          <h6 className="mb-0 group-hover:text-secondary transition-all">
            Name: {data?.name}
          </h6>
          <p className="mb-0 line-clamp-2 p-small">
            Profession: {data?.profession}
          </p>
          <p className="mb-0 line-clamp-2 p-small">
            Company Name: {data?.companyName}
          </p>
          <p className="mb-0 line-clamp-2 p-small">
            Designation: {data?.designation}
          </p>
          <p className="mb-0 line-clamp-2 p-small">Address: {data?.address}</p>
        </div>
      </div>
    </Link>
  );
};

export default DonorCard;
