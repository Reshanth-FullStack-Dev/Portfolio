import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experience = [
  {
    role: 'Software Engineer - Full Stack Developer',
    company: 'Agnitio Systems',
    period: 'Mar 2024 - Present',
    current: true,
    summary: 'Full Stack Developer with 2.5+ years of experience building production web applications across healthcare, logistics, government, proptech, and e-commerce domains. Experienced in multi-tenant SaaS platforms, secure REST APIs, real-time systems, payment integrations, and Docker-based edge computing.',
    projects: [
      {
        name: 'MyHabitat — Smart Condo Management Platform',
        stack: 'React.js, Node.js, PostgreSQL, Docker',
        points: ['Architected multi-tenant SaaS platform with isolated PostgreSQL databases per organization, scaling to 350+ client organizations', 'Built real-time chat system using Socket.io with end-to-end encryption for resident–staff communication', 'Engineered LPR/ANPR system supporting Hikvision and Dahua cameras with Docker-containerized edge gateways', 'Implemented WebSocket-based security dashboard for live gate, vehicle, and LPR monitoring', 'Enforced RBAC across 10+ user roles with JWT authentication and Stripe multi-currency payment processing'],
      },
      {
        name: 'TNFD — Government Workflow Platform',
        stack: 'Laravel, PHP',
        points: ['Launched multi-role login and application-processing platform for Tamil Nadu Forest Department', 'Digitized previously manual workflow used by 10000+ department staff', 'Implemented role-based authentication, application workflows, validation, and administrative modules'],
      },
      {
        name: 'Swim School — Multi-Tenant SaaS',
        stack: 'Laravel, PHP',
        points: ['Architected multi-tenant system with Super Admin provisioning isolated client portals and separate databases', 'Scaled to 80+ client organizations without cross-tenant data leakage', 'Created modules for students, coaches, programs, levels, skills, and attendance with RBAC across 4+ user roles'],
      },
      {
        name: 'PickupDrop — Logistics Platform',
        stack: 'React.js, Node.js, Express.js',
        points: ['Engineered real-time task assignment and live driver–customer tracking using Socket.io', 'Enabled dispatch teams to monitor 650+ concurrent deliveries with sub-second location updates', 'Integrated in-app chat, voice calling, and FCM/APNs push notifications to reduce missed pickup events', 'Designed and shipped secure REST APIs powering admin dashboard and driver mobile app'],
      },
      {
        name: 'Nurture — Hospital Management System',
        stack: 'React.js, Node.js',
        points: ['Built Physician, Patient, and Admin portals with automated appointment scheduling and role-based workflows', 'Streamlined patient-doctor coordination with real-time communication and improved operational efficiency', 'Integrated Twilio WhatsApp Business API for parent and child profile creation via WhatsApp', 'Applied secure RBAC and REST APIs for tailored user experiences with controlled data access'],
      },
      {
        name: '11Systems — Healthcare Portal',
        stack: 'Angular, Node.js',
        points: ['Led development of Physician, Patient, and Admin portals with appointment management and patient monitoring', 'Implemented chat, video consultation features supporting 500+ active users'],
      },
      {
        name: 'KEC Inventory — Inventory & Order Management',
        stack: 'Laravel, PHP',
        points: ['Developed Admin and Customer modules for inventory tracking, stock management, and order processing', 'Supported 5,000+ users with real-time inventory visibility'],
      },
    ],
  },
]

const education = [
  {
    degree: 'B.E., Computer Science & Engineering',
    institution: 'Karpagam College of Engineering',
    period: '2020 - 2024',
    grade: '8.56 / 10 (First Class with Distinction)',
  },
]

const professionalSkills = [
  'Cross-functional collaboration',
  'Analytical problem solving & debugging',
  'Ownership & accountability',
  'Adaptability under changing requirements',
]

const otherContributions = [
  'Deployed and maintained production applications on Linux servers via cPanel for 10+ live projects',
  'Containerized and deployed edge computing services using Docker for on-site camera and LPR processing',
  'Customized and managed WordPress and Shopify/Zoho Commerce storefronts for 5+ clients',
  'Used AI-assisted coding tools (Cursor, Windsurf, GitHub Copilot, Amazon Q, Codex, Claude, ChatGPT, Devin) to speed up development',
]

export default function Experience() {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id="experience" style={{
      padding: '100px 40px', background: 'var(--bg-deep)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--cyan-500), var(--purple-600), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--purple-600), var(--cyan-500), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--cyan-300)', fontWeight: 600,
          }}>02 / Experience</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '0',
          marginBottom: '18px',
        }}>
          Production <span style={{
            background: 'linear-gradient(135deg, var(--cyan-300), var(--purple-300))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Experience</span>
        </h2>
        <p style={{
          color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '16px',
          maxWidth: '760px', marginBottom: '48px',
        }}>
          A project-focused timeline built around shipped systems, not just tools used.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }} className="exp-grid">
          <div ref={leftRef} style={{ opacity: leftVisible ? 1 : 0, transform: leftVisible ? 'translateX(0)' : 'translateX(-40px)', transition: 'all 0.7s ease' }}>
            {experience.map((exp) => (
              <div key={exp.company} style={{ position: 'relative', paddingLeft: '28px' }}>
                <div style={{
                  position: 'absolute', left: 0, top: '6px', bottom: 0,
                  width: '1px', background: 'linear-gradient(to bottom, var(--cyan-500), transparent)',
                }} />
                <div style={{
                  position: 'absolute', left: '-5px', top: '6px',
                  width: '11px', height: '11px', borderRadius: '50%',
                  background: 'var(--cyan-500)', border: '2px solid var(--cyan-300)',
                  boxShadow: '0 0 16px rgba(45,212,191,0.55)',
                  animation: 'pulseGlow 2s ease-in-out infinite',
                }} />

                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: '8px', padding: '24px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: '20px', color: 'var(--text-primary)', marginBottom: '4px',
                      }}>{exp.role}</h3>
                      <span style={{ fontSize: '14px', color: 'var(--cyan-300)', fontWeight: 600 }}>
                        {exp.company}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '12px', padding: '5px 12px', borderRadius: '999px',
                      background: 'rgba(45,212,191,0.1)', color: 'var(--cyan-300)',
                      border: '1px solid rgba(45,212,191,0.24)', whiteSpace: 'nowrap',
                    }}>
                      Active - {exp.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px', fontWeight: 300 }}>
                    {exp.summary}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {exp.projects.map((project) => (
                      <article key={project.name} style={{
                        padding: '16px', borderRadius: '8px',
                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                        e.currentTarget.style.borderColor = 'var(--border-medium)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                      }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                          <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 700 }}>
                            {project.name}
                          </h4>
                          <span style={{ color: 'var(--amber-300)', fontSize: '12px', fontWeight: 700 }}>
                            {project.stack}
                          </span>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {project.points.map((point) => (
                            <li key={point} style={{
                              fontSize: '13px', color: 'var(--text-secondary)',
                              display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.55,
                            }}>
                              <span style={{ color: 'var(--cyan-300)', marginTop: '1px', flexShrink: 0 }}>&gt;</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={rightRef} style={{ opacity: rightVisible ? 1 : 0, transform: rightVisible ? 'translateX(0)' : 'translateX(40px)', transition: 'all 0.7s ease 0.2s' }}>
            {education.map((edu) => (
              <div key={edu.degree} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: '8px', padding: '24px', marginBottom: '20px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '8px',
                }}>Education</h3>
                <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '6px' }}>{edu.degree}</h4>
                <p style={{ fontSize: '14px', color: 'var(--cyan-300)', marginBottom: '14px' }}>{edu.institution}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '12px', padding: '5px 12px', borderRadius: '999px',
                    background: 'rgba(45,212,191,0.1)', color: 'var(--cyan-300)',
                    border: '1px solid rgba(45,212,191,0.2)',
                  }}>{edu.period}</span>
                  <span style={{
                    fontSize: '12px', padding: '5px 12px', borderRadius: '999px',
                    background: 'rgba(245,158,11,0.1)', color: 'var(--amber-300)',
                    border: '1px solid rgba(245,158,11,0.2)',
                  }}>{edu.grade}</span>
                </div>
              </div>
            ))}

            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: '8px', padding: '24px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-medium)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: '16px',
              }}>Professional Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {professionalSkills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: '12px', padding: '6px 11px', borderRadius: '999px',
                    border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)',
                    background: 'var(--bg-elevated)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--purple-500)'
                    e.currentTarget.style.color = 'var(--purple-300)'
                    e.currentTarget.style.background = 'rgba(139,92,246,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                  }}
                  >{skill}</span>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: '8px', padding: '24px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-medium)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: '16px',
              }}>Other Contributions</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {otherContributions.map((contribution) => (
                  <li key={contribution} style={{
                    fontSize: '13px', color: 'var(--text-secondary)',
                    display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5,
                  }}>
                    <span style={{ color: 'var(--cyan-300)', marginTop: '1px', flexShrink: 0 }}>•</span>
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 560px) {
          #experience { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  )
}
