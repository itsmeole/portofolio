import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GlowCard } from './ui/spotlight-card';
import { motion, useMotionValue, animate } from 'framer-motion';

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
            link: "https://inventory-cashier.vercel.app/",
            preview: inventoryImg
        },
        {
            title: "Forecasting Produksi Padi",
            desc: "Rice Production Forecasting is a web-based application designed to predict rice production in West Java Province based on district/city-level data sourced from Open Data Jabar. The system applies the Holt-Winters Exponential Smoothing method to handle trend and seasonal patterns, producing more accurate estimates to support agricultural planning and decision-making.",
            link: "https://rorecast-padi-v2-cf5v9suy68brvy3nybzwws.streamlit.app/",
            preview: forecastingImg
        }
    ];

    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);
    const x = useMotionValue(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                const newWidth = containerRef.current.scrollWidth - containerRef.current.offsetWidth;
                setWidth(newWidth);
                setCanScrollRight(x.get() > -newWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        // Small delay to ensure images load and width is correct
        setTimeout(updateWidth, 500);
        return () => window.removeEventListener("resize", updateWidth);
    }, [x]);

    useEffect(() => {
        return x.on("change", (latestX) => {
            setCanScrollLeft(latestX < 0);
            setCanScrollRight(latestX > -width);
        });
    }, [x, width]);

    const scrollTo = (direction) => {
        const currentX = x.get();
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width

        let newX = direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;

        // Clamp values
        newX = Math.max(Math.min(newX, 0), -width);

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
        });
    };

    return (
        <section id="projects" className="section" style={{ overflow: 'hidden', padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>My Projects</h2>
            </div>

            <div style={{ position: 'relative', width: '100%', padding: '1rem 0' }}>
                {/* Navigation Arrows */}
                {canScrollLeft && (
                    <button
                        onClick={() => scrollTo("left")}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '15px',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            color: 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
                        aria-label="Scroll left"
                    >
                        <FaChevronLeft />
                    </button>
                )}

                {canScrollRight && (
                    <button
                        onClick={() => scrollTo("right")}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '15px',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            color: 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
                        aria-label="Scroll right"
                    >
                        <FaChevronRight />
                    </button>
                )}

                    {/* Slider Container */}
                    <motion.div
                        ref={containerRef}
                        style={{ cursor: 'grab', overflow: 'hidden', padding: '1rem 0' }}
                        whileTap={{ cursor: 'grabbing' }}
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            dragElastic={0.1}
                            style={{ 
                                x, 
                                display: 'flex', 
                                gap: '2rem', 
                                width: 'max-content',
                                paddingLeft: 'max(20px, calc((100vw - 1200px) / 2))',
                                paddingRight: 'max(20px, calc((100vw - 1200px) / 2))'
                            }}
                        >
                            {projectList.map((project, index) => (
                                <motion.div
                                    key={index}
                                    style={{ minWidth: '350px', maxWidth: '350px' }}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <GlowCard glowColor="blue" style={{
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        minHeight: '480px',
                                        position: 'relative',
                                    }}>
                                        {/* Project Preview */}
                                        <div style={{
                                            width: '100%',
                                            height: '200px',
                                            background: 'var(--glass-border)',
                                            borderRadius: '12px',
                                            marginBottom: '1.5rem',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-muted)',
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            position: 'relative'
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
                                                fontSize: '0.95rem',
                                                color: 'var(--text-secondary)',
                                                lineHeight: '1.5',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 4,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}>
                                                {project.desc}
                                            </p>
                                        </div>

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
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none'
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
                                    </GlowCard>
                                </motion.div>
                            ))}

                            {/* GitHub Link Card */}
                            <motion.div
                                style={{ minWidth: '350px', maxWidth: '350px' }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <GlowCard glowColor="purple" style={{
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    minHeight: '480px',
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
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
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
                                </GlowCard>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
        </section>
    );
};

export default Projects;
