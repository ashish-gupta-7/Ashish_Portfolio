// Typing Effect Function
function typeEffect(selector, text, speed = 100) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.innerHTML = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text[index++];
            setTimeout(type, speed);
        }
    }

    type();
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    typeEffect(".hero h1 span", "Ashish Gupta");

    // Smooth Scroll for All Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Fade-in on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;
    const lightIcon = "images/th.jpeg";
    const darkIcon = "images/fhfj.jpeg";

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeIcon.src = lightIcon;
    } else {
        body.classList.add("dark-mode");
        themeIcon.src = darkIcon;
    }

    themeToggle.addEventListener("click", () => {
        const isDark = body.classList.contains("dark-mode");
        body.classList.replace(isDark ? "dark-mode" : "light-mode", isDark ? "light-mode" : "dark-mode");
        themeIcon.src = isDark ? lightIcon : darkIcon;
        localStorage.setItem("theme", isDark ? "light" : "dark");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-btn");
    const menuOverlay = document.getElementById("menu-overlay");
  
    menuToggle.addEventListener("click", () => {
      menuOverlay.classList.add("show");
    });
  
    closeBtn.addEventListener("click", () => {
      menuOverlay.classList.remove("show");
    });
  
    // Called by inline onclick from <a> links
    window.closeMenu = () => {
      menuOverlay.classList.remove("show");
    };
  
    // Optional: close when clicking outside content
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("show");
      }
    });
  });

  // Scroll to top on page reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
 
// Add this at the bottom of script.js or inside DOMContentLoaded
document.addEventListener("mousemove", function (e) {
    const header = document.querySelector("header");
    if (e.clientY < 50) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  });
  
