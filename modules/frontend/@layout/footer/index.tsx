"use client";
import { excerpt } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMapPin, HiOutlinePrinter } from "react-icons/hi2";
import TextExpander from "../../@common/text-expander";

const footerText = ` An Islamic NGO is a philanthropic organization guided by Islamic principles, dedicated to humanitarian aid, community development, and social welfare. It aims to uplift marginalized populations, provide education, healthcare, and disaster relief, adhering to Islamic ethics and values while fostering sustainable change and promoting justice and equality.`;

const Footer = () => {
  // const init = 150;
  // const [count, setCount] = useState(init);
  // const about = excerpt(footerText, count);
  // const handleMore = () => {
  //   setCount(10000);
  // };

  return (
    <section className="mt-auto bg-[#000052] pb-0">
      <div className="container">
        <div className="grid lg:grid-cols-[500px_auto] items-center gap-8 lg:gap-[143px] py-5 lg:py-[50px]">
          <div>
            {/* <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/home/footer-logo.png"
                width={140}
                height={40}
                alt="logo"
              />
            </Link> */}

            <Link href="/" className="inline-block mb-4">
              <h1 className="mb-0 text-white">AL Amin</h1>
            </Link>

            <div className=" text-grey mb-8">
              <TextExpander text={footerText} />
            </div>
            {/* <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="tel:310-437-2766"
                  className="inline-flex items-center gap-2 group"
                >
                  <FiPhoneCall className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    310-437-2766
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:unreal@outlook.com"
                  className="inline-flex items-center gap-2 group"
                >
                  <FaRegEnvelope className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    unreal@outlook.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin className="text-white text-xl" />
                  <span className="text-white text-sm">
                    706 Campfire Ave. Meriden, CT 06450
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <HiOutlinePrinter className="text-white text-xl" />
                  <span className="text-white text-sm">+1-212-9876543</span>
                </div>
              </li>
            </ul> */}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-[auto_auto] justify-end  gap-5 lg:gap-[80px]">
            <div>
              <p className="font-bold text-white">About</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/quran" className="text-sm">
                    Quran
                  </Link>
                </li>
                <li>
                  <Link href="/hadis" className="text-sm">
                    Hadis
                  </Link>
                </li>
                <li>
                  <Link href="/salah" className="text-sm">
                    Salah
                  </Link>
                </li>
                <li>
                  <Link href="/donors" className="text-sm">
                    Donors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Support</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="#" className="text-sm">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    i Wall
                  </Link>
                </li>
                <li>
                  <Link href="/social-activities" className="text-sm">
                    Social Activities
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <p className="text-white text-sm text-center lg:text-start mb-0">
            © 2000-2021, All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
