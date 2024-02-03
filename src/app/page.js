"use client";
import Image from "next/image";
import { hero } from "@/lib/data";
import { useEffect, useState } from "react";
import "./slider.css";

export default function Home() {
    const content = hero;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = content.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, content]);

    useEffect(() => {
        console.log(currentIndex);
        const slider = setInterval(() => {
            setCurrentIndex((oldIndex) => oldIndex + 1);
        }, 10000);

        return () => {
            clearInterval(slider);
        };
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    };

    const previousImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + content.length) % content.length
        );
    };

    return (
        <div className="hero__section flex items-center lg:pt-">
            <div className="slider">
                {content.map((item, index) => {
                    // return (
                    //     <Slide
                    //         key={index}
                    //         item={item}
                    //         currentIndex={currentIndex}
                    //     />
                    // );
                    return (
                        <div
                            key={index}
                            className={`card ${
                                index === currentIndex ? "active" : "null"
                            }`}
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),  url(${item.img})`,
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
