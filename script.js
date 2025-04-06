// Navigation Menu Toggle
const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li")

burger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("active")

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ""
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
  })

  // Burger Animation
  burger.classList.toggle("toggle")
})

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active")
    burger.classList.remove("toggle")

    navLinks.forEach((link) => {
      link.style.animation = ""
    })
  })
})

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id")
    }
  })

  navItems.forEach((item) => {
    item.classList.remove("active")
    if (item.getAttribute("href").substring(1) === current) {
      item.classList.add("active")
    }
  })
})

// Scroll to top when page is refreshed
window.onbeforeunload = () => {
  window.scrollTo(0, 0)
}

// Form Submission
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For demonstration, we'll just log it and show an alert
    console.log("Form submitted:", { name, email, subject, message })

    // Show success message
    alert("Merci pour votre message ! Je vous répondrai dès que possible.")

    // Reset form
    contactForm.reset()
  })
}

// Skill bar animation on scroll
const skillBars = document.querySelectorAll(".skill-progress")

function showProgress() {
  skillBars.forEach((bar) => {
    const position = bar.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (position < screenPosition) {
      bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent
    }
  })
}

window.addEventListener("scroll", showProgress)
// Call once to set initial state
showProgress()

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for header height
        behavior: "smooth",
      })
    }
  })
})

