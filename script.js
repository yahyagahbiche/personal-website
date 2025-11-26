document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. DARK MODE LOGIC ---
  const checkbox = document.getElementById('themeCheckbox');
  const body = document.body;
  const label = document.getElementById('toggleLabel');

  // Check Local Storage on Load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    checkbox.checked = true;
    label.textContent = "Dark";
  }

  // Listen for Switch Change
  if(checkbox) {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        body.classList.add('dark-mode');
        label.textContent = "Dark";
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        label.textContent = "Light";
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // --- 2. MOBILE MENU ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if(menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // --- 3. SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement){
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu if open
        navLinks.classList.remove("show");
      }
    });
  });

  // --- 4. FADE-IN ANIMATIONS ---
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // --- 5. WORLD MAP ---
  // Only initialize if the map container exists
  if(document.getElementById('map')) {
    const map = L.map('map', {scrollWheelZoom: false}).setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const cities = [
      { name: "Seattle, USA", coords: [47.6062, -122.3321] },
      { name: "Portland, USA", coords: [45.5051, -122.6750] },
      { name: "San Jose, USA", coords: [37.3382, -121.8863] },
      { name: "New York, USA", coords: [40.7128, -74.0060] },
      { name: "Washington DC, USA", coords: [38.9072, -77.0369] },
      { name: "Miami, USA", coords: [25.7617, -80.1918] },
      { name: "Fort Lauderdale, USA", coords: [26.1224, -80.1373] },
      { name: "Honolulu, Hawaii, USA", coords: [21.3069, -157.8583] },
      { name: "Chicago, USA", coords: [41.8781, -87.6298] },
      { name: "Detroit, USA", coords: [42.3314, -83.0458] },
      { name: "Austin, USA", coords: [30.2672, -97.7431] },
      { name: "North Carolina, USA", coords: [35.7596, -79.0193] },
      { name: "Utah, USA", coords: [39.3210, -111.0937] },
      { name: "Vermont, USA", coords: [44.5588, -72.5778] },
      { name: "Frankfort, Germany", coords: [50.0379, 8.5622] },
      { name: "Tunis, Tunisia", coords: [36.8065, 10.1815] },
      { name: "Sousse, Tunisia", coords: [35.8256, 10.6360] },
      { name: "Bizerte, Tunisia", coords: [37.2746, 9.8739] },
      { name: "Tabarka, Tunisia", coords: [36.9541, 8.7585] },
      { name: "Vancouver, Canada", coords: [49.2827, -123.1207] },
      { name: "Montreal, Canada", coords: [45.5017, -73.5673] },
      { name: "Quebec City, Canada", coords: [46.8139, -71.2080] },
      { name: "Doha (Qatar Airport)", coords: [25.276987, 51.520008] }
    ];

    cities.forEach(city => {
      L.marker(city.coords)
        .addTo(map)
        .bindPopup(`<b>${city.name}</b>`);
    });
  }
});