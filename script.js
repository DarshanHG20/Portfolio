/* =====================
   PORTFOLIO DATA
===================== */
const portfolio = {
  name: "Darshu",
  title: "Full Stack Developer & UI Designer",
  tagline: "Building powerful digital experiences",
  intro: "I am a passionate full stack developer and UI designer. I enjoy building responsive, interactive, and modern web applications that provide seamless user experiences. I love solving problems with code and learning new technologies to stay up-to-date in the fast-paced web development world.",
  skills: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Git", "React", "Bootstrap"],
  projects: [
    { name: "Business Dashboard", desc: "Analytics dashboard UI with charts and reports" },
    { name: "E-Commerce Platform", desc: "Secure online shopping system with payment integration" },
    { name: "Hospital Management System", desc: "Web application to manage patients, appointments, and staff" }
  ],
  education: "BSC Computer Science | 2022-2025<br>MCA | 2025–2027",
  email: "darshuhg07@gmail.com",
  phone: "+91 6363785599",
  photo: "port.jpg"
};

/* =====================
   LOGIN FUNCTIONALITY
===================== */
function login() {
    const user = document.getElementById("username")?.value;
    const pass = document.getElementById("password")?.value;
    const errorMsg = document.getElementById("error-msg");

    const validUser = "darshu";
    const validPass = "1234";

    if(user === validUser && pass === validPass) {
        window.location.href = "home.html";
    } else if(errorMsg) {
        errorMsg.textContent = "Invalid username or password!";
    }
}

/* =====================
   DOM ELEMENTS
===================== */
const profilePic = document.querySelector(".profile-pic");
const nameEl = document.getElementById("name");
const titleEl = document.getElementById("title");
const taglineEl = document.getElementById("tagline");
const introText = document.getElementById("introText");
const skillsEl = document.getElementById("skills");
const projectsEl = document.getElementById("projects");
const educationEl = document.getElementById("education");
const emailEl = document.getElementById("email");
const contactBtn = document.querySelector(".btn");
const contactForm = document.getElementById("contactForm");

/* =====================
   LOAD PORTFOLIO CONTENT
===================== */
if(profilePic) profilePic.src = portfolio.photo;
if(nameEl) nameEl.innerText = portfolio.name;
if(titleEl) titleEl.innerText = portfolio.title;
if(taglineEl) taglineEl.innerText = portfolio.tagline;
if(introText) introText.innerText = portfolio.intro;
if(educationEl) educationEl.innerHTML = portfolio.education;
if(emailEl) emailEl.innerHTML = `Email: ${portfolio.email} <br> Phone: ${portfolio.phone}`;

if(skillsEl) {
    skillsEl.innerHTML = portfolio.skills.map(skill => `<div class="card">${skill}</div>`).join("");
}

if(projectsEl) {
    projectsEl.innerHTML = portfolio.projects.map(p => `
        <div class="card">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
        </div>
    `).join("");
}

/* =====================
   CONTACT FORM HANDLER
===================== */
if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formMsg = document.getElementById("formMsg");
        formMsg.textContent = "Thank you! Your message has been sent.";
        formMsg.style.color = "#00ffcc";
        contactForm.reset();
    });
}

/* =====================
   SMOOTH SCROLL TO CONTACT
===================== */
if(contactBtn) {
    contactBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        if(contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    });
}

/* =====================
   STAR/GALAXY ANIMATION
===================== */
const canvas = document.getElementById("galaxy");
if(canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({length: 300}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.2,
        speed: Math.random() * 0.5 + 0.05,
        alpha: Math.random() * 0.8 + 0.2
    }));

    function animateStars() {
        ctx.fillStyle = "#050812";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.y += star.speed;
            if(star.y > canvas.height) star.y = 0;

            star.alpha += (Math.random() - 0.5) * 0.05;
            star.alpha = Math.min(Math.max(star.alpha, 0.2), 1);

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
            ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
