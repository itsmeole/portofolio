import React from 'react';

const Education = () => {
    const education = [
        {
            period: "2023 - Present",
            school: "STT WASTUKANCANA PURWAKARTA",
            major: "Informatics Engineering"
        },
        {
            period: "2019 - 2021",
            school: "SMK TI MUHAMMADIYAH CIKAMPEK",
            major: "Automotive Engineering"
        },
        {
            period: "2017 - 2019",
            school: "SMPN 1 KOTABARU",
            major: ""
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Academic Background</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {education.map((edu, index) => (
                        <div key={index} className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>{edu.school}</h3>
                                {edu.major && <p style={{ color: '#888' }}>{edu.major}</p>}
                            </div>
                            <div style={{
                                padding: '8px 16px',
                                border: '1px solid #444',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: '#aaa',
                                whiteSpace: 'nowrap'
                            }}>
                                {edu.period}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
