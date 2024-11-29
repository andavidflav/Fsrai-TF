// const Schedule = () => {
//     return (
//         <div
//             className="relative my-5 w-full"
//             style={{
//                 backgroundImage: `url('./img3.png')`, // Replace with your background image path
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//             }}
//         >
//             <div className="boxed-container py-20">
//                 <h2 className="text-3xl font-bold text-center mb-10 text-white"></h2>
//                 <div className="relative w-full h-auto overflow-hidden flex items-center justify-center">
//                     <img
//                         src="./img2.png" // Replace with your image path
//                         alt="Schedule"
//                         className="object-cover w-[80%]"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Schedule;


'use client';
import { useEffect, useRef } from 'react';

const Schedule = () => {
    const scheduleItems = [
        { time: '9:00 AM', title: 'Registration', description: 'Sign-in and start the day!' },
        { time: '10:00 AM', title: 'Keynote', description: 'Opening speech by the guest speaker.' },
        { time: '12:00 PM', title: 'Lunch Break', description: 'Relax and enjoy your lunch.' },
        { time: '2:00 PM', title: 'Hackathon Begins', description: 'Start coding and creating solutions.' },
        { time: '5:00 PM', title: 'Submission Deadline', description: 'Submit your project for review.' },
        { time: '6:00 PM', title: 'Networking', description: 'Meet new people and share ideas.' },
        { time: '7:00 PM', title: 'Pitching', description: 'Pitch your ideas to the judges.' },
        { time: '8:00 PM', title: 'Closing Remarks', description: 'Closing of the event.' },
        { time: '9:00 PM', title: 'After Party', description: 'Celebrate the achievements!' },
        { time: '10:00 PM', title: 'Event End', description: 'Farewell and see you next time!' },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    // Handle mouse wheel scroll for horizontal scrolling
    const handleWheelScroll = (event: WheelEvent) => {
        if (scrollRef.current) {
            const scrollAmount = event.deltaY; // How much the wheel moves vertically
            const scrollContainer = scrollRef.current;

            // Move horizontally based on wheel movement
            scrollContainer.scrollLeft += scrollAmount;

            // Prevent the default behavior of vertical scroll
            event.preventDefault();
        }
    };

    // Scroll left function
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 250; // Scroll left by 250px (adjust as needed)
        }
    };

    // Scroll right function
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 250; // Scroll right by 250px (adjust as needed)
        }
    };

    useEffect(() => {
        // Attach wheel event listener to handle scroll
        if (scrollRef.current) {
            scrollRef.current.addEventListener('wheel', handleWheelScroll, { passive: false });
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('wheel', handleWheelScroll);
            }
        };
    }, []);

    return (
        <div className="relative my-10 w-full py-20 bg-slate-900">
            <div className="boxed-container">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Event Schedule</h2>

                {/* Horizontal Scrolling Container */}
                <div className="relative w-full h-auto overflow-hidden flex items-center space-x-8 py-4 snap-x snap-mandatory scroll-smooth">
                    {/* Left Scroll Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    >
                        &#8592;
                    </button>

                    <div
                        ref={scrollRef}
                        className="relative w-full h-auto overflow-hidden flex items-center space-x-8 py-4 snap-x snap-mandatory scroll-smooth"
                    >
                        {/* Schedule Items */}
                        {scheduleItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center flex-shrink-0 snap-center"
                                style={{
                                    minWidth: '250px',
                                    maxWidth: '300px',
                                }}
                            >
                                {/* Circle Pin */}
                                <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex justify-center items-center mb-4">
                                    <span className="text-lg font-bold">{index + 1}</span>
                                </div>

                                {/* Schedule Item Content */}
                                <div className="text-center text-white">
                                    <h4 className="text-xl font-semibold">{item.time}</h4>
                                    <h5 className="text-lg font-semibold">{item.title}</h5>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
