import './App.css'
import { asciiPortrait } from './asciiArt'

const profile = {
  name: 'Lingeston',
  role: 'FullStack Developer',
  location: 'Iran',
  email: 'mohammadlngs@gmail.com',
  resume: './resume.pdf',
  about:
    'I build clean, fast, human-friendly web interfaces. This portfolio is intentionally terminal-shaped because I like tools that feel direct, honest, and a little bit alive.',
  socials: [
    { label: 'GitHub', value: 'github.com/mohammadjf', href: 'https://github.com/mohammadjf' },
    { label: 'LinkedIn', value: 'linkedin.com/in/lingeston', href: 'https://linkedin.com/in/lingeston' },
    { label: 'Email', value: 'mohammadlngs@gmail.com', href: 'mailto:mohammadlngs@gmail.com' },
  ],
  skills: ['ASP.NET', 'React', 'JavaScript', 'CSS', 'HTML', 'Git'],
}

function Command({ command, children }) {
  return (
    <section className="terminal-section" aria-label={command}>
      <p className="prompt">
        <span className="prompt-user">visitor@portfolio</span>
        <span className="prompt-path">:~$</span> {command}
      </p>
      <div className="command-output">{children}</div>
    </section>
  )
}

function App() {
  return (
    <main className="shell">
      <div className="terminal-window">
        <header className="terminal-titlebar" aria-label="Terminal window controls">
          <div className="window-controls" aria-hidden="true">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>
          <p className="window-title">~/portfolio</p>
        </header>

        <div className="terminal-body">
          <section className="intro-grid">
            <pre className="ascii-art" aria-label="Placeholder ASCII portrait">
              {asciiPortrait}
            </pre>

            <div className="identity">
              <p className="kicker">booting personal profile...</p>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <div className="status-line">
                <span className="status-dot"></span>
                available for thoughtful web work
              </div>
            </div>
          </section>

          <Command command="whoami">
            <p>{profile.about}</p>
            <dl className="info-list">
              <div>
                <dt>location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </dl>
          </Command>

          <Command command="cat resume">
            <div className="resume-row">
              <p>Download the current resume file.</p>
              <a className="terminal-button" href={profile.resume} download>
                download_resume.pdf
              </a>
            </div>
          </Command>

          <Command command="ls skills">
            <ul className="skill-list">
              {profile.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Command>

          <Command command="ls projects">
            <div className="empty-state">
              <p>No public projects listed yet.</p>
              <p>Future work can live here as neat little terminal entries.</p>
            </div>
          </Command>

          <Command command="cat socials.json">
            <ul className="social-list">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <span>{social.label}</span>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.value}
                  </a>
                </li>
              ))}
            </ul>
          </Command>

          <p className="cursor-line" aria-hidden="true">
            <span className="prompt-user">visitor@portfolio</span>
            <span className="prompt-path">:~$</span>
            <span className="cursor"></span>
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
