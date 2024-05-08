import BannerImg from '../assets/undraw_My_universe_803e 1.png'
import Banner from '../shared/Banner';

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <Banner banner={BannerImg} heading="Each student can share their discount code for friends" subheading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium optio ipsam doloribus, nesciunt nemo maxime autem cupiditate. Illo deleniti molestias nam eveniet? Tempora delectus reprehenderit, nisi debitis sapiente voluptas!"} btn1={"I have a code"} btn2={"Want a Code"}/>
        </div>
        
    );
};

export default Newsletter;