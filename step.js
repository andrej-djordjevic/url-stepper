// Changes the last number in the URL by `delta`.
// Looks in the path first, then the query string, then the hash,
// so the port (e.g. :3001) is never touched.
// Returns the new URL, or null if there is no number to change.
export function stepUrl(href, delta) {
  const url = new URL(href);

  for (const part of ["pathname", "search", "hash"]) {
    const value = url[part];
    const matches = [...value.matchAll(/\d+/g)];
    if (matches.length === 0) continue;

    const last = matches[matches.length - 1];
    const digits = last[0];
    const next = Math.max(0, Number(digits) + delta);
    // Keep zero padding only if the number was padded, e.g. 007 -> 008 but 10 -> 9
    const padded = digits.length > 1 && digits.startsWith("0");
    const replacement = padded ? String(next).padStart(digits.length, "0") : String(next);

    url[part] =
      value.slice(0, last.index) + replacement + value.slice(last.index + digits.length);
    return url.toString();
  }

  return null;
}

export async function stepActiveTab(delta) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) return null;

  const next = stepUrl(tab.url, delta);
  if (next) await chrome.tabs.update(tab.id, { url: next });
  return next;
}
