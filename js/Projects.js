// Projects section
const projects = [
   {
        title: " Tenjiku e-commerce ",
        description: " A full-stack e-commerce order management system with JWT authentication and role-based access for Admin and User roles. Implemented clean layered architecture with MapStruct for DTO-entity conversion and modular service structure. Utilized Spring Scheduler to run automated background jobs (e.g., dynamic price updates). ",
        features: ["dynamic price updates", "JWT authentication and role-based access"],
        tech: ["Java", "SpringBoot", "SpringSecurity","Mysql","Maven", "JWT", "HTML+Bootstrap","Full-Stack","Js"],
        image: "portfolio-uploads/images/projects/tenjiku-ecommerce.png",
        link: ""
    },{
        title: "Car Database Management System",
        description: " Designed and implemented a Car Database Management System using Java Servlets, JSP, JPA (Hibernate), and Maven. persistent database layer (JPA/Hibernate). Implemented full CRUD workflows with Servlets + JSP forms.",
        features: ["Create, Read, Update, Delete (CRUD) Car entity.", "Uses JSP + Servlets instead of Spring Boot/modern frameworks.", ""],
        tech: ["Java", "JSP + HTML + CSS", "Mysql","Maven","Full-Stack"],
        image: "portfolio-uploads/images/projects/carDB.png",
        link: ""
    },{
        title: "User-service-management-system",
        description: "A backend system for managing users with secure authentication and role-based access, built with Spring Boot, REST APIs, and Hibernate. Developed RESTful APIs for user CRUD operations.Implemented JWT authentication and role-based authorization. Designed a layered architecture (Controller, Service, Repository). Used Spring Data JPA with MySQL for persistence. Integrated input validation and exception handling for robust APIs",
        features: ["Create, Read, Update, Delete (CRUD) users.", "Authentication & Authorization User using JWT.", "Role-based access (Admin, User)."],
        tech: ["Java", "SpringBoot", "SpringSecurity","Mysql","Maven", "JWT","js","React"],
        image: "portfolio-uploads/images/projects/user-managementsystem.png",
        link: ""
    },{
        title: " Movie ticket booking system",
        description: " A secure and scalable RESTful API for a movie ticket booking platform using Java 17 and Spring Boot. Implemented JWT-based authentication and role-based access control for users and theater owners via Spring Security.",
        features: ["seats locking", "secure and scalable"],
        tech: ["Java", "SpringBoot", "SpringSecurity","Mysql","Maven", "JWT", "HTML+Bootstrap"],
        image: "",
        link: ""
    },{
        title: " CountryQuizWebApp-leaderboard ",
        description: " Developed a quiz application with a leaderboard system using a microservices architecture. Designed and implemented Quiz Service for delivering questions and managing answers. Built a Leaderboard Service to store and rank player scores. Used Spring Boot microservices with REST APIs for inter-service communication. Integrated database persistence (JPA/Hibernate + MySQL) for scalable storage.Designed a modular architecture enabling independent deployment of services. ",
        features: [" Stores and retrive user scores accoding to userId", " retrives Overall leaderboard & Today's leaderboard "],
        tech: ["Python", "FastApi", "Sqlalchemy","Uvicorn","pydantic",],
        image: "",
        link: ""
    },{
        title: " Appointment-service ",
        description: "A backend service for managing appointments, built with Spring Boot, REST APIs, and Hibernate. Implemented appointment booking, updating, cancellation, and retrieval APIs. Designed a layered architecture (Controller, Service, Repository).Used Spring Data JPA with MySQL for persistence. Added date/time validation and conflict detection for reliable scheduling. Implemented global exception handling for consistent API responses.",
        features: ["Users can Book New/Update/Cancel appointments.","View appointments by user/service/date.","Role-based access (Admin/User/Service Provider).", "Prevent overlapping bookings & Validate appointment date/time"],
        tech: ["Java", "SpringBoot", "SpringSecurity","Mysql","Maven"],
        image: "",
        link: ""
    },{
        title: " Auguring the Hereditary Chaos in the Way of Parallelism ",
        description: " “Auguring the Hereditary Chaos in the Way of Parallelism” Random Forest–based genetic disorder prediction model to identify hereditary genetic disorders. Designed and trained a model that analyzes maternal and paternal gene contributions. Reduced overfitting using Random Forest ensemble learning. Built a Flask-based API and React dashboard for input and predictions. Enabled genetic disorder prognosis with probabilistic risk analysis for healthcare applications. Implemented scalable architecture with clean modular code.  Data → Model → API → UI → Predictions .",
        features: ["Considers both maternal and paternal gene contributions", "Extracts features like allele combinations, dominance/recessive factors", "Aggregates multiple decision trees → reduces overfitting.","Outputs probabilities for different genetic disorders.","Supports multi-trait hereditary pattern detection.","Doctors/researchers can input genetic traits."],
        tech: ["python", "FastAPI", "Machine Learning","MySQL","HTML+Bootstrap+Js"],
        image: "",
        link: ""
    },{
        title: " Inventory Management System for Retailers ",
        description: "Built a digital inventory management system that automates stock monitoring, reorders, and multi-location control. Implemented real-time stock tracking and low-stock alerts. Integrated with POS and e-commerce platforms for seamless synchronization. Designed multi-location inventory control to manage warehouses and stores centrally. Built analytics dashboards to forecast sales and optimize inventory policies. Applied a modular architecture with clean code practices for scalability.",
        features: ["Tracks stock levels in real time.", "Updates inventory based on sales.", " Centralized inventory view across multiple branches/warehouses."],
        tech: ["Java", "SpringBoot", "SpringSecurity","Mysql","Maven", "JWT", "HTML+Bootstrap+Js"],
        image: "",
        link: ""
    }
];

// Render portfolio grid
const grid = document.getElementById("portfolioGrid");

function renderProjects(filter = "All") {
    grid.innerHTML = "";
    projects
        .filter(p => filter === "All" || p.tech.includes(filter))
        .forEach((project, index) => {
            const col = document.createElement("div");
            col.className = "col-12 col-md-6 col-lg-4 mb-4";

            // ✅ Skip image if not provided
            const imageHTML = project.image
                ? `<img src="${project.image}" class="card-img-top img-fluid project-img" alt="${project.title}">`
                : "";

            // ✅ Show link only if available
            const linkHTML = project.link 
                ? `<a href="${project.link}" target="_blank" class="text-secondary">🌐</a>`
                : "";

            col.innerHTML = `
                <div class="card h-100 portfolio-card bg-gradient" 
                     style="background: linear-gradient(to bottom right, rgba(13,110,253,0.2), rgba(13,110,253,0.05));">
                    ${imageHTML}
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title text-white mb-0">${project.title}</h5>
                            ${linkHTML}
                        </div>
                        <p class="card-text text-secondary text-sm mb-3 line-clamp-2">${project.description}</p>
                        <h6 class="text-secondary">Key Features</h6>
                        <ul class="text-secondary small mb-2">
                          ${project.features.map(f => `<li>${f}</li>`).join("")}
                        </ul>
                        <div class="d-flex flex-wrap gap-1 mb-2 mt-auto">
                          ${project.tech.map(t => `<span class="badge rounded-pill bg-primary text-white">${t}</span>`).join("")}
                        </div>
                        <button type="button" class="btn btn-outline-primary btn-sm mt-2" 
                                data-bs-toggle="modal" data-bs-target="#projectModal" data-index="${index}">
                            View Details
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(col);
        });
}

// ✅ Run only when DOM is ready
document.addEventListener("DOMContentLoaded", () => renderProjects("All"));

// Filter buttons
document.getElementById("filterButtons").addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
        const tech = e.target.getAttribute("data-tech");
        renderProjects(tech);
    }
});

// Modal functionality
const modal = document.getElementById('projectModal');
modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const index = button.getAttribute('data-index');
    const project = projects[index];

    // ✅ Update modal safely
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('#modalDescription').textContent = project.description;
    modal.querySelector('#modalFeatures').innerHTML = project.features.map(f => `<li>${f}</li>`).join("");
    modal.querySelector('#modalTech').innerHTML = project.tech.map(t => 
        `<span class="badge rounded-pill bg-primary text-white">${t}</span>`).join("");

    // ✅ Only show modal image if available
    const modalImage = modal.querySelector('#modalImage');
    if (project.image) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalImage.style.display = "block";
    } else {
        modalImage.style.display = "none";
    }

    // ✅ Hide link button if no link
    const modalLink = modal.querySelector('#modalLink');
    if (project.link) {
        modalLink.href = project.link;
        modalLink.style.display = "inline-block";
    } else {
        modalLink.style.display = "none";
    }
});
