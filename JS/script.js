/* =========================
   ANIMAÇÃO AO SCROLL
========================= */

const elements = document.querySelectorAll(
    ".feature-card, .about-grid, .dashboard-preview"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =========================
   CLASSE SHOW
========================= */

const style = document.createElement("style");

style.innerHTML = `

    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(style);


/* =========================
   EFEITO DO MOUSE
========================= */

const heroGlow =
    document.querySelector(".hero-glow");


document.addEventListener("mousemove", (event) => {

    if (!heroGlow) return;

    const x =
        (event.clientX / window.innerWidth - .5) * 40;

    const y =
        (event.clientY / window.innerHeight - .5) * 40;

    heroGlow.style.transform =
        `translate(${x}px, ${y}px)`;

});