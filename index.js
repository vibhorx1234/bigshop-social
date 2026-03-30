/**
 * index.js — Big Shop LG Electronics Social Links Page
 * Express server: serves static files + renders the HTML page
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/style.css', express.static(path.join(__dirname, 'style.css')));

// ── Links data ────────────────────────────────────────────────────────────────
// Icons are stroke-based (fill="none", stroke="white") so they're always
// visible against the maroon box background — no CSS override conflicts.
const links = [
    {
        id: 'google',
        label: 'Google Review',
        href: 'https://www.google.com/search?client=ms-android-samsung-ss&hs=G2Xp&sca_esv=f42ba0bce4300926&sxsrf=ANbL-n66e1PAic6Xf5eTLFKU3kZscC2kQQ:1773899030744&q=lg+big+shop+jaipur+reviews&uds=ALYpb_nLr9JuasrIVwXxlPpyn5hHlclTbNTJIk06biG_VMrFLByLljB2sEdMisGWDyMhDhAlXAUdJ5I0ntq7F6dJ3c3O94LvZH0oOgndBhc16UoIjejl6a8aViYPZ84ogB_wciai5ggrMndLBV5dpInNknU5lE95QAcKS7M_PzQ3mFPEK7PXemAOk09_sC64w1smZ2cjOYb-SBGPss42FoyOVNCil7K_DB4-BhFH5UcWBgIJp5SJmTu9TnzsKPMQpC_IvIY4KREWjVHfnMNbYqALJAXeTlLaAbdsgmeq-Yz0E8lj4UBLAxUDvYv6jndKINaF7rzX4M-5CW7Ah_nNzAQkcSqjs8Gx75-5B9l7_oprIiHUcrDMfMHoLamrbBpIsJwdlv2xrEGHZBIqp-FmUD5WtPLHLpkcJKAtZF3GZTWdHAal6oDP14dqqXalL8gIKrjT21rTklCP456kX6vKXmLR7cQ3kJoE5Q&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWWND5iCEFaL71vbKFGDR91TK4KpYKI1860lOhn8I0_vCzoSX6FzUgZSwoYhYRQOScPUnp_2aJUW4x3R2O3izzpn2JmwkxWTNTm3WdqHKLWnY4kvJrA%3D%3D&sa=X&ved=2ahUKEwiA8ODsoKuTAxWqxDgGHY0ODd0Qk8gLegQIGBAB&ictx=1&stq=1&cs=1&lei=Fo27aYCNLaqJ4-EPjZ206A0#ebo=1',
        icon: `<svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="24" height="24" stroke="none">
    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#ffffff"/>
    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#ffffff"/>
    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#ffffff"/>
    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#ffffff"/>
  </svg>`
    },
    {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/bigshoplgelectronics?igsh=N2M4ZXhudmdhNGZ0',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" stroke="none"/>
    </svg>`
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        href: 'https://wa.me/919116666673',
        icon: `<svg viewBox="0 0 32 32" fill="#ffffff" stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"/>
  </svg>`
    },
    {
        id: 'facebook',
        label: 'Facebook',
        href: 'https://www.facebook.com/people/Big-Shop-LG-Electronics/61579468580867/?mibextid=wwXIfr&rdid=Nc42AHcODplfkdJF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18TNEkS9Gw%2F%3Fmibextid%3DwwXIfr',
        icon: `<svg viewBox="329 7239 10 20" fill="#ffffff" stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"/>
  </svg>`
    },
];

const arrowSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
  <polyline points="9 18 15 12 9 6" stroke="#bbbbbb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function renderLinks() {
    return links.map(link => `
    <a class="link-card" data-platform="${link.id}" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
      <div class="link-card__icon-wrap">
        <div class="link-card__icon-box">${link.icon}</div>
      </div>
      <span class="link-card__label">${link.label}</span>
      <span class="link-card__arrow">${arrowSVG}</span>
    </a>
  `).join('');
}

function renderHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#E8002D" />
  <meta name="description" content="Big Shop – LG Electronics Store, Jaipur. Find us on Google, Instagram, WhatsApp & Facebook." />
  <meta property="og:title" content="Big Shop – LG Electronics Store" />
  <meta property="og:description" content="Connect with us on social media. LG Electronics Store in Jaipur." />
  <meta property="og:image" content="/public/images/store-banner.jpg" />
  <meta property="og:type" content="website" />
  <title>Big Shop – LG Electronics Store</title>
  <link rel="stylesheet" href="/style.css" />
  <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
</head>
<body>
<div class="page-wrapper">

  <!-- HERO -->
  <div class="hero">
    <img class="hero__img" src="/public/images/store-banner.jpeg" alt="Big Shop LG Electronics Store Front" onerror="this.style.display='none'" />
    <div class="hero__overlay"></div>
  </div>

  <!-- PROFILE -->
  <div class="profile">
    <div class="profile__avatar-wrap">
      <img
        class="profile__avatar"
        src="/public/images/lg-logo.png"
        alt="LG Logo"
        onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="profile__avatar-fallback" aria-hidden="true">
        <svg viewBox="0 0 80 80" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="38" fill="#111"/>
          <text x="12" y="54" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#fff">LG</text>
        </svg>
      </div>
    </div>
    <h1 class="profile__name">Big Shop</h1>
    <p class="profile__subtitle">LG Electronics Store</p>

    <!-- ICON ROW -->
    <div class="icon-row">
      <a class="icon-btn" href="tel:+919116666673" aria-label="Call us">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 12a19.79 19.79 0 01-3-8.57A2 2 0 012.82 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.37a16 16 0 006.72 6.72l1.23-1.23a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </a>
      <a class="icon-btn" href="mailto:bigshoplgelectronics@gmail.com" aria-label="Email us">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>
      <a class="icon-btn" href="http://bigshopjaipur.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit website">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      </a>
      <a class="icon-btn" href="https://www.google.com/maps/place/2,+LG+Big+Shop,+shriram+colony,+B2+Bypass,+Tonk+Rd,+opposite+Fortune+Park+Bella+Casa,+Jai+Jawan-2,+Choti+Chopad,+Sitabari,+Durgapura,+Jaipur,+Rajasthan+302018/data=!4m2!3m1!1s0x396db5efbc94f641:0xb8af80904d2c23bf!18m1!1e1?utm_source=mstt_1&entry=gps" target="_blank" rel="noopener noreferrer" aria-label="Get directions">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </a>
    </div>
  </div>

  <!-- LINK CARDS -->
  <div class="links">
    ${renderLinks()}
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    © ${new Date().getFullYear()} Big Shop · LG Electronics Store · Jaipur
  </footer>

</div>
</body>
</html>`;
}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(renderHTML());
});

app.use((req, res) => { res.redirect('/'); });

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`✅  Big Shop Links running at http://localhost:${PORT}`);
    });
}

module.exports = app;