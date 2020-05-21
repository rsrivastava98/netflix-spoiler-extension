const form = document.getElementById("popup-form");
const inputElements = ["showDetails"];

chrome.storage.local.get(inputElements, data => {
  inputElements.forEach(el => {
    document.getElementById(el).value = data[el];
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();
  const [showDetails] = [...inputElements.map(el => event.target[el].value)];

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.storage.local.set({ "showDetails":showDetails});
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        file: "script.js"
      },
      () => {
        const error = chrome.runtime.lastError;
        if (error) "Error. Tab ID: " + tab.id + ": " + JSON.stringify(error);

        chrome.tabs.sendMessage(tabs[0].id, { showDetails });
      }
    );
  });
});