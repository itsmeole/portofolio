import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinished }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade-out after 2.2 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2200);

        // Notify parent after fade-out completes (2.2s + 0.6s transition)
        const doneTimer = setTimeout(() => {
            onFinished();
        }, 2800);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(doneTimer);
        };
    }, [onFinished]);

    // 5 circles for a simple flexbox row
    const dots = [0, 1, 2, 3, 4];

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.3rem',
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 0.6s ease',
            pointerEvents: fadeOut ? 'none' : 'all',
        }}>
            {/* Flat row of dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {dots.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 35%, #555, #1a1a1a)',
                            boxShadow: '0 4px 18px rgba(0,0,0,0.7), inset 0 1px 3px rgba(255,255,255,0.12)',
                            animation: `dotBounce 1.2s ease-in-out ${i * 0.12}s infinite`,
                        }}
                    />
                ))}
            </div>

            {/* LOADING text */}
            <span style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.95rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.35em',
                animation: 'loadingPulse 1.5s ease-in-out infinite',
            }}>
                LOADING
            </span>

            <style>{`
                @keyframes dotBounce {
                    0%, 100% { transform: translateY(0) scale(1); }
                    40%       { transform: translateY(-14px) scale(1.08); }
                    60%       { transform: translateY(-8px) scale(1.04); }
                }
                @keyframes loadingPulse {
                    0%, 100% { opacity: 0.5; }
                    50%      { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
