import React from "react";

const AboutSection = () => {
    const events = [
        {
            id: 1,
            title: "AI-Hackathon",
            description: "Dive into 8 intense hours of coding as a team of 3 tackling real-world challenges proposed by CHESCO.",
            image: "/Untitled design (1)/1.png", // Replace with actual image path
            link: "/Aihackathon",
            buttonText: "Reserve Your Coding Spot"
        },
        {
            id: 2,
            title: "Tech-Talk",
            description: "Get ready for insightful sessions with top industry experts, diving deep into cutting-edge topics across the tech landscape.",
            image: "/Untitled design (1)/3.png", // Replace with actual image path
            link: "/Techtalk",
            buttonText: "Exciting Details Coming Soon!"
        },
        {
            id: 3,
            title: "Gaming Tournament",
            description: "Gear up for action to compete in the ultimate FIFA 2024 tournament. The winner is awarded 🏆",
            image: "/Untitled design (1)/2.png", // Replace with actual image path
            link: "/Gaming",
            buttonText: "Claim Your Gaming Throne"
        }
    ];

    return (
        <div className="boxed-container mt-10">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">About this Event</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="flex justify-center p-4">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-[300px] h-[300px] object-cover rounded"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-2xl font-bold mb-4 text-center">{event.title}</h3>
                            <p className="text-gray-300 mb-6 text-justify">{event.description}</p>
                            <div className="flex justify-center">
                                <a
                                    href={event.link}
                                    className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400 transition text-center"
                                >
                                    {event.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
