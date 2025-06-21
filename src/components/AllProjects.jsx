import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/all-projects.css';
import FadeIn from '../components/FadeIn'
import tmdProject from '../assets/TMD-project.png'
import graph from '../assets/398-project.png'
import mdst from '../assets/mdst.jpeg'
import figma from '../assets/figma.png'
import weather from '../assets/weather-app.png'
import engr100 from '../assets/engr100.png'
import nlp from '../assets/nlp.png'
import sudoku from '../assets/sudoku.png'
import git_tutorial from '../assets/git-tutorial.png'



// 
const projects = [
    {
        id: 1,
        title: 'Microprocessor-Based Toy Development',
        imgSrc: engr100,
        type: 'Hardware',
        skills: 'Assembly\nVerilog\nDatapath Design',
        desc: `Implemented datapath and control unit for a general purpose, stored-program computer on Altera DE2-115 board along with
                I/O device drivers using Verilog and assembly language. Researched, programmed, and tested a multiplayer memory game with custom GUI, wireless communication, and I/O devices
                (touchscreen, VGA monitor, speaker, serial communication) in 13 weeks and presented finished prototype in final showcase.`,
        link: null
    },
    {
        id: 2,
        title: 'Weather Forecast App',
        imgSrc: weather,
        type: 'Web Development',
        skills: 'HTML/CSS\nJavaScript',
        desc: `This is a web app that uses the Weather API to provide the temperature, wind, and humidity for any user-inputted city.`,
        link: 'https://github.com/graceliu15/weather-forecast'
    },
    {
        id: 3,
        title: 'Natural Language Processing Project',
        imgSrc: nlp,
        type: 'Software Development',
        skills: 'C++',
        desc: `This project utilizes supervised machine learning model and OOP in C++ to develop and train a Naive Bayes classifier in order to classify
                Piazza forum posts according to different labels with 87% accuracy`,
        link: null
    },
    {
        id: 4,
        title: 'Sudoku Solver',
        imgSrc: sudoku,
        type: 'Web Development',
        skills: 'Python\nDjango\nnHTML/CSS',
        desc: `This project implements a backtracking algorithm in Python to efficiently solve unfinished Sudoku puzzles and handle invalid inputs. 
                Using Django, HTML, and CSS, an intuitive web application was developed for the front end, allowing users to input Sudoku puzzles via a dynamic board interface and view the solved
                puzzle.`,
        link: 'https://github.com/graceliu15/sudoku_solver'
    },
    {
        id: 5,
        title: 'MDST Git Tutorial',
        imgSrc: git_tutorial,
        type: 'Git/GitHub',
        skills: 'Git/GitHub\nVideo Editing',
        desc: `Created a tutorial video detailing what Git and GitHub are, how to use common Git commands for software development, 
                and how to set up a project repository on GitHub as part of the Michigan Data Science Team education committee.`,
        link: 'https://www.youtube.com/watch?v=JTdCIcUGMyE'
    },
    {
        id: 6,
        title: 'Michigan Daily Web App',
        imgSrc: tmdProject,
        type: 'Web Development',
        skills: 'React\nHTML/CSS\nTypescript',
        desc: `This is a Spotify Wrapped-esque web app designed to showcase the top columns, editorials, cartoons, 
                and events from The Michigan Daily Opinion section. Built with React and CSS animations, the app provides interactive components, 
                keyboard input, and responsive design for both desktop and mobile.`,
        link: null
    },
    {
        id: 7,
        title: 'Power Outage Data Analysis',
        imgSrc: graph,
        type: 'Data Science',
        skills: 'Python\nPandas\nScikit-Learn\nJupyter Lab',
        desc: `The first half of this project cleans and performs exploratory data analysis on a power outage dataset using Pandas. 
                The second half attempts to predict the duration of a power outage by creating a multiple linear regression model 
                using Scikit-Learn. Overall 21% decrease in test MSE from base to final model.`,
        link: 'https://graceliu15.github.io/power-outage-duration-analysis/'
    },
    {
        id: 8,
        title: 'MDST Car Brand Classification Model',
        imgSrc: mdst,
        type: 'Machine Learning',
        skills: 'Python\nPyTorch',
        desc: 'This project implements a computer vision multi-class classification model using PyTorch and a pre-trained ResNet-50 model in order to classify images based on their car brand.',
        link: 'https://colab.research.google.com/drive/1tJKIhWrNEORUDM7fR6QC-C_KPwUsQMd6?usp=sharing'
    },
    {
        id: 9,
        title: 'SWE Alternative Spring Break Figma Tutorial',
        imgSrc: figma,
        type: 'UX Design',
        skills: 'Figma\nTeaching',
        desc: `As part of the Alternative Spring Break trip with the U-M Society of Women Engineers, I created and led a tutorial to teach 100+ students
                about graphic/UX design as well as how to use Figma. Created a social media profile-type page.`,
        link: 'https://docs.google.com/presentation/d/1KVVhdAc03bePIRM2p36MvuSsaLxWAiog5vBWnsTjXMU/edit?usp=sharing'
    },
];

function ProjectCard({ project, onClick }) {
    const skillsList = project.skills.split('\n');

    return (
        <div className="project-card" onClick={onClick}>
            <img src={project.imgSrc} alt={project.title} className="project-img" />
            <div className="project-title-container">
                <h2 className="project-title">{project.title}</h2>
                {/* <a href={project.link} className="link-button" target="_blank">
                    <i class="uil uil-external-link-alt"></i>
                </a> */}
            </div>
            <ul className="project-skills-list">
                {skillsList.map((item, index) => (
                    <li className="project-skill" key={index}>{item}</li>
                ))}
            </ul>
            <p className="project-type">{project.type}</p>
        </div>
    );
}

function ExpandedProjectCard({ project, onClose }) {
    const skillsList = project.skills.split('\n');

    return (
        <div className="expanded-card">
            <button className="close-button" onClick={onClose}>✖</button>
            <img src={project.imgSrc} alt={project.title} className="project-img" />
            <div className="project-title-container">
                <h2 className="project-title">{project.title}</h2>
                {project.link && (
                    <a href={project.link} className="link-button" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-external-link-alt"></i>
                    </a>
                )}
            </div>
            <ul className="project-skills-list">
                {skillsList.map((item, index) => (
                    <li className="project-skill" key={index}>{item}</li>
                ))}
            </ul>
            <p className="project-type">{project.type}</p>
            <p className="project-desc">{project.desc}</p>
        </div>
    );
}

const Projects = () => {
    const [focusedCard, setFocusedCard] = useState(null);
    const popupRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setFocusedCard(null);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        if (focusedCard && popupRef.current) {
            popupRef.current.focus();
        }
    }, [focusedCard]);

    return (
        <section className="all-projects-section" id="projects">
            <FadeIn>  
            <h2 className="all-projects-heading" >All Projects</h2>
            </FadeIn>  

           
            <div className={"all-project-grid-wrapper"}>
                <div className="all-project-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setFocusedCard(project)}
                        />
                    ))}
                </div>

                {focusedCard && (
                    <div
                        className="project-overlay"
                        tabIndex={0}
                        onClick={() => setFocusedCard(null)}
                    >
                        <div
                            className="project-popup"
                            role="dialog"
                            aria-modal="true"
                            tabIndex={-1}
                            ref={popupRef}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExpandedProjectCard
                                project={focusedCard}
                                onClose={() => setFocusedCard(null)}
                            />
                        </div>
                    </div>
                )}
            </div>

            <FadeIn>  
            <div className="more-projects-button-container">
                <button onClick={() => navigate('/')} className="more-projects-button">
                    Back
                </button>
            </div>
            </FadeIn> 
            
        </section>
    );
};

export default Projects;
