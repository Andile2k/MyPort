export default function HeroSection() {
    return ( 
    <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section-content">
             <p className="section--title">Hey, I'm Andile</p>
              <h1 className="hero--section--title">
                <span className="hero--section-title--color">Full Stack</span>{" "}
                <br />
                Developer
              </h1>
               <p className="hero--section-description">
               As a Full Stack Developer, I have the unique ability to manage both the front-end and back-end aspects of web applications.
               </p>
            </div>
            <button class="btn btn-outline-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="src/assets/Andile.jpg" alt="Andile" />
        </div>
    </section>
   );
}