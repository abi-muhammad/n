// Konfigurasi Opsional Nomor WhatsApp Ibu Supriyaningsih (format kode negara tanpa +, contoh: "6281234567890")
const TEACHER_WHATSAPP = "";

// Data Pojok Doa Harian & Mutiara Adab
const DAILY_DUAS = [
  {
    title: "Doa Sebelum Belajar",
    arabic: "رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا وَاجْعَلْنِي مِنَ الصَّالِحِينَ",
    latin: "“Rabbi zidnii 'ilman warzuqnii fahman waj'alnii minash-shaalihiin.”",
    meaning:
      "Artinya: “Ya Tuhanku, tambahkanlah ilmu kepadaku, karuniakanlah pemahaman yang baik kepadaku, dan jadikanlah aku termasuk golongan orang-orang yang sholeh.”",
    tip: "💡 Pesan Ibu Supriyaningsih: Bacalah doa ini dengan duduk rapi dan hati yang ikhlas setiap kali hendak membuka buku pelajaran."
  },
  {
    title: "Doa untuk Kedua Orang Tua",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    latin: "“Rabbighfir lii waliwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa.”",
    meaning:
      "Artinya: “Ya Tuhanku, ampunilah dosaku dan dosa kedua orang tuaku, serta sayangilah mereka sebagaimana mereka menyayangiku di waktu kecil.”",
    tip: "💡 Pesan Ibu Supriyaningsih: Jangan lupa mendoakan Ayah dan Bunda setiap selesai shalat lima waktu ya, Nak."
  },
  {
    title: "Doa Kebaikan Dunia & Akhirat",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin: "“Rabbanaa aatinaa fid-dunyaa hasanah, wa fil-aakhirati hasanah, wa qinaa 'adzaaban-naar.”",
    meaning:
      "Artinya: “Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, serta lindungilah kami dari siksa api neraka.”",
    tip: "💡 Pesan Ibu Supriyaningsih: Ini adalah doa sapu jagat yang paling sering dibaca oleh Rasulullah SAW."
  },
  {
    title: "Doa Kelapangan Hati & Kemudahan",
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
    latin: "“Rabbisyrah lii shadrii, wa yassir lii amrii, wahlul 'uqdatan min lisaanii yafqahuu qaulii.”",
    meaning:
      "Artinya: “Ya Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan dari lidahku agar mereka mengerti perkataanku.”",
    tip: "💡 Pesan Ibu Supriyaningsih: Sangat baik dibaca saat hendak menghafal Al-Qur'an, maju praktik di depan kelas, atau menghadapi ujian."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Tahun dinamis di footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Efek bayangan navbar saat scroll & highlight menu aktif
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("main section[id]");
  const navLinksAll = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 16) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentSection = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentSection = sec.getAttribute("id");
      }
    });

    navLinksAll.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // Navigasi Mobile
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinksContainer = document.getElementById("navLinks");

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navLinksContainer.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinksContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Fitur Ganti Foto Profil Lokal (Disimpan di localStorage browser pengguna)
  const photoInput = document.getElementById("photoInput");
  const profileImage = document.getElementById("profileImage");
  const savedPhoto = localStorage.getItem("supriyaningsih_profile_photo");

  if (savedPhoto && profileImage) {
    profileImage.src = savedPhoto;
  }

  if (photoInput && profileImage) {
    photoInput.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          profileImage.src = result;
          try {
            localStorage.setItem("supriyaningsih_profile_photo", result);
          } catch {
            // Abaikan jika ukuran gambar melebihi kuota localStorage
          }
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // Tombol Cetak Portofolio
  const printBtn = document.getElementById("printProfileBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Filter Pilar Materi PAI
  const tabBtns = document.querySelectorAll(".tab-btn");
  const pillarCards = document.querySelectorAll(".pillar-card");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      tabBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      pillarCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "semua" || category === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Interaksi Pojok Doa Harian
  const duaPills = document.querySelectorAll(".dua-pill");
  const duaTitle = document.getElementById("duaTitle");
  const duaArabic = document.getElementById("duaArabic");
  const duaLatin = document.getElementById("duaLatin");
  const duaMeaning = document.getElementById("duaMeaning");
  const duaTip = document.getElementById("duaTip");

  duaPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const idx = Number(pill.getAttribute("data-index"));
      const item = DAILY_DUAS[idx];
      if (!item) return;

      duaPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      duaTitle.textContent = item.title;
      duaArabic.textContent = item.arabic;
      duaLatin.textContent = item.latin;
      duaMeaning.textContent = item.meaning;
      duaTip.innerHTML = item.tip.replace(
        "Pesan Ibu Supriyaningsih:",
        "<strong>Pesan Ibu Supriyaningsih:</strong>"
      );
    });
  });

  // Formulir Konsultasi Wali Murid
  const form = document.getElementById("consultationForm");
  const copyBtn = document.getElementById("copyMsgBtn");
  const feedback = document.getElementById("formFeedback");

  function composeMessage() {
    const parentName = document.getElementById("parentName").value.trim() || "Wali Murid";
    const studentClass = document.getElementById("studentClass").value.trim();
    const topic = document.getElementById("topicSelect").value;
    const msg = document.getElementById("messageText").value.trim();

    const studentLine = studentClass ? `\nWali dari: ${studentClass}` : "";
    return `Assalamu'alaikum Wr. Wb. Ibu Supriyaningsih, S.Pd.I.\n\nPerkenalkan saya ${parentName}.${studentLine}\nKeperluan: ${topic}\n\n${msg}\n\nTerima kasih. Wassalamu'alaikum Wr. Wb.`;
  }

  function showFeedback(text) {
    if (!feedback) return;
    feedback.textContent = text;
    feedback.hidden = false;
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formatted = composeMessage();

      if (TEACHER_WHATSAPP) {
        const waUrl = `https://wa.me/${TEACHER_WHATSAPP}?text=${encodeURIComponent(formatted)}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
        showFeedback("Membuka WhatsApp dengan format pesan silaturahmi...");
      } else {
        navigator.clipboard?.writeText(formatted).catch(() => {});
        showFeedback(
          "Format pesan silaturahmi berhasil disalin! Silakan tempel (paste) ke WhatsApp Ibu Supriyaningsih."
        );
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const msgField = document.getElementById("messageText");
      if (!msgField.value.trim()) {
        showFeedback("Mohon tuliskan isi pesan terlebih dahulu sebelum menyalin.");
        return;
      }
      const formatted = composeMessage();
      navigator.clipboard?.writeText(formatted).then(
        () => showFeedback("Teks pesan berhasil disalin ke papan klip (clipboard)."),
        () => showFeedback("Pesan siap: " + formatted)
      );
    });
  }
});
