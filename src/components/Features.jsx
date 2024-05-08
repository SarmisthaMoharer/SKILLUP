import {motion} from "framer-motion"
import {fadeIn} from '../Varients'

const Features = () => {
    return(
        <>
            <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <motion.div 
                    variants={fadeIn("right",0.2)} 
                    initial="hidden" 
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="lg:w-1/4">
                        <h3 className="text-3xl text-primary font-bold lg:w-1/3 mb-3">Why we are better than others ?</h3>
                        <p className="text-base text-tartiary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime distinctio quidem, nemo autem labore fuga, officiis quod molestiae ratione soluta placeat perferendis animi fugit ullam harum est et eum laboriosam</p>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("up",0.3)} 
                    initial="hidden" 
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className="w-full lg:w-3/4">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                                <img src="src/assets/img2.jpg" alt="" className="mx-3 h-24" />
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convenient study schedule</h5>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                                <img src="src/assets/img2.jpg" alt="" className="mx-4 h-24"/>
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convenient study schedule</h5>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                                <img src="src/assets/img2.jpg" alt="" className="mx-3 h-24"/>
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convenient study schedule</h5>
                            </div>
                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default  Features;