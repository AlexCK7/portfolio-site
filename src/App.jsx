import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      {/* ===== HEADER ===== */}
      <header>
        <h1>Alexander Olisa Ifenu</h1>
        <p className="tagline">
          Software Engineer | Cloud & AI Research | Security-Aware Builder
        </p>
      </header>

      {/* ===== ABOUT ===== */}
      <section>
        <h2>About</h2>
        <p>
          I’m a full-stack developer and systems engineer passionate about
          building tools that scale — from AI-enabled finance apps to secure
          cloud dashboards. With real-world experience in university IT,
          research, and internship settings, I bring both production-readiness
          and innovation to the table.
        </p>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section>
        <h2>Experience</h2>
        <ul className="experience">
          <li>
            <strong>Intern, Digital Operations – JAR’s Remodeling (Remote)</strong>
            <br />
            <em>June 2025 – Present</em>
            <ul>
              <li>
                Leading the relaunch of JAR’s public website, implementing core features for client intake, galleries, and contact flows.
              </li>
              <li>
                Streamlining project tracking with custom Google Sheets workflows to replace outdated manual logs.
              </li>
              <li>
                Coordinating tech upgrades with office and field teams to modernize scheduling and documentation practices.
              </li>
            </ul>
          </li>

          <li>
            <strong>Research Assistant – Georgia Southern University</strong>
            <br />
            <em>May 2025 – Present • Statesboro, GA</em>
            <ul>
              <li>
                Supporting an NSF-funded study on <b>code comprehension</b> using <b>eye-tracking</b> and behavioral analytics.
              </li>
              <li>
                Processing gaze data to analyze transitions, fixations, and comprehension metrics using Python (Pandas, Seaborn).
              </li>
              <li>
                Assisting in building adaptive learning tools to improve how students engage with complex source code.
              </li>
            </ul>
          </li>

          <li>
            <strong>IT Automation Engineer – Georgia Southern University</strong>
            <br />
            <em>June 2022 – Aug 2024</em>
            <ul>
              <li>
                Resolved 200+ networking, endpoint, and access issues across a hybrid Windows/macOS environment.
              </li>
              <li>
                Automated security triage tasks using Bash/Python and AWS Lambda functions.
              </li>
              <li>
                Authored playbooks, root-cause docs, and internal tools to improve operational response.
              </li>
            </ul>
          </li>

          <li>
            <strong>Software Development Intern – KromeWells Ltd</strong>
            <br />
            <em>May 2023 – Aug 2023</em>
            <ul>
              <li>
                Supported internal firewall configuration, user access control, and firmware update testing across a distributed cloud setup.
              </li>
              <li>
                Resolved over 100 support tickets involving login, access, and compliance issues.
              </li>
              <li>
                Assisted with DevSecOps automation for deployment pipelines.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== PROJECTS ===== */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>UrbanDrive</strong> – Uber-style mobile app with map-based tracking, secure auth, and ride history (React Native, PostgreSQL, Express).
          </li>
          <li>
            <strong>SmartHire (WIP)</strong> – AI-powered hiring assistant that parses résumés, generates screening questions, and ranks candidates (MERN + LangChain).
          </li>
          <li>
            <strong>AI-Enhanced Finance Tracker</strong> – Secure finance app with TensorFlow.js-based anomaly detection and Firebase authentication (MERN stack).
          </li>
          <li>
            <strong>Network Watchdog</strong> – Python tool for rogue AP detection, packet analysis, and alerting via AWS SNS.
          </li>
        </ul>
      </section>

      {/* ===== CONTACT ===== */}
      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:tobenna.ifenu@gmail.com">tobenna.ifenu@gmail.com</a> ·{" "}
          <a href="https://github.com/AlexCK7">GitHub</a> ·{" "}
          <a href="https://linkedin.com/in/alexander-olisa-ifenu-978994228/">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}
