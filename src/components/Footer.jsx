import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--divider-color)' }}>
            <div className="container">
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Leonard Putra Sanjaya. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
