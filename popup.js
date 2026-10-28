import { stepUrl, stepActiveTab } from "./step.js";

const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const urlEl = document.getElementById("url");

async function refresh(url) {
  if (!url) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    url = tab?.url;
  }
  const hasNumber = url && stepUrl(url, 0) !== null;
  upBtn.disabled = downBtn.disabled = !hasNumber;
  urlEl.textContent = hasNumber ? url : "No number found in this URL";
}

upBtn.addEventListener("click", async () => refresh(await stepActiveTab(1)));
downBtn.addEventListener("click", async () => refresh(await stepActiveTab(-1)));

refresh();
