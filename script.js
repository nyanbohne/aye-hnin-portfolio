// Project Data
const projects = {
  myeik: {
    title: "Myeik Residence",
    firm: "Light+Square",
    firmUrl: "https://lightplussquare.com/",
    location: "Myeik, Tanintharyi Region",
    status: "Completed",
    sqft: "3,500 sq ft",
    description:
      "A modern residential design featuring contemporary aesthetics with functional living spaces. This project showcases innovative architectural solutions that maximize natural light and create seamless indoor-outdoor connections.",
    renders: [
      "portfolios/Myeik Residence/Render Photo/1.jpg",
      "portfolios/Myeik Residence/Render Photo/2.jpg",
      "portfolios/Myeik Residence/Render Photo/3.jpg",
      "portfolios/Myeik Residence/Render Photo/4.jpg",
      "portfolios/Myeik Residence/Render Photo/5.jpg",
      "portfolios/Myeik Residence/Render Photo/6.jpg",
    ],
    drawings: [
      {
        src: "portfolios/Myeik Residence/Detail Dwg/01_G.F-1.png",
        label: "Ground Floor Plan",
      },
      {
        src: "portfolios/Myeik Residence/Detail Dwg/02_1st.F-1.png",
        label: "First Floor Plan",
      },
      {
        src: "portfolios/Myeik Residence/Detail Dwg/03_2nd.F-1.png",
        label: "Second Floor Plan",
      },
      {
        src: "portfolios/Myeik Residence/Detail Dwg/04_3rd.F-1.png",
        label: "Third Floor Plan",
      },
    ],
  },
  pinlone: {
    title: "Pinlone Residence",
    firm: "Light+Square",
    firmUrl: "https://lightplussquare.com/",
    location: "Yangon, Myanmar",
    status: "Under Construction",
    sqft: "4,200 sq ft",
    description:
      "An elegant residential project that combines traditional elements with modern design principles. The architecture emphasizes spacious interiors and harmonious integration with the surrounding environment.",
    renders: [
      "portfolios/Pinlone Residence/Render Photo/01.jpg",
      "portfolios/Pinlone Residence/Render Photo/02.jpg",
      "portfolios/Pinlone Residence/Render Photo/04.jpg",
      "portfolios/Pinlone Residence/Render Photo/05.jpg",
      "portfolios/Pinlone Residence/Render Photo/06.jpg",
      "portfolios/Pinlone Residence/Render Photo/14.jpg",
      "portfolios/Pinlone Residence/Render Photo/16.jpg",
      "portfolios/Pinlone Residence/Render Photo/17.jpg",
      "portfolios/Pinlone Residence/Render Photo/18.jpg",
    ],
    drawings: [
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/01_G.Fl-1.png",
        label: "Ground Floor Plan",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/02_1st.Fl-1.png",
        label: "First Floor Plan",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/03_2nd.Fl-1.png",
        label: "Second Floor Plan",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/04_3rd.Fl-1.png",
        label: "Third Floor Plan",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/05_Roof Plan-1.png",
        label: "Roof Plan",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/06_Section A_A-1.png",
        label: "Section A-A",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/07_Section-1.png",
        label: "Section",
      },
      {
        src: "portfolios/Pinlone Residence/Detail Dwg/08_Stair 01-1.png",
        label: "Stair Detail",
      },
    ],
  },
  ummh: {
    title: "UMMH's Residence",
    firm: "Light+Square",
    firmUrl: "https://lightplussquare.com/",
    location: "Mandalay, Myanmar",
    status: "Completed",
    sqft: "5,000 sq ft",
    description:
      "A thoughtfully designed residence that balances modern aesthetics with practical living requirements. This project features multiple proposal variations to meet diverse client preferences.",
    renders: [
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.1.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.2.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.3.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.4.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.5.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.6.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.7.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.8.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.9.jpg",
      "portfolios/UMMH's Residence/Render Photo/Proposal 1.10.jpg",
    ],
    drawings: [
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/01-1.png",
        label: "Floor Plan 1",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/02-1.png",
        label: "Floor Plan 2",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/03-1.png",
        label: "Floor Plan 3",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/04-1.png",
        label: "Floor Plan 4",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/05-1.png",
        label: "Floor Plan 5",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/06-1.png",
        label: "Floor Plan 6",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/07-1.png",
        label: "Floor Plan 7",
      },
      {
        src: "portfolios/UMMH's Residence/Detail Dwg/08-1.png",
        label: "Floor Plan 8",
      },
    ],
  },
  usllf: {
    title: "USLLF's Residence",
    firm: "Light+Square",
    firmUrl: "https://lightplussquare.com/",
    location: "Yangon, Myanmar",
    status: "Under Construction",
    sqft: "4,800 sq ft",
    description:
      "A sustainable residential design that prioritizes eco-friendly materials and energy efficiency. This project demonstrates how modern architecture can be both beautiful and environmentally responsible.",
    renders: [
      "portfolios/USLLF's Residence/Render Photo/1.jpg",
      "portfolios/USLLF's Residence/Render Photo/2.jpg",
      "portfolios/USLLF's Residence/Render Photo/3.jpg",
      "portfolios/USLLF's Residence/Render Photo/4.jpg",
      "portfolios/USLLF's Residence/Render Photo/5.jpg",
      "portfolios/USLLF's Residence/Render Photo/6.jpg",
    ],
    drawings: [
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-2.jpg",
        label: "Floor Plan 1",
      },
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-3.jpg",
        label: "Floor Plan 2",
      },
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-4.jpg",
        label: "Floor Plan 3",
      },
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-5.jpg",
        label: "Floor Plan 4",
      },
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-6.jpg",
        label: "Floor Plan 5",
      },
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-11.jpg",
        label: "Section 1",
      },
      {
        src: "portfolios/USLLF's Residence/Detail Dwg/USLLF_s Residence-12.jpg",
        label: "Section 2",
      },
    ],
  },
};

let currentImages = [];
let currentImageIndex = 0;

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("active");
  });
});

// Navbar scroll effect and auto-hide
let navbarTimeout;
const navbar = document.getElementById("navbar");

function showNavbar() {
  navbar.classList.remove("nav-hidden");
}

function hideNavbar() {
  // Only hide if scrolled past hero section
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("nav-hidden");
  }
}

function resetNavbarTimer() {
  showNavbar();
  clearTimeout(navbarTimeout);
  navbarTimeout = setTimeout(hideNavbar, 1500);
}

window.addEventListener("scroll", () => {
  const glassNav = navbar.querySelector(".glass-nav");
  if (window.scrollY > 100) {
    glassNav.classList.add("glass-nav-scrolled");
  } else {
    glassNav.classList.remove("glass-nav-scrolled");
  }
  resetNavbarTimer();
});

window.addEventListener("mousemove", () => {
  resetNavbarTimer();
});

// Start the timer on page load
resetNavbarTimer();

// Open Project Modal
function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");

  currentImages = [...project.renders, ...project.drawings.map((d) => d.src)];

  let drawingsHTML = "";
  if (project.drawings.length > 0) {
    drawingsHTML = `
            <div class="mt-16">
                <h3 class="text-2xl font-display font-semibold text-white mb-6">Technical Drawings</h3>
                <div class="drawings-grid">
                    ${project.drawings
                      .map(
                        (drawing, index) => `
                        <div class="drawing-item" onclick="openLightbox(${
                          project.renders.length + index
                        })">
                            <img src="${drawing.src}" alt="${
                          drawing.label
                        }" loading="lazy">
                            <p>${drawing.label}</p>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  content.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">${
              project.title
            }</h2>
            <a href="${
              project.firmUrl
            }" target="_blank" class="inline-flex items-center justify-center gap-2 mb-4 opacity-80 hover:opacity-100 transition">
                <span class="text-sm text-white/70">Designed @</span>
                <img src="images/lightplussquare-logo.png" alt="${
                  project.firm
                }" class="h-6">
            </a>
            <p class="text-white/70 max-w-2xl mx-auto mb-6">${
              project.description
            }</p>
            <div class="flex flex-wrap justify-center gap-6 text-sm">
                <div class="flex items-center gap-2 text-white/80">
                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>${project.location}</span>
                </div>
                <div class="flex items-center gap-2 text-white/80">
                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>${project.status}</span>
                </div>
                <div class="flex items-center gap-2 text-white/80">
                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                    <span>${project.sqft}</span>
                </div>
            </div>
        </div>
        
        <div>
            <h3 class="text-2xl font-display font-semibold text-white mb-6">Architectural Renders</h3>
            <div class="gallery-grid">
                ${project.renders
                  .map(
                    (img, index) => `
                    <div class="gallery-item" onclick="openLightbox(${index})">
                        <img src="${img}" alt="${project.title} Render ${
                      index + 1
                    }" loading="lazy">
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
        
        ${drawingsHTML}
    `;

  modal.classList.remove("hidden");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Project Modal
function closeProject() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Lightbox Functions
function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = currentImages[currentImageIndex];
  lightbox.classList.remove("hidden");
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  lightbox.classList.add("hidden");
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  document.getElementById("lightbox-img").src =
    currentImages[currentImageIndex];
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById("lightbox-img").src =
    currentImages[currentImageIndex];
}

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");
  const modal = document.getElementById("project-modal");

  if (lightbox.classList.contains("active")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  } else if (modal.classList.contains("active")) {
    if (e.key === "Escape") closeProject();
  }
});

// Contact Form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1500);
  });

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe project cards and stats
document.querySelectorAll(".project-card, .text-center.p-8").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Image lazy loading with fade effect
document.querySelectorAll("img").forEach((img) => {
  if (img.complete) {
    img.classList.add("img-loaded");
  } else {
    img.classList.add("img-loading");
    img.addEventListener("load", function () {
      this.classList.remove("img-loading");
      this.classList.add("img-loaded");
    });
  }
});
