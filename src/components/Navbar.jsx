import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {link: "Overview",path:"home"},
        {link: "Feature",path:"feature"},
        {link: "About",path:"about"},
        {link: "Pricing",path:"pricing"}
        
    ]
    return(
        <>
            <nav className="bg-gray-100 md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
               <div className="text-xl mx-auto flex justify-between items-center font-medium">
                    <div className=" flex space-x-16 items-center">
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-6"> <img className="w-10 inline-block items-center border-2 border-black rounded-full text-primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezFpXLIzYs2PKGyRCPlMcqqWtaf6NQ6nXfQ&usqp=CAU" alt="" /><span>SKILLUP</span>
                        </a>
                        <ul className="md:flex space-x-12 hidden">
                            {
                                navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-gray- cursor-pointer ">{link}</Link>)
                            }
                        </ul>
                    </div>

                    <div className="space-x-12 hidden md:flex items-center">
                        <a href="/" className=" hidden lg:flex items-center hover:text-secondary"><MdOutlineLanguage className="mr-2" /><span>Language</span></a>
                        <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-800">Sign up</button>
                    </div>
                    <div className="md:hidden ">
                        <button onClick={toggleMenu} className="text-white  focus:outline-none focus:text-gray-300">
                            {
                                isMenuOpen ? (<HiOutlineXMark className="w-6 h-6 text-primary"/>) : (<IoMenu className="w-6 h-6 text-primary"/>) 
                            }
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-lg font-medium ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                   navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className="block hover:text-white" onClick={toggleMenu}>{link}</Link>)  
                }
            </div>
        </>
    );
};

export default Navbar;