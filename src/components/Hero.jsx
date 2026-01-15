import React from 'react';
import profileImg from '../assets/foto.jpeg';
import cvFile from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            position: 'relative',
            overflow: 'visible'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap-reverse', position: 'relative', zIndex: 1 }}>

                {/* Left Side - Image with Geometric Background */}
                <div style={{ flex: '0 0 400px', position: 'relative' }}>
                    {/* Geometric Shapes */}
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        width: '150px',
                        height: '150px',
                        background: '#222',
                        borderRadius: '4px',
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        width: '150px',
                        height: '150px',
                        background: '#1a1a1a',
                        borderRadius: '4px',
                        zIndex: 0
                    }}></div>

                    <div style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '-40px',
                        color: 'white',
                        fontSize: '2rem'
                    }}>
                        ✦
                    </div>

                    <div style={{
                        position: 'relative',
                        width: '380px',
                        height: '380px',
                        background: '#e5e5e5',
                        borderRadius: '100px 20px 20px 20px',
                        overflow: 'hidden',
                        zIndex: 1,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}>
                        <img src={profileImg} alt="Leonard Putra Sanjaya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div style={{ flex: '1 1 500px', zIndex: 2 }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text-color)' }}>
                        Hi.. I'm
                    </h2>
                    <h1 style={{
                        fontSize: '4.5rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        color: 'var(--text-color)'
                    }}>
                        Leonard putra <span style={{ fontSize: '3rem' }}>👋🏼</span>
                    </h1>

                    <p style={{
                        fontSize: '1.1rem',
                        color: '#a3a3a3',
                        maxWidth: '600px',
                        marginBottom: '3rem',
                        fontWeight: 400
                    }}>
                        Computer Science student with a strong leadership track record. Experienced in statistical data management and high work discipline from an industrial background.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <button className="btn" style={{
                            padding: '16px 40px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            background: '#1a1a1a',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white'
                        }} onClick={() => {window.open('https://wa.me/message/UMYBVO7F56TJA1', '_blank');}}>
                            Start a conversation
                        </button>
                        <a href={cvFile} download="CV_Leonard_Putra" className="btn" style={{
                            padding: '16px 40px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            background: '#1a1a1a',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white'
                        }}>
                            Lihat CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Large Text Overlay with Gradient */}
            <div className="gradient-text-bg" style={{ bottom: '-100px' }}>
                ABOUT ME
            </div>
        </section>
    );
};

export default Hero;
