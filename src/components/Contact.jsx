import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Let's work together!</h2>
                <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    I'm always open to discussing product design work or partnership opportunities.
                </p>

                <div className="glass-card" style={{ maxWidth: '500px', margin: '0 auto', padding: '3rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <a href="mailto:leonardputra73@wastukancana.ac.id" className="btn" style={{ background: '#fff', color: '#000', justifyContent: 'center', display: 'flex' }}>
                            Send an Email
                        </a>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                            <a href="https://www.linkedin.com/in/leonard-putra-sanjaya-3367b629b" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', fontSize: '1.5rem' }}>LinkedIn</a>
                            <a href="https://www.instagram.com/itsmeole?igsh=b3d3c3VjcHYydXp3" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', fontSize: '1.5rem' }}>Instagram</a>
                            <a href="https://wa.me/message/UMYBVO7F56TJA1" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', fontSize: '1.5rem' }}>WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
