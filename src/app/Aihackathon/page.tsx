'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hackathon: FC = () => {
    const targetDate = new Date(new Date().getFullYear(), 11, 1, 16, 0, 0).toISOString();

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        return {
            days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
            seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const slides = [
        { src: '/2.jpg', alt: 'Slide 1' },
        { src: '/4.jpg', alt: 'Slide 2' },
        { src: '/3.jpg', alt: 'Slide 3' },
    ];

    const logos = [
        { id: 1, src: '/l1.png', alt: 'Logo 1' },
        { id: 2, src: '/l2.png', alt: 'Logo 2' },
        { id: 3, src: '/l3.png', alt: 'Logo 3' },
        { id: 4, src: '/l4.png', alt: 'Logo 4' },
        { id: 5, src: '/l5.png', alt: 'Logo 5' },
        { id: 6, src: '/l6.png', alt: 'Logo 6' },
    ];

    return (
        <div className="new-page">
            {/* Banner Section */}
            <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/1.jpg"
                        alt="Tech Talks Banner"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="absolute bottom-10 left-5 flex items-center gap-3 text-white">
                    <span className="text-lg md:text-2xl font-semibold">Scroll Down</span>
                    <svg
                        className="w-6 md:w-10 h-6 md:h-10 animate-bounce"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7 7 7-7"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-10 right-5">
                    <a
                        href="#cheat-sheet"
                        className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition"
                    >
                        Go to Registration
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto px-4 py-8 flex flex-wrap items-center">
                <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
                    <img
                        src="/l1.png"
                        alt="Event"
                        className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">About this Event</h2>
                    <p className="text-base leading-relaxed text-gray-600">
                        The FSR Community invites you to three unique events running parallel on 12th December:
                        <span className="text-green-500 font-bold"> AI-Hackathon, Cyber-Hackathon,</span> and more. 
                        Explore solutions to real-world problems, participate in tech talks, gaming tournaments, and
                        celebrate at the year-end party!
                    </p>
                </div>
            </section>

            {/* Slider Section */}
            <section className="py-8 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">Exhibiting Companies</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        loop
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                    >
                        {logos.map((logo) => (
                            <SwiperSlide key={logo.id}>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="object-contain w-full h-auto max-w-xs border border-gray-300 p-2 rounded-lg shadow-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Countdown Section */}
            <section className="py-10 bg-gray-200">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Time Remaining</h2>
                    <div className="flex flex-wrap gap-4 justify-center text-gray-900 text-lg font-mono">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span>Days</span>
                        </div>
                        <span className="text-4xl font-bold">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span>Hours</span>
                        </div>
                        <span className="text-4xl font-bold">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span>Minutes</span>
                        </div>
                        <span className="text-4xl font-bold">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-8 bg-gray-800 text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <div className="flex justify-center gap-4">
                        <a href="https://fsr-ai.de" className="text-blue-400">
                            <AiOutlineGlobal className="text-3xl" />
                        </a>
                        <a href="mailto:fsr-ai@b-tu.de" className="text-blue-400">
                            <CiMail className="text-3xl" />
                        </a>
                        <a href="https://www.instagram.com/fsr.ai" className="text-pink-400">
                            <FaInstagram className="text-3xl" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hackathon;
