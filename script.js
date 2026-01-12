
// FAQ Accordion
const faq = document.querySelector("[data-accordion]");
if (faq) {
  const questions = faq.querySelectorAll(".faq-q");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      // close all
      questions.forEach((q) => {
        q.setAttribute("aria-expanded", "false");
        const a = q.nextElementSibling;
        if (a) a.hidden = true;
      });

      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        if (answer) answer.hidden = false;
      }
    });
  });
}
