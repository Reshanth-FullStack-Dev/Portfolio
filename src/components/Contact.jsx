import React from 'react';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 6382946217",
      href: "tel:+916382946217"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Email",
      value: "reshiarumugam02@gmail.com",
      href: "mailto:reshiarumugam02@gmail.com"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/reshanth-a-551559251",
      href: "https://www.linkedin.com/in/reshanth-a-551559251/"
    }
  ];

  return (
    <section id="contact" style={{
      padding: '100px 40px', background: 'var(--bg-void)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--cyan-300)', fontWeight: 600,
          }}>05 / Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-1px',
          marginBottom: '24px', textAlign: 'center',
        }}>
          Let&apos;s <span style={{
            background: 'linear-gradient(135deg, var(--cyan-300), var(--purple-300), var(--amber-300))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Connect</span>
        </h2>
        <p style={{
          fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8,
          maxWidth: '600px', margin: '0 auto 56px', textAlign: 'center',
        }}>
          I am open to frontend, backend, and full stack roles where I can own features end-to-end,
          ship production systems, and collaborate closely with product teams.
        </p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: '8px', padding: '28px',
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
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600,
              color: 'var(--text-primary)', marginBottom: '24px',
            }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
                    background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                    borderRadius: '12px', textDecoration: 'none', color: 'inherit',
                    transition: 'all var(--transition-med)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--bg-card-hover)'
                    e.currentTarget.style.borderColor = 'var(--border-medium)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{
                    background: 'var(--bg-surface)', padding: '12px', borderRadius: '50%',
                    border: '1px solid var(--border-medium)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                        {React.cloneElement(info.icon, { style: { width: '20px', height: '20px', color: 'var(--cyan-300)' }})}
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>{info.label}</p>
                    <p style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: 500 }}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: '8px', padding: '28px',
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
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600,
              color: 'var(--text-primary)', marginBottom: '24px',
            }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block', fontSize: '14px', fontWeight: 500,
                  color: 'var(--text-secondary)', marginBottom: '8px',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{
                    width: '100%', padding: '12px 16px', border: '1px solid var(--border-medium)',
                    borderRadius: '8px', fontSize: '16px', outline: 'none',
                    background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                    transition: 'all var(--transition-med)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--purple-500)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.2)'
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" style={{
                  display: 'block', fontSize: '14px', fontWeight: 500,
                  color: 'var(--text-secondary)', marginBottom: '8px',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{
                    width: '100%', padding: '12px 16px', border: '1px solid var(--border-medium)',
                    borderRadius: '8px', fontSize: '16px', outline: 'none',
                    background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                    transition: 'all var(--transition-med)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--purple-500)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.2)'
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" style={{
                  display: 'block', fontSize: '14px', fontWeight: 500,
                  color: 'var(--text-secondary)', marginBottom: '8px',
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  style={{
                    width: '100%', padding: '12px 16px', border: '1px solid var(--border-medium)',
                    borderRadius: '8px', fontSize: '16px', outline: 'none', resize: 'none',
                    background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                    transition: 'all var(--transition-med)',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--purple-500)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.2)'
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  padding: '14px 24px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--purple-600), var(--violet-500))',
                  color: 'white', fontSize: '16px', fontWeight: 500,
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'all var(--transition-med)',
                  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.3)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(139, 92, 246, 0.3)'
                }}
              >
                <Send style={{ width: '20px', height: '20px' }} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Available for full-time opportunities and selected freelance projects
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a
              href="tel:+916382946217"
              style={{
                padding: '12px 24px', borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--purple-600), var(--violet-500))',
                color: 'white', fontSize: '15px', fontWeight: 500,
                textDecoration: 'none', display: 'inline-block',
                transition: 'all var(--transition-med)',
                boxShadow: '0 4px 14px rgba(139, 92, 246, 0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(139, 92, 246, 0.3)'
              }}
            >
              Call Now
            </a>
            <a
              href="mailto:reshiarumugam02@gmail.com"
              style={{
                padding: '12px 24px', borderRadius: '8px',
                background: 'transparent', color: 'var(--purple-300)',
                fontSize: '15px', fontWeight: 500,
                border: '2px solid var(--purple-600)', textDecoration: 'none', display: 'inline-block',
                transition: 'all var(--transition-med)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
