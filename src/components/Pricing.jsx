import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from '../Varients'

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name:"Start", monthlyPrice: 19 ,yearlyPrice: 199, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam adipisci laborum ratione cupiditate sapiente."},
        {name:"Advance", monthlyPrice: 39 , yearlyPrice: 399, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam adipisci laborum ratione cupiditate sapiente."},
        {name:"Premium", monthlyPrice: 59 , yearlyPrice: 599, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam adipisci laborum ratione cupiditate sapiente."}
    ]

    return (
        <div className="md:px-14 p-4 max-w-5 mx-auto space-y-10 py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam adipisci laborum ratione cupiditate sapiente, ab impedit perferendis.</p>
                <div>
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold"></span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold"></span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)}/>
                </div>
            </div>
            <motion.div 
            variants={fadeIn("up",0.2)} 
            initial="hidden" 
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.description}</p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span className="text-base text-tartiary font-medium"> / {isYearly ? 'year' : 'month '}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            <li className="flex gap-4 items-center"><FaPlay />Videos of Lessons</li>
                            <li className="flex gap-4 items-center"><FaPlay />Homework check</li>
                            <li className="flex gap-4 items-center"><FaPlay />Additional practical task</li>
                            <li className="flex gap-4 items-center"><FaPlay />Monthly conference</li>
                            <li className="flex gap-4 items-center"><FaPlay />Personal advice from teachers</li>
                        </ul>
                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btnPrimary">Get Started</button>
                        </div>
                        
                    </div>)
                }
            </motion.div>
        </div>
    );
};

export default Pricing;