
const Home = () => {
    return (
        <div className="hero lg:min-h-screen" style={{ backgroundImage: 'url(https://www.rajibweb.com/html/fitme/screen-short/bg.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-4 lg:text-5xl font-bold">WE ARE VERY <span className="text-[#E527B2]">CAREFUL</span></h1>
                    <p className="mb-5 text-2xl">WE TAKE CARE YOUR FITNESS</p>
                    <button className="border px-2 py-3 p-2 hover:bg-[#E527B2] hover:border-none hover:rounded-lg bg-none">JOIN WITH US</button>
                </div>
            </div>
        </div>
    );
};

export default Home;