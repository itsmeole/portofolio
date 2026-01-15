import React from 'react';

const Skills = () => {
    const hardSkills = ["Data Analyst", "Data Management", "Beginner Web Developer"];
    const softSkills = ["Public Relation", "Teamwork", "Time Management", "Leadership", "Critical Thinking"];
    const languages = ["Indonesia (Fluent)", "English (Intermediate)"];

    return (
        <section id="skills" className="section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Skills & Languages</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem' }}>Hard Skills</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {hardSkills.map((skill, index) => (
                                <span key={index} style={{
                                    padding: '10px 20px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '50px',
                                    color: '#ccc',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem' }}>Soft Skills</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {softSkills.map((skill, index) => (
                                <span key={index} style={{
                                    padding: '10px 20px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '50px',
                                    color: '#ccc',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem' }}>Languages</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {languages.map((skill, index) => (
                                <span key={index} style={{
                                    padding: '10px 20px',
                                    background: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '50px',
                                    color: '#ccc',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
