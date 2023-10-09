import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {


    const details = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);

    const detail = details.find(job => job.id === idInt);



    return (
        <div >
            <div  className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img  src={detail.img} className="max-w-xl  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{detail.name}!</h1>
                        <p className="py-6 text-xl p-2 ">{detail.description}</p>
                        <Link to="/"><button  className="btn btn-secondary">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;