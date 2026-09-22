
(function(){
  if (window.location.protocol !== 'file:') {
    var s = document.getElementById('remote-jspdf');
    if (s && s.dataset.remoteSrc) s.src = s.dataset.remoteSrc;
  }
})();

;

function toggleMobileNav(btn) {
  var nav = btn.closest('nav');
  if (!nav) return;
  var links = nav.querySelector('.nav-links');
  if (!links) return;
  var isOpen = links.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
}
document.addEventListener('click', function(e) {
  document.querySelectorAll('.nav-links.open').forEach(function(links) {
    var nav = links.closest('nav');
    if (nav && !nav.contains(e.target)) {
      links.classList.remove('open');
      var burger = nav.querySelector('.nav-burger');
      if (burger) burger.classList.remove('open');
    }
  });
});
(function() {
  var current = 0;
  var total = 6;
  var timer;

  function goToSlide(n) {
    current = n;
    var carousel = document.getElementById('lepointCarousel');
    var dots = document.querySelectorAll('.lepoint-dot');
    if (carousel) carousel.style.transform = 'translateX(-' + (n * 16.6667) + '%)';
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === n);
    });
  }

  window.goToSlide = goToSlide;

  function lepointPrev() {
    current = (current - 1 + total) % total;
    goToSlide(current);
  }

  function lepointNext() {
    current = (current + 1) % total;
    goToSlide(current);
  }

  window.lepointPrev = lepointPrev;
  window.lepointNext = lepointNext;
})();

;

function toggleMobileNav(btn) {
  var nav = btn.closest('nav');
  if (!nav) return;
  var links = nav.querySelector('.nav-links');
  if (!links) return;
  var isOpen = links.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
}
document.addEventListener('click', function(e) {
  document.querySelectorAll('.nav-links.open').forEach(function(links) {
    var nav = links.closest('nav');
    if (nav && !nav.contains(e.target)) {
      links.classList.remove('open');
      var burger = nav.querySelector('.nav-burger');
      if (burger) burger.classList.remove('open');
    }
  });
});
(function() {
  var current = 0;
  var total = 6;
  var timer;

  function goToSlide(n) {
    current = n;
    var carousel = document.getElementById('lepointCarousel');
    var dots = document.querySelectorAll('.lepoint-dot');
    if (carousel) carousel.style.transform = 'translateX(-' + (n * 16.6667) + '%)';
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === n);
    });
  }

  window.goToSlide = goToSlide;

  function lepointPrev() {
    current = (current - 1 + total) % total;
    goToSlide(current);
  }

  function lepointNext() {
    current = (current + 1) % total;
    goToSlide(current);
  }

  window.lepointPrev = lepointPrev;
  window.lepointNext = lepointNext;
})();

;

function filterVideos(category, btn) {
  var filters = btn.closest('.filters');
  if (!filters) return;

  var isEnglish = filters.id === 'video-filters-en';
  var grid = document.getElementById(isEnglish ? 'video-grid-en' : 'video-grid');
  var emptyMsg = document.getElementById(isEnglish ? 'video-empty-msg-en' : 'video-empty-msg');

  filters.querySelectorAll('.filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  var visibleCount = 0;
  if (grid) {
    grid.querySelectorAll('.video-card').forEach(function(card) {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (emptyMsg) {
    emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

function toggleDescription(descEl) {
  var descText = descEl.querySelector('.video-description-text');
  var descFull = descEl.querySelector('.video-description-full');
  
  if (!descText || !descFull) return;
  
  if (descFull.style.display === 'none') {
    descText.style.display = 'none';
    descFull.style.display = 'inline';
    descEl.classList.add('expanded');
  } else {
    descText.style.display = 'inline';
    descFull.style.display = 'none';
    descEl.classList.remove('expanded');
  }
}

;

function filterVideos(category, btn) {
  var filters = btn.closest('.filters');
  if (!filters) return;

  var isEnglish = filters.id === 'video-filters-en';
  var grid = document.getElementById(isEnglish ? 'video-grid-en' : 'video-grid');
  var emptyMsg = document.getElementById(isEnglish ? 'video-empty-msg-en' : 'video-empty-msg');

  filters.querySelectorAll('.filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  var visibleCount = 0;
  if (grid) {
    grid.querySelectorAll('.video-card').forEach(function(card) {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (emptyMsg) {
    emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

;

function toggleAccordion(btn) {
  const item = btn.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
}

function filterArticles(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.accordion-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
      item.classList.remove('open');
    }
  });
}

;

function toggleAccordion(btn) {
  const item = btn.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
}

function filterArticles(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.accordion-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
      item.classList.remove('open');
    }
  });
}

;

function toggleReadMore(id, btn) {
  var el = document.getElementById(id);
  if (!el) return;
  var isHidden = el.style.display === 'none' || el.style.display === '';
  el.style.display = isHidden ? 'block' : 'none';
  var page = btn.closest('.page');
  var isEn = page && page.getAttribute('data-lang') === 'en';
  btn.textContent = isHidden ? (isEn ? 'Read less' : 'Lire moins') : (isEn ? 'Read more' : 'Lire la suite');
  btn.classList.toggle('is-open', isHidden);
  btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}
window.toggleReadMore = toggleReadMore;

function hydrateEnglishImages() {
  document.querySelectorAll('img[data-shared-image-page]').forEach(function(img) {
    const page = img.getAttribute('data-shared-image-page');
    const index = parseInt(img.getAttribute('data-shared-image-index'), 10);
    const sources = document.querySelectorAll('#page-' + page + ' img');
    const source = sources[index];
    if (!source) return;
    ['src','srcset','sizes','data-full'].forEach(function(attr) {
      if (source.hasAttribute(attr)) img.setAttribute(attr, source.getAttribute(attr));
    });
  });
}

var PAGE_URLS = {"home": "/", "home-en": "/en/", "syndrome-facettaire": "/syndrome-facettaire/", "syndrome-facettaire-en": "/en/facet-syndrome/", "questionnaire-facettaire": "/questionnaire-facettaire/", "questionnaire-facettaire-en": "/en/facet-questionnaire/", "kystes-tarlov": "/kystes-de-tarlov/", "kystes-tarlov-en": "/en/tarlov-cysts/", "medical-education": "/medical-education/", "medical-education-en": "/en/medical-education/", "contributions": "/articles-scientifiques/", "contributions-en": "/en/scientific-articles/", "contact": "/contact/", "contact-en": "/en/contact/"};
function pageUrl(name) {
  var path = PAGE_URLS[name];
  if (!path) return null;
  /* relative to <base href>, which points to the site root on every page */
  return path.replace(/^\//, '') || './';
}
function showPage(name) {
  const target = document.getElementById('page-' + name);
  if (!target) {
    var url = pageUrl(name);
    if (url) window.location.href = url;
    return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  target.classList.add('active');
  window.scrollTo(0, 0);

  const isEnglish = name.endsWith('-en');
  document.documentElement.lang = isEnglish ? 'en' : 'fr';
  updateFooterLanguage(isEnglish ? 'en' : 'fr');


  if (name === 'medical-education' || name === 'medical-education-en') {
    openMedicalDisclaimer();
  } else {
    closeMedicalDisclaimer();
  }
}

function switchLanguage(lang) {
  try {
    localStorage.setItem('srour-language-preference', lang);
  } catch (e) {}

  const active = document.querySelector('.page.active');
  if (!active) return;
  let name = active.id.replace(/^page-/, '');
  const base = name.replace(/-en$/, '');
  showPage(lang === 'en' ? base + '-en' : base);
}

function getSavedLanguagePreference() {
  try {
    const saved = localStorage.getItem('srour-language-preference');
    return saved === 'fr' || saved === 'en' ? saved : null;
  } catch (e) {
    return null;
  }
}

function getBrowserLanguageFallback() {
  const browserLanguage = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browserLanguage.startsWith('fr') ? 'fr' : 'en';
}

function showHomeForLanguage(lang) {
  showPage(lang === 'fr' ? 'home' : 'home-en');
}

function detectVisitorLanguageByLocation() {
  /* Language choice: a saved preference first, otherwise the browser language
     (French browser: French site; any other language: English site).
     No IP geolocation and no call to a third-party service. */
  const saved = getSavedLanguagePreference();
  showHomeForLanguage(saved || getBrowserLanguageFallback());
}

function updateFooterLanguage(lang) {
  const footer = document.querySelector('body > footer');
  if (!footer) return;
  const spans = footer.querySelectorAll('span');
  spans.forEach(function(span) {
    const text = span.textContent.trim();
    if (text === 'Neurochirurgien' || text === 'Neurosurgeon') {
      span.textContent = lang === 'en' ? 'Neurosurgeon' : 'Neurochirurgien';
    }
    if (text.includes('Tous droits réservés') || text.includes('All rights reserved')) {
      span.textContent = lang === 'en'
        ? '© 2026 Dr. Robin Srour — All rights reserved'
        : '© 2026 Dr. Robin Srour — Tous droits réservés';
    }
  });
}

function getActiveMedicalDisclaimer() {
  return document.querySelector('.page.active .medical-disclaimer');
}

function openMedicalDisclaimer() {
  closeMedicalDisclaimer();
  const modal = getActiveMedicalDisclaimer();
  if (!modal) return;
  modal.classList.remove('is-hidden');
  document.body.classList.add('medical-disclaimer-open');
  const firstButton = modal.querySelector('.medical-disclaimer-btn--yes');
  if (firstButton) setTimeout(() => firstButton.focus(), 0);
}

function closeMedicalDisclaimer() {
  document.querySelectorAll('.medical-disclaimer').forEach(function(modal) {
    modal.classList.add('is-hidden');
  });
  document.body.classList.remove('medical-disclaimer-open');
}

function acceptMedicalDisclaimer() {
  closeMedicalDisclaimer();
}

function declineMedicalDisclaimer() {
  const active = document.querySelector('.page.active');
  const isEnglish = active && active.id.endsWith('-en');
  closeMedicalDisclaimer();
  showPage(isEnglish ? 'home-en' : 'home');
}




function openContactForm(lang) {
  showPage(lang === 'en' ? 'contact-en' : 'contact');
}

function closeContactForm() {
  /* Contact is now a dedicated page, so there is no modal to close. */
}

/* Point de réception des formulaires (FormSubmit).
   Pour que l'adresse ne figure nulle part dans le code source, renseigner FORMSUBMIT_ALIAS
   avec l'alias aléatoire fourni par FormSubmit après activation du formulaire
   (ex. 'a1b2c3d4e5f6'). Tant qu'il est vide, la cible encodée ci-dessous est utilisée. */
var FORMSUBMIT_ALIAS = '';
function formsubmitEndpoint() {
  var target = FORMSUBMIT_ALIAS || atob('c3JvdXJAZnJlZS5mcg==');
  return 'https://formsubmit.co/ajax/' + target;
}

async function handleContactPageSubmit(event, lang) {
  event.preventDefault();

  var form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  var isEn = lang === 'en';
  var button = document.getElementById('contactPageSubmitButton-' + lang);
  var status = document.getElementById('contactPageFormStatus-' + lang);
  var verified = document.getElementById('contactPageSliderVerified-' + lang);

  if (!verified || verified.value !== 'true') {
    status.textContent = isEn
      ? 'Please complete the security verification.'
      : 'Veuillez compléter la vérification de sécurité.';
    status.className = 'training-form-status show error';
    return false;
  }

  var originalText = button.textContent;
  button.disabled = true;
  button.textContent = isEn ? 'Sending…' : 'Envoi…';
  status.className = 'training-form-status';
  status.textContent = '';

  var formData = new FormData(form);
  var payload = {};
  formData.forEach(function(value, key) {
    if (key !== '_honey' || value) payload[key] = value;
  });

  payload['_subject'] = isEn
    ? 'New contact message — Dr Robin Srour'
    : 'Nouveau message — Dr Robin Srour';
  payload['_template'] = 'table';

  try {
    var response = await fetch(formsubmitEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    var result = await response.json().catch(function() { return {}; });
    if (!response.ok || result.success === 'false' || result.success === false) {
      throw new Error(result.message || 'Submission failed');
    }

    status.textContent = isEn
      ? 'Thank you. Your message has been sent.'
      : 'Merci. Votre message a été envoyé.';
    status.className = 'training-form-status show';

    form.reset();
    verified.value = 'false';
    button.disabled = true;
    button.style.opacity = '.5';
    button.style.cursor = 'not-allowed';

    var slider = document.getElementById('contactPageSlider-' + lang);
    if (slider) {
      var handle = slider.querySelector('.slider-handle');
      if (handle) handle.style.left = '0px';
    }
  } catch (error) {
    status.textContent = isEn
      ? 'The message could not be sent. Please try again.'
      : "Le message n'a pas pu être envoyé. Veuillez réessayer.";
    status.className = 'training-form-status show error';
  } finally {
    button.textContent = originalText;
  }

  return false;
}


function toggleTrainingProfessionOther() {
  var group = document.getElementById('trainingOtherProfessionGroup');
  var input = document.getElementById('training-other-profession');
  var other = document.querySelector('#trainingModal input[name="I am a..."][value="Other"]');
  if (!group || !input || !other) return;

  if (other.checked) {
    group.classList.remove('is-hidden');
    input.required = true;
  } else {
    group.classList.add('is-hidden');
    input.required = false;
    input.value = '';
  }
}

function openTrainingForm(lang) {
  var modal = document.getElementById('trainingModal');
  if (!modal) return;
  var isEn = lang === 'en';
  document.getElementById('training-language').value = isEn ? 'EN' : 'FR';
  document.getElementById('trainingModalTitle').textContent = isEn ? 'Request training' : 'Demander une formation';
  document.getElementById('trainingModalDesc').textContent = isEn
    ? 'Complete all fields below. Your request will be sent directly by email to Dr Robin Srour.'
    : 'Complétez tous les champs ci-dessous. Votre demande sera envoyée directement par e-mail au Dr Robin Srour.';
  document.getElementById('trainingCountryLabel').textContent = isEn ? 'Country' : 'Pays';
  document.getElementById('trainingCityLabel').textContent = isEn ? 'City' : 'Ville';
  document.getElementById('trainingHospitalLabel').textContent = isEn ? 'Hospital / Clinic' : 'Hôpital / Clinique';
  document.getElementById('trainingFirstNameLabel').textContent = isEn ? 'First name' : 'Prénom';
  document.getElementById('trainingLastNameLabel').textContent = isEn ? 'Last name' : 'Nom';
  document.getElementById('trainingPhoneLabel').textContent = isEn ? 'Phone' : 'Téléphone';
  document.getElementById('trainingEmailLabel').textContent = isEn ? 'E-mail address' : 'Adresse e-mail';
  document.getElementById('trainingProfessionLabel').textContent = isEn ? 'I am a...' : 'Je suis...';
  document.getElementById('trainingProfessionOrthopedic').textContent = isEn ? 'Orthopedic surgeon' : 'Chirurgien orthopédiste';
  document.getElementById('trainingProfessionNeurosurgeon').textContent = isEn ? 'Neurosurgeon' : 'Neurochirurgien';
  document.getElementById('trainingProfessionPain').textContent = isEn ? 'Interventional radiologist' : 'Radiologue interventionnel';
  document.getElementById('trainingProfessionOther').textContent = isEn ? 'Other' : 'Autre';
  document.getElementById('trainingOtherProfessionLabel').textContent = isEn ? 'Please specify' : 'Veuillez préciser';
  document.getElementById('training-other-profession').placeholder = isEn ? 'Your profession' : 'Votre profession';
  toggleTrainingProfessionOther();
  document.getElementById('trainingConsentText').textContent = isEn
    ? 'By submitting this form, I agree that the information provided may be used to contact me regarding this training request.'
    : "En envoyant ce formulaire, j'accepte que les informations fournies soient utilisées pour me contacter au sujet de cette demande de formation.";
  document.getElementById('trainingSubmitButton').textContent = isEn ? 'Send request' : 'Envoyer la demande';
  // Update slider label
  var trainingSliderLabel = document.querySelector('#trainingSlider').closest('.training-form-group').querySelector('label');
  if (trainingSliderLabel) {
    trainingSliderLabel.textContent = isEn ? 'Security verification' : 'Vérification de sécurité';
  }
  document.getElementById('trainingPrivacy').textContent = isEn
    ? 'The information entered in this form is secure and sent directly.'
    : 'Les informations saisies dans ce formulaire sont sécurisées et envoyées directement.';
  var status = document.getElementById('trainingFormStatus');
  status.className = 'training-form-status';
  status.textContent = '';
  modal.classList.remove('is-hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('training-modal-open');
  setTimeout(function() { document.getElementById('training-country').focus(); }, 0);
}

function closeTrainingForm() {
  var modal = document.getElementById('trainingModal');
  if (!modal) return;
  modal.classList.add('is-hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('training-modal-open');
}

async function handleTrainingSubmit(event) {
  event.preventDefault();
  var form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  var lang = document.getElementById('training-language').value === 'EN' ? 'en' : 'fr';
  var button = document.getElementById('trainingSubmitButton');
  var status = document.getElementById('trainingFormStatus');
  var originalText = button.textContent;
  button.disabled = true;
  button.textContent = lang === 'en' ? 'Sending…' : 'Envoi…';
  status.className = 'training-form-status';
  status.textContent = '';

  var formData = new FormData(form);
  var payload = {};
  formData.forEach(function(value, key) {
    if (key !== '_honey' || value) payload[key] = value;
  });
  payload['_subject'] = lang === 'en'
    ? 'New training request — Dr Robin Srour'
    : 'Nouvelle demande de formation — Dr Robin Srour';
  payload['_template'] = 'table';

  try {
    var response = await fetch(formsubmitEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
    var result = await response.json().catch(function() { return {}; });
    if (!response.ok || result.success === 'false' || result.success === false) {
      throw new Error(result.message || 'Submission failed');
    }
    status.textContent = lang === 'en'
      ? 'Thank you. Your training request has been sent.'
      : 'Merci. Votre demande de formation a été envoyée.';
    status.className = 'training-form-status show';
    form.reset();
    toggleTrainingProfessionOther();
    document.getElementById('training-language').value = lang === 'en' ? 'EN' : 'FR';
  } catch (error) {
    status.textContent = lang === 'en'
      ? 'The request could not be sent. Please try again.'
      : "La demande n'a pas pu être envoyée. Veuillez réessayer.";
    status.className = 'training-form-status show error';
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
  return false;
}

function getFacetQuestionnaireData(lang) {
  var form = document.getElementById('facet-q-' + lang);
  if (!form) return null;
  var data = { patient: [], clinical: [], patientScore: 0, clinicalScore: 0, patientAnswered: 0, clinicalAnswered: 0 };
  form.querySelectorAll('.questionnaire-item').forEach(function(item) {
    var labelEl = item.querySelector('.questionnaire-label');
    var checked = item.querySelector('input[type="radio"]:checked');
    var firstInput = item.querySelector('input[type="radio"]');
    if (!labelEl || !firstInput) return;
    var part = firstInput.dataset.part === 'clinical' ? 'clinical' : 'patient';
    var answer = checked ? checked.value : null;
    var answerText = checked && checked.closest('label') && checked.closest('label').querySelector('span')
      ? checked.closest('label').querySelector('span').textContent.trim()
      : (lang === 'en' ? 'Not answered' : 'Non renseigné');
    data[part].push({ question: labelEl.textContent.trim(), answer: answer, answerText: answerText });
    if (answer !== null) {
      if (part === 'clinical') {
        data.clinicalAnswered += 1;
        data.clinicalScore += Number(answer);
      } else {
        data.patientAnswered += 1;
        data.patientScore += Number(answer);
      }
    }
  });
  data.totalScore = data.patientScore + data.clinicalScore;
  data.totalAnswered = data.patientAnswered + data.clinicalAnswered;
  return data;
}

function cleanPdfText(value) {
  return String(value || '')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u00A0/g, ' ');
}

function downloadFacetResults(lang) {
  var data = getFacetQuestionnaireData(lang);
  if (!data) return;
  if (!window.jspdf || !window.jspdf.jsPDF) {
    downloadFacetResultsHtml(lang, data);
    return;
  }

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({orientation: 'portrait', unit: 'mm', format: 'a4'});
  var W = 210, H = 297, M = 18, contentW = W - (M * 2), y = 18;
  var orange = [255,127,17], black = [10,10,10], muted = [118,118,118], grey = [244,244,242], rule = [222,222,222];
  var isEn = lang === 'en';

  function drawPageHeader(firstPage) {
    doc.setFillColor.apply(doc, orange);
    doc.rect(0, 0, W, 4, 'F');
    doc.setTextColor.apply(doc, black);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(firstPage ? 19 : 11);
    doc.text('DR. ROBIN SROUR', M, firstPage ? 18 : 13);
    doc.setTextColor.apply(doc, orange);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(firstPage ? 9 : 7.5);
    doc.text(isEn ? 'NEUROSURGEON' : 'NEUROCHIRURGIEN', M, firstPage ? 24 : 18);
    if (!firstPage) {
      doc.setDrawColor.apply(doc, rule);
      doc.line(M, 22, W - M, 22);
      y = 30;
    }
  }

  function footer() {
    var page = doc.internal.getNumberOfPages();
    doc.setDrawColor.apply(doc, rule);
    doc.line(M, H - 14, W - M, H - 14);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor.apply(doc, muted);
    doc.text('Dr. Robin Srour', M, H - 9);
    doc.text((isEn ? 'Page ' : 'Page ') + page, W - M, H - 9, {align: 'right'});
  }

  function ensureSpace(needed) {
    if (y + needed <= H - 22) return;
    footer();
    doc.addPage();
    drawPageHeader(false);
  }

  function wrapped(text, size, width, style, color, lineHeight) {
    text = cleanPdfText(text);
    doc.setFont('helvetica', style || 'normal');
    doc.setFontSize(size);
    doc.setTextColor.apply(doc, color || black);
    var lines = doc.splitTextToSize(text, width);
    var lh = lineHeight || (size * 0.42);
    doc.text(lines, M, y);
    y += lines.length * lh;
    return lines.length * lh;
  }

  function scoreBox(x, w, label, score, meta) {
    doc.setFillColor.apply(doc, grey);
    doc.roundedRect(x, y, w, 26, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor.apply(doc, muted);
    doc.text(cleanPdfText(label).toUpperCase(), x + 4, y + 6);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.setTextColor.apply(doc, black);
    doc.text(score, x + 4, y + 15);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor.apply(doc, muted);
    doc.text(meta, x + 4, y + 21.5);
  }

  function sectionTitle(title) {
    ensureSpace(16);
    y += 2;
    doc.setTextColor.apply(doc, orange);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(cleanPdfText(title).toUpperCase(), M, y);
    y += 5;
    doc.setDrawColor.apply(doc, orange);
    doc.setLineWidth(0.7);
    doc.line(M, y, W - M, y);
    y += 7;
  }

  function itemRow(index, item) {
    var qLines = doc.splitTextToSize(cleanPdfText(item.question), contentW - 28);
    var rowH = Math.max(11, qLines.length * 4.1 + 6);
    ensureSpace(rowH + 2);
    doc.setFillColor(250,250,249);
    doc.roundedRect(M, y - 3, contentW, rowH, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor.apply(doc, orange);
    doc.text(String(index).padStart(2, '0'), M + 4, y + 2);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor.apply(doc, black);
    doc.text(qLines, M + 14, y + 2);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor.apply(doc, item.answer === null ? muted : black);
    doc.text(cleanPdfText(item.answerText), W - M - 4, y + 2, {align: 'right'});
    y += rowH + 2;
  }

  drawPageHeader(true);
  y = 35;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor.apply(doc, black);
  var title = isEn ? 'DLF QUESTIONNAIRE RESULTS' : 'RESULTATS DU QUESTIONNAIRE DLF';
  doc.text(title, M, y);
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor.apply(doc, muted);
  doc.text(isEn ? 'Diagnosis of low back pain of facet origin' : 'Diagnostic des lombalgies d\'origine facettaire', M, y);
  y += 7;
  var completedAt = new Date();
  var dateText = completedAt.toLocaleDateString(isEn ? 'en-GB' : 'fr-FR', {year:'numeric', month:'long', day:'numeric'});
  var timeText = completedAt.toLocaleTimeString(isEn ? 'en-GB' : 'fr-FR', {hour:'2-digit', minute:'2-digit'});
  doc.setFontSize(8.5);
  doc.text((isEn ? 'Completed on: ' + cleanPdfText(dateText) + ' at ' + timeText : 'Complété le : ' + cleanPdfText(dateText) + ' à ' + timeText.replace(':', 'h')), M, y);
  y += 10;

  var gap = 4, boxW = (contentW - gap * 2) / 3;
  scoreBox(M, boxW, isEn ? 'Symptoms' : 'Symptomatologie', data.patientAnswered ? data.patientScore + ' / 7' : '- / 7', data.patientAnswered + ' / 7 ' + (isEn ? 'answered' : 'renseignés'));
  scoreBox(M + boxW + gap, boxW, isEn ? 'Clinical exam' : 'Examen clinique', data.clinicalAnswered ? data.clinicalScore + ' / 9' : '- / 9', data.clinicalAnswered + ' / 9 ' + (isEn ? 'answered' : 'renseignés'));
  scoreBox(M + (boxW + gap) * 2, boxW, 'Total', data.totalAnswered ? data.totalScore + ' / 16' : '- / 16', data.totalAnswered + ' / 16 ' + (isEn ? 'answered' : 'renseignés'));
  y += 34;

  doc.setFillColor(255,247,239);
  var note = isEn
    ? 'Important: the source DLF questionnaire provides no diagnostic score threshold. These results do not establish or exclude facet syndrome and should be discussed with a physician. The clinical examination section should be performed and interpreted by a healthcare professional.'
    : 'Important : le questionnaire DLF source ne fournit aucun seuil diagnostique. Ces résultats ne permettent ni de confirmer ni d\'exclure un syndrome facettaire et doivent être discutés avec un médecin. La partie Examen clinique doit être réalisée et interprétée par un professionnel de santé.';
  /* Set the font before measuring, so the wrapping matches the rendered size. */
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  var notePad = 7;
  var noteLines = doc.splitTextToSize(cleanPdfText(note), contentW - notePad * 2);
  var noteH = noteLines.length * 4.2 + 6.5;
  doc.roundedRect(M, y - 3, contentW, noteH, 1.5, 1.5, 'F');
  doc.setTextColor.apply(doc, muted);
  doc.text(noteLines, M + notePad, y + 3);
  y += noteH + 5;

  sectionTitle(isEn ? 'Symptoms' : 'Symptomatologie');
  data.patient.forEach(function(item, i) { itemRow(i + 1, item); });
  sectionTitle(isEn ? 'Clinical examination' : 'Examen clinique');
  data.clinical.forEach(function(item, i) { itemRow(i + 8, item); });
  footer();

  doc.save(isEn ? 'dlf-questionnaire-results-dr-robin-srour.pdf' : 'questionnaire-dlf-resultats-dr-robin-srour.pdf');
}

function printFacetResults(lang) {
  var data = getFacetQuestionnaireData(lang);
  if (!data) return;
  var isEn = lang === 'en';
  function esc(s) { return String(s || '').replace(/[&<>"']/g, function(c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function rows(items, start) {
    return items.map(function(item, i) {
      return '<div class="row"><div class="n">' + String(start + i).padStart(2,'0') + '</div><div class="q">' + esc(item.question) + '</div><div class="a">' + esc(item.answerText) + '</div></div>';
    }).join('');
  }
  var note = isEn
    ? 'The source DLF questionnaire provides no diagnostic score threshold. These results do not establish or exclude facet syndrome and should be discussed with a physician. The clinical examination section should be performed and interpreted by a healthcare professional.'
    : 'Le questionnaire DLF source ne fournit aucun seuil diagnostique. Ces résultats ne permettent ni de confirmer ni d\'exclure un syndrome facettaire et doivent être discutés avec un médecin. La partie Examen clinique doit être réalisée et interprétée par un professionnel de santé.';
  var html = '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + (isEn ? 'DLF Questionnaire Results' : 'Résultats du questionnaire DLF') + '</title><style>' +
    'body{margin:0;font-family:Arial,sans-serif;color:#0A0A0A;background:#fff}.top{height:6px;background:#FF7F11}.wrap{max-width:900px;margin:auto;padding:42px}.brand{font-size:28px;font-weight:800;letter-spacing:.05em}.role{color:#FF7F11;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-top:4px}.title{font-size:34px;font-weight:800;margin:38px 0 6px;text-transform:uppercase}.sub{color:#767676}.scores{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}.score{background:#F4F4F2;padding:18px}.score b{display:block;font-size:26px;margin:8px 0}.label{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#767676}.note{background:#fff7ef;padding:18px;color:#767676;line-height:1.55}.section{margin-top:34px;font-size:18px;font-weight:800;text-transform:uppercase;color:#FF7F11;border-bottom:2px solid #FF7F11;padding-bottom:8px}.row{display:grid;grid-template-columns:42px 1fr 130px;gap:14px;padding:15px 12px;border-bottom:1px solid #DEDEDE;align-items:start}.n{font-weight:700;color:#FF7F11}.q{line-height:1.45}.a{font-weight:700;text-align:right}.foot{margin-top:36px;padding-top:14px;border-top:1px solid #DEDEDE;color:#767676;font-size:12px}@media(max-width:650px){.wrap{padding:28px 18px}.scores{grid-template-columns:1fr}.row{grid-template-columns:32px 1fr}.a{grid-column:2;text-align:left}}@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}' +
    '</style></head><body><div class="top"></div><div class="wrap"><div class="brand">DR. ROBIN SROUR</div><div class="role">' + (isEn ? 'Neurosurgeon' : 'Neurochirurgien') + '</div><div class="title">' + (isEn ? 'DLF Questionnaire Results' : 'Résultats du questionnaire DLF') + '</div><div class="sub">' + (isEn ? 'Diagnosis of low back pain of facet origin' : 'Diagnostic des lombalgies d\'origine facettaire') + '</div><div class="scores"><div class="score"><span class="label">' + (isEn ? 'Symptoms' : 'Symptomatologie') + '</span><b>' + (data.patientAnswered ? data.patientScore : '—') + ' / 7</b><span>' + data.patientAnswered + ' / 7 ' + (isEn ? 'answered' : 'renseignés') + '</span></div><div class="score"><span class="label">' + (isEn ? 'Clinical exam' : 'Examen clinique') + '</span><b>' + (data.clinicalAnswered ? data.clinicalScore : '—') + ' / 9</b><span>' + data.clinicalAnswered + ' / 9 ' + (isEn ? 'answered' : 'renseignés') + '</span></div><div class="score"><span class="label">Total</span><b>' + (data.totalAnswered ? data.totalScore : '—') + ' / 16</b><span>' + data.totalAnswered + ' / 16 ' + (isEn ? 'answered' : 'renseignés') + '</span></div></div><div class="note">' + esc(note) + '</div><div class="section">' + (isEn ? 'Symptoms' : 'Symptomatologie') + '</div>' + rows(data.patient,1) + '<div class="section">' + (isEn ? 'Clinical examination' : 'Examen clinique') + '</div>' + rows(data.clinical,8) + '<div class="foot">Dr. Robin Srour</div></div></body></html>';
  var w = window.open('', '_blank');
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(function(){ w.print(); }, 250);
}

function downloadFacetResultsHtml(lang, data) {
  var isEn = lang === 'en';
  function esc(s) { return String(s || '').replace(/[&<>"']/g, function(c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function rows(items, start) {
    return items.map(function(item, i) {
      return '<div class="row"><div class="n">' + String(start + i).padStart(2,'0') + '</div><div class="q">' + esc(item.question) + '</div><div class="a">' + esc(item.answerText) + '</div></div>';
    }).join('');
  }
  var note = isEn
    ? 'The source DLF questionnaire provides no diagnostic score threshold. These results do not establish or exclude facet syndrome and should be discussed with a physician. The clinical examination section should be performed and interpreted by a healthcare professional.'
    : 'Le questionnaire DLF source ne fournit aucun seuil diagnostique. Ces résultats ne permettent ni de confirmer ni d\'exclure un syndrome facettaire et doivent être discutés avec un médecin. La partie Examen clinique doit être réalisée et interprétée par un professionnel de santé.';
  var html = '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + (isEn ? 'DLF Questionnaire Results' : 'Résultats du questionnaire DLF') + '</title><style>' +
    'body{margin:0;font-family:Arial,sans-serif;color:#0A0A0A;background:#fff}.top{height:6px;background:#FF7F11}.wrap{max-width:900px;margin:auto;padding:42px}.brand{font-size:28px;font-weight:800;letter-spacing:.05em}.role{color:#FF7F11;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-top:4px}.title{font-size:34px;font-weight:800;margin:38px 0 6px;text-transform:uppercase}.sub{color:#767676}.scores{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}.score{background:#F4F4F2;padding:18px}.score b{display:block;font-size:26px;margin:8px 0}.label{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#767676}.note{background:#fff7ef;padding:18px;color:#767676;line-height:1.55;font-size:13px;max-width:100%;box-sizing:border-box;word-wrap:break-word;overflow-wrap:break-word;word-break:break-word;overflow:hidden}.section{margin-top:34px;font-size:18px;font-weight:800;text-transform:uppercase;color:#FF7F11;border-bottom:2px solid #FF7F11;padding-bottom:8px}.row{display:grid;grid-template-columns:42px 1fr 130px;gap:14px;padding:15px 12px;border-bottom:1px solid #DEDEDE;align-items:start}.n{font-weight:700;color:#FF7F11}.q{line-height:1.45}.a{font-weight:700;text-align:right}.foot{margin-top:36px;padding-top:14px;border-top:1px solid #DEDEDE;color:#767676;font-size:12px}@media(max-width:650px){.wrap{padding:28px 18px}.scores{grid-template-columns:1fr}.row{grid-template-columns:32px 1fr}.a{grid-column:2;text-align:left}.note{padding:14px;font-size:12px}}' +
    '</style></head><body><div class="top"></div><div class="wrap"><div class="brand">DR. ROBIN SROUR</div><div class="role">' + (isEn ? 'Neurosurgeon' : 'Neurochirurgien') + '</div><div class="title">' + (isEn ? 'DLF Questionnaire Results' : 'Résultats du questionnaire DLF') + '</div><div class="sub">' + (isEn ? 'Diagnosis of low back pain of facet origin' : 'Diagnostic des lombalgies d\'origine facettaire') + '</div><div class="scores"><div class="score"><span class="label">' + (isEn ? 'Symptoms' : 'Symptomatologie') + '</span><b>' + (data.patientAnswered ? data.patientScore : '—') + ' / 7</b><span>' + data.patientAnswered + ' / 7 ' + (isEn ? 'answered' : 'renseignés') + '</span></div><div class="score"><span class="label">' + (isEn ? 'Clinical exam' : 'Examen clinique') + '</span><b>' + (data.clinicalAnswered ? data.clinicalScore : '—') + ' / 9</b><span>' + data.clinicalAnswered + ' / 9 ' + (isEn ? 'answered' : 'renseignés') + '</span></div><div class="score"><span class="label">Total</span><b>' + (data.totalAnswered ? data.totalScore : '—') + ' / 16</b><span>' + data.totalAnswered + ' / 16 ' + (isEn ? 'answered' : 'renseignés') + '</span></div></div><div class="note">' + esc(note) + '</div><div class="section">' + (isEn ? 'Symptoms' : 'Symptomatologie') + '</div>' + rows(data.patient,1) + '<div class="section">' + (isEn ? 'Clinical examination' : 'Examen clinique') + '</div>' + rows(data.clinical,8) + '<div class="foot">Dr. Robin Srour</div></div></body></html>';
  var blob = new Blob([html], {type:'text/html;charset=utf-8'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = isEn ? 'dlf-questionnaire-results-dr-robin-srour.html' : 'questionnaire-dlf-resultats-dr-robin-srour.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeTrainingForm();
});

document.addEventListener('click', function(e) {
  var modal = document.getElementById('trainingModal');
  if (modal && e.target === modal) closeTrainingForm();
});


function updateFacetQuestionnaire(lang) {
  var form = document.getElementById('facet-q-' + lang);
  if (!form) return;
  var patient = {score: 0, answered: 0, max: 7};
  var clinical = {score: 0, answered: 0, max: 9};
  form.querySelectorAll('input[type="radio"]:checked').forEach(function(input) {
    var bucket = input.dataset.part === 'clinical' ? clinical : patient;
    bucket.score += Number(input.value || 0);
    bucket.answered += 1;
  });
  var totalScore = patient.score + clinical.score;
  var totalAnswered = patient.answered + clinical.answered;
  var patientScore = document.getElementById('facet-' + lang + '-patient-score');
  var clinicalScore = document.getElementById('facet-' + lang + '-clinical-score');
  var total = document.getElementById('facet-' + lang + '-total-score');
  var patientMeta = document.getElementById('facet-' + lang + '-patient-meta');
  var clinicalMeta = document.getElementById('facet-' + lang + '-clinical-meta');
  var totalMeta = document.getElementById('facet-' + lang + '-total-meta');
  if (patientScore) patientScore.textContent = patient.answered ? patient.score + ' / 7' : '— / 7';
  if (clinicalScore) clinicalScore.textContent = clinical.answered ? clinical.score + ' / 9' : '— / 9';
  if (total) total.textContent = totalAnswered ? totalScore + ' / 16' : '— / 16';
  if (lang === 'en') {
    if (patientMeta) patientMeta.textContent = patient.answered + ' / 7 answered';
    if (clinicalMeta) clinicalMeta.textContent = clinical.answered + ' / 9 answered';
    if (totalMeta) totalMeta.textContent = totalAnswered + ' / 16 answered';
  } else {
    if (patientMeta) patientMeta.textContent = patient.answered + ' / 7 renseignés';
    if (clinicalMeta) clinicalMeta.textContent = clinical.answered + ' / 9 renseignés';
    if (totalMeta) totalMeta.textContent = totalAnswered + ' / 16 renseignés';
  }
}

function resetFacetQuestionnaire(lang) {
  var form = document.getElementById('facet-q-' + lang);
  if (!form) return;
  form.reset();
  updateFacetQuestionnaire(lang);
  window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
}


function facetWizardElements(lang) {
  var form = document.getElementById('facet-q-' + lang);
  if (!form) return null;
  return {
    form: form,
    steps: Array.prototype.slice.call(form.querySelectorAll('.questionnaire-step')),
    results: form.querySelector('.questionnaire-results--wizard'),
    label: document.getElementById('facet-' + lang + '-progress-label'),
    percent: document.getElementById('facet-' + lang + '-progress-percent'),
    fill: document.getElementById('facet-' + lang + '-progress-fill'),
    ticks: Array.prototype.slice.call(document.querySelectorAll('#facet-' + lang + '-progress-steps span'))
  };
}

function initFacetWizard(lang) {
  var ui = facetWizardElements(lang);
  if (!ui || !ui.steps.length) return;

  /* Mobile-safe questionnaire controls. The Next button stays tappable;
     the handler validates the currently selected answer before advancing. */
  if (!ui.form.dataset.wizardListenersBound) {
    ui.form.addEventListener('change', function(event) {
      if (event.target && event.target.matches('input[type="radio"]')) {
        facetWizardAnswered(lang);
      }
    });
    ui.form.addEventListener('input', function(event) {
      if (event.target && event.target.matches('.questionnaire-step--location input')) {
        var st = event.target.closest('.questionnaire-step');
        var nb = st.querySelector('.questionnaire-wizard-next');
        var ok = facetStepAnswered(st);
        if (nb) { nb.classList.toggle('is-unanswered', !ok); nb.setAttribute('aria-disabled', ok ? 'false' : 'true'); }
      }
    });
    ui.form.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && event.target && event.target.matches('.questionnaire-step--location input')) {
        event.preventDefault();
        facetWizardNext(lang);
      }
    });
    ui.form.addEventListener('click', function(event) {
      var nextButton = event.target.closest && event.target.closest('.questionnaire-wizard-next');
      if (nextButton) {
        event.preventDefault();
        facetWizardNext(lang);
      }
    });
    ui.form.dataset.wizardListenersBound = 'true';
  }

  if (!ui.form.dataset.currentStep) ui.form.dataset.currentStep = '0';
  var idx = Number(ui.form.dataset.currentStep || 0);
  if (idx < 0 || idx >= ui.steps.length) idx = 0;
  if (ui.results) ui.results.hidden = true;
  showFacetQuestion(lang, idx, false);
}

function showFacetQuestion(lang, index, shouldScroll) {
  var ui = facetWizardElements(lang);
  if (!ui) return;
  index = Math.max(0, Math.min(index, ui.steps.length - 1));
  ui.form.dataset.currentStep = String(index);
  ui.steps.forEach(function(step, i) { step.hidden = i !== index; });
  if (ui.results) ui.results.hidden = true;

  var questionCount = ui.steps.filter(function(st) { return !st.classList.contains('questionnaire-step--location'); }).length;
  var isLocation = ui.steps[index].classList.contains('questionnaire-step--location');
  var stepNumber = Math.min(index + 1, questionCount);
  var pct = isLocation ? 100 : Math.round((stepNumber / questionCount) * 100);
  if (ui.label) ui.label.textContent = isLocation
    ? (lang === 'en' ? 'Last step' : 'Dernière étape')
    : (lang === 'en' ? 'Question ' + stepNumber + ' of ' + questionCount : 'Question ' + stepNumber + ' sur ' + questionCount);
  if (ui.percent) ui.percent.textContent = pct + '%';
  if (ui.fill) ui.fill.style.width = pct + '%';
  ui.ticks.forEach(function(tick, i) {
    tick.classList.toggle('is-complete', i < index);
    tick.classList.toggle('is-current', i === index);
  });

  var step = ui.steps[index];
  var back = step.querySelector('.questionnaire-wizard-back');
  if (back) back.style.visibility = index === 0 ? 'hidden' : 'visible';
  var next = step.querySelector('.questionnaire-wizard-next');
  if (next) {
    var answered = facetStepAnswered(step);
    next.disabled = false;
    next.classList.toggle('is-unanswered', !answered);
    next.setAttribute('aria-disabled', answered ? 'false' : 'true');
  }

  if (shouldScroll !== false) {
    var progress = ui.form.querySelector('.questionnaire-progress');
    if (progress) window.scrollTo({top: progress.getBoundingClientRect().top + window.scrollY - 120, behavior:'smooth'});
  }
}

/* A question step is answered when a radio is checked; the location step when both fields are filled. */
function facetStepAnswered(step) {
  if (!step) return false;
  if (step.classList.contains('questionnaire-step--location')) {
    var inputs = step.querySelectorAll('input[type="text"]');
    return Array.prototype.every.call(inputs, function(i) { return i.value.trim().length > 0; });
  }
  return !!step.querySelector('input[type="radio"]:checked');
}

function facetWizardAnswered(lang) {
  updateFacetQuestionnaire(lang);
  var ui = facetWizardElements(lang);
  if (!ui) return;
  var idx = Number(ui.form.dataset.currentStep || 0);
  var step = ui.steps[idx];
  if (!step) return;
  var next = step.querySelector('.questionnaire-wizard-next');
  if (next) {
    var answered = !!step.querySelector('input[type="radio"]:checked');
    next.disabled = false;
    next.classList.toggle('is-unanswered', !answered);
    next.setAttribute('aria-disabled', answered ? 'false' : 'true');
  }
  
  /* Auto-advance after a short delay when answer is selected */
  var answered = !!step.querySelector('input[type="radio"]:checked');
  if (answered) {
    setTimeout(function() {
      facetWizardNext(lang);
    }, 800);
  }
}

function facetWizardNext(lang) {
  var ui = facetWizardElements(lang);
  if (!ui) return;
  var idx = Number(ui.form.dataset.currentStep || 0);
  var step = ui.steps[idx];
  if (!step || !facetStepAnswered(step)) {
    if (step && step.classList.contains('questionnaire-step--location')) {
      var empty = step.querySelector('input[type="text"]:invalid, input[type="text"][value=""]');
      var firstEmpty = Array.prototype.find.call(step.querySelectorAll('input[type="text"]'), function(i) { return !i.value.trim(); });
      if (firstEmpty) firstEmpty.focus();
    }
    return;
  }
  if (idx < ui.steps.length - 1) {
    showFacetQuestion(lang, idx + 1, true);
  } else {
    showFacetResults(lang);
  }
}

function facetWizardPrev(lang) {
  var ui = facetWizardElements(lang);
  if (!ui) return;
  var idx = Number(ui.form.dataset.currentStep || 0);
  if (idx > 0) showFacetQuestion(lang, idx - 1, true);
}

/* Notification e-mail to Dr Srour when a DLF questionnaire is completed:
   timestamp, every answer and the scores. No personal data is collected. */
async function notifyFacetQuestionnaire(lang) {
  var ui = facetWizardElements(lang);
  if (!ui || ui.form.dataset.notified === 'true') return;
  ui.form.dataset.notified = 'true';
  var data = getFacetQuestionnaireData(lang);
  if (!data) return;
  var isEn = lang === 'en';
  var now = new Date();
  var payload = {};
  payload['_subject'] = (isEn ? 'DLF questionnaire completed' : 'Questionnaire DLF complété') + ' — Dr Robin Srour';
  payload['_template'] = 'table';
  payload['01. Date et heure (heure de Paris)'] = now.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  payload['02. Horodatage ISO (UTC)'] = now.toISOString();
  payload['03. Langue du questionnaire'] = isEn ? 'EN' : 'FR';
  payload['04. Score patient'] = data.patientScore + ' / 7 (' + data.patientAnswered + ' réponses)';
  payload['05. Score examen clinique'] = data.clinicalScore + ' / 9 (' + data.clinicalAnswered + ' réponses)';
  payload['06. Score total'] = data.totalScore + ' / 16';
  var n = 7;
  data.patient.concat(data.clinical).forEach(function(item, i) {
    var key = String(n + i).padStart(2, '0') + '. Q' + (i + 1) + ' ' + item.question;
    payload[key] = item.answerText + (item.answer !== null ? ' (' + item.answer + ')' : '');
  });
  var k = n + data.patient.length + data.clinical.length;
  var pad = function(v) { return String(v).padStart(2, '0'); };
  /* Deliberately anonymous: no IP, no geolocation, no device identifier.
     Only the browser's time zone and language, as a coarse indication of origin. */
  var cityEl = document.getElementById('facet-' + lang + '-city');
  var countryEl = document.getElementById('facet-' + lang + '-country');
  payload[pad(k) + '. Ville (déclarée)'] = cityEl && cityEl.value.trim() ? cityEl.value.trim() : 'non renseignée';
  payload[pad(k + 1) + '. Pays (déclaré)'] = countryEl && countryEl.value.trim() ? countryEl.value.trim() : 'non renseigné';
  payload[pad(k + 2) + '. Fuseau horaire du navigateur'] = Intl.DateTimeFormat().resolvedOptions().timeZone || 'inconnu';
  payload[pad(k + 3) + '. Langue du navigateur'] = navigator.language || 'inconnue';
  try {
    await fetch(formsubmitEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {}
}

function showFacetResults(lang) {
  var ui = facetWizardElements(lang);
  if (!ui) return;
  updateFacetQuestionnaire(lang);
  notifyFacetQuestionnaire(lang);
  ui.steps.forEach(function(step) { step.hidden = true; });
  if (ui.results) ui.results.hidden = false;
  if (ui.label) ui.label.textContent = lang === 'en' ? 'Questionnaire complete' : 'Questionnaire terminé';
  if (ui.percent) ui.percent.textContent = '100%';
  if (ui.fill) ui.fill.style.width = '100%';
  ui.ticks.forEach(function(tick) { tick.classList.add('is-complete'); tick.classList.remove('is-current'); });
  var progress = ui.form.querySelector('.questionnaire-progress');
  if (progress) window.scrollTo({top: progress.getBoundingClientRect().top + window.scrollY - 120, behavior:'smooth'});
}

/* Wizard-aware reset: scores stay out of view until the questionnaire is completed again. */
function resetFacetQuestionnaire(lang) {
  var ui = facetWizardElements(lang);
  if (!ui) return;
  ui.form.reset();
  ui.form.dataset.currentStep = '0';
  ui.form.dataset.notified = 'false';
  updateFacetQuestionnaire(lang);
  if (ui.results) ui.results.hidden = true;
  showFacetQuestion(lang, 0, true);
}

const validPages = [
  'home','syndrome-facettaire','questionnaire-facettaire','kystes-tarlov','medical-education','contributions','contact',
  'home-en','syndrome-facettaire-en','questionnaire-facettaire-en','kystes-tarlov-en','medical-education-en','contributions-en','contact-en'
];


function localPreviewFrameMessage(frame, service) {
  frame.removeAttribute('src');
  frame.srcdoc = '<!doctype html><html><body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#f4f4f2;color:#767676;font-family:Arial,sans-serif;text-align:center;padding:24px;box-sizing:border-box"><div><strong style="display:block;color:#0a0a0a;margin-bottom:8px">' + service + '</strong>External content is disabled in local Preview.<br>It loads normally on the live website.</div></body></html>';
}

function hydrateLinkedInEmbeds() {
  const isLocalPreview = window.location.protocol === 'file:';
  document.querySelectorAll('iframe[data-external-src]').forEach(function(frame) {
    if (isLocalPreview) {
      localPreviewFrameMessage(frame, 'LinkedIn');
      return;
    }
    const embedUrl = frame.getAttribute('data-external-src');
    if (embedUrl) frame.src = embedUrl;
  });
}

function hydrateYouTubeEmbeds() {
  const isLocalPreview = window.location.protocol === 'file:';
  document.querySelectorAll('iframe[data-youtube-video]').forEach(function(frame) {
    const videoId = frame.getAttribute('data-youtube-video');
    if (!videoId) return;
    if (isLocalPreview) {
      localPreviewFrameMessage(frame, 'YouTube');
      return;
    }
    const pageOrigin = window.location.origin && window.location.origin !== 'null' ? window.location.origin : '';
    const params = new URLSearchParams({ rel: '0' });
    if (pageOrigin) params.set('origin', pageOrigin);
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.src = 'https://www.youtube.com/embed/' + encodeURIComponent(videoId) + '?' + params.toString();
  });
}

window.addEventListener('DOMContentLoaded', function() {
  hydrateEnglishImages();
  hydrateLinkedInEmbeds();
  hydrateYouTubeEmbeds();
  initFacetWizard('fr');
  initFacetWizard('en');
  var current = document.body.getAttribute('data-page');
  var hash = window.location.hash.replace('#', '');

  /* Legacy links of the form /#kystes-tarlov: send them to the real page. */
  if (hash && validPages.includes(hash) && hash !== current) {
    window.location.replace(pageUrl(hash));
    return;
  }
  if (hash) history.replaceState(null, '', window.location.pathname + window.location.search);

  /* On the French home page only: honour a saved language choice, otherwise the browser language. */
  if (current === 'home') {
    var lang = getSavedLanguagePreference() || getBrowserLanguageFallback();
    if (lang === 'en') { window.location.replace(pageUrl('home-en')); return; }
  }
  showPage(current);
});
function toggleAccordion(btn) {
  btn.closest('.accordion-item').classList.toggle('open');
}
function filterArticles(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.style.display = (category === 'all' || item.dataset.category === category) ? '' : 'none';
    if (item.style.display === 'none') item.classList.remove('open');
  });
}



;

/* Domaines v1 — staggered row scroll animation */
(function() {
  var section = document.getElementById('specialites');
  if (!section) return;
  var items = section.querySelectorAll('.sv1-item');
  section.classList.add('animate-ready');
  items.forEach(function(item, i) {
    item.style.transitionDelay = (i * 0.06) + 's';
  });
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      items.forEach(function(item) { item.classList.add('is-visible'); });
      obs.unobserve(section);
    });
  }, { threshold: 0.1 });
  obs.observe(section);
})();

/* Domaines v2 — staggered card scroll animation (FR + EN) */
(function() {
  ['specialites-v2', 'specialites-v2-en'].forEach(function(sectionId) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    var cards = section.querySelectorAll('.sv2-card--anim');
    section.classList.add('animate-ready');
    cards.forEach(function(card, i) {
      card.style.transitionDelay = (i * 0.07) + 's';
    });
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (!e.isIntersecting) return;
        cards.forEach(function(card) { card.classList.add('is-visible'); });
        obs.unobserve(section);
      });
    }, { threshold: 0.1 });
    obs.observe(section);
  });
})();

/* Count-up animation for all three chiffres sections */
(function() {
  function formatNum(n, sep) {
    if (!sep) return Math.round(n).toString();
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }

  function animateCount(el) {
    var target   = parseInt(el.dataset.count, 10);
    var prefix   = el.dataset.prefix  || '';
    var suffix   = el.dataset.suffix  || '';
    var sep      = el.dataset.sep     || '';
    var duration = 1400;

    // Large numbers (≥1000): start at 25000, jump by 1000 each frame tick
    if (target >= 1000) {
      var current = 25000;
      var step = 1000;
      var interval = Math.max(30, duration / ((target - current) / step));
      el.textContent = prefix + formatNum(current, sep) + suffix;
      var timer = setInterval(function() {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = prefix + formatNum(current, sep) + suffix;
      }, interval);
      return;
    }

    // Small numbers: linear count from 0
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = prefix + formatNum(Math.floor(progress * target), sep) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + formatNum(target, sep) + suffix;
    }
    requestAnimationFrame(step);
  }

  // Trigger count-up for all three stat sections
  ['apropos-v2', 'chiffres-v3', 'chiffres-v4'].forEach(function(id) {
    var section = document.getElementById(id);
    if (!section) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (!e.isIntersecting) return;
        section.querySelectorAll('[data-count]').forEach(function(el, i) {
          setTimeout(function() { animateCount(el); }, i * 150);
        });
        if (id === 'chiffres-v4' || id === 'apropos-v2') section.classList.add('is-visible');
        obs.unobserve(section);
      });
    }, { threshold: 0.25 });
    obs.observe(section);
  });
})();
(function() {
  var tl = document.querySelector('.innov-htimeline');
  if (tl) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    obs.observe(tl);
  }

  var stairs = document.querySelectorAll('#innovation-stair, #innovation-stair-en');
  if (stairs.length) {
    var obs2 = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs2.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    stairs.forEach(function(stair) { obs2.observe(stair); });
  }
})();

// Slider bot protection
(function() {
  function initSlider(sliderId, verifiedInputId, submitButtonId) {
    var slider = document.getElementById(sliderId);
    var verifiedInput = document.getElementById(verifiedInputId);
    var submitButton = document.getElementById(submitButtonId);
    
    if (!slider || !verifiedInput || !submitButton) return;
    
    var handle = slider.querySelector('.slider-handle');
    var track = slider.querySelector('div > div:nth-child(2)');
    var isDragging = false;
    var startX = 0;
    var maxDrag = 0;
    
    function handleDragStart(e) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
      handle.style.cursor = 'grabbing';
    }
    
    function handleDragMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      
      var currentX = e.clientX || e.touches[0].clientX;
      var diff = currentX - startX;
      var trackWidth = track.offsetWidth - handle.offsetWidth;
      var newPos = Math.max(0, Math.min(diff, trackWidth));
      
      handle.style.left = newPos + 'px';
      maxDrag = Math.max(maxDrag, newPos);
      
      // Check if fully dragged (90% of track width)
      if (maxDrag >= trackWidth * 0.9) {
        verifiedInput.value = 'true';
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
        handle.style.background = '#4CAF50';
        handle.textContent = '✓';
        isDragging = false;
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);
      }
    }
    
    function handleDragEnd() {
      isDragging = false;
      handle.style.cursor = 'grab';
    }
    
    handle.addEventListener('dragstart', function(e) {
      e.dataTransfer.effectAllowed = 'move';
      handleDragStart(e);
      document.addEventListener('dragover', function(e) { e.preventDefault(); });
      document.addEventListener('drop', function(e) { e.preventDefault(); });
    });
    
    handle.addEventListener('mousedown', handleDragStart);
    handle.addEventListener('touchstart', handleDragStart);
    
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
    
    // Prevent form submission if not verified
    submitButton.addEventListener('click', function(e) {
      if (verifiedInput.value !== 'true') {
        e.preventDefault();
        return false;
      }
    });
  }
  
  initSlider('contactPageSlider-fr', 'contactPageSliderVerified-fr', 'contactPageSubmitButton-fr');
  initSlider('contactPageSlider-en', 'contactPageSliderVerified-en', 'contactPageSubmitButton-en');
  initSlider('trainingSlider', 'trainingSliderVerified', 'trainingSubmitButton');
})();

;

(function(){
  var lb = document.getElementById('lpLightbox');
  var lbImg = document.getElementById('lpLightboxImg');
  var lbClose = document.getElementById('lpClose');
  var lbStage = document.getElementById('lpLightboxStage');
  var highlight = document.getElementById('lpColmarHighlight');
  var prevBtn = document.getElementById('lpPrev');
  var nextBtn = document.getElementById('lpNext');
  var carouselImages = [];
  var carouselIndex = -1;
  var touchStartX = null;

  /* The six replacement full-size images already contain the correct Colmar highlight. */
  function setColmarHighlight() {
    highlight.classList.remove('is-visible');
  }

  function showCarouselNav(show) {
    prevBtn.classList.toggle('is-visible', !!show);
    nextBtn.classList.toggle('is-visible', !!show);
  }

  function displayCarouselImage(img) {
    if (!img) return;
    lbImg.src = img.dataset.full || img.src;
    lbImg.alt = img.alt || '';
    setColmarHighlight(img);
    showCarouselNav(carouselImages.length > 1);
  }

  function moveCarousel(direction) {
    if (!carouselImages.length || carouselIndex < 0) return;
    carouselIndex = (carouselIndex + direction + carouselImages.length) % carouselImages.length;
    displayCarouselImage(carouselImages[carouselIndex]);
  }

  document.querySelectorAll('.lepoint-snippet').forEach(function(img){
    var wrap = document.createElement('span');
    wrap.className = 'lepoint-snippet-wrap';
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
    wrap.addEventListener('click', function(e){
      e.stopPropagation();
      var page = img.closest('.page');
      carouselImages = Array.prototype.slice.call((page || document).querySelectorAll('.lepoint-snippet'));
      carouselIndex = carouselImages.indexOf(img);
      displayCarouselImage(img);
      lb.classList.add('open');
    });
  });

  function closeLightbox(){
    lb.classList.remove('open');
    highlight.classList.remove('is-visible');
    showCarouselNav(false);
    carouselImages = [];
    carouselIndex = -1;
  }

  prevBtn.addEventListener('click', function(e){ e.stopPropagation(); moveCarousel(-1); });
  nextBtn.addEventListener('click', function(e){ e.stopPropagation(); moveCarousel(1); });
  lbClose.addEventListener('click', function(e){ e.stopPropagation(); closeLightbox(); });
  lb.addEventListener('click', closeLightbox);
  lbStage.addEventListener('click', function(e){ e.stopPropagation(); });

  lbStage.addEventListener('touchstart', function(e){
    if (carouselIndex < 0 || !e.touches || !e.touches.length) return;
    touchStartX = e.touches[0].clientX;
  }, {passive:true});
  lbStage.addEventListener('touchend', function(e){
    if (carouselIndex < 0 || touchStartX === null || !e.changedTouches || !e.changedTouches.length) return;
    var delta = e.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) > 45) moveCarousel(delta > 0 ? -1 : 1);
  }, {passive:true});

  document.addEventListener('keydown', function(e){
    if (!lb.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(carouselIndex >= 0 && e.key === 'ArrowLeft') moveCarousel(-1);
    if(carouselIndex >= 0 && e.key === 'ArrowRight') moveCarousel(1);
  });
})();

;

(function () {
  var states = {};
  var TOTAL = 6;
  var STEP = 100 / TOTAL;
  var INTERVAL = 2500;

  function render(key, n) {
    var s = states[key];
    if (!s) return;
    n = ((n % TOTAL) + TOTAL) % TOTAL;
    s.current = n;
    s.carousel.style.transform = 'translateX(-' + (n * STEP) + '%)';
    s.dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === n);
      dot.setAttribute('aria-current', i === n ? 'true' : 'false');
    });
  }

  function stopAuto(key) {
    var s = states[key];
    if (!s || !s.timer) return;
    clearInterval(s.timer);
    s.timer = null;
  }

  function startAuto(key) {
    var s = states[key];
    if (!s) return;
    stopAuto(key);
    s.timer = setInterval(function () { render(key, s.current + 1); }, INTERVAL);
  }

  function setup(key, carouselId, dotsId) {
    var carousel = document.getElementById(carouselId);
    var dotsWrap = document.getElementById(dotsId);
    if (!carousel || !dotsWrap) return;
    var wrap = carousel.closest('.lepoint-carousel-wrap');
    states[key] = {
      carousel: carousel,
      dots: Array.prototype.slice.call(dotsWrap.querySelectorAll('.lepoint-dot')),
      current: 0,
      timer: null
    };
    render(key, 0);
    startAuto(key);
    if (wrap) {
      wrap.addEventListener('mouseenter', function () { stopAuto(key); });
      wrap.addEventListener('mouseleave', function () { startAuto(key); });
      wrap.addEventListener('focusin', function () { stopAuto(key); });
      wrap.addEventListener('focusout', function () { startAuto(key); });
    }
  }

  window.lepointGoToSlide = function (key, n) { render(key, n); startAuto(key); };
  window.lepointPrev = function (key) { var s = states[key]; if (!s) return; render(key, s.current - 1); startAuto(key); };
  window.lepointNext = function (key) { var s = states[key]; if (!s) return; render(key, s.current + 1); startAuto(key); };

  function init() {
    setup('fr', 'lepointCarousel', 'lepointDots');
    setup('en', 'lepointCarousel-en', 'lepointDots-en');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

;

(function () {
  /* Sequential timeline reveal. */
  var timelines = document.querySelectorAll('#innovation-stair, #innovation-stair-en');

  function prepareTimeline(timeline) {
    timeline.classList.add('timeline-sequence');

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timeline.classList.add('timeline-sequence--run');
      return;
    }

    if (!('IntersectionObserver' in window)) {
      timeline.classList.add('timeline-sequence--run');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-sequence--run');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22 });

    observer.observe(timeline);
  }

  timelines.forEach(prepareTimeline);

  /* Lightbox zoom: several levels, zoom centred on the click or pinch point,
     scrolling and drag-to-pan in every direction once enlarged. */
  var lightbox = document.getElementById('lpLightbox');
  var stage = document.getElementById('lpLightboxStage');
  var image = document.getElementById('lpLightboxImg');
  var zoomIn = document.getElementById('lpZoomIn');
  var zoomOut = document.getElementById('lpZoomOut');
  var zoomReset = document.getElementById('lpZoomReset');
  var zoomLabel = document.getElementById('lpZoomLabel');
  if (!lightbox || !stage || !image) return;

  var levels = [1, 1.5, 2, 3, 4];
  var zi = 0, baseW = 0, baseH = 0;

  function updateLabel() {
    if (zoomLabel) zoomLabel.textContent = Math.round(levels[zi] * 100) + ' %';
    if (zoomIn) zoomIn.disabled = zi >= levels.length - 1;
    if (zoomOut) zoomOut.disabled = zi <= 0;
    image.style.cursor = zi >= levels.length - 1 ? 'zoom-out' : (zi > 0 ? 'grab' : 'zoom-in');
    image.setAttribute('title', zi >= levels.length - 1 ? 'Click: fit to screen' : 'Click to zoom in');
  }

  function resetLightboxZoom() {
    zi = 0;
    stage.classList.remove('is-zoomed');
    image.style.removeProperty('width');
    image.style.removeProperty('height');
    stage.scrollLeft = 0;
    stage.scrollTop = 0;
    updateLabel();
  }

  /* focalX/Y: point of interest in stage client coordinates (defaults to the centre). */
  function setZoom(index, focalX, focalY) {
    index = Math.max(0, Math.min(index, levels.length - 1));
    if (index === zi) return;
    if (zi === 0) { baseW = image.clientWidth; baseH = image.clientHeight; }
    if (!baseW) return;
    var rect = stage.getBoundingClientRect();
    if (typeof focalX !== 'number') focalX = rect.width / 2;
    if (typeof focalY !== 'number') focalY = rect.height / 2;
    var prev = levels[zi], next = levels[index];
    /* image-relative coordinates of the focal point at the previous scale */
    var imgRect = image.getBoundingClientRect();
    var relX = (focalX - (imgRect.left - rect.left)) / prev;
    var relY = (focalY - (imgRect.top - rect.top)) / prev;
    zi = index;
    if (zi === 0) { resetLightboxZoom(); return; }
    stage.classList.add('is-zoomed');
    image.style.setProperty('width', Math.round(baseW * next) + 'px', 'important');
    image.style.setProperty('height', 'auto', 'important');
    requestAnimationFrame(function () {
      stage.scrollLeft = Math.max(0, relX * next - focalX);
      stage.scrollTop = Math.max(0, relY * next - focalY);
    });
    updateLabel();
  }

  updateLabel();

  /* Click on the image: next level, centred on the click; at the last level, back to fit. */
  var dragMoved = false;
  image.addEventListener('click', function (event) {
    event.stopPropagation();
    if (dragMoved) { dragMoved = false; return; }
    var rect = stage.getBoundingClientRect();
    if (zi >= levels.length - 1) resetLightboxZoom();
    else setZoom(zi + 1, event.clientX - rect.left, event.clientY - rect.top);
  });

  if (zoomIn) zoomIn.addEventListener('click', function (e) { e.stopPropagation(); setZoom(zi + 1); });
  if (zoomOut) zoomOut.addEventListener('click', function (e) { e.stopPropagation(); setZoom(zi - 1); });
  if (zoomReset) zoomReset.addEventListener('click', function (e) { e.stopPropagation(); resetLightboxZoom(); });
  var bar = document.getElementById('lpZoomBar');
  if (bar) bar.addEventListener('click', function (e) { e.stopPropagation(); });

  /* Ctrl/Cmd + wheel (or trackpad pinch) zooms around the pointer; a plain wheel scrolls the enlarged image. */
  stage.addEventListener('wheel', function (event) {
    if (!(event.ctrlKey || event.metaKey)) return;
    event.preventDefault();
    var rect = stage.getBoundingClientRect();
    setZoom(zi + (event.deltaY < 0 ? 1 : -1), event.clientX - rect.left, event.clientY - rect.top);
  }, { passive: false });

  /* Drag to pan with the mouse. */
  var drag = null;
  stage.addEventListener('mousedown', function (event) {
    if (zi === 0 || event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY, sl: stage.scrollLeft, st: stage.scrollTop };
    dragMoved = false;
    stage.classList.add('is-dragging');
    event.preventDefault();
  });
  window.addEventListener('mousemove', function (event) {
    if (!drag) return;
    var dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragMoved = true;
    stage.scrollLeft = drag.sl - dx;
    stage.scrollTop = drag.st - dy;
  });
  window.addEventListener('mouseup', function () { drag = null; stage.classList.remove('is-dragging'); });

  /* Two-finger pinch on touch screens: one level per clear pinch gesture. */
  var pinch = null;
  stage.addEventListener('touchstart', function (event) {
    if (event.touches.length === 2) {
      var t = event.touches, rect = stage.getBoundingClientRect();
      pinch = { d: Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY),
                x: (t[0].clientX + t[1].clientX) / 2 - rect.left, y: (t[0].clientY + t[1].clientY) / 2 - rect.top, done: false };
    }
  }, { passive: true });
  stage.addEventListener('touchmove', function (event) {
    if (!pinch || event.touches.length !== 2 || pinch.done) return;
    var t = event.touches;
    var d = Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    var ratio = d / pinch.d;
    if (ratio > 1.25) { setZoom(zi + 1, pinch.x, pinch.y); pinch.done = true; }
    else if (ratio < 0.8) { setZoom(zi - 1, pinch.x, pinch.y); pinch.done = true; }
  }, { passive: true });
  stage.addEventListener('touchend', function () { pinch = null; }, { passive: true });

  /* Keyboard: + / - / 0 while the lightbox is open. */
  document.addEventListener('keydown', function (event) {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === '+' || event.key === '=') setZoom(zi + 1);
    else if (event.key === '-') setZoom(zi - 1);
    else if (event.key === '0') resetLightboxZoom();
  });

  /* Switching to another image always returns to the fitted view. */
  var srcObserver = new MutationObserver(function () { resetLightboxZoom(); });
  srcObserver.observe(image, { attributes: true, attributeFilter: ['src'] });

  lightbox.addEventListener('click', resetLightboxZoom);

  /* Images that open in the lightbox without a dedicated button: the Tarlov
     infographic (desktop and mobile copies), and the header images of the
     Tarlov and facet syndrome pages. */
  var zoomableSelector = [
    '#page-kystes-tarlov .tarlov-intro-image img', '#page-kystes-tarlov-en .tarlov-intro-image img',
    '.tarlov-mobile-direct img',
    '#page-kystes-tarlov .page-header-minimal-image img', '#page-kystes-tarlov-en .page-header-minimal-image img',
    '#page-syndrome-facettaire .page-header-minimal-image img', '#page-syndrome-facettaire-en .page-header-minimal-image img'
  ].join(', ');
  document.querySelectorAll(zoomableSelector).forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    function open() {
      var src = img.currentSrc || img.src;
      if (!src) return;
      image.src = src;
      image.alt = img.alt || '';
      lightbox.classList.add('open');
    }
    img.addEventListener('click', function (e) { e.preventDefault(); open(); });
    img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
})();

;

(function () {
  var refs = document.querySelectorAll('.citation-ref');
  if (!refs.length) return;

  var portal = document.createElement('div');
  portal.id = 'citationPortal';
  portal.setAttribute('role', 'tooltip');
  document.body.appendChild(portal);
  var current = null;

  function show(ref) {
    var tip = ref.querySelector('.citation-tooltip');
    if (!tip) return;
    current = ref;
    portal.innerHTML = tip.innerHTML;
    portal.classList.remove('is-below');
    portal.classList.add('is-visible');
    if (window.innerWidth <= 700) return;           /* fixed to the bottom of the screen on phones */
    var num = ref.querySelector('.citation-ref-number') || ref;
    var r = num.getBoundingClientRect();
    var vw = document.documentElement.clientWidth, margin = 16, gap = 12;
    var w = portal.offsetWidth, h = portal.offsetHeight;
    var centerX = r.left + r.width / 2;
    var left = Math.round(centerX - w / 2);
    left = Math.max(margin, Math.min(left, vw - margin - w));
    var top = r.top - gap - h;
    if (top < margin) { top = r.bottom + gap; portal.classList.add('is-below'); }
    portal.style.left = (left + window.scrollX) + 'px';
    portal.style.top = (top + window.scrollY) + 'px';
    portal.style.setProperty('--arrow-x', Math.round(centerX - left) + 'px');
  }

  function hide() {
    portal.classList.remove('is-visible');
    refs.forEach(function (r) { r.classList.remove('is-open'); });
    current = null;
  }

  refs.forEach(function (ref) {
    ref.addEventListener('mouseenter', function () { if (!current || !current.classList.contains('is-open')) show(ref); });
    ref.addEventListener('mouseleave', function () { if (!ref.classList.contains('is-open')) hide(); });
    ref.addEventListener('focus', function () { show(ref); });
    ref.addEventListener('blur', function () { if (!ref.classList.contains('is-open')) hide(); });
    ref.addEventListener('click', function (event) {
      event.stopPropagation();
      var opening = !ref.classList.contains('is-open');
      refs.forEach(function (r) { r.classList.remove('is-open'); });
      if (opening) { ref.classList.add('is-open'); show(ref); } else { hide(); }
    });
    ref.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); ref.click(); }
      if (event.key === 'Escape') hide();
    });
  });
  portal.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('click', hide);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  window.addEventListener('resize', function () { if (current) show(current); });
  window.addEventListener('scroll', function () { if (current && current.classList.contains('is-open')) show(current); }, { passive: true });
})();

;

(function () {
  var mq = window.matchMedia('(min-width: 1321px)');
  var dropdowns = document.querySelectorAll('details.nav-dropdown');

  dropdowns.forEach(function (details) {
    var closeTimer = null;

    details.addEventListener('mouseenter', function () {
      if (!mq.matches) return;
      if (closeTimer) clearTimeout(closeTimer);
      details.open = true;
    });

    details.addEventListener('mouseleave', function () {
      if (!mq.matches) return;
      closeTimer = setTimeout(function () {
        details.open = false;
      }, 120);
    });
  });
})();

;

(function () {
  var timelines = document.querySelectorAll(
    '#innovation-stair.timeline-anim-ready, #innovation-stair-en.timeline-anim-ready'
  );

  function revealTimeline(timeline) {
    if (!timeline || timeline.dataset.timelineAnim === 'done') return;

    var items = Array.prototype.slice.call(
      timeline.querySelectorAll('.s2-stage > .s2-label')
    );

    timeline.dataset.timelineAnim = 'running';

    if (window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (item) {
        item.classList.add('timeline-item-visible');
      });
      timeline.dataset.timelineAnim = 'done';
      return;
    }

    items.forEach(function (item, index) {
      window.setTimeout(function () {
        item.classList.add('timeline-item-visible');

        if (index === items.length - 1) {
          window.setTimeout(function () {
            timeline.dataset.timelineAnim = 'done';
          }, 700);
        }
      }, index * 360);
    });
  }

  if (!('IntersectionObserver' in window)) {
    timelines.forEach(revealTimeline);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        revealTimeline(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  });

  timelines.forEach(function (timeline) {
    /* Neutralize legacy timeline classes used by older animation code. */
    timeline.classList.remove('timeline-sequence');
    timeline.classList.remove('timeline-sequence--run');

    /* Ensure any legacy inline animation state is cleared. */
    timeline.querySelectorAll('.s2-stage > .s2-label').forEach(function (item) {
      item.classList.remove('timeline-item-visible');
      item.style.removeProperty('opacity');
      item.style.removeProperty('transform');
      item.style.setProperty('animation', 'none', 'important');

      var year = item.querySelector('.s2-year');
      if (year) {
        year.style.setProperty('opacity', '1', 'important');
        year.style.setProperty('animation', 'none', 'important');
        year.style.setProperty('transform', 'none', 'important');
      }
    });

    observer.observe(timeline);
  });
})();

;

function toggleExpertise(sectionId) {
  const cards = document.querySelectorAll('#' + sectionId + ' .sv2-card:nth-child(n+6)');
  const container = document.getElementById(sectionId);
  if (!container) return;
  
  const btn = container.querySelector('.sv2-expand-btn');
  let isExpanded = cards[0] ? cards[0].classList.contains('sv2-card--show') : false;
  
  cards.forEach(card => {
    card.classList.toggle('sv2-card--show');
  });
  
  if (btn) {
    const willExpand = cards[0] ? cards[0].classList.contains('sv2-card--show') : false;
    if (sectionId === 'specialites-v2') {
      btn.innerHTML = willExpand 
        ? '▲ Moins d\'expertises'
        : '<span style="margin-right: 8px;">▼</span> Autres domaines d\'expertise';
    } else {
      btn.innerHTML = willExpand
        ? '▲ Fewer expertises'
        : '<span style="margin-right: 8px;">▼</span> Other expertises';
    }
  }
}
