import { fetchLanguages, translateText } from './demo-api.js';
import { EXAMPLES } from './demo-examples.js';

// Cultural dimension defaults by language, based on communication norms research.
// politeness, directness, formality, attribution (each 0-100)
const CULTURAL_DEFAULTS = {
  // East Asia — high politeness, indirect, formal, collective
  ja: { politeness: 85, directness: 20, formality: 80, attribution: 25 },
  ko: { politeness: 80, directness: 25, formality: 75, attribution: 30 },
  zh: { politeness: 70, directness: 30, formality: 70, attribution: 30 },
  mn: { politeness: 65, directness: 40, formality: 60, attribution: 35 },

  // Southeast Asia — respectful, indirect, hierarchical
  th: { politeness: 80, directness: 20, formality: 75, attribution: 25 },
  vi: { politeness: 75, directness: 30, formality: 70, attribution: 30 },
  id: { politeness: 70, directness: 35, formality: 60, attribution: 35 },
  ms: { politeness: 70, directness: 35, formality: 60, attribution: 35 },
  tl: { politeness: 65, directness: 40, formality: 55, attribution: 40 },
  km: { politeness: 75, directness: 25, formality: 70, attribution: 30 },
  lo: { politeness: 75, directness: 25, formality: 70, attribution: 30 },
  my: { politeness: 75, directness: 25, formality: 70, attribution: 30 },

  // South Asia — respectful, indirect, hierarchical
  hi: { politeness: 75, directness: 30, formality: 70, attribution: 35 },
  ur: { politeness: 80, directness: 25, formality: 75, attribution: 30 },
  bn: { politeness: 75, directness: 30, formality: 65, attribution: 35 },
  ta: { politeness: 75, directness: 30, formality: 70, attribution: 35 },
  te: { politeness: 75, directness: 30, formality: 65, attribution: 35 },
  mr: { politeness: 75, directness: 30, formality: 65, attribution: 35 },
  gu: { politeness: 70, directness: 35, formality: 60, attribution: 40 },
  pa: { politeness: 65, directness: 45, formality: 55, attribution: 45 },
  ne: { politeness: 75, directness: 30, formality: 65, attribution: 35 },
  si: { politeness: 75, directness: 30, formality: 65, attribution: 35 },

  // Middle East & Central Asia — formal, elaborate courtesy
  fa: { politeness: 85, directness: 20, formality: 75, attribution: 25 },
  ar: { politeness: 80, directness: 35, formality: 80, attribution: 35 },
  tr: { politeness: 70, directness: 40, formality: 65, attribution: 45 },
  he: { politeness: 45, directness: 75, formality: 45, attribution: 70 },
  ku: { politeness: 70, directness: 40, formality: 60, attribution: 40 },
  ps: { politeness: 80, directness: 30, formality: 75, attribution: 30 },
  tg: { politeness: 70, directness: 35, formality: 65, attribution: 35 },
  uz: { politeness: 70, directness: 40, formality: 60, attribution: 40 },
  kk: { politeness: 65, directness: 45, formality: 60, attribution: 40 },
  az: { politeness: 65, directness: 45, formality: 60, attribution: 45 },
  hy: { politeness: 70, directness: 40, formality: 65, attribution: 40 },
  ka: { politeness: 70, directness: 45, formality: 60, attribution: 45 },

  // Sub-Saharan Africa — communal, respectful, indirect
  sw: { politeness: 70, directness: 35, formality: 60, attribution: 35 },
  am: { politeness: 80, directness: 25, formality: 75, attribution: 30 },
  yo: { politeness: 75, directness: 35, formality: 65, attribution: 40 },
  ha: { politeness: 75, directness: 35, formality: 65, attribution: 35 },
  ig: { politeness: 70, directness: 40, formality: 60, attribution: 40 },
  zu: { politeness: 75, directness: 35, formality: 65, attribution: 35 },
  xh: { politeness: 75, directness: 35, formality: 65, attribution: 35 },
  rw: { politeness: 75, directness: 30, formality: 65, attribution: 30 },
  sn: { politeness: 70, directness: 35, formality: 60, attribution: 35 },
  mg: { politeness: 70, directness: 35, formality: 60, attribution: 35 },
  so: { politeness: 70, directness: 45, formality: 65, attribution: 40 },

  // Europe — varies significantly
  nl: { politeness: 40, directness: 85, formality: 45, attribution: 75 },
  de: { politeness: 50, directness: 75, formality: 65, attribution: 70 },
  fr: { politeness: 65, directness: 45, formality: 70, attribution: 55 },
  es: { politeness: 65, directness: 50, formality: 55, attribution: 55 },
  pt: { politeness: 65, directness: 45, formality: 55, attribution: 50 },
  it: { politeness: 60, directness: 55, formality: 55, attribution: 55 },
  ru: { politeness: 45, directness: 70, formality: 55, attribution: 65 },
  pl: { politeness: 60, directness: 55, formality: 60, attribution: 55 },
  uk: { politeness: 55, directness: 60, formality: 55, attribution: 55 },
  ro: { politeness: 60, directness: 50, formality: 55, attribution: 50 },
  el: { politeness: 60, directness: 55, formality: 55, attribution: 55 },
  hu: { politeness: 55, directness: 60, formality: 60, attribution: 60 },
  cs: { politeness: 50, directness: 65, formality: 55, attribution: 60 },
  bg: { politeness: 55, directness: 55, formality: 55, attribution: 55 },
  sr: { politeness: 55, directness: 60, formality: 55, attribution: 55 },
  hr: { politeness: 55, directness: 60, formality: 55, attribution: 55 },
  sk: { politeness: 55, directness: 60, formality: 55, attribution: 55 },
  lt: { politeness: 55, directness: 55, formality: 55, attribution: 55 },
  lv: { politeness: 55, directness: 55, formality: 55, attribution: 55 },
  et: { politeness: 45, directness: 70, formality: 50, attribution: 65 },
  is: { politeness: 45, directness: 70, formality: 45, attribution: 70 },
  ga: { politeness: 60, directness: 45, formality: 50, attribution: 50 },
  cy: { politeness: 60, directness: 45, formality: 50, attribution: 50 },
  mt: { politeness: 60, directness: 55, formality: 55, attribution: 50 },
  eu: { politeness: 60, directness: 50, formality: 55, attribution: 55 },
  ca: { politeness: 60, directness: 55, formality: 55, attribution: 55 },
  gl: { politeness: 60, directness: 50, formality: 55, attribution: 50 },
  en: { politeness: 50, directness: 60, formality: 50, attribution: 65 },

  // Americas
  qu: { politeness: 75, directness: 30, formality: 65, attribution: 30 },
  gn: { politeness: 70, directness: 35, formality: 60, attribution: 35 },
  ht: { politeness: 65, directness: 45, formality: 50, attribution: 45 },
};

const DEFAULT_DIMENSIONS = { politeness: 50, directness: 50, formality: 50, attribution: 50 };

const state = {
  sourceText: '',
  sourceLang: 'en',
  targetLang: 'nl',
  politeness: 40,
  directness: 85,
  formality: 45,
  attribution: 75,
  isLoading: false,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

document.addEventListener('DOMContentLoaded', async () => {
  initSliders();
  initExamples();
  initSwapButton();
  initKeyboardShortcut();

  try {
    const data = await fetchLanguages();
    populateLanguageSelectors(data);
  } catch {
    console.error('Failed to load languages');
  }

  $('#translateBtn').addEventListener('click', handleTranslate);
  $('#sourceText').addEventListener('input', (e) => {
    state.sourceText = e.target.value;
    updateCharCount();
  });

  if (EXAMPLES.length > 0) {
    loadExample(EXAMPLES[0]);
  }
});

function initKeyboardShortcut() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (!state.isLoading) handleTranslate();
    }
  });
}

function populateLanguageSelectors(data) {
  const sourceSelect = $('#sourceLang');
  const targetSelect = $('#targetLang');

  sourceSelect.innerHTML = '';
  targetSelect.innerHTML = '';

  for (const region of data.regions_order) {
    const langs = data.regions[region];
    if (!langs || langs.length === 0) continue;

    const sourceGroup = document.createElement('optgroup');
    sourceGroup.label = region;
    const targetGroup = document.createElement('optgroup');
    targetGroup.label = region;

    for (const lang of langs) {
      const repLabel = getRepLabel(lang.representation);
      const label = repLabel
        ? `${lang.native} (${lang.name}) ${repLabel}`
        : `${lang.native} (${lang.name})`;

      const sourceOpt = new Option(label, lang.code);
      sourceOpt.selected = lang.code === state.sourceLang;
      sourceGroup.appendChild(sourceOpt);

      const targetOpt = new Option(label, lang.code);
      targetOpt.selected = lang.code === state.targetLang;
      targetGroup.appendChild(targetOpt);
    }

    sourceSelect.appendChild(sourceGroup);
    targetSelect.appendChild(targetGroup);
  }

  sourceSelect.addEventListener('change', (e) => { state.sourceLang = e.target.value; });
  targetSelect.addEventListener('change', (e) => {
    state.targetLang = e.target.value;
    applyCulturalDefaults(e.target.value);
  });
}

function getRepLabel(level) {
  if (level === 'very-low') return '- underrepresented';
  if (level === 'low') return '- low-resource';
  return '';
}

function applyCulturalDefaults(langCode) {
  const defaults = CULTURAL_DEFAULTS[langCode] || DEFAULT_DIMENSIONS;
  const dimensions = ['politeness', 'directness', 'formality', 'attribution'];

  dimensions.forEach(dim => {
    state[dim] = defaults[dim];
    const slider = document.querySelector(`.dimension-slider[data-dimension="${dim}"]`);
    if (!slider) return;
    const input = slider.querySelector('input[type="range"]');
    const valueDisplay = slider.querySelector('.slider-value');
    input.value = defaults[dim];
    valueDisplay.textContent = defaults[dim];
    updateSliderLabel(slider, defaults[dim]);
  });
}

function initSliders() {
  const sliders = $$('.dimension-slider');
  sliders.forEach(slider => {
    const dimension = slider.dataset.dimension;
    const input = slider.querySelector('input[type="range"]');
    const valueDisplay = slider.querySelector('.slider-value');

    input.value = state[dimension];
    valueDisplay.textContent = input.value;
    updateSliderLabel(slider, input.value);

    input.addEventListener('input', () => {
      state[dimension] = parseInt(input.value);
      valueDisplay.textContent = input.value;
      updateSliderLabel(slider, input.value);
    });
  });
}

function updateSliderLabel(slider, value) {
  const low = slider.querySelector('.label-low');
  const high = slider.querySelector('.label-high');
  const v = parseInt(value);
  if (low && high) {
    low.style.opacity = v < 50 ? 1 : 0.4;
    high.style.opacity = v > 50 ? 1 : 0.4;
  }
}

function initExamples() {
  const container = $('#examplePhrases');
  if (!container) return;

  EXAMPLES.forEach((example, i) => {
    const pill = document.createElement('button');
    pill.className = 'example-pill';
    pill.textContent = example.category;
    pill.title = example.description;
    pill.addEventListener('click', () => {
      $$('.example-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      loadExample(example);
    });
    if (i === 0) pill.classList.add('active');
    container.appendChild(pill);
  });
}

function loadExample(example) {
  state.sourceText = example.text;
  state.sourceLang = example.source;
  state.targetLang = example.target;

  $('#sourceText').value = example.text;
  updateCharCount();

  const sourceSelect = $('#sourceLang');
  const targetSelect = $('#targetLang');
  if (sourceSelect) sourceSelect.value = example.source;
  if (targetSelect) targetSelect.value = example.target;

  applyCulturalDefaults(example.target);
}

function initSwapButton() {
  const btn = $('#swapLangs');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const tmp = state.sourceLang;
    state.sourceLang = state.targetLang;
    state.targetLang = tmp;
    $('#sourceLang').value = state.sourceLang;
    $('#targetLang').value = state.targetLang;
  });
}

function updateCharCount() {
  const counter = $('#charCount');
  if (counter) {
    counter.textContent = `${state.sourceText.length} / 2000`;
  }
}

async function handleTranslate() {
  if (!state.sourceText.trim()) {
    showError('Please enter some text to translate.');
    return;
  }
  if (state.sourceLang === state.targetLang) {
    showError('Source and target language must be different.');
    return;
  }

  setLoading(true);
  clearError();
  clearOutput();

  try {
    const result = await translateText({
      source_text: state.sourceText,
      source_language: state.sourceLang,
      target_language: state.targetLang,
      politeness: state.politeness,
      directness: state.directness,
      formality: state.formality,
      attribution: state.attribution,
    });
    renderResult(result);
  } catch (err) {
    if (err.name === 'AbortError') return;
    showError(err.message);
  } finally {
    setLoading(false);
  }
}

function renderResult(result) {
  const outputPanel = $('#outputPanel');
  outputPanel.classList.add('has-result');

  const standardEl = $('#standardTranslation');
  const culturalEl = $('#culturalTranslation');
  const summaryEl = $('#culturalSummary');
  const cardsEl = $('#explanationCards');
  const targetLabel = $('#targetLangLabel');

  if (targetLabel) targetLabel.textContent = result.target_language_name;

  standardEl.textContent = result.standard_translation;
  standardEl.dir = result.text_direction;
  standardEl.classList.remove('placeholder-text');

  culturalEl.textContent = result.cultural_translation;
  culturalEl.dir = result.text_direction;
  culturalEl.classList.remove('placeholder-text');

  summaryEl.textContent = result.cultural_summary;
  summaryEl.classList.remove('placeholder-text');

  cardsEl.innerHTML = '';
  result.explanations.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'explanation-card';
    card.dataset.dimension = exp.dimension;
    card.innerHTML = `
      <div class="explanation-header">
        <span class="explanation-dimension">${exp.dimension.charAt(0).toUpperCase() + exp.dimension.slice(1)}</span>
        <span class="explanation-value">${exp.value}/100</span>
      </div>
      <p class="explanation-effect">${exp.effect}</p>
    `;
    cardsEl.appendChild(card);
  });

  outputPanel.style.opacity = '0';
  requestAnimationFrame(() => {
    outputPanel.style.transition = 'opacity 0.4s ease';
    outputPanel.style.opacity = '1';
  });
}

function setLoading(loading) {
  state.isLoading = loading;
  const btn = $('#translateBtn');
  const skeleton = $('#loadingSkeleton');
  const outputPanel = $('#outputPanel');

  if (loading) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Translating...';
    skeleton.classList.add('active');
    outputPanel.classList.remove('has-result');
  } else {
    btn.disabled = false;
    btn.textContent = 'Translate';
    skeleton.classList.remove('active');
  }
}

function clearOutput() {
  $('#standardTranslation').textContent = '';
  $('#culturalTranslation').textContent = '';
  $('#culturalSummary').textContent = '';
  $('#explanationCards').innerHTML = '';
}

function showError(msg) {
  const el = $('#errorMessage');
  el.textContent = msg;
  el.classList.add('visible');
}

function clearError() {
  const el = $('#errorMessage');
  el.textContent = '';
  el.classList.remove('visible');
}
