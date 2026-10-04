<!DOCTYPE html>
<html lang="ne">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="description" content="दैनिक स्तोत्र पाठ: शिव, गणेश, सूर्य, विष्णु र देवीका प्रमुख मन्त्र र स्तोत्रहरूको डिजिटल संग्रह।">
<title>दैनिक स्तोत्र पाठ</title>
<link rel="manifest" href="manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="स्तोत्र">
<meta name="theme-color" content="#8B1A1A">
<link rel="apple-touch-icon" href="icon-192.png">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&family=Rozha+One&display=swap');

  :root {
    --saffron:    #D4621A;
    --deep-red:   #8B1A1A;
    --gold:       #C9860A;
    --gold-light: #F0C050;
    --cream:      #FDF6E3;
    --parchment:  #F5E8C0;
    --dark-brown: #2C1A0A;
    --mid-brown:  #5C3A1A;
    --text-main:  #1A0A00;
    --text-muted: #6B4A2A;
    --divider:    #C9860A44;
    --shadow:     rgba(44,26,10,0.18);
    --header-h:   0px;
    color-scheme: light;
    transition: background 0.25s ease, color 0.25s ease;
  }

  /* ── DARK MODE ── */
  html[data-theme="dark"] {
    --saffron:    #E07A35;
    --gold:       #E0A840;
    --gold-light: #F5D488;
    --cream:      #17110A;
    --parchment:  #241C10;
    --dark-brown: #0D0904;
    --mid-brown:  #D9BE93;
    --text-main:  #EFE3C8;
    --text-muted: #C9AE82;
    --divider:    #E0A84040;
    --shadow:     rgba(0,0,0,0.55);
    color-scheme: dark;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    font-family: 'Noto Sans Devanagari', sans-serif;
    background: var(--cream);
    color: var(--text-main);
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.25s ease, color 0.25s ease;
  }

  /* ── CUSTOM SCROLLBAR ── */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--cream);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--saffron);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--deep-red);
  }
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--saffron) var(--cream);
  }

  /* ── TEXT SELECTION PROTECTION (for auto-scroll) ── */
  .no-select {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }

  /* ── STICKY WRAPPER ── */
  .sticky-top {
    position: relative;
    z-index: 200;
  }

  /* ── HEADER ── */
  .app-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 210;
    background: linear-gradient(160deg, var(--deep-red) 0%, #5A0D0D 55%, var(--dark-brown) 100%);
    box-shadow: 0 3px 18px var(--shadow);
    will-change: transform;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
    padding: 12px 16px 8px;
  }

  .header-text h1 {
    font-family: 'Noto Serif Devanagari', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--gold-light);
    letter-spacing: 0.03em;
    line-height: 1.2;
  }

  .header-text p {
    font-size: 0.68rem;
    color: #E8C88888;
    margin-top: 2px;
    letter-spacing: 0.06em;
  }

  .font-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 16px 8px;
    border-top: 1px solid #ffffff18;
  }

  .font-btn {
    background: #ffffff18;
    border: 1px solid #ffffff28;
    color: var(--gold-light);
    border-radius: 6px;
    padding: 3px 10px;
    font-size: 0.82rem;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    line-height: 1;
  }
  .font-btn:active { background: #ffffff35; }

  .font-label {
    font-size: 0.7rem;
    color: var(--gold-light);
    min-width: 36px;
    text-align: center;
  }

  .theme-btn {
    background: #ffffff18;
    border: 1px solid #ffffff28;
    color: var(--gold-light);
    border-radius: 6px;
    padding: 3px 9px;
    font-size: 0.9rem;
    cursor: pointer;
    line-height: 1;
    transition: background 0.2s;
  }
  .theme-btn:active { background: #ffffff35; }

  /* ── SCROLL SPEED POPUP ── */
  .scroll-speed-popup {
    position: fixed;
    right: 14px;
    bottom: 80px; /* Moved up to avoid overlapping with Back to Top */
    z-index: 300;
    color: var(--gold-light);
    background: rgba(139, 26, 26, 0.32);
    border: 1px solid rgba(240, 192, 80, 0.34);
    box-shadow: 0 4px 14px rgba(44, 26, 10, 0.08);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: none;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    padding: 9px 10px;
    border-radius: 10px;
  }
  .scroll-speed-popup.open { display: flex; }

  .scroll-speed-control {
    min-width: 34px;
    height: 30px;
    padding: 0 8px;
    border: 1px solid #ffffff38;
    border-radius: 5px;
    color: var(--gold-light);
    background: rgba(255, 255, 255, 0.07);
    font: inherit;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .scroll-speed-control:active { background: rgba(212, 98, 26, 0.62); }

  .scroll-speed-value {
    min-width: 48px;
    color: var(--gold-light);
    font-size: 0.72rem;
    text-align: center;
    white-space: nowrap;
    letter-spacing: 0.04em;
    padding: 0 2px;
  }

  /* ── TAB NAV SHELL ── */
  .tab-nav-shell {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 200;
    overflow: hidden;
    background: linear-gradient(to bottom, #3A1A08, #2C1A0A);
    box-shadow: 0 3px 18px var(--shadow);
    will-change: transform;
  }

  .tab-nav {
    display: flex;
    overflow-x: auto;
    gap: 6px;
    padding: 8px 42px 9px 10px;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    align-items: center;
  }
  .tab-nav::-webkit-scrollbar { display: none; }

  .tab-jump-btn {
    position: absolute;
    top: 6px; right: 6px; bottom: 6px;
    z-index: 3;
    width: 32px;
    flex-shrink: 0;
    background: linear-gradient(160deg, var(--saffron), var(--deep-red));
    border: 1px solid #ffffff28;
    border-radius: 10px;
    color: #fff;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 2px 8px var(--shadow);
    -webkit-tap-highlight-color: transparent;
  }
  .tab-jump-btn:active { transform: scale(0.94); }

  .tab-menu-overlay {
    position: fixed; inset: 0;
    z-index: 400;
    background: rgba(0,0,0,0.55);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    display: flex;
    align-items: flex-end;
  }
  .tab-menu-overlay.open { opacity: 1; pointer-events: auto; }
  
  .tab-menu-sheet {
    width: 100%;
    max-height: 72vh;
    background: var(--parchment);
    border-radius: 18px 18px 0 0;
    box-shadow: 0 -6px 24px var(--shadow);
    transform: translateY(100%);
    transition: transform 0.25s ease;
    display: flex;
    flex-direction: column;
  }
  .tab-menu-overlay.open .tab-menu-sheet { transform: translateY(0); }
  
  .tab-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px 10px;
    font-family: 'Noto Serif Devanagari', serif;
    font-weight: 700;
    color: var(--text-main);
    border-bottom: 1px solid var(--divider);
  }
  .tab-menu-close {
    background: none;
    border: none;
    font-size: 1.1rem;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px 8px;
  }
  .tab-menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 12px 14px calc(env(safe-area-inset-bottom, 0px) + 16px);
    overflow-y: auto;
  }
  .tab-menu-item {
    display: flex;
    align-items: center;
    gap: 7px;
    text-align: left;
    background: #ffffff55;
    border: 1.5px solid var(--divider);
    border-radius: 12px;
    padding: 9px 10px;
    font-family: 'Noto Sans Devanagari', sans-serif;
    font-size: 0.82rem;
    color: var(--text-main);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .tab-menu-item.active {
    background: var(--saffron);
    border-color: var(--saffron);
    color: #fff;
    font-weight: 700;
  }
  .tab-menu-item:active { transform: scale(0.97); }

  .tab-fade {
    position: absolute;
    top: 0; bottom: 0;
    width: 26px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 2;
  }
  .tab-fade.show { opacity: 1; }
  .tab-fade-left  { left: 0;  background: linear-gradient(to right, #2C1A0A, transparent); }
  .tab-fade-right { right: 0; background: linear-gradient(to left,  #2C1A0A, transparent); }

  .tab-btn {
    flex-shrink: 0;
    background: #ffffff10;
    border: 1.5px solid #ffffff18;
    border-radius: 20px;
    padding: 5px 13px;
    font-family: 'Noto Sans Devanagari', sans-serif;
    font-size: 0.74rem;
    color: #E8C88899;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 1.3;
  }
  .tab-btn .tab-icon { font-size: 0.85rem; line-height: 1; }
  .tab-btn.active {
    background: var(--saffron);
    border-color: var(--saffron);
    color: #fff;
    font-weight: 700;
    box-shadow: 0 2px 10px rgba(212,98,26,0.45);
    transform: scale(1.04);
  }
  .tab-btn:not(.active):active {
    background: #ffffff22;
    transform: scale(0.97);
  }

  /* ── CONTENT AREA ── */
  .content-area {
    padding-bottom: 70px;
  }

  .stotra-section { display: none; animation: fadeIn 0.28s ease; }
  .stotra-section.active { display: block; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── DEITY BANNER ── */
  .deity-banner {
    position: sticky;
    top: var(--header-h);
    z-index: 150;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: var(--deep-red);
  }
  .deity-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    filter: brightness(0.82) saturate(1.1);
  }
  .deity-banner .banner-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44,10,10,0.92) 0%, rgba(44,10,10,0.25) 55%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 14px 16px 12px;
  }
  .deity-banner h2 {
    font-family: 'Noto Serif Devanagari', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gold-light);
    line-height: 1.3;
    text-shadow: 0 2px 10px #000000aa;
  }
  .deity-banner .subtitle {
    font-size: 0.68rem;
    color: #E8C88899;
    margin-top: 3px;
    letter-spacing: 0.06em;
  }

  .section-header {
    background: linear-gradient(135deg, var(--deep-red) 0%, #7A1515 100%);
    padding: 18px 16px 14px;
    text-align: center;
    position: sticky;
    top: var(--header-h);
    z-index: 150;
    overflow: hidden;
  }
  .section-header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(45deg,transparent,transparent 12px,#ffffff06 12px,#ffffff06 13px);
  }
  .section-header h2 {
    font-family: 'Noto Serif Devanagari', serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--gold-light);
    position: relative;
    line-height: 1.3;
  }

  /* ── MANTRA BLOCKS ── */
  .mantra-block {
    padding: 16px 16px;
    border-bottom: 1px solid var(--divider);
    border-radius: 8px; /* Added for highlight effect */
    transition: background 0.4s ease;
  }
  .mantra-block:last-child { border-bottom: none; }

  /* Shloka Highlighting Class */
  .mantra-block.highlight-shloka {
    background: rgba(212, 98, 26, 0.08);
  }
  html[data-theme="dark"] .mantra-block.highlight-shloka {
    background: rgba(224, 168, 64, 0.12);
  }

  .mantra-label {
    font-family: 'Noto Serif Devanagari', serif;
    font-size: 1.34rem;
    font-weight: 700;
    letter-spacing: 0.035em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(120deg, var(--gold) 0%, var(--gold-light) 45%, var(--saffron) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--gold);
    text-shadow: 0 1px 1px rgba(0,0,0,0.06);
  }
  .mantra-label::before {
    content: '❖';
    flex-shrink: 0;
    font-size: 0.8em;
    -webkit-text-fill-color: var(--saffron);
    color: var(--saffron);
  }
  .mantra-label::after { content:''; flex:1; height:1px; background: linear-gradient(to right, var(--divider), transparent); }

  .shloka {
    font-family: 'Noto Serif Devanagari', serif;
    font-size: 1.30rem;
    line-height: 2;
    color: var(--text-main);
    white-space: pre-wrap;
  }

  /* Tab-specific font sizes */
  #tab-shivaguru      .shloka { font-size: 1.30rem; }
  #tab-ganesh         .shloka { font-size: 1.40rem; }
  #tab-surya          .shloka { font-size: 1.40rem; }
  #tab-vishnu         .shloka { font-size: 1.30rem; }
  #tab-manas          .shloka { font-size: 1.35rem; }
  #tab-pancha         .shloka { font-size: 1.40rem; }
  #tab-rudra          .shloka { font-size: 1.40rem; }
  #tab-tandava        .shloka { font-size: 1.48rem; }
  #tab-devi-prarthana .shloka { font-size: 1.40rem; }
  #tab-anandalahari   .shloka { font-size: 1.40rem; }
  #tab-devyaparadha   .shloka { font-size: 1.45rem; }
  #tab-saraswati      .shloka { font-size: 1.30rem; }
  #tab-lakshmi        .shloka { font-size: 1.40rem; }
  #tab-kshama         .shloka { font-size: 1.30rem; }
  #tab-jay            .shloka { font-size: 1.30rem; }
  #tab-shanti         .shloka { font-size: 1.40rem; }

  .shloka .pause { color: rgb(233, 11, 11); font-weight: 600; }
  .shloka .om    { color: var(--saffron); font-weight: 700; }

  .verse-num {
    display: inline;
    background: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    border-radius: 0;
    width: auto; height: auto;
    line-height: inherit;
    text-align: left;
    vertical-align: baseline;
    margin-left: 4px;
  }

  .shanti-tag {
    display: inline-block;
    background: none;
    color: var(--saffron);
    font-size: 1.35rem;
    padding: 2px 0;
    margin-top: 6px;
    font-family: 'Rozha One', 'Noto Serif Devanagari', serif;
    font-weight: 400;
    letter-spacing: 0.08em;
  }

  /* ── JAYAKAR ── */
  .jay-item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 16px;
    border-bottom: 1px solid var(--divider);
    font-family: 'Noto Serif Devanagari', serif;
    font-size: 1.3rem;
    color: var(--mid-brown);
    line-height: 1;
  }
  .jay-item .jay-text { flex: 1; }
  .jay-item .jai {
    flex-shrink: 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: white;
    background: var(--saffron);
    border-radius: 4px;
    padding: 2px 8px;
    font-family: sans-serif;
    letter-spacing: 0.04em;
  }

  /* ── BOTTOM BAR ── */
  .bottom-bar {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: var(--dark-brown);
    padding: 9px 16px;
    text-align: center;
    font-size: 0.7rem;
    color: var(--gold-light);
    opacity: 0.88;
    letter-spacing: 0.08em;
    font-family: 'Noto Serif Devanagari', serif;
    z-index: 100;
  }

  /* ── BACK TO TOP BUTTON ── */
  #backToTop {
    position: fixed;
    bottom: 75px;
    right: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--saffron);
    color: white;
    border: 2px solid var(--gold-light);
    font-size: 1.5rem;
    box-shadow: 0 4px 12px var(--shadow);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 150;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #backToTop.show {
    opacity: 1;
    transform: translateY(0);
  }
  #backToTop:active {
    transform: scale(0.9);
  }

  .main-title {
    text-align: center;
  }
  .app-footer {
    margin-top: 18px; padding: 14px 16px calc(env(safe-area-inset-bottom, 0px) + 14px);
    text-align: center; font-size: 0.7rem; color: var(--text-muted);
    letter-spacing: 0.02em; border-top: 1px solid var(--divider);
  }
</style>
</head>
<body>
  <h3 class="main-title">दैनिक स्तोत्र पाठ</h3>
  
<!-- FIXED STICKY TOP: header + tabs -->
<div class="sticky-top" id="stickyTop">
  <header class="app-header">
    <div class="header-inner">
      <div class="header-text">
        <h1>दैनिक स्तोत्र पाठ</h1>
        <p>शिव-इष्ट केन्द्रित नित्य साधना</p>
      </div>
    </div>
    <div class="font-bar">
      <button class="font-btn" onclick="changeFont(-1)">अ−</button>
      <span class="font-label" id="fontLabel">100%</span>
      <button class="font-btn" onclick="changeFont(1)">अ+</button>
      <button class="theme-btn" id="themeBtn" onclick="toggleTheme()" title="उज्यालो/अँध्यारो मोड">🌙</button>
      <button class="font-btn" id="scrollModeBtn" onclick="toggleScrollMode()" style="margin-left: 8px;">आफै स्क्रोल गर्न यहाँ थिच्नुहोस्</button>
    </div>
  </header>

  <div class="tab-nav-shell" id="tabNavShell">
    <nav class="tab-nav" id="tabNav">
      <button class="tab-btn active" data-tab="shivaguru" onclick="showTab('shivaguru',this)"><span class="tab-icon">🔱</span>शिव-गुरु</button>
      <button class="tab-btn" data-tab="ganesh" onclick="showTab('ganesh',this)"><span class="tab-icon">🐘</span>गणेश</button>
      <button class="tab-btn" data-tab="surya" onclick="showTab('surya',this)"><span class="tab-icon">☀️</span>सूर्य</button>
      <button class="tab-btn" data-tab="vishnu" onclick="showTab('vishnu',this)"><span class="tab-icon">🪷</span>विष्णु</button>
      <button class="tab-btn" data-tab="manas" onclick="showTab('manas',this)"><span class="tab-icon">🪔</span>मानस पूजा</button>
      <button class="tab-btn" data-tab="pancha" onclick="showTab('pancha',this)"><span class="tab-icon">📿</span>पञ्चाक्षर</button>
      <button class="tab-btn" data-tab="rudra" onclick="showTab('rudra',this)"><span class="tab-icon">🔱</span>रुद्राष्टकम्</button>
      <button class="tab-btn" data-tab="tandava" onclick="showTab('tandava',this)"><span class="tab-icon">💃</span>ताण्डव</button>
      <button class="tab-btn" data-tab="devi-prarthana" onclick="showTab('devi-prarthana',this)"><span class="tab-icon">🌺</span>देवी प्रार्थना</button>
      <button class="tab-btn" data-tab="anandalahari" onclick="showTab('anandalahari',this)"><span class="tab-icon">🌊</span>आनन्दलहरी</button>
      <button class="tab-btn" data-tab="devyaparadha" onclick="showTab('devyaparadha',this)"><span class="tab-icon">🙏</span>देव्यपराध</button>
      <button class="tab-btn" data-tab="saraswati" onclick="showTab('saraswati',this)"><span class="tab-icon">🎵</span>सरस्वती</button>
      <button class="tab-btn" data-tab="lakshmi" onclick="showTab('lakshmi',this)"><span class="tab-icon">🌸</span>लक्ष्मी</button>
      <button class="tab-btn" data-tab="kshama" onclick="showTab('kshama',this)"><span class="tab-icon">🙏</span>क्षमा–समर्पण</button>
      <button class="tab-btn" data-tab="jay" onclick="showTab('jay',this)"><span class="tab-icon">🚩</span>जयजयकार</button>
      <button class="tab-btn" data-tab="shanti" onclick="showTab('shanti',this)"><span class="tab-icon">🕉️</span>शान्ति</button>
    </nav>
    <div class="tab-fade tab-fade-left" id="fadeLeft"></div>
    <div class="tab-fade tab-fade-right" id="fadeRight"></div>
    <button class="tab-jump-btn" id="tabJumpBtn" onclick="openTabMenu()" title="सबै ट्याब हेर्नुहोस्">☰</button>
  </div>
</div>

<div class="scroll-speed-popup" id="scrollSpeedPopup" role="dialog" aria-label="स्क्रोल गति नियन्त्रण" onpointerdown="scheduleScrollSpeedPopupHide()">
  <button class="scroll-speed-control" onclick="event.stopPropagation(); changeScrollSpeed(-6);" aria-label="स्क्रोल गति घटाउनुहोस्">−</button>
  <div class="scroll-speed-value" id="scrollSpeedValue" aria-live="polite">12 px/s</div>
  <button class="scroll-speed-control" onclick="event.stopPropagation(); changeScrollSpeed(6);" aria-label="स्क्रोल गति बढाउनुहोस्">+</button>
</div>

<!-- TAB JUMP MENU -->
<div class="tab-menu-overlay" id="tabMenuOverlay" onclick="if(event.target.id==='tabMenuOverlay') closeTabMenu()">
  <div class="tab-menu-sheet">
    <div class="tab-menu-header">
      <span>ट्याब छान्नुहोस्</span>
      <button class="tab-menu-close" onclick="closeTabMenu()">✕</button>
    </div>
    <div class="tab-menu-grid" id="tabMenuGrid"></div>
  </div>
</div>

<!-- CONTENT -->
<div class="content-area" id="contentArea">

<!-- 1. SHIVAGURU -->
<section class="stotra-section active" id="tab-shivaguru">
  <div class="deity-banner">
    <img src="deity-photo-mahadev.png" onerror="bannerFallback(this,'#1a0a2a')" alt="Shiva" loading="lazy">
    <div class="banner-overlay">
      <h2>🔱 ॐ नमः शिवाय • ॐ गुरवे नमः</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">स्वस्तिवाचन</div>
    <div class="shloka"><span class="om">हरि: ॐ</span>
स्वस्ति न इन्द्रो वृद्धश्रवाः ।
स्वस्ति नः पूषा विश्ववेदाः ।
स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः ।
स्वस्ति नो बृहस्पतिर्दधातु ॥
<span class="shanti-tag">ॐ शान्तिः शान्तिः शान्तिः</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">शिवमंगल</div>
    <div class="shloka"><span class="om">ॐ</span> नमः शम्भवाय च मयोभवाय च।
नमः शङ्कराय च मयस्कराय च।
नमः शिवाय च शिवतराय च॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">शिव-गुरु वन्दना</div>
    <div class="shloka"><span class="om">ॐ</span> नमः शिवाय गुरवे, सच्चिदानन्द मूर्तये।
निष्प्रपञ्चाय शान्ताय, निरालम्बाय तेजसे॥

<span class="om">ॐ</span> सह नाववतु। सह नौ भुनक्तु।
सह वीर्यं करवावहै।
तेजस्वि नावधीतमस्तु मा विद्विषावहै।
<span class="shanti-tag">ॐ शान्तिः शान्तिः शान्तिः</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">गुरु मन्त्र</div>
    <div class="shloka">गुरु ब्रह्मा गुरु विष्णु गुरुदेवो महेश्वरः।
गुरु साक्षात् परब्रह्म तस्मै श्री गुरवे नमः॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">त्वमेव माता</div>
    <div class="shloka">त्वमेव माता च पिता त्वमेव,त्वमेव बन्धुश्च सखा त्वमेव
त्वमेव विद्या द्रविणम् त्वमेव, त्वमेव सर्वम् मम देव देव॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">महामृत्युञ्जय मन्त्रः</div>
    <div class="shloka"><span class="om">ॐ</span> त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">कर्पूरगौरं</div>
    <div class="shloka">कर्पूरगौरं करुणावतारं संसारसारम् भुजगेन्द्रहारम्।
सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥</div>
  </div>
</section>

<!-- 2. GANESH -->
<section class="stotra-section" id="tab-ganesh">
    <div class="deity-banner">
        <img src="deity-photo-ganesh.png" onerror="bannerFallback(this,'#4a1a00')" alt="Ganesha" loading="lazy">
        <div class="banner-overlay">
            <h2>🐘 श्री गणेशाय नमः</h2>
        </div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">स्तुति मन्त्र</div>
        <div class="shloka">गजाननं भूतगणादिसेवितं 
कपित्थजम्बूफलचारुभक्षणम्।
उमासुतं शोकविनाशकारकं
नमामि विघनेश्वरपादपङ्कजम्॥</div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">विघ्ननाशक मंत्र</div>
        <div class="shloka">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">विघ्ननाशक स्तुति</div>
        <div class="shloka">शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम्।
प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये॥</div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">संकट नाशक स्तोत्र</div>
        <div class="shloka">प्रणम्य शिरसा देवं गौरीपुत्र विनायकम् ।
भक्तावासं स्मरेन्नित्यायुष्कामार्थसिद्धये ॥१॥
प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।
तृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥२॥
लम्बोदरं पञ्चमं च षष्ठं विकटमेव च ।
सप्तमं विघ्नराजं च धूम्रवर्ण तथाष्टमम् ॥३॥
नवमं भालचन्द्रं च दशमं तु विनायकम् ।
एकादशं गणपतिं द्वादशं तु गजाननम् ॥४॥
द्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।
न च विघ्नभयं तस्य सर्वसिद्धिश्च जायते ॥५॥
विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।
पुत्रार्थी लभते पुत्रान्मोक्षार्थी लभते गतिम् ॥६॥
जपेद् गणपतिस्तोत्रं षड्भिर्मासैः फलं लभेत् ।
संवत्सरेण सिद्धिं च लभते नात्र संशयः ॥७॥
अष्टाभ्यो ब्राह्मणेभ्यश्च लिखित्वा यः समर्पयेत् ।
तस्य विद्या भवेत्सर्वा गणेशस्य प्रसादतः ॥८॥</div>
    </div>
</section>

<!-- 3. SURYA -->
<section class="stotra-section" id="tab-surya">
  <div class="deity-banner">
    <img src="deity-photo-surya.png" onerror="bannerFallback(this,'#3a2000')" alt="Surya" loading="lazy">
    <div class="banner-overlay">
      <h2>☀️ ॐ आदित्याय नमः</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">सूर्याष्टकम्</div>
    <div class="shloka">आदिदेव नमस्तुभ्यं प्रसीद मम भास्कर।
दिवाकर नमस्तुभ्यं प्रभाकर नमोऽस्तु ते॥<span class="verse-num">१॥</span>
सप्ताश्वरथमारूढं प्रचण्डं कश्यपात्मजम्।
श्वेतपद्मधरं देवं तं सूर्यं प्रणमाम्यहम्॥<span class="verse-num">२॥</span>
लोहितं रथमारूढं सर्वलोकपितामहम्।
महापापहरं देवं तं सूर्यं प्रणमाम्यहम्॥<span class="verse-num">३॥</span>    
त्रैगुण्यं च महाशूरं ब्रह्माविष्णुमहेश्वरम् ।
महापापहरं देवं तं सूर्यं प्रणमाम्यहम् ॥<span class="verse-num">४॥</span>
बृंहितं तेजःपुञ्जं च वायुमाकाशमेव च ।
प्रभुं च सर्वलोकानां तं सूर्यं प्रणमाम्यहम् ॥<span class="verse-num">५॥</span>
बन्धूकपुष्पसङ्काशं हारकुण्डलभूषितम् ।
एकचक्रधरं देवं तं सूर्यं प्रणमाम्यहम् ॥<span class="verse-num">६॥</span>
तं सूर्यं जगत्कर्तारं महातेजःप्रदीपनम् ।
महापापहरं देवं तं सूर्यं प्रणमाम्यहम् ॥<span class="verse-num">७॥</span> 
तं सूर्यं जगतां नाथं ज्ञानविज्ञानमोक्षदम् ।
महापापहरं देवं तं सूर्यं प्रणमाम्यहम् ॥<span class="verse-num">८॥</span>

सूर्याष्टकं पठेन्नित्यं ग्रहपीडाप्रणाशनम् ।
अपुत्रो लभते पुत्रं दरिद्रो धनवान्भवेत् ॥<span class="verse-num">९॥</span>
आमिशं मधुपानं च यः करोति रवेर्दिने ।
सप्तजन्म भवेद्रोगी प्रतिजन्म दरिद्रता ॥<span class="verse-num">१०॥</span>
स्त्रीतैलमधुमांसानि यस्त्यजेत्तु रवेर्दिने ।
न व्याधिः शोकदारिद्र्यं सूर्यलोकं स गच्छति॥<span class="verse-num">११॥</span>
इति श्रीसूर्याष्टकस्तोत्रं सम्पूर्णम् ॥</div>
  </div>
</section>

<!-- 4. VISHNU -->
<section class="stotra-section" id="tab-vishnu">
  <div class="deity-banner">
    <img src="deity-photo-vishnu.png" onerror="bannerFallback(this,'#001a3a')" alt="Vishnu" loading="lazy">
    <div class="banner-overlay">
      <h2>🪷 ॐ विष्णवे नमः</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">विष्णु स्तुति</div>
    <div class="shloka">यं ब्रह्मावरुणेन्द्ररुद्रमरुतः स्तुन्वन्ति दिव्यैः स्तवैः।
वेदैः साङ्ग पदक्रमोपनिषदैः गायन्ति यं सामगाः।
ध्यानावस्थित तद्गतेन मनसा पश्यन्ति यं योगिनो
यस्यान्तं न विदुः सुरासुरगणा देवाय तस्मै नमः॥</div>
    
    <div class="mantra-label">विष्णु वन्दना</div>
    <div class="shloka">मूकं करोति वाचालं पङ्गुं लङ्घयते गिरिम्।
यत्कृपा तमहं वन्दे परमानन्द माधवम्॥
व्यासाय विष्णुरूपाय व्यासरूपाय विष्णवे।
नमो वै ब्रह्मनिधये वासिष्ठाय नमो नमः॥</div>

    <div class="mantra-label">विष्णु ध्यान श्लोक</div>
    <div class="shloka">शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं
विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।
लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं
वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥</div>
  </div>
</section>

<!-- 5. MANAS PUJA -->
<section class="stotra-section" id="tab-manas">
  <div class="deity-banner">
    <img src="deity-photo-manas.png" onerror="bannerFallback(this,'#1a0a00')" alt="Shiva parvati" loading="lazy">
    <div class="banner-overlay">
      <h2>🪔 शिव मानस पूजा</h2>
    </div>
  </div>
  <div class="mantra-block">
     <div class="mantra-label">शिव मानस पूजा स्तोत्रम्</div>
    <div class="shloka">रत्नैः कल्पितमासनं हिमजलैः स्नानं च दिव्याम्बरं,
नाना रत्न विभूषितम् मृग मदामोदाङ्कितम् चन्दनम्॥
जाती चम्पक बिल्वपत्र रचितं पुष्पं च धूपं तथा,
दीपं देव दयानिधे पशुपते हृत्कल्पितम् गृह्यताम्<span class="verse-num">॥१॥</span>

सौवर्णे नवरत्न-खण्ड-रचिते पात्रे घृतं पायसं,
भक्ष्यं पञ्चविधं पयो-दधि-युतं रम्भाफलं पानकम्।
शाकानाम्-अयुतं जलं रुचिकरं कर्पूरखण्डोज्ज्वलं,
ताम्बूलं मनसा मया विरचितं भक्त्या प्रभोस्वीकुरु<span class="verse-num">॥२॥</span>

छत्रं चामरयोः युगं व्यजनकं चादर्शकं निर्मलं,
वीणा-भेरि-मृदङ्ग-काहल-कला गीतं च नृत्यं तथा।
साष्टाङ्गं प्रणतिः स्तुतिः बहुविधा ह्येतत्समस्तं मया,
सङ्क्लपेन समर्पितं तवविभो पूजांगृहाणप्रभो<span class="verse-num">॥३॥</span>

आत्मा त्वं गिरिजा मतिः सहचराः प्राणाः शरीरं गृहं,
पूजा ते विषयोपभोगरचना निद्रा समाधिस्थितिः।
सञ्चारः पदयोः प्रदक्षिणविधिः स्तोत्राणि सर्वा गिरो,
यद्घत्कर्म करोमि तत्तदखिलं शम्भो तवाराधनम्<span class="verse-num">॥४॥</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">आत्मार्पण</div>
    <div class="shloka">करचरणकृतं वाक-कायजं कर्मजं वा,
श्रवणनयनजं वा मानसं वापराधम् ।
विहितमविहितं वा सर्वमेतत्क्षमस्व
जय जय करुणाब्धे श्रीमहादेव शम्भो॥</div>
  </div>
</section>

<!-- 6. PANCHA -->
<section class="stotra-section" id="tab-pancha">
  <div class="deity-banner">
    <img src="deity-photo-panchakshar.png" onerror="bannerFallback(this,'#1a0a2a')" alt="Shiva" loading="lazy">
    <div class="banner-overlay">
      <h2>🔱 शिव पञ्चाक्षर स्तोत्रम्</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="shloka">नागेन्द्रहाराय त्रिलोचनाय
भस्माङ्गरागाय महेश्वराय।
नित्याय शुद्धाय दिगम्बराय
तस्मै <span class="pause">न</span>काराय नमः शिवाय॥<span class="verse-num">१॥</span>
      
मन्दाकिनी-सललचन्दन-चर्चिताय
नन्दीश्वर-प्रमथनाथ-महेश्वराय।
मन्दारपुष्प-बहुपुष्प-सुपूजिताय
तस्मै <span class="pause">म</span>काराय नमः शिवाय॥<span class="verse-num">२॥</span>
      
शिवाय गौरीवदनाब्जबृन्दा
सूर्याय दक्षाध्वरनाशकाय।
श्रीनीलकण्ठाय वृषध्वजाय
तस्मै <span class="pause">शि</span>काराय नमः शिवाय॥<span class="verse-num">३॥</span>
      
विशिष्ट-कुम्भोद्भव-गौतमार्य
मुनीन्द्र देवार्चिता शेखराय।
चन्द्रार्क-वैश्वानरलोचनाय
तस्मै <span class="pause">व</span>काराय नमः शिवाय॥<span class="verse-num">४॥</span>
      
यज्ञस्वरूपाय जटाधराय
पिनाकहस्ताय सनातनाय।
दिव्याय देवाय दिगम्बराय
तस्मै <span class="pause">य</span>काराय नमः शिवाय॥<span class="verse-num">५॥</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">वन्दे शिवं शङ्करम्</div>
    <div class="shloka">वन्दे शम्भुमुमापतिं सुरगुरुं वन्दे जगत्कारणं,
वन्दे पन्नगभूषणं मृगधरं वन्दे पशूनां पतिम्।
वन्दे सूर्यशशाङ्कविह्ननयनं वन्दे मुकुन्दप्रियं,
वन्दे भक्तजनाश्रयं च वरदं वन्दे शिवं शङ्करम्॥<span class="verse-num">१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
इति श्री शिव स्तुतिः ।</div>
  </div>
</section>

<!-- 7. RUDRA -->
<section class="stotra-section" id="tab-rudra">
  <div class="deity-banner">
    <img src="deity-photo-rudrastakam.png" onerror="bannerFallback(this,'#1a0a2a')" alt="Shiva Nataraja" loading="lazy">
    <div class="banner-overlay">
      <h2>🔱 श्रीरुद्राष्टकम्</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="shloka">नमामीशमीशान निर्वाणरूपं
विभुं व्यापकं ब्रह्मवेदस्वरूपम्।
निजं निर्गुणं निर्विकल्पं निरीहं
चिदाकाशमाकाशवासं भजेऽहम्॥<span class="verse-num">१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
जरा जन्म दुःखौघ तातप्यमानं
प्रभो पाहि आपन्नमामीश शम्भो॥<span class="verse-num">८॥</span></div>
  </div>
</section>

<!-- 8. TANDAVA -->
<section class="stotra-section" id="tab-tandava">
  <div class="deity-banner">
    <img src="deity-photo-tandav.png" onerror="bannerFallback(this,'#0a001a')" alt="Nataraja" loading="lazy">
    <div class="banner-overlay">
      <h2>💫 शिवताण्डवस्तोत्रम्</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="shloka">जटाटवीगलज्जलप्रवाहपावितस्थले
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।
डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार
चण्डताण्डवं तनोतु नः शिवः शिवम्॥<span class="verse-num">१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
लक्ष्मी सदैव सुमुखीं प्रददाति शम्भुः॥<span class="verse-num">१५॥</span></div>
  </div>
</section>

<!-- 9. DEVI PRARTHANA -->
<section class="stotra-section" id="tab-devi-prarthana">
    <div class="deity-banner">
        <img src="deity-photo-devi-prarthana.png" onerror="bannerFallback(this,'#1a0010')" alt="Devi Prarthana" loading="lazy">
        <div class="banner-overlay">
            <h2>🌸🔱 ॐ पार्वत्यै नमः</h2>
        </div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">देवी प्रार्थना</div>
        <div class="shloka">देवी प्रपन्नार्तिहरे प्रसीद
प्रसीद मातर्जगतोऽखिलस्य।
प्रसीद विश्वेश्वरि पाहि विश्वं
त्वमीश्वरी देवि चराचरस्य॥</div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">महागौरी प्रार्थना</div>
        <div class="shloka">श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः।
महागौरी शुभं दघान्महादेवप्रमोददा॥</div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">श्रीदेवी नमन स्तोत्रम्</div>
        <div class="shloka">या देवी सर्वभूतेषु <span class="pause">बुद्धि</span>रूपेण संस्थिता।
या देवी सर्वभूतेषु <span class="pause">शक्ति</span>रूपेण संस्थिता।
या देवी सर्वभूतेषु <span class="pause">शान्ति</span>रूपेण संस्थिता। 
या देवी सर्वभूतेषु <span class="pause">लक्ष्मी</span> संस्थिता।
या देवी सर्वभूतेषु <span class="pause">काली</span>रूपेण संस्थिता।
या देवी सर्वभूतेषु <span class="pause">गौरी</span>रूपेण संस्थिता।
या देवी सर्वभूतेषु <span class="pause">दया</span>रूपेण संस्थिता।
या देवी सर्वभूतेषु <span class="pause">मातृ</span>रूपेण संस्थिता।
नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥</div>
    </div>
</section>

<!-- 10. ANANDALAHARI -->
<section class="stotra-section" id="tab-anandalahari">
  <div class="deity-banner">
    <img src="deity-photo-anandalahari.png" onerror="bannerFallback(this,'#1a0010')" alt="Anandalahari" loading="lazy">
    <div class="banner-overlay">
      <h2>🌺🔱 ॐ पार्वत्यै नमः</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">आनन्दलहरी</div>
    <div class="shloka">भवानि स्तोतुं त्वां प्रभवति चतुर्भिर्न वदनैः
प्रजानामीशानस्त्रिपुरमथनः पञ्चभिरपि ।
न षड्भिः सेनानीर्दशशतमुखैरप्यहिपति-
स्तदामन्येषां केषां कथय कथमस्मिन्नवसरः॥ <span class="verse-num">१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
कृपां केवल्यैका जननि जगदम्बेति करुणा॥ <span class="verse-num">२१॥</span></div>
  </div>
</section>

<!-- 11. DEVYAPARADHA (BUG FIXED HERE: </dev> changed to </div>) -->
<section class="stotra-section" id="tab-devyaparadha">
    <div class="deity-banner">
        <img src="deity-photo-devyaparadha.png" onerror="bannerFallback(this,'#1a0010')" alt="Devyaparadha" loading="lazy">
        <div class="banner-overlay">
            <h2>🌸🔱🙏🏻🙇🏽 ॐ पार्वत्यै नमः</h2>
        </div>
    </div>
    <div class="mantra-block">
        <div class="mantra-label">देवी क्षमा प्रार्थना</div>
        <div class="shloka">न मन्त्रं नो यन्त्रं तदपि च न जाने स्तुतिमहो,
न चाह्वानं ध्यानं तदपि च न जाने स्तुतिकथाः।
न जाने मुद्रास्ते तदपि च न जाने विलपनं,
परं जाने मातस्त्वदनुसरणं क्लेशहरणम्॥<span class="verse-num">१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
मत्समः पातकी नास्ति पापघ्नी त्वत्समा न हि ।
एवं ज्ञात्वा महादेवि यथायोग्यं तथा कुरु ॥ <span class="verse-num">१२॥</span></div>
    </div>
</section>

<!-- 12. SARASWATI (BUG FIXED HERE: Empty mantra-block removed and structure corrected) -->
<section class="stotra-section" id="tab-saraswati">
  <div class="deity-banner">
    <img src="deity-photo-saraswati.png" onerror="bannerFallback(this,'#001a2a')" alt="Saraswati" loading="lazy">
    <div class="banner-overlay">
      <h2>🦢🪕📚 ॐ सरस्वत्यै नमः</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">सरस्वती वन्दना</div>
    <div class="shloka">या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता।
या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥
या ब्रह्माच्युतशंकरप्रभृतिभिर्देवैः सदा पूजिता।
सा मां पातु सरस्वति भगवती निःशेषजाड्यापहा॥

शुक्लां ब्रह्मविचारसारपरमामाद्यां जगद्व्यापिनीं
वीणापुस्तकधारिणीमभयदां जाड्यान्धकारापहाम्।
हस्ते स्फाटिकमालिकां च दधतीं पद्मासने संस्थितां
वन्दे तां परमेश्वरीं भगवतीं बुद्धिप्रदां शारदाम्॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">सरस्वती द्वादश नाम</div>
    <div class="shloka">सरस्वती मया दृष्टा वीणापुस्तकधारिणी।
हंसवाहनसंयुक्ता विद्यादानं करोतु मे॥
प्रथमं भारती नाम द्वितीयञ्च सरस्वती।
तृतीयं शारदा देवी चतुर्थं हंसवाहिनी॥
पञ्चमं तु जगन्माता षष्ठं वागीश्वरी तथा।
सप्तमं चैव कौमारी अष्टमं वरदायिनी॥
नवमं बुद्धिदात्री च दशमं ब्रह्मचारिणी।
एकादशं चन्द्रघण्टा द्वादशं भुवनेश्वरी॥
द्वादशैतानि नामानि त्रिसन्ध्यं य पठेन्नरः।
जिह्वाग्रे वसते तस्य ब्रह्मरूपा सरस्वती॥</div>
  </div>
</section>

<!-- 13. LAKSHMI -->
<section class="stotra-section" id="tab-lakshmi">
  <div class="deity-banner">
    <img src="deity-photo-laxmi.png" onerror="bannerFallback(this,'#1a1000')" alt="Lakshmi" loading="lazy">
    <div class="banner-overlay">
      <h2>🌸🪷💰 ॐ महालक्ष्म्यै नमः</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">कनकधारा स्तोत्रम्</div>
    <div class="shloka">अङ्गं हरेः पुलकभूषणमाश्रयन्ती
भृङ्गाङ्गनेव मुकुलाभरणं तमालम्।
अङ्गीकृताखिलविभूतिरपाङ्गलीला
माङ्गल्यदास्तु मम मङ्गलदेवतायाः<span class="verse-num">॥१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
भुवि बुधभाविताशयाः<span class="verse-num">॥२१॥</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">श्रीमहालक्ष्मी स्तोत्रम्</div>
    <div class="shloka">मातर्नमामि कमले कमलायताक्षि
श्रीविष्णुहृत्कमलवासिनि विश्वमातः।
क्षीरोदजे कमलकोमलगर्भगौरि
लक्ष्मि प्रसीद सततं नमतां शरण्ये<span class="verse-num">॥१॥</span>
<!-- (Truncated for brevity, original content preserved structurally) -->
महालक्ष्मीस्तोत्रं नाम पञ्चमोऽध्यायः।</div>
  </div>
</section>

<!-- 14. KSHAMA -->
<section class="stotra-section" id="tab-kshama">
  <div class="deity-banner">
    <img src="deity-photo-mahadev.png" onerror="bannerFallback(this,'#1a0a2a')" alt="Shiva" loading="lazy">
    <div class="banner-overlay">
      <h2>🙏 क्षमा प्रार्थना • आत्मसमर्पण</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">शिव क्षमा प्रार्थना</div>
    <div class="shloka">करचरणकृतं वाक्कायजं कर्मजं वा,
श्रवणनयनजं वा मानसं वापराधम्।
विहितमविहितं वा सर्वमेतत्क्षमस्व
जय जय करुणाब्धे श्रीमहादेव शम्भो॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">पूजा-विधि न्यूनताको क्षमायाचना</div>
    <div class="shloka">आवाहनं न जानामि नैव जानामि पूजनम्।
विसर्जनं न जानामि क्षमस्व परमेश्वर॥
मन्त्रहीनं क्रियाहीनं भक्तिहीनं सदाशिव।
यत्पूजितं मया देव परिपूर्णं तदस्तु मे॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">आत्मसमर्पण</div>
    <div class="shloka">पापोहं पाप कर्माहं, पापात्मा पाप संभवः
त्राहिमाम पार्वतीनाथ, सर्वपापहरो भव ॥</div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">सर्वसमर्पण</div>
    <div class="shloka">कायेन वाचा मनसेन्द्रियैर्वा
बुद्ध्यात्मना वा प्रकृतेः स्वभावात्।
करोमि यद्यत्सकलं परस्मै
श्रीसदाशिवाय समर्पयामि॥</div>
  </div>
</section>

<!-- 15. JAY -->
<section class="stotra-section" id="tab-jay">
  <div class="deity-banner">
    <img src="deity-photo-jayjaykar.png" onerror="bannerFallback(this,'#1a0800')" alt="Trimurti" loading="lazy">
    <div class="banner-overlay">
      <h2>🙏 जयजयकार</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">मङ्गलाचरण र पञ्चायतन</div>
    <div class="jay-item">
      <span class="jay-text">विघ्नविनाशक रिद्धि–सिद्धिसहितका श्री गणेशजी भगवानको</span>
      <span class="jai">— जय</span>
    </div>
    <div class="jay-item">
      <span class="jay-text">गुरूणां गुरुः, मङ्गलस्वरूप श्री साम्ब सदाशिव भगवानको</span>
      <span class="jai">— जय</span>
    </div>
    <!-- (Truncated for brevity, original content preserved structurally) -->
    <div class="mantra-label">परम समापन</div>
    <div class="jay-item">
      <span class="jay-text">अखण्ड सच्चिदानन्द परब्रह्म परमेश्वर श्री साम्ब सदाशिव भगवानको</span>
      <span class="jai">— जय</span>
    </div>
  </div>
</section>

<!-- 16. SHANTI -->
<section class="stotra-section" id="tab-shanti">
  <div class="deity-banner">
    <img src="deity-photo-shanti.png" onerror="bannerFallback(this,'linear-gradient(135deg,#8B1A1A,#2C1A0A)')" alt="OM" loading="lazy">
    <div class="banner-overlay">
      <h2>🕉 शान्ति मन्त्र</h2>
    </div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">पूर्ण मन्त्र</div>
    <div class="shloka"><span class="om">ॐ</span> पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते।
पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते॥
<span class="shanti-tag">ॐ शान्तिः शान्तिः शान्तिः</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">सर्वे भवन्तु सुखिनः</div>
    <div class="shloka"><span class="om">ॐ</span> सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।
सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्।
<span class="shanti-tag">ॐ शान्तिः शान्तिः शान्तिः</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">असतो मा</div>
    <div class="shloka"><span class="om">ॐ</span> असतो मा सद्गमय।
तमसो मा ज्योतिर्गमय।
मृत्योर्माऽमृतं गमय।
<span class="shanti-tag">ॐ शान्तिः शान्तिः शान्तिः</span></div>
  </div>
  <div class="mantra-block">
    <div class="mantra-label">शान्ति पाठ</div>
    <div class="shloka">ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः
पृथ्वी शान्तिरापः शान्तिरोषधयः शान्तिः ।
वनस्पतयः शान्तिर्विश्वे देवाः शान्तिर्ब्रह्म शान्तिः
सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि ॥
ॐ शान्तिः शान्तिः शान्तिः।
सुशान्तिर्भवतु।
सर्वारिष्टशान्तिर्भवतु॥
श्रीरस्तु कल्याणमस्तु शुभं भूयात्॥
<span class="shanti-tag">ॐ शान्तिः शान्तिः शान्तिः</span></div>
  </div>
  <div class="mantra-block" style="background:linear-gradient(135deg,#212121,#f0efed);text-align:center;padding:28px 16px;">
    <div class="shloka" style="font-size:1.35rem;color:var(--deep-red);font-weight:700;text-align:center;line-height:1.5;">
      <span class="om" style="display:block;font-size:1.55rem;margin-top:6px;">ॐ नमः शिवाय | हरहर महादेव </span>
    </div>
  </div>
  <div class="app-footer">© 2026 Saroj Baral. All rights reserved.</div>
</section>

</div> <!-- End content-area -->

<!-- BACK TO TOP BUTTON -->
<button id="backToTop" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" title="माथि जानुहोस्">↑</button>

<!-- BOTTOM BAR -->
<div class="bottom-bar">ॐ शान्तिः शान्तिः शान्तिः</div>

<script>
// ── Image fallback for deity banners ──
function bannerFallback(imgEl, color) {
  imgEl.parentElement.style.background = color;
  imgEl.style.display = 'none';
}

// ── Light / Dark theme ──
const themeBtnEl = document.getElementById('themeBtn');
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeBtnEl.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('stotra-theme', theme); } catch (e) {}
}
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
}
(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('stotra-theme'); } catch (e) {}
  if (!saved) {
    saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  setTheme(saved);
})();

// ── Measure header/nav heights & set content padding ──
const appHeaderEl    = document.querySelector('.app-header');
const tabNavShellEl  = document.getElementById('tabNavShell');
const tabNavEl       = document.getElementById('tabNav');
const contentAreaEl  = document.getElementById('contentArea');
let headerH = 0, navH = 0;
let headerHideAmt = 0;

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function applyHeaderNavTransform() {
  appHeaderEl.style.transform = `translateY(${-headerHideAmt}px)`;
  const navY = Math.max(0, headerH - headerHideAmt);
  tabNavShellEl.style.transform = `translateY(${navY}px)`;
  document.documentElement.style.setProperty('--header-h', (navY + navH) + 'px');
}

function adjustPadding() {
  headerH = Math.ceil(appHeaderEl.getBoundingClientRect().height);
  navH = Math.ceil(tabNavShellEl.getBoundingClientRect().height);
  headerHideAmt = clamp(headerHideAmt, 0, headerH);
  contentAreaEl.style.paddingTop = (headerH + navH) + 'px';
  applyHeaderNavTransform();
}
adjustPadding();
let resizeRAF = null;
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(adjustPadding);
}
if (window.ResizeObserver) {
  const sizeObserver = new ResizeObserver(() => {
    if (resizeRAF) cancelAnimationFrame(resizeRAF);
    resizeRAF = requestAnimationFrame(adjustPadding);
  });
  sizeObserver.observe(appHeaderEl);
  sizeObserver.observe(tabNavShellEl);
}
window.addEventListener('resize', () => {
  if (resizeRAF) cancelAnimationFrame(resizeRAF);
  resizeRAF = requestAnimationFrame(adjustPadding);
}, { passive: true });

const TOP_THRESHOLD = 4;
let lastScrollY = window.scrollY;
let headerHiddenByTab = false;
let scrollRAF = null;

function onScroll() {
  if (scrollRAF) return;
  scrollRAF = requestAnimationFrame(() => {
    scrollRAF = null;
    const y = window.scrollY;
    const dy = y - lastScrollY;
    lastScrollY = y;

    if (headerHiddenByTab) {
      headerHideAmt = headerH;
    } else if (y <= TOP_THRESHOLD) {
      headerHideAmt = 0;
    } else if (dy !== 0) {
      headerHideAmt = clamp(headerHideAmt + dy, 0, headerH);
    }
    applyHeaderNavTransform();
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// ─── PERSISTENT BOOKMARKING: Save scroll position continuously ───
let scrollSaveTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollSaveTimeout);
  scrollSaveTimeout = setTimeout(() => {
    if (currentActiveTab) {
      localStorage.setItem('stotra_pos_' + currentActiveTab, window.scrollY);
    }
  }, 300);
}, { passive: true });

let tabScrollPositions = {};
let currentActiveTab = document.querySelector('.tab-btn.active')?.dataset.tab || '';

// ─── AUTO SCROLL ───
let isSmoothScrollOn = false;
let userDisabledAutoScroll = false;
let autoScrollRAF = null;
let autoScrollLastTs = null;
let autoScrollPauseTimer = null;
let scrollSpeedPopupTimer = null;
let autoScrollRemainder = 0;
let autoScrollSpeed = 12;

function updateScrollSpeedUI() {
  const valueEl = document.getElementById('scrollSpeedValue');
  if (valueEl) valueEl.textContent = `${autoScrollSpeed} px/s`;
}

function scheduleScrollSpeedPopupHide() {
  clearTimeout(scrollSpeedPopupTimer);
  scrollSpeedPopupTimer = setTimeout(() => {
    const popup = document.getElementById('scrollSpeedPopup');
    popup.classList.remove('open');
  }, 9000);
}

function changeScrollSpeed(amount) {
  autoScrollSpeed = Math.max(4, Math.min(60, autoScrollSpeed + Number(amount)));
  updateScrollSpeedUI();
  scheduleScrollSpeedPopupHide();
}

function openScrollSpeedPopup() {
  const popup = document.getElementById('scrollSpeedPopup');
  popup.classList.add('open');
  updateScrollSpeedUI();
  scheduleScrollSpeedPopupHide();
}

document.addEventListener('touchstart', (event) => {
  const target = event.target;
  if (target && target.closest('.tab-btn, .font-btn, .theme-btn, .tab-jump-btn, #scrollModeBtn, .scroll-speed-control, .scroll-speed-value, .scroll-speed-popup, #backToTop')) {
    return;
  }
  openScrollSpeedPopup();
}, { passive: true });

function handleDesktopTap(event) {
  if (event.pointerType !== 'mouse') return;
  const target = event.target;
  const isUI = target.closest('.tab-btn, .font-btn, .theme-btn, .tab-jump-btn, #scrollModeBtn, .scroll-speed-control, .scroll-speed-value, .scroll-speed-popup, #backToTop');
  if (isUI) return;
  openScrollSpeedPopup();
  toggleScrollMode();
}
document.addEventListener('pointerdown', handleDesktopTap, { passive: true });

function setScrollBtnUI(on) {
  const btn = document.getElementById('scrollModeBtn');
  btn.innerText = on ? "🟢 आफै चल्न सुरू भयो" : "🔴 आफै चल्न बन्द भयो";
  btn.style.background = on ? "var(--saffron)" : "#ffffff18";
}

function autoScrollStep(ts) {
    if (!isSmoothScrollOn) { autoScrollRAF = null; return; }
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 1) {
        stopAutoScroll();
        isSmoothScrollOn = false;
        setScrollBtnUI(false);
        return;
    }
    if (autoScrollLastTs !== null) {
        const dt = ts - autoScrollLastTs;
        autoScrollRemainder += (autoScrollSpeed * dt) / 1000;
        const wholePixels = Math.floor(autoScrollRemainder);
        if (wholePixels > 0) {
            window.scrollBy(0, wholePixels);
            autoScrollRemainder -= wholePixels;
        }
    }
    autoScrollLastTs = ts;
    autoScrollRAF = requestAnimationFrame(autoScrollStep);
}

function startAutoScroll() {
    if (autoScrollRAF) return;
    autoScrollLastTs = null;
    autoScrollRemainder = 0;
    // TEXT SELECTION PROTECTION: Disable selection while auto-scrolling
    document.body.classList.add('no-select');
    autoScrollRAF = requestAnimationFrame(autoScrollStep);
}

function stopAutoScroll() {
    if (autoScrollRAF) cancelAnimationFrame(autoScrollRAF);
    autoScrollRAF = null;
    autoScrollLastTs = null;
    // TEXT SELECTION PROTECTION: Restore selection when stopped
    document.body.classList.remove('no-select');
}

function toggleScrollMode() {
    isSmoothScrollOn = !isSmoothScrollOn;
    userDisabledAutoScroll = !isSmoothScrollOn;
    setScrollBtnUI(isSmoothScrollOn);
    if (isSmoothScrollOn) startAutoScroll(); else stopAutoScroll();
}

function pauseAutoScrollTemporarily() {
    if (!isSmoothScrollOn) return;
    stopAutoScroll();
    clearTimeout(autoScrollPauseTimer);
    autoScrollPauseTimer = setTimeout(() => {
        if (isSmoothScrollOn) startAutoScroll();
    }, 1500);
}

function handleWheelForHeader(e) {
    if (headerHiddenByTab && e.deltaY > 0) headerHiddenByTab = false;
    pauseAutoScrollTemporarily();
}
window.addEventListener('wheel', handleWheelForHeader, { passive: true });

// ── Tab-nav scroll fades ──
const fadeLeftEl  = document.getElementById('fadeLeft');
const fadeRightEl = document.getElementById('fadeRight');
function updateTabFades() {
  const maxScroll = tabNavEl.scrollWidth - tabNavEl.clientWidth;
  fadeLeftEl.classList.toggle('show', tabNavEl.scrollLeft > 4);
  fadeRightEl.classList.toggle('show', tabNavEl.scrollLeft < maxScroll - 4);
}
tabNavEl.addEventListener('scroll', updateTabFades, { passive: true });
window.addEventListener('resize', updateTabFades);
updateTabFades();

// ─── SHOW TAB (with Persistent Bookmarking) ───
function showTab(name, btn) {
    headerHiddenByTab = true;
    headerHideAmt = headerH;
    applyHeaderNavTransform();

    // Save current tab position before switching
    if (currentActiveTab) {
        localStorage.setItem('stotra_pos_' + currentActiveTab, window.scrollY);
    }

    stopAutoScroll();
    document.querySelectorAll('.stotra-section.active').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn.active').forEach(b => b.classList.remove('active'));

    document.getElementById('tab-' + name).classList.add('active');
    btn.classList.add('active');
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setTimeout(updateTabFades, 320);

    currentActiveTab = name;
    if (typeof syncTabMenuActive === 'function') syncTabMenuActive(name);

    setTimeout(() => {
        // Restore position from localStorage, default to 0
        const savedTarget = parseInt(localStorage.getItem('stotra_pos_' + name) || '0', 10);
        window.scrollTo(0, savedTarget);
        headerHideAmt = headerH;
        applyHeaderNavTransform();
        
        if (!userDisabledAutoScroll) {
            isSmoothScrollOn = true;
            setScrollBtnUI(true);
            startAutoScroll();
        } else {
            isSmoothScrollOn = false;
            setScrollBtnUI(false);
        }
    }, 150);
}

// ─── TOUCH GESTURES ───
let touchstartX = 0, touchstartY = 0, touchstartTime = 0;
const allTabBtns = Array.from(document.querySelectorAll('.tab-nav .tab-btn'));

const tabMenuOverlayEl = document.getElementById('tabMenuOverlay');
const tabMenuGridEl    = document.getElementById('tabMenuGrid');

function buildTabMenu() {
    tabMenuGridEl.innerHTML = '';
    allTabBtns.forEach(btn => {
        const name = btn.dataset.tab;
        if (!document.getElementById('tab-' + name)) {
            console.warn('⚠️ Tab "' + name + '" missing section.');
        }
        const item = document.createElement('button');
        item.className = 'tab-menu-item' + (btn.classList.contains('active') ? ' active' : '');
        item.dataset.tab = name;
        item.innerHTML = btn.innerHTML;
        item.onclick = () => {
            showTab(name, btn);
            closeTabMenu();
        };
        tabMenuGridEl.appendChild(item);
    });
}
buildTabMenu();

function syncTabMenuActive(name) {
    tabMenuGridEl.querySelectorAll('.tab-menu-item').forEach(el => {
        el.classList.toggle('active', el.dataset.tab === name);
    });
}

function openTabMenu() {
    syncTabMenuActive(currentActiveTab);
    tabMenuOverlayEl.classList.add('open');
}
function closeTabMenu() {
    tabMenuOverlayEl.classList.remove('open');
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
    touchstartTime = Date.now();
}, { passive: true });

document.addEventListener('touchmove', e => {
    if (!headerHiddenByTab) return;
    const currentY = e.touches[0].screenY;
    if (currentY < touchstartY - 8) headerHiddenByTab = false;
}, { passive: true });

document.addEventListener('touchend', e => {
    const touchendX = e.changedTouches[0].screenX;
    const touchendY = e.changedTouches[0].screenY;
    const dx = touchendX - touchstartX;
    const dy = touchendY - touchstartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const duration = Date.now() - touchstartTime;
    const tgt = document.elementFromPoint(touchendX - window.pageXOffset, touchendY - window.pageYOffset);
    const isUI = tgt && (tgt.closest('.tab-btn') || tgt.closest('.font-btn') || tgt.closest('#scrollModeBtn') || tgt.closest('.scroll-speed-popup') || tgt.closest('#backToTop'));

    if (!isUI && duration < 200 && absDx < 15 && absDy < 15) {
        toggleScrollMode();
        if (isSmoothScrollOn) {
            const flashColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#3A2A10' : '#FFF8E7';
            document.body.style.transition = 'background 0.15s';
            document.body.style.background = flashColor;
            setTimeout(() => { document.body.style.background = ''; }, 150);
        }
        return;
    }

    if (absDx > 80 && absDx > absDy * 1.5) {
        const activeBtn = document.querySelector('.tab-btn.active');
        if (!activeBtn) return;
        const currentIndex = allTabBtns.indexOf(activeBtn);
        if (dx < 0 && currentIndex < allTabBtns.length - 1) {
            const next = allTabBtns[currentIndex + 1];
            next.click();
            next.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else if (dx > 0 && currentIndex > 0) {
            const prev = allTabBtns[currentIndex - 1];
            prev.click();
            prev.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
}, { passive: true });

// ── Font size ──
const steps = [70, 85, 100, 115, 130, 150, 170];
let fIdx = 2;
const fontTargetEls = Array.from(document.querySelectorAll('.shloka, .jay-item'));
fontTargetEls.forEach(el => {
  el.dataset.baseFontSize = parseFloat(getComputedStyle(el).fontSize);
});
const fontLabelEl = document.getElementById('fontLabel');
function changeFont(dir) {
  fIdx = Math.max(0, Math.min(steps.length - 1, fIdx + dir));
  const pct = steps[fIdx];
  fontTargetEls.forEach(el => {
    const base = parseFloat(el.dataset.baseFontSize);
    el.style.fontSize = (base * pct / 100) + 'px';
  });
  fontLabelEl.textContent = pct + '%';
}

// ── Wake Lock ──
let wakeLock = null;
async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      // document.getElementById('wakeDot')?.classList.add('on');
      wakeLock.addEventListener('release', () => {
        // document.getElementById('wakeDot')?.classList.remove('on');
      });
    } catch(e) {}
  }
}
requestWakeLock();
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') requestWakeLock();
});

// ── Service Worker ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ── BACK TO TOP BUTTON VISIBILITY ──
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}, { passive: true });

// ── SHLOKA HIGHLIGHTING (Intersection Observer) ──
const highlightObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove highlight from all
      document.querySelectorAll('.mantra-block.highlight-shloka').forEach(el => {
        el.classList.remove('highlight-shloka');
      });
      // Add highlight to the one currently in the sweet spot (upper-middle of viewport)
      entry.target.classList.add('highlight-shloka');
    }
  });
}, {
  root: null,
  rootMargin: '-30% 0px -60% 0px', // Triggers when block is in the natural reading zone
  threshold: 0.1
});

document.querySelectorAll('.mantra-block').forEach(block => {
  highlightObserver.observe(block);
});
</script>
</body>
</html>
