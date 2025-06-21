import '../css/contact.css'
import FadeIn from '../components/FadeIn'

const Contacts = () => {
    return (
        <section className= "contact-section" id="contact">
            <FadeIn>
                <h2 className= "contact-heading">
                    Get in Touch
                </h2>
            </FadeIn>

            <FadeIn>
                <div className="contact-options">
                    <div className="contact-button">
                        <i className="uil uil-envelope contact-icon"></i>
                        <h4 className="contact-title">Email</h4>
                        <p className="contact-info">gracela@umich.edu</p>
                        <a className="email-link" target="_blank">
                            Email me
                            <i class="uil uil-arrow-right"></i>
                        </a>
                    </div>
                    <div className="contact-button">
                        <i className="uil uil-linkedin contact-icon"></i>
                        <h4 className="contact-title">LinkedIn</h4>
                        <p className="contact-info">grace-liu15</p>
                        <a href="https://www.linkedin.com/in/grace-liu15/" className="connect-link" target="_blank">
                            Connect with me 
                            <i class="uil uil-arrow-right"></i>
                        </a>
                    </div>
                    <div className="contact-button">
                        <i className="uil uil-github contact-icon"></i>
                        <h4 className="contact-title">GitHub</h4>
                        <p className="contact-info">graceliu15</p>
                        <a href="https://github.com/graceliu15" className="connect-link" target="_blank">
                            My work
                            <i class="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </FadeIn>

           
            <p className="end-marker">. . .</p>
            
        </section>
    )
}

export default Contacts