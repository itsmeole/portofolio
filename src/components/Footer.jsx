import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid #222' }}>
            <div className="container">
                <p style={{ color: '#444', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Leonard Putra Sanjaya. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
