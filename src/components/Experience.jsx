import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Ketua Divisi Tekinkom",
            company: "HUMANIKA STT WASTUKANCANA PURWAKARTA",
            period: "2025 - 2026",
            desc: [
                "Merancang Program kerja selama satu periode ke depan.",
                "Mengelola jobdesk anggota demi melancarkan rancangan program kerja."
            ]
        },
        {
            title: "Anggota Divisi Tekinkom",
            company: "HUMANIKA STT WASTUKANCANA PURWAKARTA",
            period: "2025",
            desc: [
                "Membantu mahasiswa dalam mengembangkan keterampilan akademik."
            ]
        },
        {
            title: "Founder Wastu Techies Society",
            company: "STT WASTUKANCANA PURWAKARTA",
            period: "2024",
            desc: [
                "Mengadakan kegiatan belajar yang berkesinambungan."
            ]
        },
        {
            title: "Asisten Dosen",
            company: "STT WASTUKANCANA PURWAKARTA",
            period: "2023 - 2026",
            desc: [
                "Melakukan penelitian bersama dosen terkait data statistik.",
                "Membimbing mahasiswa dalam menyelesaikan tugas."
            ]
        },
        {
            title: "Operator Produksi",
            company: "ASTRA HONDA MOTOR",
            period: "2022 - 2023",
            desc: [
                "Mengoperasikan mesin produksi sesuai dengan SOP."
            ]
        },
        {
            title: "PKL - Teknisi",
            company: "NISSAN DATSUN PURWAKARTA",
            period: "2020 - 2021",
            desc: [
                "Melakukan perawatan atau servis berkala pada kendaraan."
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Experience</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="glass-card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderRadius: '0',
                            borderBottom: '1px solid #333',
                            background: 'transparent',
                            padding: '2rem 1rem'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 600 }}>{exp.title}</h3>
                                <h4 style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{exp.company}</h4>
                                <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', color: '#aaa', fontSize: '0.95rem' }}>
                                    {exp.desc.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '1.5rem', textAlign: 'right', fontWeight: 500 }}>{exp.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
