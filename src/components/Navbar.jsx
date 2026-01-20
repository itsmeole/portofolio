import React, { useState, useEffect } from 'react';
import profileImg from '../assets/foto.jpeg';

const Navbar = () => {
    const [active, setActive] = useState('hero');
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);
    const desktopMenuRef = React.useRef(null);
    const mobileMenuRef = React.useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (showThemeMenu) setShowThemeMenu(false);
        };

        const handleClickOutside = (event) => {
            if (
                desktopMenuRef.current && !desktopMenuRef.current.contains(event.target) &&
                mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)
            ) {
                setShowThemeMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showThemeMenu]);

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [isLightMode]);

    const scrollToSection = (id) => {
        setActive(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'About Me', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Project', id: 'skills' },
        { name: 'Education', id: 'education' },
        { name: 'Achievements', id: 'achievements' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '20px 40px',
            background: 'transparent', // No background on the main bar
            // Removed backdropFilter on the main bar as per request
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                {/* DESKTOP: Dashboard Button (Left) */}
                <div ref={desktopMenuRef} className="desktop-only" style={{ position: 'relative' }}>
                    <button
                        className="btn"
                        onClick={() => setShowThemeMenu(!showThemeMenu)}
                        style={{
                            padding: '10px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'var(--nav-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            position: 'relative',
                            zIndex: 1001,
                            borderRadius: '50px',
                            color: 'var(--text-main)',
                            boxShadow: '0 4px 20px var(--glass-shadow)'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <span style={{ width: '18px', height: '2px', background: 'currentColor' }}></span>
                            <span style={{ width: '18px', height: '2px', background: 'currentColor' }}></span>
                            <span style={{ width: '12px', height: '2px', background: 'currentColor' }}></span>
                        </div>
                        Dashboard
                    </button>

                    {showThemeMenu && (
                        <div className="dropdown-animate" style={{
                            position: 'absolute',
                            top: '120%',
                            left: 0,
                            background: 'var(--nav-bg)',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '10px',
                            minWidth: '160px',
                            zIndex: 1000,
                            boxShadow: '0 10px 30px var(--glass-shadow)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}>
                            <div
                                onClick={() => { setIsLightMode(false); setShowThemeMenu(false); }}
                                style={{
                                    padding: '10px 8px',
                                    color: 'var(--text-main)',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    transition: 'background 0.2s',
                                    background: !isLightMode ? 'var(--nav-item-bg-hover)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <span>🌙</span> Dark Mode
                            </div>
                            <div
                                onClick={() => { setIsLightMode(true); setShowThemeMenu(false); }}
                                style={{
                                    padding: '10px 8px',
                                    color: 'var(--text-main)',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    transition: 'background 0.2s',
                                    background: isLightMode ? 'var(--nav-item-bg-hover)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <span>☀️</span> Light Mode
                            </div>
                        </div>
                    )}
                </div>

                {/* DESKTOP: Right-Aligned Pill Navigation */}
                <div className="desktop-only" style={{
                    background: 'var(--nav-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '50px',
                    padding: '6px 8px',
                    display: 'flex',
                    gap: '5px',
                    boxShadow: '0 4px 20px var(--glass-shadow)'
                }}>
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--nav-text)',
                                padding: '8px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => { e.target.style.color = 'var(--text-main)'; e.target.style.background = 'var(--nav-item-bg-hover)'; }}
                            onMouseOut={(e) => { e.target.style.color = 'var(--nav-text)'; e.target.style.background = 'transparent'; }}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* MOBILE: Left-Aligned Dashboard Pill */}
                <div ref={mobileMenuRef} className="mobile-only" style={{ width: '100%', justifyContent: 'flex-start', position: 'relative' }}>
                    <button
                        onClick={() => setShowThemeMenu(!showThemeMenu)}
                        style={{
                            padding: '8px 24px 8px 8px',
                            marginLeft: '-20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'var(--nav-bg)',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '50px',
                            zIndex: 1001,
                            color: 'var(--text-main)',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            boxShadow: '0 10px 40px var(--glass-shadow)',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid rgba(255,255,255,0.2)'
                        }}>
                            <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        Dashboard
                    </button>

                    {/* Mobile Combined Dropdown */}
                    {showThemeMenu && (
                        <div className="dropdown-animate" style={{
                            position: 'absolute',
                            top: '120%',
                            left: '0',
                            width: '300px',
                            background: 'var(--nav-bg)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            padding: '20px',
                            zIndex: 1000,
                            boxShadow: '0 20px 50px var(--glass-shadow)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}>
                            {/* Theme Toggle Section */}
                            <div style={{
                                display: 'flex',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '50px',
                                padding: '4px',
                                marginBottom: '10px'
                            }}>
                                <div
                                    onClick={() => setIsLightMode(false)}
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        padding: '10px',
                                        borderRadius: '50px',
                                        background: !isLightMode ? 'var(--btn-bg)' : 'transparent',
                                        color: !isLightMode ? 'var(--btn-text)' : 'var(--text-muted)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    🌙 Dark
                                </div>
                                <div
                                    onClick={() => setIsLightMode(true)}
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        padding: '10px',
                                        borderRadius: '50px',
                                        background: isLightMode ? 'var(--btn-bg)' : 'transparent',
                                        color: isLightMode ? 'var(--btn-text)' : 'var(--text-muted)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    ☀️ Light
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => { scrollToSection(item.id); setShowThemeMenu(false); }}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--text-main)',
                                            padding: '12px',
                                            textAlign: 'center',
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            borderBottom: '1px solid var(--divider-color)'
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
