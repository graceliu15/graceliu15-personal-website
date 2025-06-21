import '../css/about.css'
import Headshot from '../assets/headshot.jpg'
import FadeIn from '../components/FadeIn'

const About = () => {
    return (
        <section className= "about-section" id="about">
            <FadeIn>
                <h2 className= "about-heading">
                    About Me
                </h2>
            </FadeIn>

            <FadeIn>
                <div className="about-container">
                    <img src={Headshot} alt="headshot photo" className="about-img" />

                    <div className="about-text">

                        <p> 
                        Hi! My name is Grace and I am passionate about learning new technologies, 
                        solving challenging problems, and the future + innovation of software and AI.
                        <br></br>
                        <br></br>
                        In the next 5 years, I hope to be making a meaningful impact on the real world 
                        through my contributions to emerging software and machine learning initiatives. 
                        As a woman in technology, I also aspire to help close the gender gap and, 
                        consequently, work on diverse and collaborative teams. 
                        My interests lie specifically within <strong>software engineering, machine learning, and data science</strong>.
                        <br></br>
                        <br></br>
                        Outside of school, I love to read fantasy and Dystopian books and watch their movies!
                        </p>
                        <br></br>
                        <br></br>

                       

                        <a href="/GraceLiu-Resume.pdf" download className="resume-button">Resume</a>

                    </div>
        
                </div>
            </FadeIn>
            
        </section>
    )
}

export default About