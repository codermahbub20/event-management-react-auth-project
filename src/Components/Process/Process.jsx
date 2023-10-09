import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";
import { MdSportsGymnastics } from "react-icons/md";

const Process = () => {
    return (
        <div>
            <div className="hero min-h-[30vh]" style={{ backgroundImage: 'url(https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/04/bg-1-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-4xl font-bold">Our  Process</h1>
                    </div>
                </div>
            </div>

            <div className="w-1/2 space-y-5 mt-7 mx-auto">
                <h1 className="text-3xl font-medium  text-center">Our Work Process</h1>
                <p className="mb-5 text-xl ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            </div>

            <div className="grid gap-5 p-5 mt-5 mb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto">

                <div className="card  bg-rose-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <GrYoga className="w-20 h-20"></GrYoga>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Protection From Injury</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="card  bg-rose-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <TbYoga className="w-20 h-20"></TbYoga>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Weight Reduction</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="card  bg-rose-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <MdSportsGymnastics className="w-20 h-20"></MdSportsGymnastics>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Increased Flexibility</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="card  bg-rose-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <GrYoga className="w-20 h-20"></GrYoga>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Protection From Injury</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="card  bg-rose-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <TbYoga className="w-20 h-20"></TbYoga>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Weight Reduction</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="card  bg-rose-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <MdSportsGymnastics className="w-20 h-20"></MdSportsGymnastics>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Increased Flexibility</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Process;