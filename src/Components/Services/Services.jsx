/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Services = ({ service }) => {

   console.log(service)

   const{img,name,title,description,price} = service;

    return (
        <div>
    
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 h-[300px] rounded-t-lg" src={img} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h1 className="text-xl text-center font-medium tracking-tight text-gray-900 dark:text-white">{name}</h1>
                    </a>
                    <h4>{title}</h4>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <Link className="btn btn-sm btn-secondary">More Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;