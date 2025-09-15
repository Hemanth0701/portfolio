// Education
document.addEventListener('DOMContentLoaded', function () {
  // ===== Dynamic Education Data =====
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institute: " @ Kings Engineering College, Tamil Nadu",
      period: " Period : 2019 – 2023",
      details: [
        "Database Systems",
        "Advanced Algorithms and Data Structures",
        "Software Project Management",
        "System Analysis and Design",
        "Computer Networks","Operating Systems",
        "Graduated with First Class ",
        "Completed major project on AI-based threat detection",
      ],
      img: "portfolio-uploads/images/13170761.jpg"
    }
    // 👉 Add more education entries here
  ];

  const eduContainer = document.getElementById('educationContainer');

  // Render education cards
  education.forEach((edu) => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-3';

    const card = document.createElement('div');
    card.className = 'job-card h-100 p-3 border rounded text-white';

    card.innerHTML = `
      <h5>${edu.degree}</h5>
      <p class="fw-bold">${edu.institute}</p>
      <p>${edu.period}</p>
      <button class="btn btn-outline-primary view-btn"
        data-bs-toggle="modal"
        data-bs-target="#eduModal"
        data-degree="${edu.degree}"
        data-institute="${edu.institute}"
        data-period="${edu.period}"
        data-details='${JSON.stringify(edu.details)}'
        data-img="${edu.img}">
        View Details
      </button>
    `;

    col.appendChild(card);
    eduContainer.appendChild(col);
  });

  // Modal population
  const eduModal = document.getElementById('eduModal');
  eduModal.addEventListener('show.bs.modal', function (event) {
    const btn = event.relatedTarget;
    if (!btn) return;

    const degree = btn.dataset.degree || '';
    const institute = btn.dataset.institute || '';
    const period = btn.dataset.period || '';
    let details = [];
    try {
      details = JSON.parse(btn.dataset.details || '[]');
    } catch (e) {
      details = [];
    }
    const img = btn.dataset.img || '';

    document.getElementById('eduModalLabel').textContent = degree;
    document.getElementById('eduInstitute').textContent = institute;
    document.getElementById('eduPeriod').textContent = period;

    const detailsList = document.getElementById('eduDetails');
    detailsList.innerHTML = '';
    details.forEach(d => {
      const li = document.createElement('li');
      li.textContent = d;
      detailsList.appendChild(li);
    });

    const imgEl = document.getElementById('eduImage');
    if (img) {
      imgEl.src = img;
      imgEl.style.display = '';
    } else {
      imgEl.style.display = 'none';
    }
  });
});