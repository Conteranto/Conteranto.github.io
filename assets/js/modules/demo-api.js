const API_BASE = 'https://conteranto-demo.up.railway.app';

let currentController = null;

export async function fetchLanguages() {
  const res = await fetch(`${API_BASE}/api/languages`);
  if (!res.ok) throw new Error('Failed to load languages');
  return res.json();
}

export async function translateText(params) {
  if (currentController) {
    currentController.abort();
  }
  currentController = new AbortController();

  const res = await fetch(`${API_BASE}/api/translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
    signal: currentController.signal,
  });

  currentController = null;

  if (res.status === 429) {
    const data = await res.json();
    throw new Error(data.detail || 'Rate limit exceeded. Please wait a moment.');
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.detail || 'Translation failed. Please try again.');
  }

  return res.json();
}

export async function backTranslate(params) {
  const res = await fetch(`${API_BASE}/api/back-translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.detail || 'Back-translation failed.');
  }

  return res.json();
}
