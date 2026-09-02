import heroImg from "../../assets/resources/hero-image.jpg";
import heroImgSm from "../../assets/resources/hero-image-sm.jpg";
import herotext from "../../assets/resources/hero-text.png";

const Hero = () => {
    return (
        <div className="relative max-w-337.5 m-auto aspect-16/10 rounded-xl md:aspect-5/3 lg:aspect-5/2.5 xl:h-screen 2xl:h-auto 2xl:aspect-5/2">
            <img
                src={heroImgSm}
                className="w-full h-full object-cover rounded-xl lg:hidden"
            />

            <img
                src={heroImg}
                className="hidden w-full h-full object-cover object-[40%] rounded-xl lg:block"
            />

            <img
                src={herotext}
                className="absolute w-[45%] h-auto top-[20%] right-[10%] lg:w-[45%] xl:w-[45%]"
            />
        </div>
    );
};

export default Hero;