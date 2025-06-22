import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      {/* ---------- HEADER ---------- */}
      <header>
        <h1>Alexander Olisa Ifenu</h1>
        <p className="tagline">
          Software Engineer &nbsp;|&nbsp; Cloud & AI Research &nbsp;|&nbsp; Security-Aware Builder
        </p>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section>
        <h2>About</h2>
        <p>
          I’m a full-stack developer and systems engineer passionate about building tools that scale
          — from AI-enabled finance apps to secure cloud dashboards. My background in university IT,
          research, and internships lets me balance production-readiness with innovation.
        </p>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section>
        <h2>Experience</h2>
        <ul className="experience">
          <li>
            <strong>Intern, Digital Operations – JAR’s Remodeling (Remote)</strong><br />
            <em>Jun&nbsp;2025 – Present</em>
            <ul>
              <li>Relaunching JAR’s public website with modern intake & gallery flows.</li>
              <li>Replacing manual logs with custom Google-Sheets automations.</li>
              <li>Coordinating field & office tech upgrades for smoother scheduling.</li>
            </ul>
          </li>

          <li>
            <strong>Research Assistant – Georgia Southern University</strong><br />
            <em>May&nbsp;2025 – Present · Statesboro, GA</em>
            <ul>
              <li>NSF-funded eye-tracking study on code comprehension behaviour.</li>
              <li>Python (Pandas, Seaborn) pipelines for gaze-metric analysis.</li>
              <li>Prototyping adaptive IDE hints based on real-time attention.</li>
            </ul>
          </li>

          <li>
            <strong>IT Automation Engineer – Georgia Southern University</strong><br />
            <em>Jun&nbsp;2022 – Aug 2024</em>
            <ul>
              <li>Resolved 200+ networking & endpoint tickets (95 % same-day).</li>
              <li>Automated alert triage with Bash/Python & AWS Lambda.</li>
              <li>Wrote playbooks & RCA docs to speed incident response.</li>
            </ul>
          </li>

          <li>
            <strong>Software Development Intern – KromeWells Ltd</strong><br />
            <em>May 2023 – Aug 2023</em>
            <ul>
              <li>Firewall rule updates, user-access audits, CI/CD script testing.</li>
              <li>Resolved 100+ support tickets around login & compliance issues.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>UrbanDrive</strong> – Uber-style mobile app (React Native, Express, Postgres).</li>
          <li><strong>SmartHire (WIP)</strong> – MERN + LangChain AI hiring assistant.</li>
          <li><strong>AI-Enhanced Finance Tracker</strong> – MERN + TensorFlow.js anomaly detection.</li>
          <li><strong>Network Watchdog</strong> – Python rogue-AP detector with AWS SNS alerts.</li>
        </ul>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:tobenna.ifenu@gmail.com">tobenna.ifenu@gmail.com</a> ·{' '}
          <a href="https://github.com/AlexCK7">GitHub</a> ·{' '}
          <a href="https://linkedin.com/in/alexander-olisa-ifenu-978994228/">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}
