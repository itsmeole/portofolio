import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Let's work together!</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    I'm always open to discussing product design work or partnership opportunities.
                </p>

                <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', fontSize: '2.5rem' }}>
                        <a href="mailto:leonardputra73@wastukancana.ac.id" style={{ color: 'var(--icon-color)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                            <MdEmail />
                        </a>
                        <a href="https://www.linkedin.com/in/leonard-putra-sanjaya-3367b629b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--icon-color)', transition: 'transform 0.3s' }}>
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/itsmeole?igsh=b3d3c3VjcHYydXp3" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--icon-color)', transition: 'transform 0.3s' }}>
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/message/UMYBVO7F56TJA1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--icon-color)', transition: 'transform 0.3s' }}>
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
