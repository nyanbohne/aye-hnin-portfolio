// Project Data
const projects = {
  myeik: {
    title: "Myeik Resident",
    description:
      "A modern residential design featuring contemporary aesthetics with functional living spaces. This project showcases innovative architectural solutions that maximize natural light and create seamless indoor-outdoor connections.",
    renders: [
      "portfolios/Myeik Resident/Render Photo/1.jpg",
      "portfolios/Myeik Resident/Render Photo/2.jpg",
      "portfolios/Myeik Resident/Render Photo/3.jpg",
      "portfolios/Myeik Resident/Render Photo/4.jpg",
      "portfolios/Myeik Resident/Render Photo/5.jpg",
      "portfolios/Myeik Resident/Render Photo/6.jpg",
    ],
    drawings: [
      {
        src: "portfolios/Myeik Resident/Detail Dwg/01_G.F-1.png",
        label: "Ground Floor Plan",
      },
      {
        src: "portfolios/Myeik Resident/Detail Dwg/02_1st.F-1.png",
        label: "First Floor Plan",
      },
      {
        src: "portfolios/Myeik Resident/Detail Dwg/03_2nd.F-1.png",
        label: "Second Floor Plan",
      },
      {
        src: "portfolios/Myeik Resident/Detail Dwg/04_3rd.F-1.png",
        label: "Third Floor Plan",
      },
    ],
  },
  pinlone: {
    title: "Pinlone Resident",
    description:
      "An elegant residential project that combines traditional elements with modern design principles. The architecture emphasizes spacious interiors and harmonious integration with the surrounding environment.",
    renders: [
      "portfolios/Pinlone Resident/Render Photos/01.jpg",
      "portfolios/Pinlone Resident/Render Photos/02.jpg",
      "portfolios/Pinlone Resident/Render Photos/04.jpg",
      "portfolios/Pinlone Resident/Render Photos/05.jpg",
      "portfolios/Pinlone Resident/Render Photos/06.jpg",
      "portfolios/Pinlone Resident/Render Photos/14.jpg",
      "portfolios/Pinlone Resident/Render Photos/16.jpg",
    ],
    drawings: [],
  },
  usllf: {
    title: "USLLF's Resident",
    description:
      "A sustainable residential design that prioritizes eco-friendly materials and energy efficiency. This project demonstrates how modern architecture can be both beautiful and environmentally responsible.",
    renders: [
      "portfolios/USLLF's Resident/Render Photo/1.jpg",
      "portfolios/USLLF's Resident/Render Photo/2.jpg",
      "portfolios/USLLF's Resident/Render Photo/3.jpg",
      "portfolios/USLLF's Resident/Render Photo/4.jpg",
      "portfolios/USLLF's Resident/Render Photo/5.jpg",
      "portfolios/USLLF's Resident/Render Photo/6.jpg",
    ],
    drawings: [],
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

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const glassNav = navbar.querySelector(".glass-nav");
  if (window.scrollY > 100) {
    glassNav.classList.add("glass-nav-scrolled");
  } else {
    glassNav.classList.remove("glass-nav-scrolled");
  }
});

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
            <p class="text-white/70 max-w-2xl mx-auto">${
              project.description
            }</p>
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
  setTimeout(() => modal.classList.add("active"), 10);
  document.body.style.overflow = "hidden";
}

// Close Project Modal
function closeProject() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
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
