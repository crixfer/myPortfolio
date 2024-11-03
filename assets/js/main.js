/* ***** Mixitup Filter ***** */

let mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

/* Active Work */

const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/* ***** Testimonials Swiper ***** */

let swiper = new Swiper(".testimonial__container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/* ***** Contact Form ***** */

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    // add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    // shows message
    contactMessage.textContent = "Complete all the input fields";
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_czpoe6a",
        "template_mupxpij",
        "#contact-form",
        "KoG6bcnB4Bo58e7qc"
      )
      .then(() => {
        // shows message and add color, control + command + space opens emoji windows
        contactMessage.classList.add("color-light");
        contactMessage.textContent = "Message sent ✔︎";

        // removes message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      });
  }
};

if (contactForm) {
  contactForm.addEventListener("submit", sendEmail);
} else {
  console.error(
    "Formulario no encontrado: revisa que el ID 'contact-form' esté correcto."
  );
}
