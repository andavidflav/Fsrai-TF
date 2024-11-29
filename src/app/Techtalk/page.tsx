// 'use client';

// import { FC, useState, useEffect } from 'react';
// import Image from 'next/image';
// import { AiOutlineGlobal } from 'react-icons/ai';
// import { CiMail } from 'react-icons/ci';
// import { FaInstagram } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Tecktalks: FC = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const slides = [
//         { src: '/2.jpg', alt: 'Slide 1' },
//         { src: '/4.jpg', alt: 'Slide 2' },
//         { src: '/3.jpg', alt: 'Slide 3' }
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     const logos = [
//         { id: 1, src: '/l1.png', alt: 'Logo 1' },
//         { id: 2, src: '/l2.png', alt: 'Logo 2' },
//         { id: 3, src: '/l3.png', alt: 'Logo 3' },
//         { id: 4, src: '/l4.png', alt: 'Logo 4' },
//         { id: 5, src: '/l5.png', alt: 'Logo 5' },
//         { id: 6, src: '/l6.png', alt: 'Logo 6' }
//     ];

//     return (
//         <div className="new-page">
//             {/* Banner Section */}
//             <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
//                 <div className="absolute inset-0">
//                     <Image
//                         src="/1.jpg"
//                         alt="Tech Talks Banner"
//                         fill
//                         style={{ objectFit: 'cover', objectPosition: 'center' }}
//                     />
//                 </div>
//                 <div className="absolute bottom-10 left-5 flex items-center gap-3">
//                     <span className="text-2xl font-semibold">Scroll Down</span>
//                     <svg
//                         className="w-10 h-10 animate-bounce"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 15l7 7 7-7"
//                         />
//                     </svg>
//                 </div>
//             </section>

//             {/* Slider Section */}
//             <section className="slider bg-gray-400 py-10">
//                 <div className="container mx-auto">
//                     <h2 className="text-3xl font-bold mb-10 text-white text-center">
//                         Exhibiting Companies (Mockup logos)
//                     </h2>
//                     <Swiper
//                         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                         spaceBetween={20}
//                         autoplay={{ delay: 2000 }}
//                         loop
//                         slidesPerView={2}
//                         breakpoints={{
//                             640: { slidesPerView: 3 },
//                             768: { slidesPerView: 4 },
//                             1024: { slidesPerView: 6 }
//                         }}
//                         className="flex items-center justify-center"
//                     >
//                         {logos.map((logo) => (
//                             <SwiperSlide key={logo.id} className="flex items-center justify-center">
//                                 <img
//                                     src={logo.src}
//                                     alt={logo.alt}
//                                     className="object-contain w-20 h-20 sm:w-32 sm:h-32 border border-gray-600 p-2 rounded-sm"
//                                 />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </section>

//             {/* Highlighted Talks Section */}
//             <section className="relative h-screen bg-gray-100 text-center">
//                 <div
//                     className="absolute inset-0 bg-cover bg-center opacity-30"
//                     style={{
//                         backgroundImage: 'url(/giphy.gif)',
//                         backgroundSize: 'cover',
//                         backgroundRepeat: 'no-repeat'
//                     }}
//                 ></div>
//                 <h2 className="text-3xl font-bold text-cyan-600 mb-10 pt-10">
//                     Highlighted Talks from Industry Experts
//                 </h2>
//                 <div className="relative mx-auto pt-5 w-[90%] sm:w-[75%] lg:w-[60%] overflow-hidden">
//                     <div
//                         className="flex transition-transform duration-500"
//                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                     >
//                         {slides.map((slide, index) => (
//                             <div
//                                 key={index}
//                                 className={`slide flex-shrink-0 w-full ${
//                                     index === currentSlide ? 'opacity-100' : 'opacity-50'
//                                 }`}
//                             >
//                                 <div className="relative w-full h-[300px] sm:h-[500px]">
//                                     <Image
//                                         src={slide.src}
//                                         alt={slide.alt}
//                                         fill
//                                         style={{ objectFit: 'contain' }}
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button
//                         onClick={() =>
//                             setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//                         }
//                         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 text-white rounded-full"
//                     >
//                         &#8592;
//                     </button>
//                     <button
//                         onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
//                         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 text-white rounded-full"
//                     >
//                         &#8594;
//                     </button>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section className="bg-gray-800 py-10">
//                 <div className="container mx-auto text-white text-center">
//                     <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//                     <div className="flex flex-wrap justify-center gap-6">
//                         <div>
//                             <h3 className="text-xl font-semibold">FSR AI</h3>
//                             <div className="flex justify-center space-x-4 mt-2">
//                                 <a href="https://fsr-ai.de" className="text-blue-500">
//                                     <AiOutlineGlobal className="text-2xl" />
//                                 </a>
//                                 <a href="mailto:fsr-ai@b-tu.de" className="text-blue-500">
//                                     <CiMail className="text-2xl" />
//                                 </a>
//                                 <a href="https://www.instagram.com/fsr.ai" className="text-pink-600">
//                                     <FaInstagram className="text-2xl" />
//                                 </a>
//                             </div>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold">FSR IT</h3>
//                             <div className="flex justify-center space-x-4 mt-2">
//                                 <a href="https://fsr-it.de/en" className="text-blue-500">
//                                     <AiOutlineGlobal className="text-2xl" />
//                                 </a>
//                                 <a href="mailto:fsr-it@b-tu.de" className="text-blue-500">
//                                     <CiMail className="text-2xl" />
//                                 </a>
//                                 <a
//                                     href="https://www.instagram.com/fsr.it/profilecard/?igsh=eW9ud2gycXh3dXph"
//                                     className="text-pink-600"
//                                 >
//                                     <FaInstagram className="text-2xl" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Tecktalks;


'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

const Tecktalks: FC = () => {
    const [currentSection, setCurrentSection] = useState(0);

    // Sections data
    const sections = [
        {
            id: 0,
            content: (
                <div className="relative h-screen flex items-center justify-center text-white">
                    <Image
                        src="/1.jpg"
                        alt="Tech Talks Banner"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div className="absolute bottom-10 left-5 flex items-center gap-3">
                        <span className="text-2xl font-semibold">Scroll Down</span>
                        <svg
                            className="w-10 h-10 animate-bounce"
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
                </div>
            ),
        },
        {
            id: 1,
            content: (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
                    <h2 className="text-3xl font-bold mb-10 text-white">Exhibiting Companies</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {[...Array(6)].map((_, i) => (
                            <Image
                                key={i}
                                src={`/l${i + 1}.png`}
                                alt={`Logo ${i + 1}`}
                                width={100}
                                height={100}
                                className="object-contain p-2 border rounded-sm"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="relative h-screen bg-gray-100 text-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{
                            backgroundImage: 'url(/giphy.gif)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <h2 className="text-3xl font-bold text-cyan-600 mb-10 pt-10">
                        Highlighted Talks from Industry Experts
                    </h2>
                    <div className="relative w-[90%] sm:w-[75%] lg:w-[60%] mx-auto">
                        <Image
                            src="/2.jpg"
                            alt="Highlighted Talk"
                            width={800}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="bg-gray-800 h-screen flex items-center justify-center text-white">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:gap-10">
                            <div>
                                <h3 className="text-xl font-semibold">FSR AI</h3>
                                <div className="flex justify-center space-x-4 mt-2">
                                    <AiOutlineGlobal className="text-2xl text-blue-500" />
                                    <CiMail className="text-2xl text-blue-500" />
                                    <FaInstagram className="text-2xl text-pink-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    // Scroll handler to update sections
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            const delta = Math.sign(event.deltaY);
            setCurrentSection((prev) =>
                Math.min(Math.max(0, prev + delta), sections.length - 1)
            );
        };
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [sections.length]);

    return (
        <div className="relative h-screen overflow-hidden bg-black">
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        currentSection === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    {section.content}
                </div>
            ))}
        </div>
    );
};

export default Tecktalks;
