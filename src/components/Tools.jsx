import React from 'react';
import {
    SiTypescript, SiJavascript, SiPhp,
    SiPython, SiNodedotjs, SiNextdotjs, SiVite, SiJupyter,
    SiPostgresql, SiSupabase, SiVercel, SiMysql
} from 'react-icons/si';
import { FaFileExcel, FaChartBar } from 'react-icons/fa';

const Tools = () => {
    const toolsRow1 = [
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "IBM SPSS", icon: <FaChartBar /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
    ];

    const toolsRow2 = [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Jupyter", icon: <SiJupyter /> },
        { name: "Postgres", icon: <SiPostgresql /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "MySQL", icon: <SiMysql /> },
    ];

    // Duplicate arrays to create seamless loop
    const row1 = [...toolsRow1, ...toolsRow1, ...toolsRow1];
    const row2 = [...toolsRow2, ...toolsRow2, ...toolsRow2];

    const ToolBadge = ({ tool }) => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 24px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50px',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 10px var(--glass-shadow)',
            transition: 'transform 0.3s ease, border-color 0.3s ease'
        }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--primary-color)';
                e.currentTarget.style.color = 'var(--text-main)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
            }}
        >
            <span style={{ fontSize: '1.2rem' }}>{tool.icon}</span>
            <span>{tool.name}</span>
        </div>
    );

    return (
        <section id="tools" style={{ padding: '4rem 0', overflow: 'hidden' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Tools that I have Used</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Row 1 - Left */}
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {row1.map((tool, index) => (
                                <ToolBadge key={`r1-${index}`} tool={tool} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Right (Reverse) */}
                    <div className="marquee-container">
                        <div className="marquee-content reverse">
                            {row2.map((tool, index) => (
                                <ToolBadge key={`r2-${index}`} tool={tool} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
