chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    chrome.storage.sync.get(["name", "address", "social", "resume"], (data) => {
      document.querySelector('input[name="name"]').value = data.name || "";
      document.querySelector('input[name="address"]').value =
        data.address || "";
      document.querySelector('input[name="social"]').value = data.social || "";
      document.querySelector('input[name="resume"]').value = data.resume || "";
    });
  }
});
