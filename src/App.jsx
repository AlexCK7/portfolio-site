import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Alexander&nbsp;Olisa Ifenu</h1>
        <p>Full-Stack Engineer · AI & Cloud Enthusiast</p>
      </header>

      <main>
        <section>
          <h2>Projects</h2>
          <ul>
            <li><strong>UrbanDrive</strong> – Uber-style ride app (React Native + Express)</li>
            <li><strong>SmartHire</strong> – AI hiring assistant (in progress)</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:tobenna.ifenu@gmail.com">tobenna.ifenu@gmail.com</a></p>
          <p>
            <a href="https://github.com/AlexCK7">GitHub</a> ·{" "}
            <a href="https://linkedin.com/in/alexander-olisa-ifenu-978994228/">LinkedIn</a>
          </p>
        </section>
      </main>
    </div>
  );
}
