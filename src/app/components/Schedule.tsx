const Schedule = () => {
    return (
        <div
            className="relative my-5 w-full"
            style={{
                backgroundImage: `url('./img3.png')`, // Replace with your background image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="boxed-container py-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-white"></h2>
                <div className="relative w-full h-auto overflow-hidden flex items-center justify-center">
                    <img
                        src="./img2.png" // Replace with your image path
                        alt="Schedule"
                        className="object-cover w-[80%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Schedule;
