// Konfigurasi Opsional Nomor WhatsApp Ibu Supriyaningsih (format kode negara tanpa +, contoh: "6281234567890")
const TEACHER_WHATSAPP = "";

const PHOTO_STORAGE_KEY = "supriyaningsih_custom_photo_v2";
const DEFAULT_AVATAR_SRC = "assets/avatar-guru.jpg";

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
  // Bersihkan kunci foto versi lama jika ada agar avatar asli terbaru langsung tampil
  try {
    localStorage.removeItem("supriyaningsih_profile_photo");
  } catch {
    // Abaikan jika akses storage dibatasi
  }

  // Tahun dinamis di footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Animasi Scroll Reveal Modern
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("in-view"));
  }

  // Efek bayangan navbar saat scroll & highlight menu aktif (atas + bottom bar mobile)
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("main section[id]");
  const navLinksAll = document.querySelectorAll(".nav-link");
  const mobileBarItems = document.querySelectorAll(".m-bar-item:not(.m-bar-cta)");

  function onScrollUpdate() {
    if (window.scrollY > 16) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    let currentSection = "beranda";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 135;
      if (window.scrollY >= top) {
        currentSection = sec.getAttribute("id") || "beranda";
      }
    });

    navLinksAll.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
    });

    mobileBarItems.forEach((item) => {
      const href = item.getAttribute("href");
      const isMatch =
        href === `#${currentSection}` ||
        (currentSection === "tentang" && href === "#beranda") ||
        (currentSection === "materi" && href === "#sekolah");
      item.classList.toggle("active", isMatch);
    });
  }

  window.addEventListener("scroll", onScrollUpdate, { passive: true });
  onScrollUpdate();

  // Navigasi Mobile Modern dengan Backdrop & Animasi Ikon
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinksContainer = document.getElementById("navLinks");
  const navBackdrop = document.getElementById("navBackdrop");

  function closeMobileMenu() {
    if (!navLinksContainer || !mobileToggle) return;
    navLinksContainer.classList.remove("open");
    mobileToggle.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
    if (navBackdrop) {
      navBackdrop.classList.remove("visible");
      setTimeout(() => {
        if (!navLinksContainer.classList.contains("open")) {
          navBackdrop.hidden = true;
        }
      }, 250);
    }
  }

  function openMobileMenu() {
    if (!navLinksContainer || !mobileToggle) return;
    if (navBackdrop) {
      navBackdrop.hidden = false;
      requestAnimationFrame(() => navBackdrop.classList.add("visible"));
    }
    navLinksContainer.classList.add("open");
    mobileToggle.classList.add("active");
    mobileToggle.setAttribute("aria-expanded", "true");
  }

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener("click", () => {
      if (navLinksContainer.classList.contains("open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    navBackdrop?.addEventListener("click", closeMobileMenu);

    navLinksContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  // Fitur Ubah & Reset Foto Profil Lokal
  const photoInput = document.getElementById("photoInput");
  const resetPhotoBtn = document.getElementById("resetPhotoBtn");
  const profileImage = document.getElementById("profileImage");

  let savedPhoto = null;
  try {
    savedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);
  } catch {
    savedPhoto = null;
  }

  if (savedPhoto && profileImage) {
    profileImage.src = savedPhoto;
    if (resetPhotoBtn) resetPhotoBtn.hidden = false;
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
          if (resetPhotoBtn) resetPhotoBtn.hidden = false;
          try {
            localStorage.setItem(PHOTO_STORAGE_KEY, result);
          } catch {
            // Abaikan jika ukuran gambar melebihi kuota localStorage
          }
        }
      };
      reader.readAsDataURL(file);
    });
  }

  if (resetPhotoBtn && profileImage) {
    resetPhotoBtn.addEventListener("click", () => {
      profileImage.src = DEFAULT_AVATAR_SRC;
      resetPhotoBtn.hidden = true;
      if (photoInput) photoInput.value = "";
      try {
        localStorage.removeItem(PHOTO_STORAGE_KEY);
      } catch {
        // Abaikan
      }
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

  // Interaksi Pojok Doa Harian + Salin Doa
  const duaPills = document.querySelectorAll(".dua-pill");
  const duaTitle = document.getElementById("duaTitle");
  const duaArabic = document.getElementById("duaArabic");
  const duaLatin = document.getElementById("duaLatin");
  const duaMeaning = document.getElementById("duaMeaning");
  const duaTip = document.getElementById("duaTip");
  const copyDuaBtn = document.getElementById("copyDuaBtn");
  const copyDuaLabel = document.getElementById("copyDuaLabel");
  let activeDuaIdx = 0;

  duaPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const idx = Number(pill.getAttribute("data-index"));
      const item = DAILY_DUAS[idx];
      if (!item) return;

      activeDuaIdx = idx;
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

  if (copyDuaBtn) {
    copyDuaBtn.addEventListener("click", () => {
      const d = DAILY_DUAS[activeDuaIdx];
      if (!d) return;
      const textToCopy = `${d.title}\n\n${d.arabic}\n${d.latin}\n${d.meaning}`;
      navigator.clipboard?.writeText(textToCopy).then(() => {
        if (copyDuaLabel) {
          copyDuaLabel.textContent = "Tersalin!";
          setTimeout(() => {
            copyDuaLabel.textContent = "Salin Doa";
          }, 1800);
        }
      });
    });
  }

  // Formulir Konsultasi Wali Murid
  const form = document.getElementById("consultationForm");
  const copyBtn = document.getElementById("copyMsgBtn");
  const feedback = document.getElementById("formFeedback");

  function composeMessage() {
    const parentName = document.getElementById("parentName").value.trim() || "Wali Murid";
    const studentClass = document.getElementById("studentClass").value.trim();
    const topic = document.getElementById("topicSelect").value;
    const msg = document.getElementById("messageText").value.trim();

    const studentLine = studentClass ? `\nWali dari: ${studentClass} (SDIP Ma'arif NU 1 Al-Firdaus)` : "";
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
