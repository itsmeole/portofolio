import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Who Am I?</h2>
                <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#ccc' }}>
                        I am a Data Analyst and Informatics Engineering student with a strong leadership track record as Head of the HUMANIKA Division and Founder of Wastu Techies Society.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#ccc' }}>
                        Experienced in statistical data management as a Lecturer Assistant and possessing high work discipline from an industrial background at Astra Honda Motor.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
                        Mastering Data Management and data analysis, I focus on work efficiency and data-driven solutions to support company growth.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
