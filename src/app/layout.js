import { Inter } from "next/font/google";
import SocialLinks from "@/components/SocialLinks";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "House of Grace Christian Center",
    description:
        "House of Grace Christian Center a.k.a Church of the FirstBorn",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-white flex flex-col w-full items-center justify-center">
                <header className="w-full">
                    <SocialLinks />
                    <Navigation />
                </header>
                {children}
            </body>
        </html>
    );
}
