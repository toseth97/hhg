"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navigation = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className="w-full flex items-center justify-between lg:px-16 px-4">
                <div className="">
                    <Image
                        src="https://elementor.zozothemes.com/zegen/wp-content/uploads/sites/2/2024/01/zegen-white-logo.png"
                        alt="logo"
                        width={200}
                        height={200}
                    />
                </div>
                <ul className="lg:flex hidden gap-4 font-bold primary__bg__text w-5/12 h-full">
                    <Link
                        href="/"
                        className="nav__link w-2/12 h-full flex items-center justify-center"
                    >
                        <li>Home</li>
                        <div className="line"></div>
                    </Link>
                    <Link
                        href="/"
                        className="nav__link w-2/12 h-full flex items-center justify-center"
                    >
                        <li>About</li>
                        <div className="line"></div>
                    </Link>
                    <Link
                        href="/"
                        className="nav__link w-2/12 h-full flex items-center justify-center"
                    >
                        <li>Blog</li>
                        <div className="line"></div>
                    </Link>
                    <Link
                        href="/"
                        className="nav__link w-2/12 h-full flex items-center justify-center"
                    >
                        <li>Contact Us</li>
                        <div className="line"></div>
                    </Link>
                    <Link
                        href="/"
                        className="nav__link w-2/12 h-full flex items-center justify-center"
                    >
                        <li>Donate</li>
                        <div className="line"></div>
                    </Link>
                </ul>
                <div
                    onClick={() => setIsMobile((prev) => !prev)}
                    className="h-full lg:hidden flex items-center text-3xl text-white"
                >
                    {!isMobile ? (
                        <RiMenu3Line className="text-3xl" />
                    ) : (
                        <IoMdClose className="text-3xl" />
                    )}
                </div>
            </nav>
            {isMobile && (
                <div className="block w-full ">
                    <ul className="flex gap-4 font-bold uppercase flex-col text-sm">
                        <Link
                            href="/"
                            className="nav__link  py-4 border-b flex items-center justify-center"
                        >
                            <li>Home</li>
                        </Link>
                        <Link
                            href="/"
                            className="nav__link  py-4 border-b flex items-center justify-center"
                        >
                            <li>About</li>
                        </Link>
                        <Link
                            href="/"
                            className="nav__link  py-4 border-b flex items-center justify-center"
                        >
                            <li>Blog</li>
                        </Link>
                        <Link
                            href="/"
                            className="nav__link  py-4 border-b flex items-center justify-center"
                        >
                            <li>Contact Us</li>
                        </Link>
                        <Link
                            href="/"
                            className="nav__link  py-4 border-b flex items-center justify-center"
                        >
                            <li>Donate</li>
                        </Link>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navigation;
