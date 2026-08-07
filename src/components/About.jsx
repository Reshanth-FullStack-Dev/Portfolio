import { CheckCircle2 } from 'lucide-react'
import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation'
import reshanthImage from '../assets/Reshanth.jpg'

const stats = [
  { value: '3', label: 'Years Experience' },
  { value: '80+', label: 'SaaS Client Portals' },
  { value: '10+', label: 'Live Deployments' },
  { value: '5+', label: 'Commerce/CMS Clients' },
]

const ownershipPoints = [
  'Database design through deployment ownership',
  'Secure REST APIs and role-based authorization',
  'Real-time tracking, chat, calls, and notifications',
  'AI-assisted debugging, development, and code review',
]

export default function About() {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()
  const [addStatRef, visibleStats] = useScrollAnimationMultiple()

  return (
    <section id="about" style={{
      padding: '100px 40px', maxWidth: '1100px', margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{
          fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
          color: 'var(--cyan-300)', fontWeight: 600,
        }}>01 / About</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '0.9fr 1.1fr',
        gap: '72px', alignItems: 'center',
      }} className="about-grid">
        <div ref={leftRef} style={{ display: 'flex', flexDirection: 'column', gap: '28px', opacity: leftVisible ? 1 : 0, transform: leftVisible ? 'translateX(0)' : 'translateX(-40px)', transition: 'all 0.7s ease' }}>
          <div style={{ position: 'relative', width: 'fit-content' }}>
            <div style={{
              width: '220px', height: '220px', borderRadius: '8px',
              background: 'linear-gradient(145deg, rgba(45,212,191,0.18), rgba(139,92,246,0.18))',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 28px 70px rgba(0,0,0,0.32)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
            >
              <img
                src={reshanthImage}
                alt="Reshanth Arumugam"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: '-12px', right: '-12px',
              padding: '8px 14px', borderRadius: '8px',
              background: 'var(--bg-card)', border: '1px solid rgba(45,212,191,0.28)',
              fontSize: '13px', color: 'var(--cyan-300)', fontWeight: 700,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              Full Stack
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {stats.map((s, index) => (
              <div
                key={s.label}
                ref={addStatRef(index)}
                data-index={index}
                style={{
                  padding: '18px', borderRadius: '8px',
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  opacity: visibleStats.has(index) ? 1 : 0,
                  transform: visibleStats.has(index) ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease',
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '30px', letterSpacing: '0',
                  color: 'var(--cyan-300)',
                }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rightRef} style={{ opacity: rightVisible ? 1 : 0, transform: rightVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.7s ease 0.2s' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.12,
            letterSpacing: '0', marginBottom: '24px',
          }}>
            Building reliable products from
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, var(--cyan-300), var(--purple-300), var(--amber-300))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>interface to infrastructure</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '26px' }}>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.85, fontWeight: 300 }}>
              I am a Full Stack Developer with 3 years of experience delivering production
              applications in healthcare, logistics, government, SaaS, inventory, and commerce.
              My core stack is React.js, Node.js, Laravel, PHP, PostgreSQL, and MySQL.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.85, fontWeight: 300 }}>
              Recent work includes a Tamil Nadu Forest Department workflow platform used by
              10000+ staff, a multi-tenant swim school SaaS with 80+ client organizations,
              real-time logistics tracking for 650+ concurrent deliveries, and hospital portals
              with appointment scheduling and secure RBAC.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="ownership-grid">
            {ownershipPoints.map((point, index) => (
              <div
                key={point}
                style={{
                  display: 'flex', gap: '10px', alignItems: 'flex-start',
                  padding: '12px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)',
                  opacity: rightVisible ? 1 : 0,
                  transform: rightVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease',
                  transitionDelay: `${(index + 2) * 0.1}s`,
                }}
              >
                <CheckCircle2 style={{ width: '18px', height: '18px', color: 'var(--cyan-300)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .ownership-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
