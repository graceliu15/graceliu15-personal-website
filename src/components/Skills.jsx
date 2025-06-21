import '../css/skills.css'
import FadeIn from '../components/FadeIn'

const Skill = ({ title, skillsList }) => {

    const List = skillsList.split('\n');

    return (
        <div className="skills-card">

            <h3 className="skills-title">{title}</h3>
            <ul className="skills-card-list">
                {List.map((item, index) => (
                    <li key={index} className="skill-list-item">{item}</li>
                ))}
            </ul>
        
        </div>
    )
}

const Skills = () => {
    return (
        <section className= "skills-section" id="skills">
            <FadeIn>  
            <h2 className= "skills-heading">
                Skills and Interests
            </h2>
            </FadeIn>  

            <FadeIn>  
            <div className="skills-container1">
                <Skill 
                    title="Languages and Libraries"
                    skillsList={`C/C++\nPython\nC#\nMATLAB\nJavaScript\nTypeScript\nSQL\nPandas\nNumPy`}
                />
                <Skill 
                    title="Frameworks and Platforms"
                    skillsList={`React\nDjango\nPyTorch\nSQL Server\nSvelte`}
                />
                <Skill 
                    title="Tools"
                    skillsList={`Git\nMicrosoft Office\nAgile Development`}
                />
            </div>
            </FadeIn>  

            <FadeIn>  
            <div className="skills-container2">
                <Skill 
                    title="Campus Orgs"
                    skillsList={`The Michigan Daily\nMichigan Data Science Team\nSociety of Women Engineers`}
                />
                <Skill 
                    title="Other Interests"
                    skillsList={`Fantasy and dystopian novels\nArt and crafting\nExploring new restaurants`}
                />
            </div>
            </FadeIn>  

        </section>
    )
}

export default Skills