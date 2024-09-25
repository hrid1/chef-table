import chef from "../../../assets/chefHero.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto px-6">
      <div
        className="hero border rounded-2xl overflow-hidden md:min-h-[550px] bg-bottom my-10"
        style={{
          backgroundImage: `url(${chef})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center md:w-4/5 ">
          <div className="">
            <h1 className="my-4 text-4xl md:text-6xl font-bold text-white leading-tight m">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="my-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-5">
              <button className="btn bg-prime border-none">Explore Now</button>
              <button className="btn btn-outline text-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
