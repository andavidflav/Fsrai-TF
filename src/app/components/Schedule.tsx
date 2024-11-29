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

const Schedule = () => {
    const scheduleItems = [
        { time: '9:00 AM', title: 'Registration', description: 'Sign-in and start the day!' },
        { time: '10:00 AM', title: 'Keynote', description: 'Opening speech by the guest speaker.' },
        { time: '11:00 AM', title: 'Workshop 1', description: 'First workshop session begins.' },
        { time: '12:00 PM', title: 'Lunch Break', description: 'Relax and enjoy your lunch.' },
        { time: '1:00 PM', title: 'Workshop 2', description: 'Second workshop session begins.' },
        { time: '2:00 PM', title: 'Hackathon Begins', description: 'Start coding and creating solutions.' },
        { time: '3:00 PM', title: 'Networking', description: 'Meet new people and share ideas.' },
        { time: '4:00 PM', title: 'Pitching', description: 'Pitch your ideas to the judges.' },
        { time: '5:00 PM', title: 'Submission Deadline', description: 'Submit your project for review.' },
        { time: '6:00 PM', title: 'Closing Remarks', description: 'Closing speech and prize distribution.' },
    ];

    return (
        <div
            className="relative my-10 w-full py-20"
            style={{
                backgroundImage: `url('./img3.png')`, // Background image (optional)
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="boxed-container">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Event Schedule</h2>

                <div className="relative w-full h-auto flex justify-center">
                    {/* Container for the schedule items */}
                    <div className="relative w-full max-w-3xl flex flex-col items-center">
                        {/* Vertical Layout with increased spacing */}
                        {scheduleItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative z-10 flex items-center mb-10"  // Added margin bottom for spacing
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex justify-center items-center mr-6">
                                    <span className="text-sm">{index + 1}</span>
                                </div>
                                <div className="text-left text-white">
                                    <h4 className="font-bold">{item.time}</h4>
                                    <h5 className="text-lg">{item.title}</h5>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;

