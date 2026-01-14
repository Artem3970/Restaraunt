import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="containerhero">
        <h1 className="herotitle">DISCOUNT 50%</h1>
        <p className="herotext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
        <button className="herobutton">Order Now</button>
      </div>
    </section>
  );
}

export default Hero;
