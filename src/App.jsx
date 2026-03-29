import './App.css';

const hamsters = [
  {
    name: 'Mochi',
    breed: 'Syrian Hamster',
    price: '฿350',
    desc: 'แฮมสเตอร์ตัวอ้วนขนนุ่ม นิสัยเชื่อง เหมาะกับมือใหม่',
    emoji: '🐹',
  },
  {
    name: 'Latte',
    breed: 'Winter White',
    price: '฿290',
    desc: 'ตัวเล็กน่ารัก คล่องแคล่ว สีขนละมุน ดูแลง่าย',
    emoji: '🐭',
  },
  {
    name: 'Pudding',
    breed: 'Roborovski',
    price: '฿320',
    desc: 'แฮมสเตอร์จิ๋ววิ่งไว สดใส ขี้เล่นสุด ๆ',
    emoji: '🐹',
  },
];

function App() {
  return (
    <div className="page">
      <div className="bg bg1"></div>
      <div className="bg bg2"></div>

      <header className="navbar">
        <div className="brand">Hammy House</div>
        <nav className="nav-links">
          <a href="#home">หน้าแรก</a>
          <a href="#shop">สินค้า</a>
          <a href="#about">เกี่ยวกับร้าน</a>
          <a href="#contact">ติดต่อ</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <div className="badge">ร้านขายแฮมสเตอร์สุดน่ารัก</div>
            <h1>
              รับแฮมสเตอร์
              <span>น่ารักไปเลี้ยงสักตัวไหม?</span>
            </h1>
            <p>
              รวมแฮมสเตอร์สุขภาพดี น่ารัก ขนนุ่ม พร้อมคำแนะนำการเลี้ยง
              สำหรับมือใหม่และคนรักสัตว์ตัวจิ๋ว
            </p>

            <div className="hero-buttons">
              <a href="#shop" className="btn btn-primary">
                ดูน้องแฮมสเตอร์
              </a>
              <a href="#contact" className="btn btn-secondary">
                ติดต่อร้าน
              </a>
            </div>

            <div className="mini-stats">
              <div>
                <strong>50+</strong>
                <span>ลูกค้าที่ไว้ใจ</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>ดูแลด้วยความใส่ใจ</span>
              </div>
              <div>
                <strong>3 สายพันธุ์</strong>
                <span>ยอดนิยม</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-emoji">🐹</div>
            <h3>Hammy House</h3>
            <p>ตัวกลม ขนนุ่ม น่ารัก พร้อมกลับบ้าน</p>
          </div>
        </section>

        <section className="section" id="shop">
          <div className="section-title">
            <h2>น้องแฮมสเตอร์แนะนำ</h2>
            <p>เลือกเพื่อนตัวจิ๋วที่เหมาะกับคุณ</p>
          </div>

          <div className="card-grid">
            {hamsters.map((hamster) => (
              <div className="pet-card" key={hamster.name}>
                <div className="pet-image">{hamster.emoji}</div>
                <div className="pet-body">
                  <div className="pet-top">
                    <div>
                      <h3>{hamster.name}</h3>
                      <p className="breed">{hamster.breed}</p>
                    </div>
                    <div className="price">{hamster.price}</div>
                  </div>

                  <p className="desc">{hamster.desc}</p>
                  <button className="buy-btn">สั่งจอง</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section features" id="about">
          <div className="section-title">
            <h2>ทำไมต้องเลือก Hammy House</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">💖</div>
              <h3>สุขภาพดี</h3>
              <p>คัดเลือกน้องแฮมสเตอร์ที่แข็งแรงและดูแลอย่างเหมาะสม</p>
            </div>
            <div className="feature-card">
              <div className="icon">🥕</div>
              <h3>มีคำแนะนำการเลี้ยง</h3>
              <p>แนะนำอาหาร กรง และวิธีเลี้ยงเบื้องต้นสำหรับมือใหม่</p>
            </div>
            <div className="feature-card">
              <div className="icon">🏠</div>
              <h3>พร้อมกลับบ้าน</h3>
              <p>เหมาะสำหรับคนที่อยากมีสัตว์เลี้ยงตัวเล็ก น่ารัก และดูแลง่าย</p>
            </div>
          </div>
        </section>

        <section className="section contact-box" id="contact">
          <h2>สนใจรับน้องกลับบ้าน?</h2>
          <p>
            ติดต่อร้านเพื่อสอบถามรายละเอียดเพิ่มเติม ราคา โปรโมชั่น
            และคำแนะนำก่อนรับเลี้ยง
          </p>
          <div className="hero-buttons center">
            <a href="https://facebook.com" className="btn btn-primary">
              ทักแชทร้าน
            </a>
            <a href="https://instagram.com" className="btn btn-secondary">
              ดูรีวิวเพิ่มเติม
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;