// certifications
 document.addEventListener('DOMContentLoaded', function () {
  // ===== Dynamic Certifications Data =====
  const certifications = [
    {
  title: "Java Full Stack Developer",
  issuer: "JSPIDERS – Java Training and Development Center",
  period: "Issued Juy 2025",
  details: [ 
    "Proficient in Java, Spring Boot, Hibernate, and RESTful API development",
    "Experienced in frontend technologies: HTML,BootstrapCSS , javaScript and React",
    "Hands-on experience with microservices architecture and Docker/Kubernetes",
    "Strong database expertise: MySQL, PostgreSQL, and MongoDB",
    "Good understanding of authentication & authorization (JWT, OAuth2, SSO)",
    "Strong foundation in Data Structures, Algorithms, and System Design"
  ],
  img: "portfolio-uploads/images/",
},
{
  title: "Cyber Security MasterClass",
  issuer: " NoviTech R&D Private Limited ",
  period: "Issued SEP 2024",
  details: [
    "Comprehensive training on Cyber Security fundamentals and advanced concepts",
    "Practical exposure to ethical hacking and penetration testing techniques",
    "Hands-on labs covering OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF, etc.)",
    "Strong focus on cryptography, encryption standards, and secure key management",
    "Training on SIEM tools like Splunk, ELK Stack, and Wazuh"
  ],
  img: "portfolio-uploads/images/certificates/CS.jpg"
},{
  title: "Machine Learning MasterClass",
  issuer: " NoviTech R&D Private Limited ",
  period: "Issued FEB 2025",
  details: [
    "Comprehensive coverage of supervised, unsupervised, and reinforcement learning",
    "Hands-on experience with regression, classification, clustering, and recommendation systems",
    "Feature engineering, dimensionality reduction, and model optimization techniques",
    "Strong foundation in probability, statistics, and linear algebra for ML",
    "Model deployment with FastAPI, and cloud platforms (AWS, GCP, Azure)",
    "Understanding bias, fairness, and ethics in AI systems"
  ],
  img: "portfolio-uploads/images/certificates/Ml.jpg"
}
    // 👉 Add more certifications here
  ];

  const certContainer = document.getElementById('certificationsContainer');

  // Render certification cards
  certifications.forEach((cert, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-3';

    const card = document.createElement('div');
    card.className = 'job-card h-100 p-3 border rounded text-white';

    card.innerHTML = `
      <h5>${cert.title}</h5>
      <p class="fw-bold">${cert.issuer}</p>
      <p>${cert.period}</p>
      <button class="btn btn-outline-primary view-btn"
        data-bs-toggle="modal"
        data-bs-target="#certModal"
        data-title="${cert.title}"
        data-issuer="${cert.issuer}"
        data-period="${cert.period}"
        data-details='${JSON.stringify(cert.details)}'
        data-img="${cert.img}">
        View Details
      </button>
    `;

    col.appendChild(card);
    certContainer.appendChild(col);
  });

  // Modal population
  const certModal = document.getElementById('certModal');
  certModal.addEventListener('show.bs.modal', function (event) {
    const btn = event.relatedTarget;
    if (!btn) return;

    const title = btn.dataset.title || '';
    const issuer = btn.dataset.issuer || '';
    const period = btn.dataset.period || '';
    let details = [];
    try {
      details = JSON.parse(btn.dataset.details || '[]');
    } catch (e) {
      details = [];
    }
    const img = btn.dataset.img || '';

    document.getElementById('certModalLabel').textContent = title;
    document.getElementById('certIssuer').textContent = issuer;
    document.getElementById('certPeriod').textContent = period;

    const detailsList = document.getElementById('certDetails');
    detailsList.innerHTML = '';
    details.forEach(d => {
      const li = document.createElement('li');
      li.textContent = d;
      detailsList.appendChild(li);
    });

    const imgEl = document.getElementById('certImage');
    if (img) {
      imgEl.src = img;
      imgEl.style.display = '';
    } else {
      imgEl.style.display = 'none';
    }
  });
});