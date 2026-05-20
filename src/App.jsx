import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const menuItems = [
    {
      id: 1,
      name: 'Ayam Bakar & Goreng',
      tag: 'Terlaris',
      image: '/ayam.jpg', // Local image from public folder
    },
    {
      id: 2,
      name: 'Pempek 3 Ilir',
      tag: 'Khas Palembang',
      image: '/pempek.jpg', // Local image from public folder
    },
    {
      id: 3,
      name: 'Siomay Bandung',
      tag: 'Rekomendasi',
      image: '/siomay.jpg', // Local image from public folder
    },
    {
      id: 4,
      name: 'Risol Mayo',
      tag: 'Cemilan',
      image: '/risol.jpg', // Local image from public folder
    },
    {
      id: 6,
      name: 'Salad Buah',
      tag: 'Segar',
      image: '/salad-buah.jpg', // Local image from public folder
    },
    {
      id: 7,
      name: 'Asinan Betawi (Sayur)',
      tag: 'Tradisional',
      image: '/asinan.jpg', // Local image from public folder
    }
  ];

  const heroImages = menuItems.map(item => item.image);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Halo saya mau pesan');
    window.open(`https://wa.me/6281573897783?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`hero-bg ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content animate-fade-in-down">
            <span className="hero-subtitle">Selamat Datang di</span>
            <h1 className="hero-title">Dapur <span>Teh Imel</span></h1>
            <p className="hero-desc">
              Menyajikan aneka hidangan lezat dengan resep pilihan. Mulai dari Ayam Bakar & Ayam Goreng, Pempek khas palembang,Asinan sayur betawi, Siomay Bandung dan
              segarnya  Salad Buah, kami siap memanjakan lidah Anda.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-brown" onClick={handleWhatsApp}>
                Pesan Sekarang
              </button>
              <button className="btn btn-text" onClick={() => document.getElementById('menu').scrollIntoView()}>
                Produk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section py-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Menu Andalan Kami</h2>
          </div>
          
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div 
                className={`menu-card animate-fade-in-up delay-${(index % 3 + 1) * 100}`} 
                key={item.id}
              >
                <div className="menu-tag">{item.tag}</div>
                <div className="menu-img-wrap">
                  <img src={item.image} alt={item.name} className="menu-img" />
                </div>
                <div className="menu-content">
                  <h3 className="menu-name">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="order-section py-section">
        <div className="container">
          <div className="glass-panel">
            <h2 className="section-title" style={{marginBottom: '1rem'}}>Pesan Sekarang!</h2>
            <p>Hubungi kami melalui WhatsApp untuk pemesanan langsung</p>
            
            <div className="contact-number" onClick={handleWhatsApp} style={{cursor: 'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.002 3.824-3.114 6.938-6.937 6.938z"/>
              </svg>
              0815 7389 7783
            </div>

            <p style={{marginTop: '2rem', marginBottom: '1rem', fontWeight: 600}}>Hadir Juga Di:</p>
            <div className="delivery-partners">
              <a href="https://gofood.link/a/Tcr9KxA" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{color: '#E62129', textDecoration: 'none'}}>
                {/* Simplified GoFood Text Icon */}
                <span style={{fontSize: '1.5rem', fontWeight: 900}}>go</span>food
              </a>
              <a href="https://r.grab.com/g/6-20260428_161503_c4c3fd5d0c5c44d8bf247fc1bf87979d_MEXMPS-6-C75AT62GPETUVX" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{color: '#00B14F', textDecoration: 'none'}}>
                <span style={{fontSize: '1.5rem', fontWeight: 900}}>Grab</span>Food
              </a>
              <a href="https://spf.shopee.co.id/8Km0RfkGXY" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{color: '#EE4D2D', textDecoration: 'none'}}>
                <span style={{fontSize: '1.5rem', fontWeight: 900}}>Shopee</span>Food
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-logo">Dapur <span>Teh Imel</span></div>
          <p>&copy; {new Date().getFullYear()} Dapur Teh Imel. Bojonggede, Kabupaten Bogor.</p>
        </div>
      </footer>
    </>
  )
}

export default App
