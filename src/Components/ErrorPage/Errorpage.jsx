import Footer from "../../Pages/Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Errorpage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-pink-300">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://kit.juliha.com/yoggs/wp-content/uploads/sites/20/2021/07/yoga-exercises-at-training-SG7HDJF-1-1024x975.png" className="lg:max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <img className="lg:max-w-xl" src="https://kit.juliha.com/yoggs/wp-content/uploads/sites/20/2021/07/404_Asset-3-1024x431.png" alt="" />
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-secondary">Go to HomePage</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Errorpage;