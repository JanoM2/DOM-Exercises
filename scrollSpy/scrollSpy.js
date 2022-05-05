document.addEventListener("DOMContentLoaded", () => {
  const $section = document.querySelectorAll("section");
  const call = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document.querySelector(`a[href="#${id}"]`).classList.add("active");
      } else {
        document.querySelector(`a[href="#${id}"]`).classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(call, {
    threshold: [0.5, 0.4],
  });

  $section.forEach((el) => {
    observer.observe(el);
  });
});
