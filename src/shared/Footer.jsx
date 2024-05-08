
import { FaFacebook ,  FaInstagram , FaTwitter , } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#140d4f] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-6 "> <img className="w-10 inline-block items-center border-2 border-black rounded-full text-primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezFpXLIzYs2PKGyRCPlMcqqWtaf6NQ6nXfQ&usqp=CAU" alt="" /><span className="text-white">SKILLUP</span>
                    </a>
                    <p className="md:w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, est eaque maxime eligendi nisi odio deleniti, sunt fugiat quidem quos.</p>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="bg-[#706ded56] py-2 px-4 rounded-md focus:outline-none" />
                        <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start ">
                    <div className="space-y-5 mt-5 ">
                        <h4 className="text-xl">Platform</h4>
                        <ul className="space-y-3">
                        <a href="/" className="block hover:text-gray-300">Overview</a>
                        <a href="/" className="block hover:text-gray-300">Features</a>
                        <a href="/" className="block hover:text-gray-300">About</a>
                        <a href="/" className="block hover:text-gray-300">Pricing</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Help</h4>
                        <ul className="space-y-3">
                        <a href="/" className="block hover:text-gray-300">How does it works?</a>
                        <a href="/" className="block hover:text-gray-300">Where to ask questions?</a>
                        <a href="/" className="block hover:text-gray-300">How to play?</a>
                        <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contacts</h4>
                        <ul className="space-y-3">
                        <p className=" hover:text-gray-300">(033) 1234567890</p>
                        <p className=" hover:text-gray-300">123 fnh fhn</p>
                        <p className=" hover:text-gray-300">reque lake , switzerland</p>
                        <p className=" hover:text-gray-300">4830</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>@ SKILLUP 20RT --- 20RT .All rights reserved.</p>
                <div className='flex items-center space-x-7'>
                    <FaFacebook size={30} className=' cursor-pointer hover:translate-y-4 transition-all duration-300 '/>
                    <FaInstagram size={30} className=' cursor-pointer hover:translate-y-4 transition-all duration-300'/>
                    <FaTwitter size={30} className=' cursor-pointer hover:translate-y-4 transition-all duration-300'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;