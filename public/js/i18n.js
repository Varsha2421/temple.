// ═══════════════════════════════════════════════════
// Multi-language i18n system — English, Tamil, Hindi,
// French, German, Japanese, Chinese, Korean, Spanish
// ═══════════════════════════════════════════════════

const SUPPORTED_LANGS = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

const I18N = {
  en: {
    nav_home: 'Home',
    nav_temples: 'All Temples',
    nav_history: 'History',
    nav_timings: 'Timings',
    nav_gallery: 'Gallery',
    nav_booking: 'Book Darshan',
    hero_eyebrow: '✦ Tamil Nadu Temple Portal ✦',
    hero_title: 'Sacred Temples of Tamil Nadu',
    hero_text: 'Explore ancient temples, check darshan timings, view festivals, and book your pilgrimage online — in your language.',
    hero_cta_book: 'Book Darshan',
    hero_cta_timings: 'See Timings',
    status_open: 'Open now',
    status_closed: 'Closed now',
    status_next: 'Next:',
    history_title: 'A History Since the Chola Era',
    history_sub: 'From a modest 9th-century sanctum to a living heritage site — a timeline of how the temple grew over the centuries.',
    timings_title: 'Pooja & Darshan Timings',
    timings_sub: 'Daily ritual schedule and darshan windows.',
    gallery_title: 'Gallery',
    gallery_sub: 'A glimpse of the temple\'s architecture and festivals.',
    booking_title: 'Book Your Darshan',
    booking_sub: 'Reserve a darshan slot in advance.',
    label_name: 'Full name',
    label_phone: 'Phone number',
    label_email: 'Email (optional)',
    label_date: 'Darshan date',
    label_slot: 'Darshan slot',
    label_people: 'Number of people',
    label_type: 'Darshan type',
    submit_booking: 'Confirm booking',
    lookup_title: 'Already booked? Look up your ticket',
    lookup_placeholder: 'Enter booking ID (e.g. TMP-XXXXX)',
    lookup_btn: 'Find ticket',
    ticket_confirmed: 'Booking confirmed',
    ticket_cancel: 'Cancel this booking',
    ticket_cancelled: 'This booking has been cancelled.',
    foreign_note_title: 'For foreign visitors',
    foreign_note_text: 'Modest dress covering shoulders and knees is requested. Footwear is left outside the sanctum.',
    // Temples page keys
    tp_title: 'All Tamil Nadu Temples',
    tp_sub: 'Explore 12 sacred temples across Tamil Nadu — timings, festivals, prasadam, gallery & booking.',
    tp_search: 'Search temples by name, location, deity or tag…',
    tp_tab_all: 'All Temples',
    tp_tab_shiva: 'Shiva',
    tp_tab_vishnu: 'Vishnu',
    tp_tab_murugan: 'Murugan',
    tp_tab_shakti: 'Shakti',
    tp_deity: 'Deity',
    tp_timings: 'Darshan Timings',
    tp_festivals: 'Famous Festivals',
    tp_prasadam: 'Famous Prasadam',
    tp_distance: 'Distance & How to Reach',
    tp_gallery: 'Gallery',
    tp_book_now: 'Book Darshan at This Temple',
    tp_view_details: 'View Full Details',
    tp_established: 'Established',
    tp_entry: 'Entry Fee',
    tp_airport: 'Nearest Airport',
    tp_railway: 'Nearest Railway',
    tp_from_chennai: 'From Chennai',
    tp_from_madurai: 'From Madurai',
    lang_select: 'Language',
  },
  ta: {
    nav_home: 'முகப்பு',
    nav_temples: 'அனைத்து கோயில்கள்',
    nav_history: 'வரலாறு',
    nav_timings: 'நேரங்கள்',
    nav_gallery: 'படக்காட்சி',
    nav_booking: 'தரிசன பதிவு',
    hero_eyebrow: '✦ தமிழ்நாடு கோயில் வலைதளம் ✦',
    hero_title: 'தமிழ்நாட்டின் புனித கோயில்கள்',
    hero_text: 'பழமையான கோயில்களை ஆராயுங்கள், தரிசன நேரங்களைப் பார்க்கவும், திருவிழாக்களைக் காணுங்கள், உங்கள் புனிதப் பயணத்தை ஆன்லைனில் பதிவு செய்யுங்கள்.',
    hero_cta_book: 'தரிசனம் பதிவு செய்',
    hero_cta_timings: 'நேரங்களைப் பார்',
    status_open: 'இப்போது திறந்துள்ளது',
    status_closed: 'இப்போது மூடப்பட்டுள்ளது',
    status_next: 'அடுத்தது:',
    history_title: 'சோழர் காலம் முதல் ஒரு வரலாறு',
    history_sub: '9-ஆம் நூற்றாண்டு சிறிய கருவறையில் இருந்து இன்று வரை.',
    timings_title: 'பூஜை மற்றும் தரிசன நேரங்கள்',
    timings_sub: 'தினசரி பூஜை அட்டவணை மற்றும் தரிசன நேரங்கள்.',
    gallery_title: 'படக்காட்சி',
    gallery_sub: 'கோயிலின் கட்டிடக்கலை மற்றும் திருவிழாக்களின் ஒரு காட்சி.',
    booking_title: 'உங்கள் தரிசனத்தை பதிவு செய்யுங்கள்',
    booking_sub: 'முன்கூட்டியே ஒரு தரிசன நேரத்தை பதிவு செய்யுங்கள்.',
    label_name: 'முழு பெயர்',
    label_phone: 'தொலைபேசி எண்',
    label_email: 'மின்னஞ்சல் (விருப்பத்தேர்வு)',
    label_date: 'தரிசன தேதி',
    label_slot: 'தரிசன நேரம்',
    label_people: 'நபர்கள் எண்ணிக்கை',
    label_type: 'தரிசன வகை',
    submit_booking: 'பதிவை உறுதிப்படுத்து',
    lookup_title: 'ஏற்கனவே பதிவு செய்துள்ளீர்களா?',
    lookup_placeholder: 'பதிவு ஐடியை உள்ளிடவும் (எ.கா. TMP-XXXXX)',
    lookup_btn: 'டிக்கெட்டைக் கண்டுபிடி',
    ticket_confirmed: 'பதிவு உறுதி செய்யப்பட்டது',
    ticket_cancel: 'இந்த பதிவை ரத்து செய்',
    ticket_cancelled: 'இந்த பதிவு ரத்து செய்யப்பட்டது.',
    foreign_note_title: 'வெளிநாட்டு பார்வையாளர்களுக்கு',
    foreign_note_text: 'தோள்கள் மற்றும் முழங்கால்களை மூடும் எளிமையான ஆடை அணிய பரிந்துரைக்கப்படுகிறது.',
    tp_title: 'அனைத்து தமிழ்நாடு கோயில்கள்',
    tp_sub: 'தமிழ்நாடு முழுவதும் 12 புனித கோயில்களை ஆராயுங்கள்.',
    tp_search: 'கோயில்களைத் தேடுங்கள்…',
    tp_tab_all: 'அனைத்தும்',
    tp_tab_shiva: 'சிவன்',
    tp_tab_vishnu: 'விஷ்ணு',
    tp_tab_murugan: 'முருகன்',
    tp_tab_shakti: 'சக்தி',
    tp_deity: 'தெய்வம்',
    tp_timings: 'தரிசன நேரங்கள்',
    tp_festivals: 'புகழ்பெற்ற திருவிழாக்கள்',
    tp_prasadam: 'புகழ்பெற்ற பிரசாதம்',
    tp_distance: 'தூரம் மற்றும் வழி',
    tp_gallery: 'படக்காட்சி',
    tp_book_now: 'இந்த கோயிலில் தரிசனம் பதிவு செய்',
    tp_view_details: 'முழு விவரங்களைக் காண',
    tp_established: 'நிறுவப்பட்டது',
    tp_entry: 'நுழைவுக் கட்டணம்',
    tp_airport: 'அருகிலுள்ள விமான நிலையம்',
    tp_railway: 'அருகிலுள்ள ரயில் நிலையம்',
    tp_from_chennai: 'சென்னையிலிருந்து',
    tp_from_madurai: 'மதுரையிலிருந்து',
    lang_select: 'மொழி',
  },
  hi: {
    nav_home: 'होम',
    nav_temples: 'सभी मंदिर',
    nav_history: 'इतिहास',
    nav_timings: 'समय',
    nav_gallery: 'गैलरी',
    nav_booking: 'दर्शन बुक करें',
    hero_eyebrow: '✦ तमिलनाडु मंदिर पोर्टल ✦',
    hero_title: 'तमिलनाडु के पवित्र मंदिर',
    hero_text: 'प्राचीन मंदिरों का अन्वेषण करें, दर्शन का समय जांचें, त्योहार देखें, और ऑनलाइन बुक करें।',
    hero_cta_book: 'दर्शन बुक करें',
    hero_cta_timings: 'समय देखें',
    status_open: 'अभी खुला है',
    status_closed: 'अभी बंद है',
    status_next: 'अगला:',
    tp_title: 'सभी तमिलनाडु मंदिर',
    tp_sub: 'तमिलनाडु के 12 पवित्र मंदिरों का अन्वेषण करें — समय, त्योहार, प्रसाद, गैलरी और बुकिंग।',
    tp_search: 'मंदिर खोजें — नाम, स्थान, देवता…',
    tp_tab_all: 'सभी मंदिर',
    tp_tab_shiva: 'शिव',
    tp_tab_vishnu: 'विष्णु',
    tp_tab_murugan: 'मुरुगन',
    tp_tab_shakti: 'शक्ति',
    tp_deity: 'देवता',
    tp_timings: 'दर्शन समय',
    tp_festivals: 'प्रसिद्ध त्योहार',
    tp_prasadam: 'प्रसिद्ध प्रसाद',
    tp_distance: 'दूरी और कैसे पहुंचें',
    tp_gallery: 'गैलरी',
    tp_book_now: 'इस मंदिर में दर्शन बुक करें',
    tp_view_details: 'पूरा विवरण देखें',
    tp_established: 'स्थापित',
    tp_entry: 'प्रवेश शुल्क',
    tp_airport: 'निकटतम हवाई अड्डा',
    tp_railway: 'निकटतम रेलवे स्टेशन',
    tp_from_chennai: 'चेन्नई से',
    tp_from_madurai: 'मदुरै से',
    lang_select: 'भाषा',
    booking_title: 'अपना दर्शन बुक करें',
    booking_sub: 'अग्रिम में एक दर्शन स्लॉट आरक्षित करें।',
    label_name: 'पूरा नाम',
    label_phone: 'फ़ोन नंबर',
    label_email: 'ईमेल (वैकल्पिक)',
    label_date: 'दर्शन तिथि',
    label_slot: 'दर्शन स्लॉट',
    label_people: 'लोगों की संख्या',
    label_type: 'दर्शन प्रकार',
    submit_booking: 'बुकिंग पक्की करें',
    lookup_title: 'पहले से बुक किया? अपना टिकट देखें',
    lookup_btn: 'टिकट खोजें',
    ticket_confirmed: 'बुकिंग पक्की हो गई',
    ticket_cancel: 'इस बुकिंग को रद्द करें',
    ticket_cancelled: 'यह बुकिंग रद्द कर दी गई है।',
    foreign_note_title: 'विदेशी आगंतुकों के लिए',
    foreign_note_text: 'कंधे और घुटने ढकने वाले विनम्र कपड़े पहनें। गर्भगृह के बाहर जूते उतारें।',
    timings_title: 'पूजा और दर्शन समय',
    gallery_title: 'गैलरी',
    history_title: 'चोल युग से एक इतिहास',
  },
  fr: {
    nav_home: 'Accueil',
    nav_temples: 'Tous les Temples',
    nav_history: 'Histoire',
    nav_timings: 'Horaires',
    nav_gallery: 'Galerie',
    nav_booking: 'Réserver Darshan',
    hero_title: 'Temples Sacrés du Tamil Nadu',
    hero_text: 'Explorez les temples anciens, consultez les horaires, découvrez les festivals, et réservez en ligne.',
    hero_cta_book: 'Réserver Darshan',
    tp_title: 'Tous les Temples du Tamil Nadu',
    tp_sub: 'Explorez 12 temples sacrés à travers le Tamil Nadu.',
    tp_search: 'Rechercher des temples…',
    tp_tab_all: 'Tous',
    tp_tab_shiva: 'Shiva',
    tp_tab_vishnu: 'Vishnu',
    tp_tab_murugan: 'Murugan',
    tp_tab_shakti: 'Shakti',
    tp_deity: 'Divinité',
    tp_timings: 'Horaires de Darshan',
    tp_festivals: 'Festivals Célèbres',
    tp_prasadam: 'Prasadam Célèbre',
    tp_distance: 'Distance & Comment y Aller',
    tp_gallery: 'Galerie',
    tp_book_now: 'Réserver un Darshan',
    tp_view_details: 'Voir les détails',
    tp_established: 'Fondé',
    tp_entry: 'Tarif d\'entrée',
    lang_select: 'Langue',
    booking_title: 'Réservez votre Darshan',
    label_name: 'Nom complet',
    label_phone: 'Numéro de téléphone',
    label_email: 'Email (optionnel)',
    label_date: 'Date du Darshan',
    label_people: 'Nombre de personnes',
    submit_booking: 'Confirmer la réservation',
    lookup_title: 'Déjà réservé ? Retrouvez votre billet',
    lookup_btn: 'Trouver le billet',
    status_open: 'Ouvert maintenant',
    status_closed: 'Fermé maintenant',
  },
  de: {
    nav_home: 'Startseite',
    nav_temples: 'Alle Tempel',
    nav_history: 'Geschichte',
    nav_timings: 'Zeiten',
    nav_gallery: 'Galerie',
    nav_booking: 'Darshan Buchen',
    hero_title: 'Heilige Tempel von Tamil Nadu',
    hero_text: 'Erkunden Sie alte Tempel, prüfen Sie die Zeiten, entdecken Sie Feste, und buchen Sie online.',
    tp_title: 'Alle Tamil Nadu Tempel',
    tp_sub: 'Entdecken Sie 12 heilige Tempel in Tamil Nadu.',
    tp_search: 'Tempel suchen…',
    tp_tab_all: 'Alle',
    tp_book_now: 'Darshan Buchen',
    tp_view_details: 'Details anzeigen',
    tp_deity: 'Gottheit',
    tp_timings: 'Darshan-Zeiten',
    tp_festivals: 'Berühmte Feste',
    tp_prasadam: 'Berühmtes Prasadam',
    tp_distance: 'Entfernung & Anreise',
    lang_select: 'Sprache',
    booking_title: 'Buchen Sie Ihren Darshan',
    label_name: 'Vollständiger Name',
    label_phone: 'Telefonnummer',
    submit_booking: 'Buchung bestätigen',
    status_open: 'Jetzt geöffnet',
    status_closed: 'Jetzt geschlossen',
  },
  ja: {
    nav_home: 'ホーム',
    nav_temples: 'すべての寺院',
    nav_history: '歴史',
    nav_timings: '時間',
    nav_gallery: 'ギャラリー',
    nav_booking: 'ダルシャン予約',
    hero_title: 'タミル・ナードゥの聖なる寺院',
    hero_text: '古代の寺院を探索し、時間を確認し、祭りを発見し、オンラインで予約しましょう。',
    tp_title: 'タミル・ナードゥの全寺院',
    tp_sub: 'タミル・ナードゥ全土の12の聖なる寺院を探索。',
    tp_search: '寺院を検索…',
    tp_tab_all: 'すべて',
    tp_book_now: 'ダルシャンを予約',
    tp_view_details: '詳細を見る',
    tp_deity: '神格',
    tp_timings: 'ダルシャン時間',
    tp_festivals: '有名な祭り',
    tp_prasadam: '有名なプラサード',
    tp_distance: '距離とアクセス',
    lang_select: '言語',
    booking_title: 'ダルシャンを予約',
    label_name: '氏名',
    label_phone: '電話番号',
    submit_booking: '予約を確定',
    status_open: '開場中',
    status_closed: '閉場中',
  },
  zh: {
    nav_home: '首页',
    nav_temples: '所有寺庙',
    nav_history: '历史',
    nav_timings: '时间',
    nav_gallery: '画廊',
    nav_booking: '预订达善',
    hero_title: '泰米尔纳德邦的神圣寺庙',
    tp_title: '泰米尔纳德邦所有寺庙',
    tp_sub: '探索泰米尔纳德邦的12座神圣寺庙。',
    tp_search: '搜索寺庙…',
    tp_tab_all: '全部',
    tp_book_now: '预订达善',
    tp_view_details: '查看详情',
    tp_deity: '神明',
    tp_timings: '达善时间',
    tp_festivals: '著名节日',
    tp_prasadam: '著名圣食',
    tp_distance: '距离与交通',
    lang_select: '语言',
    booking_title: '预订您的达善',
    label_name: '全名',
    label_phone: '电话号码',
    submit_booking: '确认预订',
    status_open: '目前开放',
    status_closed: '目前关闭',
  },
  ko: {
    nav_home: '홈',
    nav_temples: '모든 사원',
    nav_history: '역사',
    nav_timings: '시간',
    nav_gallery: '갤러리',
    nav_booking: '다르샨 예약',
    hero_title: '타밀나두의 신성한 사원',
    tp_title: '타밀나두 모든 사원',
    tp_sub: '타밀나두 전역의 12개 신성한 사원을 탐험하세요.',
    tp_search: '사원 검색…',
    tp_tab_all: '전체',
    tp_book_now: '다르샨 예약',
    tp_view_details: '상세보기',
    tp_deity: '신',
    tp_timings: '다르샨 시간',
    tp_festivals: '유명한 축제',
    tp_prasadam: '유명한 프라사드',
    tp_distance: '거리 & 교통편',
    lang_select: '언어',
  },
  es: {
    nav_home: 'Inicio',
    nav_temples: 'Todos los Templos',
    nav_history: 'Historia',
    nav_timings: 'Horarios',
    nav_gallery: 'Galería',
    nav_booking: 'Reservar Darshan',
    hero_title: 'Templos Sagrados de Tamil Nadu',
    tp_title: 'Todos los Templos de Tamil Nadu',
    tp_sub: 'Explore 12 templos sagrados en Tamil Nadu.',
    tp_search: 'Buscar templos…',
    tp_tab_all: 'Todos',
    tp_book_now: 'Reservar Darshan',
    tp_view_details: 'Ver detalles',
    tp_deity: 'Deidad',
    tp_timings: 'Horarios de Darshan',
    tp_festivals: 'Festivales Famosos',
    tp_prasadam: 'Prasadam Famoso',
    tp_distance: 'Distancia y Cómo Llegar',
    lang_select: 'Idioma',
    booking_title: 'Reserve su Darshan',
    label_name: 'Nombre completo',
    label_phone: 'Número de teléfono',
    submit_booking: 'Confirmar reserva',
    status_open: 'Abierto ahora',
    status_closed: 'Cerrado ahora',
  },
};

const I18N_STATE = { lang: localStorage.getItem('templeLang') || 'en' };

function t(key) {
  const dict = I18N[I18N_STATE.lang] || I18N.en;
  return dict[key] || I18N.en[key] || key;
}

function applyI18n() {
  const dict = I18N[I18N_STATE.lang] || I18N.en;
  document.documentElement.lang = I18N_STATE.lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] || I18N.en[key]) el.textContent = dict[key] || I18N.en[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] || I18N.en[key]) el.placeholder = dict[key] || I18N.en[key];
  });
  // Update lang dropdown button label
  const currentLang = SUPPORTED_LANGS.find(l => l.code === I18N_STATE.lang) || SUPPORTED_LANGS[0];
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = currentLang.flag + ' ' + currentLang.label;
}

function setLang(code) {
  I18N_STATE.lang = code;
  localStorage.setItem('templeLang', code);
  applyI18n();
  // Close dropdown if open
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('open');
}

function buildLangDropdown() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  // Make a wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'lang-dropdown-wrap';
  wrapper.style.position = 'relative';
  btn.parentElement.insertBefore(wrapper, btn);
  wrapper.appendChild(btn);

  // Create dropdown
  const dd = document.createElement('div');
  dd.id = 'langDropdown';
  dd.className = 'lang-dropdown';
  dd.innerHTML = SUPPORTED_LANGS.map(l => `
    <button class="lang-option${l.code === I18N_STATE.lang ? ' active' : ''}" data-lang="${l.code}">
      <span class="lang-flag">${l.flag}</span>
      <span class="lang-name">${l.label}</span>
    </button>
  `).join('');
  wrapper.appendChild(dd);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dd.classList.toggle('open');
  });
  dd.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    dd.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    setLang(opt.dataset.lang);
  });
  document.addEventListener('click', () => dd.classList.remove('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
  buildLangDropdown();
});
