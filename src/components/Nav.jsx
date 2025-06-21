import React, { useState, useEffect } from 'react';
import '../css/nav.css'

const Nav = () => {
    const[Toggle,showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveNav(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is visible
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, [])

    return (
        <header className="header">
            <nav className="nav-container">
                <a href="/" className="nav-logo">Grace Liu</a>
                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="/#home" onClick={() => setActiveNav('#home')}
                            className={activeNav === '#home' ? 'nav-link active-link' : 'nav-link' }>
                                <i className="uil uil-estate nav-icon"></i> Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/#about" onClick={() => setActiveNav('#about')}
                            className={activeNav === '#about' ? 'nav-link active-link' : 'nav-link' }>
                                <i className='uil uil-user nav-icon'></i> About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/#experience" onClick={() => setActiveNav('#experience')}
                            className={activeNav === '#experience' ? 'nav-link active-link' : 'nav-link' }>
                                <i className='uil uil-file-alt nav-icon'></i> Experience
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/#projects" onClick={() => setActiveNav('#projects')}
                            className={activeNav === '#projects' ? 'nav-link active-link' : 'nav-link' }>
                                <i className='uil uil-scenery nav-icon'></i> Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/#skills" onClick={() => setActiveNav('#skills')}
                            className={activeNav === '#skills' ? 'nav-link active-link' : 'nav-link' }>
                                <i className='uil uil-file-alt nav-icon'></i> Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/#contact" onClick={() => setActiveNav('#contact')}
                            className={activeNav === '#contact' ? 'nav-link active-link' : 'nav-link' }>
                                <i className='uil uil-message nav-icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class='uil uil-times nav-close' onClick={() => showMenu (!Toggle)}></i>

                </div>

                <div className="nav-toggle" onClick={() => showMenu (!Toggle)}>
                    <i class='uil uil-apps nav-icon'></i>
                </div>
            </nav>

        </header>
    )
}

export default Nav