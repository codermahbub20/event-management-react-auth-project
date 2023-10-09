
import { Link } from "react-router-dom";
import Service from "../../Components/Services/Service";
import Gallery from "../Gallery/Gallery";
import Faq from "./FAQ's/Faq";

const Home = () => {

    return (
      <div>
          <div className="hero sm:min-h-screen md:min-h-[80vh] lg:min-h-screen " style={{ backgroundImage: 'url(https://www.rajibweb.com/html/fitme/screen-short/bg.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-4 lg:text-5xl font-bold">WE ARE VERY <span className="text-[#E527B2]">CAREFUL</span></h1>
                    <p className="mb-5 text-2xl">WE TAKE CARE YOUR FITNESS</p>
                    <Link to="/register"><button className="border px-2 py-3 p-2 hover:bg-[#E527B2] hover:border-none hover:rounded-lg bg-none">JOIN WITH US</button></Link>
                </div>
            </div>
        </div>
        <Service></Service>
        <Gallery></Gallery>
        <Faq></Faq>
       
      </div>
        
    );
};

export default Home;