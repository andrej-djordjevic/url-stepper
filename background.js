import { stepActiveTab } from "./step.js";

chrome.commands.onCommand.addListener((command) => {
  if (command === "step-up") stepActiveTab(1);
  if (command === "step-down") stepActiveTab(-1);
});
