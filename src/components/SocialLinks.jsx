import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
const SocialLinks = () => {
    return (
        <div className="w-full flex justify-between items-center social__top lg:px-16 px-2">
            <div className="flex gap-2 justify-center lg:w-3/12 w-full ">
                <CiLocationOn className="text-red-600 font-bold text-xl lg:block hidden" />
                <p className="lg:text-sm text-xs  opacity-70 ">
                    No 5, Salawu street, Oshodi, Lagos, Nigeria.
                </p>
            </div>
            <div className="flex h-full items-center flex-1 justify-end  ">
                <Link
                    href="/"
                    className="flex px-4 h-full items-center social__link "
                >
                    <FaFacebookF />
                </Link>
                <Link
                    href="/"
                    className="flex px-4 h-full items-center social__link "
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="/"
                    className="flex px-4 h-full items-center social__link "
                >
                    <FaYoutube />
                </Link>
                <Link
                    href="/"
                    className="flex px-4 h-full items-center social__link "
                >
                    <FaTiktok />
                </Link>
            </div>
        </div>
    );
};

export default SocialLinks;
