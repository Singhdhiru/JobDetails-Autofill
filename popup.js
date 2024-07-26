document.getElementById("save").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const social = document.getElementById("social").value;
  const resume = document.getElementById("resume").value;

  chrome.storage.sync.set({ name, address, social, resume }, () => {
    console.log("Information saved"); 
  });
});

document.getElementById("fillForm").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm" });
  });
});
