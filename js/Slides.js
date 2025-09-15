//Slides section

  const models = [
  {
    title: " Tenjiku e-commerce ",
    description: " A full-stack e-commerce order management system with JWT authentication and role-based access for Admin and User roles. Implemented clean layered architecture with MapStruct for DTO-entity conversion and modular service structure. Utilized Spring Scheduler to run automated background jobs (e.g., dynamic price updates). ",
    features: ["dynamic price updates", "JWT authentication and role-based access"],
    tech: ["Java", "SpringBoot", "SpringSecurity","Mysql","Maven", "JWT", "HTML+Bootstrap","Full-Stack","Js"],
    image: "portfolio-uploads/images/tenjiku-ecommerce.jpg",
    link: ""
  },
  {
  title: "Car Database Management System",
  description: " Designed and implemented a Car Database Management System using Java Servlets, JSP, JPA (Hibernate), and Maven. persistent database layer (JPA/Hibernate). Implemented full CRUD workflows with Servlets + JSP forms.",
  features: ["Create, Read, Update, Delete (CRUD) Car entity.", "Uses JSP + Servlets instead of Spring Boot/modern frameworks.", ""],
  tech: ["Java", "JSP + HTML + CSS", "Mysql","Maven","Full-Stack"],
  image: "portfolio-uploads/images/carDB.jpg",
  link: "" 
  }
];

//  function renderCarousel() {
//   const carouselInner = document.getElementById("carouselInner");
//   carouselInner.innerHTML = "";

//   models.forEach((model, index) => {
//     const activeClass = index === 0 ? "active" : "";

//     // Image section (clickable if link exists)
//     const imageHTML = model.image
//       ? model.link
//         ? `<a href="${model.link}" target="_blank">
//              <img src="${model.image}" class="d-block w-100 carousel-img" alt="${model.title}">
//            </a>`
//         : `<img src="${model.image}" class="d-block w-100 carousel-img" alt="${model.title}">`
//       : "";

//     // Tech stack line
//     const techHTML = model.tech?.length
//       ? `<div class="d-flex flex-wrap gap-1 mb-2 mt-auto">  ${model.tech.map(t => `<span class="badge rounded-pill bg-primary text-white">${t}</span>`).join("")} </div>`
//       : "";

//     // "View Details" button if link exists
//     const linkHTML = model.link
//       ? `<a href="${model.link}" target="_blank" class="btn btn-outline-primary btn-sm mt-2">View Details →</a>`
//       : "";

//     const slide = document.createElement("div");
//     slide.className = `carousel-item ${activeClass}`;

//     slide.innerHTML = `
//       <div class="card bg-transparent text-white border-0 shadow-lg overflow-hidden">
//         ${imageHTML}
//         <div class="card-body p-4">
//           <h3 class="card-title text-primary">${model.title}</h3>
//           <p class="card-text text-light">${model.description}</p>
//           ${techHTML}
//           ${linkHTML}
//         </div>
//       </div>
//     `;

//     carouselInner.appendChild(slide);
//   });
// }

// // // Call it once page loads
// renderCarousel();
// // ✅ Automatically run on page load
// window.addEventListener("DOMContentLoaded", renderCarousel);
// Function to render carousel dynamically
function renderCarousel() {
  const carouselInner = document.getElementById("carouselInner");
  if (!carouselInner) return; // prevent errors if element not found
  carouselInner.innerHTML = "";

  models.forEach((model, index) => {
    const activeClass = index === 0 ? "active" : "";

    const imageHTML = model.image
      ? model.link
        ? `<a href="${model.link}" target="_blank">
             <img src="${model.image}" class="d-block w-100 carousel-img" alt="${model.title}">
           </a>`
        : `<img src="${model.image}" class="d-block w-100 carousel-img" alt="${model.title}">`
      : "";

    const techHTML = model.tech?.length
      ? `<div class="d-flex flex-wrap gap-1 mb-2 mt-auto">
           ${model.tech
             .map(t => `<span class="badge rounded-pill bg-primary text-white">${t}</span>`)
             .join("")}
         </div>`
      : "";

    const linkHTML = model.link
      ? `<a href="${model.link}" target="_blank" class="btn btn-outline-primary btn-sm mt-2">View Details →</a>`
      : "";

    const slide = document.createElement("div");
    slide.className = `carousel-item ${activeClass}`;

    slide.innerHTML = `
      <div class="card bg-transparent text-white border-0 shadow-lg overflow-hidden">
        ${imageHTML}
        <div class="card-body p-4">
          <h3 class="card-title text-primary">${model.title}</h3>
          <p class="card-text text-light">${model.description}</p>
          ${techHTML}
          ${linkHTML}
        </div>
      </div>
    `;

    carouselInner.appendChild(slide);
  });
}

// ✅ Run only when DOM is ready
document.addEventListener("DOMContentLoaded", renderCarousel);
