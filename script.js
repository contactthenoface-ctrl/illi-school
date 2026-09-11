/* ============================================================
   Illi School — language switching (FR / EN / AR) + small UI
   ============================================================ */

const translations = {
  fr: {
    "nav.approach": "Pédagogie",
    "nav.spaces": "Nos espaces",
    "nav.day": "Une journée",
    "nav.info": "Infos pratiques",
    "nav.contact": "Contact",

    "hero.eyebrow": "Illi School · Casablanca",
    "hero.h1": "Un cadre pensé pour que chaque enfant grandisse à son rythme.",
    "hero.lede": "De la crèche (0–3 ans) au jardin d'enfants (3–6 ans), nos ateliers Montessori bilingues français–arabe donnent aux enfants de vrais outils pour explorer, compter, lire et découvrir le monde.",
    "hero.cta1": "Écrire sur WhatsApp",
    "hero.cta2": "Appeler l'école",
    "hero.chip1": "0–6 ans",
    "hero.chip2": "Bilingue français / arabe",
    "hero.chip3": "Casablanca, Belvédère",

    "approach.eyebrow": "Notre pédagogie",
    "approach.h2": "Le matériel avant le discours",
    "approach.p1": "Chaque étagère est organisée pour que l'enfant se serve seul\u00A0: perles pour compter, lettres rugueuses pour sentir les sons, cartes et globes pour situer le monde.",
    "approach.p2": "L'éducatrice observe, prépare l'environnement et guide plutôt qu'elle n'impose. L'enfant choisit son atelier, répète le geste jusqu'à le maîtriser, et avance à son propre rythme.",
    "approach.tag1": "Perles, chiffres et boîtes de couleurs",
    "approach.tag2": "Langage bilingue FR / AR",
    "approach.tag3": "Numération jusqu'à 19",
    "approach.pillar1.h": "Vie pratique",
    "approach.pillar1.p": "Verser, transvaser, se laver les mains seul : les gestes du quotidien construisent la concentration et l'autonomie.",
    "approach.pillar2.h": "Sensoriel & langage",
    "approach.pillar2.p": "Sons, formes et couleurs manipulés avec les mains, en français et en arabe, avant d'être nommés ou écrits.",
    "approach.pillar3.h": "Mathématiques & monde",
    "approach.pillar3.p": "Barres de perles, globes et cartes de géographie posent les bases du calcul et de la curiosité pour le monde.",

    "spaces.eyebrow": "Nos espaces",
    "spaces.h2": "Une salle, plusieurs mondes",
    "spaces.lede": "Chaque coin de l'école est pensé pour une activité précise, à hauteur d'enfant.",
    "spaces.cap1": "Éveil des tout-petits : couleurs, formes et chiffres",
    "spaces.cap2": "Géographie : globes, cartes et drapeaux du monde",
    "spaces.cap3": "Coin lecture & repos, avec doudous",
    "spaces.cap4": "Atelier arts plastiques et tableau noir",
    "spaces.cap5": "Décor saisonnier, fait main avec les enfants",
    "spaces.cap6": "Sanitaires à hauteur d'enfant, hygiène guidée",
    "spaces.cap7": "Tables individuelles pour le travail concentré",
    "spaces.cap8": "Cour extérieure : motricité et jeux de balle",

    "day.eyebrow": "Le quotidien",
    "day.h2": "Une journée type",
    "day.s1.h": "Accueil & arrivée libre",
    "day.s1.p": "Les enfants rangent leurs affaires et choisissent leur premier atelier.",
    "day.s2.h": "Ateliers individuels",
    "day.s2.p": "Vie pratique, sensoriel, langage, mathématiques : chacun avance à son rythme, seul ou en petit groupe.",
    "day.s3.h": "Regroupement & langage",
    "day.s3.p": "Comptines et échanges en français et en arabe, en petit cercle.",
    "day.s4.h": "Déjeuner & hygiène",
    "day.s4.p": "Repas partagé et lavage des mains, avec toujours plus d'autonomie encouragée.",
    "day.s5.h": "Sieste ou activités calmes",
    "day.s5.p": "Repos pour les plus petits, ateliers créatifs et arts plastiques pour les grands.",
    "day.s6.h": "Départ",
    "day.s6.p": "Un mot sur la journée est partagé avec chaque parent.",

    "info.eyebrow": "Infos pratiques",
    "info.h2": "Horaires, adresse & inscription",
    "info.lede": "À Belvédère, à quelques minutes de Racine, Gauthier, Roches Noires et Bourgogne.",
    "info.mf": "Lundi – Vendredi",
    "info.sat": "Samedi",
    "info.sun": "Dimanche",
    "info.closed": "Fermé",
    "info.addr.h": "Adresse",
    "info.phone.h": "Téléphone",
    "info.directions": "Itinéraire vers l'école",

    "social.eyebrow": "Restons en contact",
    "social.h2": "Suivez le quotidien de la classe",
    "social.lede": "Photos d'ateliers, événements et portes ouvertes sont partagés en premier sur nos réseaux.",
    "social.ig.tag": "Instagram · 970+ abonnés",
    "social.fb.tag": "Facebook",
    "social.wa.tag": "WhatsApp",
    "social.wa.name": "06 63 76 17 28",

    "footer.tagline": "Crèche & jardin d'enfants Montessori, bilingue français–arabe, à Casablanca.",
    "footer.contact": "Contact",
    "footer.follow": "Réseaux",
    "footer.rights": "Tous droits réservés",
    "footer.credit": "créé par Kamliseo"
  },

  en: {
    "nav.approach": "Our approach",
    "nav.spaces": "Our spaces",
    "nav.day": "A typical day",
    "nav.info": "Practical info",
    "nav.contact": "Contact",

    "hero.eyebrow": "Illi School · Casablanca",
    "hero.h1": "A space built around how young children actually learn.",
    "hero.lede": "From nursery (ages 0–3) to kindergarten (ages 3–6), our bilingual French–Arabic Montessori workshops give children real tools to explore, count, read and discover the world.",
    "hero.cta1": "Message on WhatsApp",
    "hero.cta2": "Call the school",
    "hero.chip1": "Ages 0–6",
    "hero.chip2": "Bilingual French / Arabic",
    "hero.chip3": "Casablanca, Belvédère",

    "approach.eyebrow": "Our approach",
    "approach.h2": "Materials before words",
    "approach.p1": "Every shelf is arranged so a child can reach for it alone: bead bars for counting, sandpaper letters for feeling out sounds, maps and globes for placing the world.",
    "approach.p2": "The teacher observes, prepares the environment and guides rather than directs. Each child chooses a workshop, repeats the gesture until it's mastered, and moves at their own pace.",
    "approach.tag1": "Beads, numerals and colour boxes",
    "approach.tag2": "Bilingual language work, FR / AR",
    "approach.tag3": "Counting up to 19",
    "approach.pillar1.h": "Practical life",
    "approach.pillar1.p": "Pouring, transferring, washing hands alone: everyday gestures build concentration and independence.",
    "approach.pillar2.h": "Senses & language",
    "approach.pillar2.p": "Sounds, shapes and colours handled first, in French and in Arabic, before they're named or written.",
    "approach.pillar3.h": "Maths & the world",
    "approach.pillar3.p": "Bead stairs, globes and geography maps lay the groundwork for arithmetic and curiosity about the world.",

    "spaces.eyebrow": "Our spaces",
    "spaces.h2": "One room, many corners",
    "spaces.lede": "Every corner of the school is built around one activity, sized for a child.",
    "spaces.cap1": "Toddler room: colours, shapes and numbers",
    "spaces.cap2": "Geography: globes, maps and flags of the world",
    "spaces.cap3": "Reading & rest corner, with soft toys",
    "spaces.cap4": "Art table and chalkboard easel",
    "spaces.cap5": "Seasonal decor, made by hand with the children",
    "spaces.cap6": "Child-height bathroom, guided hygiene",
    "spaces.cap7": "Individual desks for focused work",
    "spaces.cap8": "Outdoor yard: gross motor play and ball games",

    "day.eyebrow": "Daily life",
    "day.h2": "A typical day",
    "day.s1.h": "Drop-off & free arrival",
    "day.s1.p": "Children put away their things and choose their first workshop.",
    "day.s2.h": "Individual workshops",
    "day.s2.p": "Practical life, sensorial, language, maths: each child moves at their own pace, alone or in a small group.",
    "day.s3.h": "Circle time & language",
    "day.s3.p": "Songs and conversation in French and Arabic, in a small circle.",
    "day.s4.h": "Lunch & hygiene",
    "day.s4.p": "A shared meal and hand-washing, with independence encouraged every time.",
    "day.s5.h": "Nap or quiet activities",
    "day.s5.p": "Rest for the youngest, creative and art workshops for the older children.",
    "day.s6.h": "Pick-up",
    "day.s6.p": "A quick word about the day is shared with each parent.",

    "info.eyebrow": "Practical info",
    "info.h2": "Hours, address & enrolment",
    "info.lede": "In Belvédère, just minutes from Racine, Gauthier, Roches Noires and Bourgogne.",
    "info.mf": "Monday – Friday",
    "info.sat": "Saturday",
    "info.sun": "Sunday",
    "info.closed": "Closed",
    "info.addr.h": "Address",
    "info.phone.h": "Phone",
    "info.directions": "Get directions",

    "social.eyebrow": "Stay in touch",
    "social.h2": "Follow classroom life",
    "social.lede": "Photos of workshops, events and open days are shared first on our social channels.",
    "social.ig.tag": "Instagram · 970+ followers",
    "social.fb.tag": "Facebook",
    "social.wa.tag": "WhatsApp",
    "social.wa.name": "+212 6 63 76 17 28",

    "footer.tagline": "A bilingual French–Arabic Montessori nursery and kindergarten in Casablanca.",
    "footer.contact": "Contact",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved",
    "footer.credit": "made by Kamliseo"
  },

  ar: {
    "nav.approach": "منهجنا",
    "nav.spaces": "فضاءاتنا",
    "nav.day": "يومنا",
    "nav.info": "معلومات عملية",
    "nav.contact": "تواصل معنا",

    "hero.eyebrow": "إيلي سكول · الدار البيضاء",
    "hero.h1": "بيئة مُصمَّمة لينمو فيها كل طفل بخطاه الخاصة.",
    "hero.lede": "من الحضانة (0 إلى 3 سنوات) إلى الروض (3 إلى 6 سنوات)، تمنح ورشاتنا المونتيسورية الثنائية اللغة (فرنسية-عربية) الأطفال أدوات حقيقية للاستكشاف والعدّ والقراءة واكتشاف العالم.",
    "hero.cta1": "راسلونا عبر واتساب",
    "hero.cta2": "اتصل بالمدرسة",
    "hero.chip1": "من 0 إلى 6 سنوات",
    "hero.chip2": "ثنائية اللغة: فرنسية / عربية",
    "hero.chip3": "الدار البيضاء، بلفيدير",

    "approach.eyebrow": "منهجنا",
    "approach.h2": "الأدوات أولاً، ثم الشرح",
    "approach.p1": "كل رف مُرتَّب بحيث يصل إليه الطفل بمفرده: خرزات للعدّ، حروف خشنة الملمس لتلمّس الأصوات، وخرائط وكرات أرضية لاكتشاف العالم.",
    "approach.p2": "المربية تلاحظ وتُهيّئ البيئة وتوجّه بدل أن تفرض. يختار كل طفل ورشته، ويكرر الحركة حتى يتقنها، ويتقدّم بالوتيرة التي تناسبه.",
    "approach.tag1": "خرزات وأرقام وصناديق ألوان",
    "approach.tag2": "لغة ثنائية: فرنسية / عربية",
    "approach.tag3": "العدّ إلى غاية 19",
    "approach.pillar1.h": "الحياة العملية",
    "approach.pillar1.p": "الصبّ والنقل وغسل اليدين بمفرده: حركات يومية تبني التركيز والاستقلالية.",
    "approach.pillar2.h": "الحواس واللغة",
    "approach.pillar2.p": "الأصوات والأشكال والألوان تُلمَس أولاً باليدين، بالفرنسية والعربية، قبل أن تُسمّى أو تُكتب.",
    "approach.pillar3.h": "الرياضيات والعالم",
    "approach.pillar3.p": "سلالم الخرز والكرات الأرضية وخرائط الجغرافيا تضع أساس الحساب والفضول تجاه العالم.",

    "spaces.eyebrow": "فضاءاتنا",
    "spaces.h2": "قاعة واحدة، بعوالم متعددة",
    "spaces.lede": "كل ركن في المدرسة مُصمَّم لنشاط محدد، على مقاس الطفل.",
    "spaces.cap1": "قاعة الصغار: الألوان والأشكال والأرقام",
    "spaces.cap2": "الجغرافيا: كرات أرضية وخرائط وأعلام العالم",
    "spaces.cap3": "ركن القراءة والراحة، برفقة الدمى",
    "spaces.cap4": "طاولة الأشغال الفنية والسبورة",
    "spaces.cap5": "زينة موسمية، من صنع الأطفال أنفسهم",
    "spaces.cap6": "مرحاض على مقاس الطفل، ونظافة موجَّهة",
    "spaces.cap7": "طاولات فردية للعمل المركَّز",
    "spaces.cap8": "الفناء الخارجي: الحركة واللعب بالكرات",

    "day.eyebrow": "الحياة اليومية",
    "day.h2": "يوم عادي في المدرسة",
    "day.s1.h": "الاستقبال والوصول الحر",
    "day.s1.p": "يرتّب الأطفال أغراضهم ويختارون ورشتهم الأولى.",
    "day.s2.h": "ورشات فردية",
    "day.s2.p": "الحياة العملية، الحواس، اللغة، الرياضيات: كل طفل يتقدّم بوتيرته، بمفرده أو في مجموعة صغيرة.",
    "day.s3.h": "لقاء جماعي ولغة",
    "day.s3.p": "أناشيد وحوارات بالفرنسية والعربية، في حلقة صغيرة.",
    "day.s4.h": "الغداء والنظافة",
    "day.s4.p": "وجبة مشتركة وغسل اليدين، مع تشجيع دائم على الاستقلالية.",
    "day.s5.h": "القيلولة أو أنشطة هادئة",
    "day.s5.p": "راحة للصغار، وورشات إبداعية وفنية للكبار.",
    "day.s6.h": "المغادرة",
    "day.s6.p": "كلمة عن سير اليوم تُشارَك مع كل والد.",

    "info.eyebrow": "معلومات عملية",
    "info.h2": "التوقيت والعنوان والتسجيل",
    "info.lede": "بحي بلفيدير، على بعد دقائق من راسين وغوتييه والروش نوار وبورگونيا.",
    "info.mf": "الاثنين – الجمعة",
    "info.sat": "السبت",
    "info.sun": "الأحد",
    "info.closed": "مغلق",
    "info.addr.h": "العنوان",
    "info.phone.h": "الهاتف",
    "info.directions": "الاتجاهات نحو المدرسة",

    "social.eyebrow": "ابقوا على تواصل",
    "social.h2": "تابعوا يوميات القسم",
    "social.lede": "صور الورشات والفعاليات والأبواب المفتوحة تُنشر أولاً على صفحاتنا.",
    "social.ig.tag": "إنستغرام · أكثر من 970 متابع",
    "social.fb.tag": "فيسبوك",
    "social.wa.tag": "واتساب",
    "social.wa.name": "06 63 76 17 28",

    "footer.tagline": "حضانة وروض أطفال مونتيسوري، ثنائي اللغة (فرنسية-عربية)، بالدار البيضاء.",
    "footer.contact": "تواصل",
    "footer.follow": "تابعونا",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.credit": "من إنجاز Kamliseo"
  }
};

function applyLanguage(lang){
  const dict = translations[lang] || translations.fr;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("#langSwitch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  localStorage && localStorage.setItem && (() => {
    try { localStorage.setItem("illi-lang", lang); } catch(e) {}
  })();
}

document.addEventListener("DOMContentLoaded", () => {
  // language switch buttons
  document.querySelectorAll("#langSwitch button").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // restore saved language (best effort, ignored if storage blocked)
  let saved = "fr";
  try { saved = (localStorage && localStorage.getItem("illi-lang")) || "fr"; } catch(e) {}
  applyLanguage(saved);

  // mobile nav toggle
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  // footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // highlight the current day in the hours table
  const day = new Date().getDay(); // 0 = Sunday ... 6 = Saturday
  const rows = document.querySelectorAll(".hours-table tr");
  rows.forEach(r => r.classList.remove("today"));
  if (day === 0 && rows[2]) rows[2].classList.add("today");
  else if (day === 6 && rows[1]) rows[1].classList.add("today");
  else if (day >= 1 && day <= 5 && rows[0]) rows[0].classList.add("today");
});
