import { useEffect, useState } from "react";
import Services from "./Services";

const Service = () => {

    const[service, setService] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(result => result.json())
        .then(data => setService(data))
    },[])

    console.log(service)


    return (
        <div>
            <h1 className="text-4xl mt-5 text-center font-medium ">OUR <span className="text-[#E527B2]">SERVICES</span> </h1>
            <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 lg:mt-5 lg:mb-10 mx-auto w-5/6">
            {
                service.map( service => <Services key={service.id} service={service}> </Services>)
            }
            </div>
        </div>
    );
};

export default Service;