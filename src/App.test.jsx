import './App.css';

function App() {
  return (
    <div className="page">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      <main className="hero-card">
        <section className="hero-left">
          <div className="badge">Kasetsart University • React Project</div>

          <h1>
            GitHub Codespaces
            <span> × React</span>
          </h1>

          <p className="hero-text">
            โปรเจค React ที่พัฒนาด้วย GitHub Codespaces และนำขึ้นใช้งานผ่าน
            Vercel พร้อมดีไซน์ใหม่ให้ดูทันสมัย สะอาด และเหมาะสำหรับใช้เป็น
            โปรเจคเรียนหรือใส่พอร์ตโฟลิโอ
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>

            <a
              className="btn btn-secondary"
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live on Vercel
            </a>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>React</h3>
              <p>Modern UI</p>
            </div>
            <div className="stat-card">
              <h3>Codespaces</h3>
              <p>Cloud Dev</p>
            </div>
            <div className="stat-card">
              <h3>Vercel</h3>
              <p>Fast Deploy</p>
            </div>
          </div>
        </section>

        <section className="hero-right">
          <div className="logo-card">
            <div className="logo-ring"></div>
            <img src="KU_Logo_PNG.png" className="ku-logo" alt="KU Logo" />
          </div>

          <div className="info-panel">
            <div className="info-row">
              <span>Project Type</span>
              <strong>React Frontend</strong>
            </div>
            <div className="info-row">
              <span>Deployment</span>
              <strong>Vercel</strong>
            </div>
            <div className="info-row">
              <span>Workspace</span>
              <strong>GitHub Codespaces</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;