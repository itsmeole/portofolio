import React from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

// Example: Import your images here
import aonimeImg from '../assets/aonime.png';
import remedialkuImg from '../assets/remedialku.png';
import humanikaImg from '../assets/profile_humanika.png';
import inventoryImg from '../assets/wardig.png';
import forecastingImg from '../assets/forecasting.png';

const Projects = () => {
    const projectList = [
        {
            title: "Aonime",
            desc: "Aonime is a streaming platform that allows users to watch anime for free with a clean and user-friendly interface. The website is designed without inappropriate or intrusive ads, providing a safe and enjoyable viewing experience. In addition, Aonime can be accessed anytime and anywhere, enabling users to enjoy their favorite anime conveniently across multiple devices.",
            link: "https://web-aonime.vercel.app/",
            preview: aonimeImg
        },
        {
            title: "Remedialku",
            desc: "Quizz Remedialku is an online assessment platform designed to provide students with opportunities to improve their grades through remedial quizzes. Instructors can customize the questions based on their needs, including the number of questions, difficulty level, and time limits. The system is equipped with anti-cheating features to ensure exam integrity, as well as an automatic blocking mechanism for users who repeatedly fail or violate the rules, maintaining a fair and controlled evaluation process.",
            link: "https://quiz-aljabar-linear-git-main-itsmeoles-projects.vercel.app/",
            preview: remedialkuImg
        },
        {
            title: "Profile Humanika",
            desc: "The organizational profile website of Himpunan Mahasiswa Teknik Informatika (HUMANIKA) at STT Wastukancana serves as an official information platform that provides general information to users. The website includes an introduction to the organization, its vision and mission, organizational structure, divisions, as well as programs and activities.",
            link: "https://web-profile-humanika.vercel.app/?utm_source=Instagram&utm_medium=Social&utm_campaign=Company%20Profile",
            preview: humanikaImg
        },
        {
            title: "Inventory Cashier",
            desc: "Inventory Cashier is a web-based application designed to manage cashier operations and inventory control for retail stores. The system enables users to record sales transactions, manage product data, monitor stock availability in real-time, and generate automatic sales reports and recapitulations.",
            link: "https://inventory-cashier-9sti6lu2g-itsmeoles-projects.vercel.app/",
            preview: inventoryImg
        },
        {
            title: "Forecasting Produksi Padi",
            desc: "Rice Production Forecasting is a web-based application designed to predict rice production in West Java Province based on district/city-level data sourced from Open Data Jabar. The system applies the Holt-Winters Exponential Smoothing method to handle trend and seasonal patterns, producing more accurate estimates to support agricultural planning and decision-making.",
            link: "https://rorecast-padi-v2-cf5v9suy68brvy3nybzwws.streamlit.app/",
            preview: forecastingImg
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>My Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projectList.map((project, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            minHeight: '350px',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Project Preview */}
                            <div style={{
                                width: '100%',
                                height: '180px',
                                background: 'var(--glass-border)',
                                borderRadius: '12px',
                                marginBottom: '1.5rem',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)',
                                fontSize: '1.2rem',
                                fontWeight: 600
                            }}>
                                {project.preview ? (
                                    <img
                                        src={project.preview}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    "Project Preview"
                                )}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-main)'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.5'
                                }}>
                                    {project.desc}
                                </p>
                            </div>

                            {/* View Button */}
                            {/* View Button */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                alignSelf: 'flex-end',
                                marginTop: '1.5rem',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: '1px solid var(--text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-main)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'var(--text-main)';
                                    e.currentTarget.style.color = 'var(--bg-color)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-main)';
                                }}
                            >
                                <FaArrowRight />
                            </a>
                        </div>
                    ))}

                    {/* GitHub Link Card */}
                    <div className="glass-card" style={{
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        minHeight: '350px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, var(--glass-bg) 0%, rgba(0,0,0,0.4) 100%)'
                    }}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            marginBottom: '2rem',
                            color: 'var(--text-main)'
                        }}>
                            Other projects can be found on GitHub at <br />
                            <span style={{ color: 'var(--text-muted)' }}>itsmeole</span>
                        </h3>

                        <a href="https://github.com/itsmeole" target="_blank" rel="noopener noreferrer" style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            border: '2px solid var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-main)',
                            fontSize: '2rem',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'var(--text-main)';
                                e.currentTarget.style.color = 'var(--bg-color)';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--text-main)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
