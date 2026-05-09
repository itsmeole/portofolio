import React, { useState } from 'react';
import { GlowCard } from './ui/spotlight-card';
import { ParticleTextEffect } from './ui/particle-text-effect';

const LoadingScreen = ({ onFinished }) => {
    const [phase, setPhase] = useState('INPUT'); // INPUT, ANIMATING, FADING_OUT
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setPhase('ANIMATING');

            // Wait 4 seconds for the animation to play, then fade out
            setTimeout(() => {
                setPhase('FADING_OUT');

                // Notify parent after fade-out completes (0.6s transition)
                setTimeout(() => {
                    onFinished();
                }, 600);
            }, 8000);
        }
    };

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
            opacity: phase === 'FADING_OUT' ? 0 : 1,
            transition: 'opacity 0.6s ease',
            pointerEvents: phase === 'FADING_OUT' ? 'none' : 'all',
        }}>
            <style>{`
                @keyframes simpleFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>

            {phase === 'INPUT' && (
                <div style={{
                    animation: 'simpleFadeIn 0.5s ease forwards'
                }}>
                    <GlowCard glowColor="purple" style={{ padding: '3rem', width: '90vw', maxWidth: '400px', textAlign: 'center' }}>
                        <h2 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>
                            Welcome!
                        </h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input
                                type="text"
                                placeholder="Enter your name..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                                style={{
                                    padding: '14px 20px',
                                    borderRadius: '50px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--btn-border)',
                                    color: 'var(--text-main)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                    textAlign: 'center'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-color)';
                                    e.target.style.boxShadow = '0 0 10px rgba(255,255,255,0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--btn-border)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            <button
                                type="submit"
                                className="btn"
                                disabled={!name.trim()}
                                style={{
                                    opacity: name.trim() ? 1 : 0.5,
                                    cursor: name.trim() ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Continue
                            </button>
                        </form>
                    </GlowCard>
                </div>
            )}

            {(phase === 'ANIMATING' || phase === 'FADING_OUT') && (
                <div style={{ width: '100vw', height: '100vh', animation: 'simpleFadeIn 1s ease forwards' }}>
                    <ParticleTextEffect word={`HELLO ${name.trim().toUpperCase()}`} />
                </div>
            )}
        </div>
    );
};

export default LoadingScreen;
