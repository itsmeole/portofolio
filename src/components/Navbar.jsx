import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('hero');
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

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

                {/* Dashboard Button (Left) */}
                <div style={{ position: 'relative' }}>
                    <button
                        className="btn"
                        onClick={() => setShowThemeMenu(!showThemeMenu)}
                        style={{
                            padding: '10px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(26, 26, 26, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            position: 'relative',
                            zIndex: 1001,
                            borderRadius: '50px' // Ensure pill shape matches right side
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <span style={{ width: '18px', height: '2px', background: 'white' }}></span>
                            <span style={{ width: '18px', height: '2px', background: 'white' }}></span>
                            <span style={{ width: '12px', height: '2px', background: 'white' }}></span>
                        </div>
                        Dashboard
                    </button>

                    {/* Theme Dropdown */}
                    {showThemeMenu && (
                        <div className="dropdown-animate" style={{
                            position: 'absolute',
                            top: '120%',
                            left: 0,
                            background: 'rgba(26, 26, 26, 0.8)', // Glass effect
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '16px',
                            padding: '10px',
                            minWidth: '160px',
                            zIndex: 1000,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}>
                            <div
                                onClick={() => { setIsLightMode(false); setShowThemeMenu(false); }}
                                style={{
                                    padding: '10px 8px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    transition: 'background 0.2s',
                                    background: !isLightMode ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseOut={(e) => e.currentTarget.style.background = !isLightMode ? 'rgba(255,255,255,0.1)' : 'transparent'}
                            >
                                <span>🌙</span> Dark Mode
                            </div>
                            <div
                                onClick={() => { setIsLightMode(true); setShowThemeMenu(false); }}
                                style={{
                                    padding: '10px 8px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    transition: 'background 0.2s',
                                    background: isLightMode ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseOut={(e) => e.currentTarget.style.background = isLightMode ? 'rgba(255,255,255,0.1)' : 'transparent'}
                            >
                                <span>☀️</span> Light Mode
                            </div>
                        </div>
                    )}
                </div>

                {/* Right-Aligned Pill Navigation */}
                {/* User requested: "seharusnya object 'about me, experience, dll' itu ada di kanan bukan di tengah" */}
                {/* User requested: "seharusnya header tidak memiliki background transparan, seharusnya object oval yg melingkari menunya yg transparan" */}
                <div style={{
                    background: 'rgba(26, 26, 26, 0.6)', // Semi-transparent dark background
                    backdropFilter: 'blur(10px)', // Glass effect here
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '50px',
                    padding: '6px 8px',
                    display: 'flex',
                    gap: '5px'
                }}>
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#aaa',
                                padding: '8px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.color = 'white';
                                e.target.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = '#aaa';
                                e.target.style.background = 'transparent';
                            }}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
