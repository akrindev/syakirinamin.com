import { enUS, id as idLocale } from "date-fns/locale";

export const supportedLocales = ["en", "id"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";
export const localeStorageKey = "syakirinamin.locale";

export const messages = {
  en: {
    common: {
      siteRole: "Software Engineer",
      fullStackEngineer: "Full-Stack Engineer",
      noDate: "Date isn't set yet",
      dateFormat: "MMMM dd, yyyy",
    },
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      projects: "Projects",
      toggleTheme: "Toggle dark mode",
      switchLanguage: "Switch language to Indonesian",
      localeLabel: "EN",
    },
    meta: {
      homeTitle: "Syakirin Amin | Software Engineer",
      aboutTitle: "About | Syakirin Amin",
      aboutDescription:
        "Hi, I'm Syakirin Amin, a Full-Stack Engineer who turns rough ideas into web apps that feel calm, reliable, and a little delightful to use.",
      blogTitle: "Blog | Syakirin Amin",
      projectsTitle: "Projects | Syakirin Amin",
    },
    intro: {
      greeting: "Hey, I'm",
      descriptionStart: "I'm a",
      descriptionMiddle:
        "who's spent the last few years turning whiteboard scribbles into real, shipped products. Most of my days are spent designing intuitive platforms and dependable management systems with",
      descriptionEnd: "Lately, I've been falling down rabbit holes around",
      aiUiHighlight: "AI and UI/UX design",
    },
    footer: {
      builtWith: "Built with",
      handcraftedIn: "Handcrafted in",
      location: "Pekalongan, Indonesia",
    },
    about: {
      sections: {
        summary: "About Me",
        experience: "Experience",
        education: "Education",
        technicalSkills: "Technical Skills",
        languages: "Languages",
      },
      summary:
        "Hey, I'm a Full-Stack Engineer who's been quietly obsessed with the web since the first time I deployed a tiny PHP page and felt that little 'whoa, the internet just ran my code' moment. These days, I spend most of my time building reliable, scalable web apps with Laravel and React.js, usually the kind of products people actually use every day at school, at work, or to manage their money. I'm the kind of engineer who really enjoys untangling messy problems, listening to the humans behind the bug reports, and shipping things that feel thoughtful instead of just 'works on my machine'. On the side, I'm leveling up in project management, AI, and UI/UX design, while trying to be the teammate I'd want to work with: clear, kind, and allergic to drama.",
      experiences: [
        {
          company: "SMK Diponegoro Karanganyar",
          role: "IT Developer",
          period: "July 2021 – Present",
          points: [
            "Built the school's whole digital backbone, from PPDB for new student admissions, Smeduverse for school management, Smeduverse Orbit for student attendance, attendance for staff, and Smeduverse CBT for online exams.",
            "Stitched all those apps into one Smeduverse ecosystem, so teachers don't juggle five different tools and the data finally agrees with itself.",
            "Spent a lot of time hanging out with teachers and admin staff, translating their real-world frustrations into features they actually want to open every morning.",
          ],
        },
        {
          company: "CV Interloka Custom Made",
          role: "Software Developer",
          period: "August 2024 – June 2025",
          points: [
            "Helped take a crowdfunding app and a Design Marketplace from 'just a Notion doc' all the way to a live product people could fund and buy on.",
            "Designed and built the funding and deposit modules, including the transaction flows that quietly move real money around behind the scenes.",
            "Created interactive dashboards so users can watch their funding progress and balances in one calm, glanceable view.",
            "Tuned performance and tightened security around financial data, because trust is the whole product when money is involved.",
          ],
        },
        {
          company: "PT Creasi Tekno Solusi",
          role: "Software Engineer",
          period: "May 2022 – May 2024",
          points: [
            "Worked as a Full-Stack Developer to build an Asset Management System (AMS) and Vendor Management System (VMS) on Laravel, basically the boring-looking apps that quietly keep entire companies running.",
            "Lived inside the Agile loop: sprint planning, code reviews, retros, and the occasional 'wait, why does this query take 8 seconds' detective session.",
            "Contributed across the stack, from front-end components, database design, and the small refactors that make the next person's life better.",
          ],
        },
        {
          company: "CV Cipta Inovasi Digital",
          role: "Back End Developer",
          period: "Oct 2023 – Dec 2023",
          points: [
            "Joined the team to ship a Distributor Management System (DMS) that had to coordinate orders, stock, and people across multiple branches.",
            "Designed the back-end logic and RESTful API endpoints that became the contract between front-end, mobile, and downstream services.",
            "Took code reviews seriously, not as gatekeeping, but as a way to keep the codebase friendly for whoever (including future me) opens it next.",
            "Tuned database performance and added caching where it mattered, so users got that satisfying 'wait, that loaded already?' feeling.",
          ],
        },
      ],
      education: {
        school: "Institute of Technology and Science Nahdlatul Ulama Pekalongan",
        degree: "B.Sc. in Computer Science",
        period: "2022 – Expected 2026",
      },
      skills: {
        technologies: "Technologies",
        tools: "Tools & Platforms",
      },
      languages: [
        { lang: "Bahasa Indonesia", level: "Fluent (native)" },
        { lang: "English", level: "Comfortable in conversation and writing" },
      ],
      downloadCv: "Download CV",
    },
    techStack: {
      workedWith: "tech I've actually shipped with",
    },
    blog: {
      latestPosts: "Latest Posts",
      latestDescription:
        "Notes from the dev desk: half-formed ideas, lessons learned the hard way, and small things about the web, code, and design that I think are worth writing down.",
      backToBlog: "Back to all posts",
    },
    projects: {
      heading: "Projects",
      description:
        "A small gallery of things I've built, some born from real client briefs, others from late-night curiosity. Each one taught me something I couldn't have learned from a tutorial. Many other live projects aren't shown here due to licensing and privacy.",
      closeZoom: "Close preview",
      zoomImage: "Take a closer look at {{name}}",
      previewUnavailableFor: "No preview for {{name}} just yet",
      previewUnavailable: "Preview coming soon",
      noLinkProvided: "Link coming soon",
    },
  },
  id: {
    common: {
      siteRole: "Software Engineer",
      fullStackEngineer: "Full-Stack Engineer",
      noDate: "Tanggal belum tersedia",
      dateFormat: "dd MMMM yyyy",
    },
    nav: {
      home: "Beranda",
      about: "Tentang",
      blog: "Blog",
      projects: "Proyek",
      toggleTheme: "Ubah mode gelap",
      switchLanguage: "Ganti bahasa ke Inggris",
      localeLabel: "ID",
    },
    meta: {
      homeTitle: "Syakirin Amin | Software Engineer",
      aboutTitle: "Tentang | Syakirin Amin",
      aboutDescription:
        "Halo, saya Syakirin Amin, Full-Stack Engineer yang suka mengubah ide setengah jadi menjadi aplikasi web yang terasa rapi, andal, dan menyenangkan dipakai.",
      blogTitle: "Blog | Syakirin Amin",
      projectsTitle: "Proyek | Syakirin Amin",
    },
    intro: {
      greeting: "Halo, saya",
      descriptionStart: "Saya seorang",
      descriptionMiddle:
        "yang beberapa tahun terakhir sibuk mengubah coretan ide jadi produk yang benar-benar dipakai banyak orang. Sehari-hari saya merancang platform yang nyaman digunakan dan sistem manajemen yang andal bersama",
      descriptionEnd: "Belakangan, saya makin sering menyelam ke dunia",
      aiUiHighlight: "AI dan desain UI/UX",
    },
    footer: {
      builtWith: "Dibangun dengan",
      handcraftedIn: "Dirancang dari",
      location: "Pekalongan, Indonesia",
    },
    about: {
      sections: {
        summary: "Tentang Saya",
        experience: "Pengalaman",
        education: "Pendidikan",
        technicalSkills: "Keahlian Teknis",
        languages: "Bahasa",
      },
      summary:
        "Halo, saya Full-Stack Engineer yang mulai jatuh cinta dengan dunia web sejak pertama kali halaman PHP buatan saya berhasil tayang dan saya berpikir, ‘oh, jadi internet beneran bisa menjalankan kode saya.’ Sejak itu, sebagian besar waktu saya habis untuk membangun aplikasi web yang andal dan siap berkembang menggunakan Laravel dan React.js, biasanya untuk sekolah, kantor, atau platform yang mengelola uang banyak orang. Saya tipe engineer yang menikmati proses mengurai masalah yang berantakan, mendengarkan cerita pengguna di balik setiap bug report, dan merilis solusi yang terasa dipikirkan, bukan sekadar ‘ya pokoknya jalan’. Sambil itu, saya terus belajar di sisi manajemen proyek, AI, dan desain UI/UX, sambil berusaha jadi rekan tim yang saya sendiri ingin punya: jelas saat berkomunikasi, ramah saat memberi feedback, dan tidak suka drama.",
      experiences: [
        {
          company: "SMK Diponegoro Karanganyar",
          role: "IT Developer",
          period: "Juli 2021 – Sekarang",
          points: [
            "Membangun hampir seluruh tulang punggung digital sekolah, mulai dari PPDB untuk penerimaan siswa baru, Smeduverse sebagai sistem manajemen sekolah, Smeduverse Orbit untuk presensi siswa, presensi karyawan, hingga Smeduverse CBT untuk ujian online.",
            "Menyatukan semua aplikasi tadi ke dalam satu ekosistem Smeduverse, supaya guru tidak perlu lompat antar lima tools berbeda dan datanya akhirnya berbicara satu bahasa.",
            "Sering nongkrong dan ngobrol langsung dengan guru maupun staf TU untuk menerjemahkan keluhan sehari-hari mereka menjadi fitur yang benar-benar dibuka tiap pagi, bukan hanya berakhir jadi menu yang tidak pernah disentuh.",
          ],
        },
        {
          company: "CV Interloka Custom Made",
          role: "Software Developer",
          period: "Agustus 2024 – Juni 2025",
          points: [
            "Membawa aplikasi crowdfunding dan Design Marketplace dari tahap konsep di Notion sampai rilis ke pengguna, lengkap dengan alur penggalangan dana dan transaksinya.",
            "Merancang dan membangun modul pendanaan serta deposito beserta alur transaksinya, bagian yang ‘diam-diam’ menggerakkan uang sungguhan di belakang layar.",
            "Membuat dashboard interaktif sehingga pengguna bisa memantau progres pendanaan dan saldo akun dalam satu tampilan yang tenang dan enak dilihat.",
            "Mengoptimalkan performa aplikasi sekaligus memperketat keamanan data finansial, karena kepercayaan adalah inti dari produk yang berurusan dengan uang.",
          ],
        },
        {
          company: "PT Creasi Tekno Solusi",
          role: "Software Engineer",
          period: "Mei 2022 – Mei 2024",
          points: [
            "Bekerja sebagai Full-Stack Developer untuk membangun Asset Management System (AMS) dan Vendor Management System (VMS) berbasis Laravel, aplikasi yang dari luar terlihat ‘membosankan’, tapi diam-diam menopang operasional banyak perusahaan setiap hari.",
            "Hidup di dalam ritme Agile: sprint planning, code review, retro, sampai sesi detektif kecil-kecilan saat ada query yang tiba-tiba butuh delapan detik tanpa alasan jelas.",
            "Berkontribusi lintas-stack, dari komponen front-end, perancangan basis data, sampai refactor-refactor kecil yang membuat hidup developer berikutnya lebih ringan.",
          ],
        },
        {
          company: "CV Cipta Inovasi Digital",
          role: "Back End Developer",
          period: "Okt 2023 – Des 2023",
          points: [
            "Bergabung dengan tim untuk merilis Distributor Management System (DMS) yang harus mengoordinasikan pesanan, stok, dan banyak orang di beberapa cabang sekaligus.",
            "Menyusun logika back-end yang kompleks dan merancang RESTful API endpoint yang menjadi ‘kontrak’ antara front-end, mobile, dan layanan turunan.",
            "Menjadikan code review bukan sekadar formalitas, tapi cara untuk menjaga codebase tetap ramah bagi siapa pun (termasuk diri sendiri di masa depan) yang membukanya kembali.",
            "Mengoptimalkan performa basis data dan menambahkan caching di tempat yang paling terasa, supaya pengguna sempat berpikir ‘kok ini cepat banget, ya?’ sebelum lanjut bekerja.",
          ],
        },
      ],
      education: {
        school: "Institut Teknologi dan Sains Nahdlatul Ulama Pekalongan",
        degree: "S1 Ilmu Komputer",
        period: "2022 – Target lulus 2026",
      },
      skills: {
        technologies: "Teknologi",
        tools: "Tools & Platform",
      },
      languages: [
        { lang: "Bahasa Indonesia", level: "Lancar (bahasa ibu)" },
        { lang: "Bahasa Inggris", level: "Nyaman untuk percakapan dan tulisan" },
      ],
      downloadCv: "Unduh CV",
    },
    techStack: {
      workedWith: "teknologi yang sudah benar-benar saya pakai di proyek nyata",
    },
    blog: {
      latestPosts: "Tulisan Terbaru",
      latestDescription:
        "Catatan dari meja kerja seorang developer: ide yang masih setengah matang, pelajaran yang didapat dengan cara yang ‘agak menyakitkan’, dan hal-hal kecil seputar web, kode, serta desain yang menurut saya sayang kalau cuma diingat sendiri.",
      backToBlog: "Kembali ke daftar tulisan",
    },
    projects: {
      heading: "Proyek",
      description:
        "Galeri kecil berisi proyek yang pernah saya kerjakan: sebagian lahir dari brief klien sungguhan, sebagian lain muncul dari rasa penasaran tengah malam. Masing-masing meninggalkan satu pelajaran yang tidak akan saya dapat hanya dari membaca tutorial. Masih banyak proyek yang sudah berjalan namun tidak ditampilkan di sini karena alasan lisensi dan privasi.",
      closeZoom: "Tutup pratinjau",
      zoomImage: "Lihat lebih dekat {{name}}",
      previewUnavailableFor: "Pratinjau {{name}} belum tersedia",
      previewUnavailable: "Pratinjau menyusul",
      noLinkProvided: "Tautan menyusul",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const language = value.toLowerCase().split("-")[0];
  return supportedLocales.find((locale) => locale === language) ?? null;
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return defaultLocale;
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const language of languages) {
    const locale = normalizeLocale(language);
    if (locale) {
      return locale;
    }
  }

  return defaultLocale;
}

export function getDateLocale(locale: Locale) {
  return locale === "id" ? idLocale : enUS;
}

export function formatMessage(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key: string) => values[key] ?? match);
}
