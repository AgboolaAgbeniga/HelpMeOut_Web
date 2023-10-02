// content.js
function injectUI() {
    console.log("Injecting UI elements");

    // Fetch the UI HTML content from the ui.html file
    fetch(chrome.runtime.getURL("../html/controlbox.html"))
        .then((response) => response.text())
        .then((html) => {
            // Create a div element and set its innerHTML to the UI HTML
            const uiContainer = document.createElement("div");
            uiContainer.innerHTML = html;

            // Append the UI container to the body of the web page
            document.body.appendChild(uiContainer);
        })
        .catch((error) => {
            console.error("Error loading UI content:", error);
        });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectUI);
} else {
    injectUI();
}
