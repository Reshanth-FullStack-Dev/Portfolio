import React from 'react'
import { Code2, Database, Globe2, Server, ShieldCheck, ShoppingCart, RadioTower, Bot, GitBranch } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'PHP', 'HTML5', 'CSS3'],
    color: 'cyan',
  },
  {
    title: 'Frontend',
    icon: Globe2,
    skills: ['React.js', 'Redux', 'Angular', 'Bootstrap', 'jQuery'],
    color: 'purple',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Laravel', 'REST APIs'],
    color: 'green',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
    color: 'amber',
  },
  {
    title: 'Real-Time and Messaging',
    icon: RadioTower,
    skills: ['Socket.io', 'Firebase Cloud Messaging', 'APNs', 'Live Tracking'],
    color: 'orange',
  },
  {
    title: 'APIs and Security',
    icon: ShieldCheck,
    skills: ['Authentication', 'Authorization', 'RBAC', 'Secure API Design'],
    color: 'pink',
  },
  {
    title: 'DevOps and Deployment',
    icon: GitBranch,
    skills: ['Git', 'Linux Administration', 'cPanel', 'CI/CD Fundamentals'],
    color: 'blue',
  },
  {
    title: 'E-Commerce and CMS',
    icon: ShoppingCart,
    skills: ['Shopify', 'Zoho Commerce', 'WordPress'],
    color: 'indigo',
  },
  {
    title: 'AI-Assisted Development',
    icon: Bot,
    skills: ['Cursor', 'Windsurf', 'GitHub Copilot', 'Amazon Q', 'Codex', 'Claude'],
    color: 'cyan',
  },
]

const colors = {
  cyan: { bg: 'rgba(45,212,191,0.1)', text: 'var(--cyan-300)', border: 'rgba(45,212,191,0.28)', glow: 'rgba(45,212,191,0.16)' },
  purple: { bg: 'rgba(139,92,246,0.1)', text: 'var(--purple-300)', border: 'rgba(139,92,246,0.28)', glow: 'rgba(139,92,246,0.16)' },
  green: { bg: 'rgba(34,197,94,0.1)', text: '#86efac', border: 'rgba(34,197,94,0.28)', glow: 'rgba(34,197,94,0.16)' },
  amber: { bg: 'rgba(245,158,11,0.1)', text: 'var(--amber-300)', border: 'rgba(245,158,11,0.28)', glow: 'rgba(245,158,11,0.16)' },
  orange: { bg: 'rgba(249,115,22,0.1)', text: '#fdba74', border: 'rgba(249,115,22,0.28)', glow: 'rgba(249,115,22,0.16)' },
  pink: { bg: 'rgba(236,72,153,0.1)', text: 'var(--pink-400)', border: 'rgba(236,72,153,0.28)', glow: 'rgba(236,72,153,0.16)' },
  blue: { bg: 'rgba(96,165,250,0.1)', text: '#93c5fd', border: 'rgba(96,165,250,0.28)', glow: 'rgba(96,165,250,0.16)' },
  indigo: { bg: 'rgba(129,140,248,0.1)', text: '#a5b4fc', border: 'rgba(129,140,248,0.28)', glow: 'rgba(129,140,248,0.16)' },
}

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '100px 40px', background: 'var(--bg-surface)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '50px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--cyan-300)', fontWeight: 600,
          }}>04 / Skills</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '0',
          marginBottom: '18px', textAlign: 'center',
        }}>
          Technical <span style={{
            background: 'linear-gradient(135deg, var(--cyan-300), var(--purple-300), var(--amber-300))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Toolkit</span>
        </h2>
        <p style={{
          color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '720px',
          margin: '0 auto 46px', lineHeight: 1.8,
        }}>
          A practical stack for owning product features from schema design and APIs through polished user interfaces and deployment.
        </p>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
          {skillCategories.map((category) => {
            const tone = colors[category.color]
            const Icon = category.icon
            return (
              <article
                key={category.title}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: '8px', padding: '20px', position: 'relative',
                  transition: 'all 0.28s ease', overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tone.border
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = `0 18px 38px ${tone.glow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: tone.text,
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    display: 'inline-flex', padding: '10px', borderRadius: '8px',
                    background: tone.bg, border: `1px solid ${tone.border}`, color: tone.text,
                  }}>
                    <Icon style={{ width: '20px', height: '20px' }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
                    color: 'var(--text-primary)', margin: 0, letterSpacing: '0',
                  }}>
                    {category.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '6px 9px', borderRadius: '999px', fontSize: '12px',
                        fontWeight: 600, border: `1px solid ${tone.border}`,
                        color: tone.text, background: tone.bg,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
