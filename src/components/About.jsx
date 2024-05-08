import {motion} from "framer-motion"
import {fadeIn} from '../Varients'

const About = () => {
    return(
        <>
            <div className="md:px-14 p-4 max-w-5 mx-auto space-y-10" id="about">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div 
                    variants={fadeIn("right",0.2)} 
                    initial="hidden" 
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="md:w-1/5">
                        <img src="src/assets/undraw_My_universe_803e 1.png" alt="" />
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("left",0.3)} 
                    initial="hidden" 
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="md:w-3/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
                        <p className="text-tartiary text-lg mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, consequatur nihil, vitae fugit, reprehenderit atque repellat quisquam voluptas magni nobis .</p>
                        <button className="btnPrimary">Get Started</button>
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center ">
                    <motion.div 
                    variants={fadeIn("up",0.2)} 
                    initial="hidden" 
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="md:w-1/5">
                        <img src="src/assets/undraw_My_universe_803e 1.png" alt="" />
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("right",0.2)} 
                    initial="hidden" 
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="md:w-3/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You can practice at any <span className="text-secondary">time convenient for you.</span></h2>
                        <p className="text-tartiary text-lg mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, consequatur nihil, vitae fugit, reprehenderit atque repellat quisquam voluptas magni nobis .</p>
                        <button className="btnPrimary">Get Started</button>
                    </motion.div>
                </div>
            
            </div>
        </>
    );
};
export default About;