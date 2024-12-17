"use client"
import React,{useState} from "react";
import logo from "/public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";


type Menubar = {
  id: number;
  label: string;
  link: string;
};

const menubar: Menubar[] = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About Us", link: "/about-us" },
  { id: 3, label: "Services", link: "/services" },
  { id: 4, label: "Careers", link: "/careers" },
  { id: 5, label: "Sectors", link: "/sector" },
  { id: 6, label: "Contact Us", link: "/contact-us" },
  { id: 7, label: "Project", link: "/project" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathName = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <section className="py-5 shadow-sm border-b sticky top-0 left-0 bg-white z-50">
      <MaxWidthWrapper>
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
          <Image
            src={logo}
            alt="img-logo"
            width={100}
            height={100}
            className="w-[37px] h-[37px] object-cover"
          />
          </Link>
         
        </div>
        <div className="hidden lg:block">
  {menubar.map((menu) => (
    <Link
      key={menu.id}
      href={menu.link}
      className={`text-base ml-4 font-bold transition-all duration-150 hover:text-[#60D66A] ${
        pathName === menu.link
          ? "bg-gradient-to-r from-[#20B038] to-[#60D66A] text-transparent bg-clip-text"
          : "text-black font-normal"
      }`}
    >
      {menu.label}
    </Link>
  ))}
</div>


<div>
  <Link href="/contact-us" className="bg-gradient-to-t from-[#20B038] to-[#60D66A] px-5 py-3 rounded font-semibold text-base text-white flex items-center gap-2 transition-all duration-500 hover:bg-gradient-to-t hover:from-[#1d623a] hover:to-[#20b14e]">
    Let&apos;s Talk <FaLongArrowAltRight size={20} />
  </Link>
</div>




         {/* Hamburger Menu for Small Screens */}
         <div className="lg:hidden">
            <button onClick={toggleDrawer} aria-label="Menu Toggle">
              {isDrawerOpen ? (
                <HiX size={30} className="text-black" />
              ) : (
                <HiMenuAlt3 size={30} className="text-black" />
              )}
            </button>
          </div>
        </div>

 {/* Mobile Drawer */}
 <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="p-5">
            <button
              onClick={toggleDrawer}
              className="absolute top-4 right-4 text-black"
            >
              <HiX size={25} />
            </button>
            <ul className="mt-10 space-y-5">
              {menubar.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.link}
                    onClick={toggleDrawer}
                    className={`block text-base font-semibold transition-all duration-150 hover:text-[#60D66A] ${
                      pathName === menu.link
                        ? "bg-gradient-to-r from-[#20B038] to-[#60D66A] text-transparent bg-clip-text"
                        : "text-black font-normal"
                    }`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      </div>
      
      </MaxWidthWrapper>
    </section>
  );
};

export default Navbar;
