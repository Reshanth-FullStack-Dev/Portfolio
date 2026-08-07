import React from 'react'
import { Building2, GraduationCap, HeartPulse, MapPinned, PackageCheck, Users, ExternalLink } from 'lucide-react'
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation'

const projectLinks = {
  'TNFD': 'https://tnfd.devops-in22labs.com/',
  'Nurture': 'https://nurturelife.io/',
  'PickupDrop': 'http://axiommobility.com/',
  'KEC Inventory': 'https://uatshop.kenmonthenginecompany.com/login',
  '11Systems': 'https://11systems.health/',
  'Swim School': 'http://uat.web.swimschoolpro.com/',
}

const projects = [
  {
    title: 'TNFD',
    subtitle: 'Government Workflow Platform',
    metric: '10000+ staff',
    tech: ['Laravel', 'PHP', 'MySQL', 'RBAC'],
    description: 'Digitized a Tamil Nadu Forest Department workflow with multi-role login and application processing for department-wide use.',
    features: ['Multi-role authentication', 'Application workflow processing', 'Controlled staff access'],
    icon: Building2,
    color: 'cyan',
  },
  {
    title: 'Swim School',
    subtitle: 'Multi-Tenant SaaS',
    metric: '80+ tenants',
    tech: ['Laravel', 'PHP', 'MySQL', 'Multi-Tenancy'],
    description: 'Architected isolated client portals with separate databases for schools, programs, levels, skills, attendance, students, and coaches.',
    features: ['Super Admin provisioning', 'Separate client databases', '4+ user roles with RBAC'],
    icon: GraduationCap,
    color: 'amber',
  },
  {
    title: 'PickupDrop',
    subtitle: 'Real-Time Logistics Platform',
    metric: '650+ live deliveries',
    tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'FCM', 'APNs'],
    description: 'Built real-time task assignment and live driver-customer tracking with chat, voice calling, notifications, and secure APIs.',
    features: ['Sub-second location updates', 'In-app chat and calls', 'Admin and driver app APIs'],
    icon: MapPinned,
    color: 'purple',
  },
  {
    title: 'Nurture',
    subtitle: 'Hospital Management System',
    metric: 'RBAC portals',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
    description: 'Developed Physician, Patient, and Admin portals with appointment scheduling, role-based workflows, and real-time communication.',
    features: ['Appointment automation', 'Patient and physician workflows', 'Secure role-based access'],
    icon: HeartPulse,
    color: 'green',
  },
  {
    title: 'KEC Inventory',
    subtitle: 'Inventory and Order Management',
    metric: '5000+ users',
    tech: ['Laravel', 'PHP', 'MySQL'],
    description: 'Built Admin and Customer modules that give users live stock visibility and cleaner order-management flows.',
    features: ['Inventory tracking', 'Customer order modules', 'Real-time stock visibility'],
    icon: PackageCheck,
    color: 'orange',
  },
  {
    title: '11Systems',
    subtitle: 'Healthcare Portal',
    metric: '500+ active users',
    tech: ['Angular', 'Node.js', 'Express.js'],
    description: 'Built healthcare portals for appointment management, patient monitoring, chat, and video consultation.',
    features: ['Physician, Patient, Admin portals', 'Chat and video consultation', 'Patient monitoring'],
    icon: Users,
    color: 'pink',
  },
]

const colors = {
  cyan: { text: 'var(--cyan-300)', bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.25)' },
  amber: { text: 'var(--amber-300)', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
  purple: { text: 'var(--purple-300)', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)' },
  green: { text: '#86efac', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.24)' },
  orange: { text: '#fdba74', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.24)' },
  pink: { text: 'var(--pink-400)', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.24)' },
}

export default function Projects() {
  const [addCardRef, visibleCards] = useScrollAnimationMultiple()

  return (
    <section id="projects" style={{
      padding: '100px 40px', background: 'var(--bg-surface)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--cyan-300)', fontWeight: 600,
          }}>03 / Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '0',
          marginBottom: '18px', textAlign: 'center',
        }}>
          Shipped <span style={{
            background: 'linear-gradient(135deg, var(--cyan-300), var(--purple-300), var(--amber-300))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Product Work</span>
        </h2>
        <p style={{
          fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8,
          maxWidth: '740px', margin: '0 auto 54px', textAlign: 'center',
        }}>
          Production systems across government, healthcare, logistics, inventory, SaaS, and client commerce.
        </p>

        <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '22px' }}>
          {projects.map((project, index) => {
            const tone = colors[project.color]
            const Icon = project.icon
            const isVisible = visibleCards.has(index)
            return (
              <article
                key={project.title}
                ref={addCardRef(index)}
                data-index={index}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: '8px', padding: '22px',
                  transition: 'all var(--transition-med)',
                  display: 'flex', flexDirection: 'column', minHeight: '100%',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tone.border
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${tone.glow}, 0 0 30px ${tone.glow}`
                  e.currentTarget.style.background = `rgba(28, 24, 56, 0.9)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '18px', gap: '12px' }}>
                  <div style={{
                    display: 'inline-flex', padding: '12px', borderRadius: '8px',
                    background: tone.bg, border: `1px solid ${tone.border}`, color: tone.text,
                  }}>
                    <Icon style={{ width: '24px', height: '24px' }} />
                  </div>
                  <span style={{
                    padding: '6px 10px', borderRadius: '999px',
                    color: tone.text, background: tone.bg, border: `1px solid ${tone.border}`,
                    fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    {project.metric}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '4px',
                }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '14px', color: tone.text, marginBottom: '14px', fontWeight: 700 }}>
                  {project.subtitle}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                  {project.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {project.features.map((feature) => (
                    <li key={feature} style={{
                      fontSize: '13px', color: 'var(--text-muted)',
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                    }}>
                      <span style={{ color: tone.text, marginTop: '1px' }}>&gt;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '5px 9px', borderRadius: '999px', fontSize: '12px',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)', background: 'var(--bg-elevated)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'
                        e.currentTarget.style.borderColor = tone.border
                        e.currentTarget.style.color = tone.text
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                        e.currentTarget.style.borderColor = 'var(--border-subtle)'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={projectLinks[project.title]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 'auto', width: '100%', padding: '10px 12px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.035)', color: tone.text,
                    fontSize: '14px', fontWeight: 700, border: `1px solid ${tone.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = tone.text
                    e.currentTarget.style.color = 'var(--bg-void)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.035)'
                    e.currentTarget.style.color = tone.text
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <ExternalLink style={{ width: '16px', height: '16px' }} />
                  View Project
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
