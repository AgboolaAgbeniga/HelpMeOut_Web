// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.startRecording) {
    // Inject the UI feedback into the current tab's content
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.executeScript(
        activeTab.id,
        { file: "content.js" },
        () => {
          // Script has been injected

          // Now, send a message to content.js
          chrome.tabs.sendMessage(activeTab.id, { action: "loadContent" }, (response) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
              console.log("Message sent to content.js");
            }
          });
        }
      );
    });
  }
});
