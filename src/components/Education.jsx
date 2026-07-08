import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E. – Computer Science & Engineering",
      school: "Karpagam College of Engineering",
      period: "2020 – 2024",
      cgpa: "8.56 CGPA"
    },
    {
      degree: "HSC – Higher Secondary",
      school: "Jayam Vidhayalaya Matric Hr. Sec. School",
      period: "",
      percentage: "80.6%"
    }
  ];

  return (
    <section id="education" style={{
      padding: '100px 40px', background: 'var(--bg-deep)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--purple-400)', fontWeight: 500,
          }}>05 / Education</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-1px',
          marginBottom: '56px', textAlign: 'center',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--purple-400), var(--pink-400))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Education</span>
        </h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: '16px', padding: '32px', marginBottom: '24px',
                transition: 'all var(--transition-med)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-medium)'
                e.currentTarget.style.background = 'var(--bg-card-hover)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    background: 'var(--bg-elevated)', padding: '12px', borderRadius: '50%',
                    border: '1px solid var(--border-medium)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <GraduationCap style={{ width: '24px', height: '24px', color: 'var(--purple-300)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600,
                      color: 'var(--text-primary)', marginBottom: '8px',
                    }}>
                      {edu.degree}
                    </h3>
                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '16px' }}>{edu.school}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: 'var(--text-muted)' }}>
                      {edu.period && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Calendar style={{ width: '16px', height: '16px' }} />
                          <span>{edu.period}</span>
                        </div>
                      )}
                      {(edu.cgpa || edu.percentage) && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: 'var(--green-500)',
                            boxShadow: '0 0 8px var(--green-500)',
                          }} />
                          <span>{edu.cgpa || edu.percentage}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
