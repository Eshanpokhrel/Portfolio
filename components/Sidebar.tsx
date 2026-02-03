"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  faHome,
  faUser,
  faGears,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LogoS from "@/public/images/E.png";
import LogoSubtitle from "@/public/images/logo_sub.png";

const navItems = [
  { href: "/", icon: faHome, label: "Home" },
  { href: "/about", icon: faUser, label: "About" },
  { href: "/projects", icon: faGears, label: "Projects" },
  { href: "/contact", icon: faEnvelope, label: "Contact" },
];

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Top */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3 border-b border-white bg-black">
        <Link href="/" onClick={() => setShowNav(false)}>
          <div className="flex flex-col items-center gap-1 p-4 border-r border-white/20">
            <Image src={LogoS} alt="logo" width={10} height={5} />
            <Image src={LogoSubtitle} alt="logo-sub" width={30} height={20} />
          </div>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className="text-yellow-400 text-3xl"
          onClick={() => setShowNav(true)}
        />
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden sm:flex flex-col z-[999] justify-between h-screen w-[6rem] border-r border-white/30 bg-black fixed left-0 top-0 py-6 px-4">
        <Link href="/" onClick={() => setShowNav(false)}>
          <div className="flex flex-col items-center gap-2">
            <Image src={LogoS} alt="logo" width={20} height={20} />
            <Image src={LogoSubtitle} alt="logo-sub" width={100} height={20} />
          </div>
        </Link>

        <nav className="mt-10 flex flex-col gap-12">
          {navItems.map(({ href, icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} onClick={() => setShowNav(false)}>
                <div
                  className={`group relative h-10 flex items-center justify-center transition-all ${
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {/* Icon - visible by default, hidden on hover */}
                  <FontAwesomeIcon
                    icon={icon}
                    size="lg"
                    className="transition-opacity duration-200 group-hover:opacity-0 absolute"
                  />
                  {/* Label - hidden by default, shown on hover */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute text-xl ">
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        <ul className="flex flex-col gap-4 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/eshan-pokhrel-109b15163/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="sm" color="#0a66c2" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Eshanpokhrel"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="sm" color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/eshan.pokhrel.5"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="sm" color="#0866ff" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      {showNav && (
        <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col p-6 text-white font-extrabold">
          <div className="h-full mt-3 -mr-1.5 flex items-start justify-between">
            <nav className=" w-full flex flex-col gap-6 text-xl text-start">
              {navItems.map(({ href, icon, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setShowNav(false)}
                  >
                    <div
                      className={`flex h-10 gap-4 ${
                        isActive
                          ? "text-white"
                          : "text-white/40 hover:text-white"
                      }`}
                    >
                      <FontAwesomeIcon icon={icon} size="xl" width={20} />
                      <p className="text-3xl ">{label}</p>
                    </div>
                  </Link>
                );
              })}
            </nav>
            <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-3xl text-yellow-400"
              onClick={() => setShowNav(false)}
            />
          </div>
          </div>
            <ul className="flex gap-12 items-center justify-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/eshan-pokhrel-109b15163/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="sm"
                    color="#0a66c2"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Eshanpokhrel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="sm" color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/eshan.pokhrel.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="sm"
                    color="#0866ff"
                  />
                </a>
              </li>
            </ul>
        </div>
      )}
    </>
  );
}
