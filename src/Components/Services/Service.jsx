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
            <h1 className="text-4xl  text-center font-medium ">OUR <span className="text-[#E527B2]">SERVICES</span> </h1>
            {
                service.map(() => <Services key={service.id} service={service}> </Services>)
            }
        </div>
    );
};

export default Service;