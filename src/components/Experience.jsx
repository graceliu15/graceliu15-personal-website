import '../css/experiences.css'
import FadeIn from '../components/FadeIn'


const Experience = ({ title, location, duration, description, skills }) => {

    const descriptionList = description.split('\n');
    const skillsList = skills.split('\n');

    return (
        <>

            <h2 className="experience-title">{title}</h2>
            <h3 className="experience-loc">{location}</h3>
            <h3 className="experience-dur">{duration}</h3>
            {/* <ul className="description-list">
                {descriptionList.map((item, index) => (
                    <p>
                        <li key={index} >{item}</li>
                    </p>
                ))}
            </ul> */}

            <ul className="skills-list">
                {skillsList.map((item, index) => (
                    <p className="skill">
                        <li key={index}>{item}</li>
                    </p>
                    
                ))}
            </ul>
        
        </>
    )
}

const Experiences = () => {
    return (
        <section className= "experiences-section"  id="experience">
            <FadeIn>
            <h2 className= "experiences-heading">
                Experiences
            </h2>
            </FadeIn>

            <FadeIn>
            <div className="experiences-list">
                <ul className="experience-list">
                    <li>
                        <Experience 
                            title="Software Development Intern"
                            location="United Wholesale Mortgage - Pontiac, Michigan"
                            duration="May 2025 - Aug 2025"
                            description={`Teach C++ and MATLAB\nHold office hours`}
                            skills={`C#\nReact\nSQL\nxUnit\nMoq\nAgile`}
                        />
                    </li>
                    <br></br>
                    <br></br>
                    <li>
                        <Experience 
                            title="Instructional Aide for Intro to Computers and Programming"
                            location="University of Michigan College of Engineering - Ann Arbor, Michigan"
                            duration="January 2025 - Present"
                            description={`Teach C++ and MATLAB\nHold office hours`}
                            skills={`C++\nMATLAB\nLeadership`}
                        />
                    </li> 
                    <br></br>
                    <br></br>
                    <li>
                        <Experience 
                            title="Data Intern"
                            location="Dare Auto - Plymouth, Michigan"
                            duration="Aug 2024 - Sep 2024"
                            description={`Teach C++ and MATLAB\nHold office hours`}
                            skills={`Excel\nPowershell`}
                        />
                    </li> 

                </ul>
            </div>
            </FadeIn>

        </section>
    )
}

export default Experiences