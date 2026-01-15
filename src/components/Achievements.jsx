import React from 'react';

// Importing assets specifically
import cert1 from '../assets/capaian dan penghargaan/Analisis Biaya Dan Efektivitas WhatsApp Blast Terhadap Respons Pelanggan Dengan Regresi Berantai.pdf';
import cert2 from '../assets/capaian dan penghargaan/Pelatihan AI Product by Google.png';
import cert3 from '../assets/capaian dan penghargaan/Pemateri Workshop Data Analyst.png';
import cert4 from '../assets/capaian dan penghargaan/Prediksi Keuntungan Harian dari Investasi Kripto Menggunakan Model Regresi Berganda Time Series.pdf';
import cert5 from '../assets/capaian dan penghargaan/Seminar Gemini For Everyone.png';
import cert6 from '../assets/capaian dan penghargaan/Seminar Google Student ambasador.jpeg';
import cert7 from '../assets/capaian dan penghargaan/Seminar Nasional KWU.jpeg';
import cert8 from '../assets/capaian dan penghargaan/Webinar Genzpreneur.jpeg';
import cert9 from '../assets/capaian dan penghargaan/sertifikat_HKI_2025-11-19.pdf';
import cert10 from '../assets/capaian dan penghargaan/sertifikat_course_dicoding_51_5325938_211225043516.pdf';
import cert11 from '../assets/capaian dan penghargaan/sertifikat_course_dicoding_80_5325938_301025165202.pdf';
import cert12 from '../assets/capaian dan penghargaan/sertifikat_course_dicoding_890_5325938_311225141134.pdf';

const Achievements = () => {
    const achievements = [
        { id: 1, title: 'AI Product Training by Google', file: cert2, type: 'image' },
        { id: 2, title: 'Speaker at Data Analyst Workshop', file: cert3, type: 'image' },
        { id: 3, title: 'Seminar on Gemini For Everyone', file: cert5, type: 'image' },
        { id: 4, title: 'Google Student Ambassador Seminar', file: cert6, type: 'image' },
        { id: 5, title: 'National Entrepreneurship Seminar', file: cert7, type: 'image' },
        { id: 6, title: 'Genzpreneur Webinar', file: cert8, type: 'image' },
        { id: 7, title: 'Research Journal 1', file: cert1, type: 'pdf' },
        { id: 8, title: 'Research Journal 2', file: cert4, type: 'pdf' },
        { id: 9, title: 'HKI Certificate', file: cert9, type: 'pdf' },
        { id: 10, title: 'Learn to Build Android Apps for Beginners', file: cert10, type: 'pdf' },
        { id: 11, title: 'Starting Programming with Kotlin', file: cert11, type: 'pdf' },
        { id: 12, title: 'Career Acceleration and Productivity with Gemini', file: cert12, type: 'pdf' },
    ];

    return (
        <section id="achievements" style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-header" style={{ marginBottom: '50px' }}>
                    <h2 className="section-title">Achievements</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {achievements.map((item) => (
                        <div key={item.id} className="glass-card" style={{
                            padding: '20px',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                height: '200px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.type === 'image' ? (
                                    <img src={item.file} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                        <embed
                                            src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0`}
                                            type="application/pdf"
                                            style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{item.title}</h3>
                                <a href={item.file} target="_blank" rel="noopener noreferrer" className="btn" style={{
                                    padding: '8px 20px',
                                    fontSize: '0.9rem',
                                    borderRadius: '50px',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'inline-block',
                                    textDecoration: 'none',
                                    color: 'white'
                                }}>
                                    View Document
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="heading" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03 }}>
                AWARDS
            </div>
        </section>
    );
};

export default Achievements;
