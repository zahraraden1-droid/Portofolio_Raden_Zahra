const data = {
    name: "Raden Zahra Shadira Shifa",
    age: 16,
    school: "SMK Negeri 1 Jakarta",

    major: "Teknik Komputer dan Jaringan",
    bio: "Saya adalah pribadi yang memiliki rasa ingin tahu tinggi, senang mempelajari hal baru, dan terus berusaha memberikan hasil terbaik dalam setiap proses yang dijalani.",
    education: [
        {
            year: "2013 — 2015",
            level: "TK",
            name: "TK Darussalan",
            desc: "Tempat pertama belajar mengenal warna, angka, dan indahnya bermimpi tanpa batas."
        },
        {
            year: "2016 — 2021",
            level: "SD",
            name: "SDN 15 PG ",
            desc: "Masa-masa kepolosan, belajar dasar pengetahuan, dan membangun persahabatan pertama."
        },
        {
            year: "2022 — 2024",
            level: "SMP",
            name: "SMP YPI Pulogadung",
            desc: "Fase pencarian jati diri, belajar menjadi lebih mandiri, dan mulai menemukan minat."
        },
        {
            year: "2025 — NOW",
            level: "SMK",
            name: "SMK Negeri 1 Jakarta",
            desc: "Titik balik fokus pada tujuan. Dari sekadar suka teknologi hingga serius mendalami dunia jaringan dan sistem."
        }
    ],
    achievements: [
        {
            title: "Juara 1 Lomba Robotics",
            detail: "Tingkat Provinsi",
            year: "2026"
        },
        {
            title: "Juara Harapan Bina/Paskibra",
            detail: "Tingkat Kota  ",
            year: "2025"
        }
    ]
};
document.getElementById("heroName").textContent = data.name;
document.getElementById("fullName").textContent = data.name;
document.getElementById("age").textContent =
String(data.age).padStart(2, "0");

document.getElementById("ageDetail").textContent =
`${data.age} Tahun`;
document.getElementById("schoolDetail").textContent =
data.school;
document.getElementById("majorDetail").textContent =
data.major;
document.getElementById("bio").textContent =
data.bio;

document.getElementById("timeline").innerHTML = data.education
  .map(
    (item) => `
    <div class="timeline-item">
    <div class="timeline-year">
    ${item.year}</div>
      <div class="timeline-level">${item.level}</div>
      <div>
        <div class="timeline-name">${item.name}</div>
        <span class="timeline-desc">${item.desc}</span>
      </div>
      <div class="timeline-arrow"></div>
    </div>
  `
  )
  .join("");

document.getElementById("achievementList").innerHTML = data.achievements
  .map(
    (item, i) => `
    <div class="achievement-item">
      <div class="achievement-index">${String(i + 1).padStart(2, "0")}</div>
      <div>
        <div class="achievement-title">${item.title}</div>
        <div class="achievement-detail">${item.detail}</div>
      </div>
      <div class="achievement-year">${item.year}</div>
      <div class="achievement-arrow"></div>
    </div>
  `
  )
  .join("");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: .12
    }
  );
  document
  .querySelectorAll(".reveal")
  .forEach(el => observer.observe(el));
document.addEventListener("mousemove", e => {
  const x =
  (e.clientX / window.innerWidth - .5) * 2;
  const y =
  (e.clientY / window.innerHeight - .5) * 2;
  document.querySelector(".orb-one")
  .style.transform =
  `translate(${x * 18}px, ${y * 18}px)`;
  document.querySelector(".orb-two")
  .style.transform =
  `translate(${x * -12}px, ${y * -12}px)`;
});