// work data
document.addEventListener('DOMContentLoaded', function () {
      // ===== Replace this array with your dynamic source (or fetch from JSON/API) =====
      const companies = [
        {
          id: "company1",
          name: "Company 1",
          role: "Senior Developer",
          period: "Jan 2020 – Present",
          details: [
            "Developed XYZ features",
            "Improved application performance by 30%"
          ],
          img: "https://via.placeholder.com/800x400?text=Company+1+Image"
        },
        {
          id: "company2",
          name: "Company 2",
          role: "Software Engineer",
          period: "Jan 2018 – Dec 2019",
          details: [
            "Led API integration project",
            "Enhanced security with JWT"
          ],
          img: "https://via.placeholder.com/800x400?text=Company+2+Image"
        }
        // add more companies (or load from an API)
      ];
      // ==========================================================================

      const tabList = document.getElementById('companyTab');
      const tabContent = document.getElementById('companyTabContent');

      // render tabs & panes dynamically (DOM methods to avoid HTML-encoding issues)
      companies.forEach((company, index) => {
        // Nav button
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.setAttribute('role', 'presentation');

        const btn = document.createElement('button');
        btn.className = 'nav-link' + (index === 0 ? ' active' : '');
        btn.id = `${company.id}-tab`;
        btn.type = 'button';
        btn.setAttribute('data-bs-toggle', 'pill');
        btn.setAttribute('data-bs-target', `#${company.id}`);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-controls', company.id);
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.textContent = company.name;

        li.appendChild(btn);
        tabList.appendChild(li);

        // Tab pane
        const pane = document.createElement('div');
        pane.className = 'tab-pane fade' + (index === 0 ? ' show active' : '');
        pane.id = company.id;
        pane.setAttribute('role', 'tabpanel');
        pane.setAttribute('aria-labelledby', `${company.id}-tab`);

        // Job card content (build with DOM APIs)
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';

        const h5 = document.createElement('h5');
        h5.textContent = company.role;
        const p = document.createElement('p');
        p.textContent = company.period;

        const ul = document.createElement('ul');
        company.details.forEach(d => {
          const liD = document.createElement('li');
          liD.textContent = d;
          ul.appendChild(liD);
        });

        const viewBtn = document.createElement('button');
        viewBtn.className = 'btn btn-outline-primary mt-2 view-btn';
        viewBtn.type = 'button';
        viewBtn.textContent = 'View Details';
        viewBtn.setAttribute('data-bs-toggle', 'modal');
        viewBtn.setAttribute('data-bs-target', '#jobModal');

        // set dataset safely (no string-embedding in HTML)
        viewBtn.dataset.title = company.role;
        viewBtn.dataset.period = company.period;
        // store details as JSON string in dataset (safe)
        viewBtn.dataset.details = JSON.stringify(company.details);
        viewBtn.dataset.img = company.img;
        // optional: include company name
        viewBtn.dataset.company = company.name;

        jobCard.appendChild(h5);
        jobCard.appendChild(p);
        jobCard.appendChild(ul);
        jobCard.appendChild(viewBtn);
        pane.appendChild(jobCard);

        tabContent.appendChild(pane);
      });

      // Modal population
      const jobModalEl = document.getElementById('jobModal');
      jobModalEl.addEventListener('show.bs.modal', function (event) {
        const btn = event.relatedTarget;
        if (!btn) return;

        const title = btn.dataset.title || '';
        const period = btn.dataset.period || '';
        let details = [];
        try {
          details = JSON.parse(btn.dataset.details || '[]');
        } catch (e) {
          details = [];
        }
        const img = btn.dataset.img || '';
        const companyName = btn.dataset.company || '';

        document.getElementById('jobModalLabel').textContent = companyName ? `${companyName} — ${title}` : title;

        const imgEl = document.getElementById('jobImage');
        if (img) {
          imgEl.src = img;
          imgEl.style.display = '';
        } else {
          imgEl.style.display = 'none';
        }

        document.getElementById('jobPeriod').textContent = period;

        const detailsList = document.getElementById('jobDetails');
        detailsList.innerHTML = '';
        details.forEach(d => {
          const li = document.createElement('li');
          li.textContent = d;
          detailsList.appendChild(li);
        });
      });

      // Example: if you want to load companies from external JSON:
      // fetch('/companies.json').then(r=>r.json()).then(data => { /* render using the same logic */ });
    });

    