import '../css/home.css'
import { useEffect, useRef } from 'react';

function TypedName() {
  const el = useRef(null);

  useEffect(() => {
    if (window.Typed) {
      const typed = new window.Typed(el.current, {
        strings: ['GRACE LIU'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: false,
      });

      return () => typed.destroy(); // clean up on unmount
    }
  }, []);

  return (
    <div>
      <span className="name" ref={el}></span>
    </div>
  );
}


const Home = () => {

    // const [activeNav, setActiveNav] = useState('#home');

    return (
        <section className= "home-section" id ="home">
          {/* <FadeIn> */}
            <h1 className="heading">Hello, my name is</h1>
          {/* </FadeIn> */}

          {/* <FadeIn> */}
            <div className="neon-container">
                <TypedName />
            </div>
          {/* </FadeIn> */}

          {/* <FadeIn> */}
            <h2 className="home-title">
                <br></br>
                Software Engineer
            </h2>
            <div className="home-container">
                <p className="home-text">I am a junior at the University of Michigan, studying Computer Science and Statistics in the College of Engineering.
                    I am currently looking for <strong>Software Engineering or AI/ML internships for Summer 2026</strong>. Feel free to explore my work or connect with me!
                </p>

                <div className="buttons">
                    <a href="https://www.linkedin.com/in/grace-liu15/" className="square-button" target="_blank">
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/graceliu15" className="square-button" target="_blank">
                        <i class="uil uil-github"></i>
                    </a>
                    <a href="#contact" className="rectangle-button">Connect</a>
                </div>
            </div>
          {/* </FadeIn>   */}
        


        </section>
    )
}

export default Home