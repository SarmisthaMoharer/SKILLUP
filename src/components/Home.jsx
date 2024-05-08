import Banner from "../shared/Banner";


const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'> 
            <Banner heading={"Develop your skills without digligence"} subheading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis molestiae natus iure."} btn1={"Get Started"} btn2={"Discount"}/>
        </div>
    );
};

export default Home;