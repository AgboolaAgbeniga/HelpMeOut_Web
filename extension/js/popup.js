const popup = document.getElementById("popup");
const closeIcon = document.getElementById("close");
const toggleCamera = document.getElementById("toggle-camera");
const startRecordingBtn = document.getElementById("startRecordingBtn");
const pauseRecordingBtn = document.getElementById("pauseRecordingBtn");
const stopRecordingBtn = document.getElementById("stopRecordingBtn");
const deleteRecordingBtn = document.getElementById("deleteRecordingBtn");
const timerDisplay = document.getElementById("timerDisplay");
const recordingContainer = document.getElementById("recordingContainer");
const pause = document.getElementById("pause");
const loading = document.getElementById("loading");
const toggleMicrophoneBtn = document.getElementById("toggle-microphone");

const closeModal = function () {
  document.body.style.display = "none";
};

closeIcon.addEventListener("click", closeModal);

let mediaStream;
let mediaRecorder;
const recordedChunks = [];

let isRecording = false;
let recordingInterval;
let startTime;
let isCameraOn = true;
let isMicrophoneOn = true;

startRecordingBtn.addEventListener("click", async () => {
  document.body.style.width = "1440px";
  document.body.style.height = "800px";
  try {
    if (!isRecording) {
      mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      popup.style.display = "none";
      mediaRecorder = new MediaRecorder(mediaStream);
      isRecording = true;
      startTime = Date.now();
      recordingInterval = setInterval(updateTimer, 1000);
      timerDisplay.textContent = "00:00:00";
      mediaRecorder.start();

      recordingContainer.style.display = "flex";
      document.body.style.width = "552px";
      document.body.style.height = "90px";
      document.body.style.backgroundColor = "transparent";

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };
      startRecordingBtn.disabled = true;
      pauseRecordingBtn.disabled = false;
      stopRecordingBtn.disabled = false;
      deleteRecordingBtn.disabled = false;

      console.log("Screen recording started");
      chrome.runtime.sendMessage({ action: 'recordingStarted' });
    }
  } catch (error) {
    console.error("Error starting screen recording:", error);
  }
});

pauseRecordingBtn.addEventListener("click", () => {
  if (isRecording) {
    if (mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      clearInterval(recordingInterval);
      pause.textContent = "Resume";
    } else if (mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      recordingInterval = setInterval(updateTimer, 1000);
      pause.textContent = "Pause";
    }
  }
});

stopRecordingBtn.addEventListener("click", () => {
  if (isRecording) {
    mediaRecorder.stop();
    clearInterval(recordingInterval);
    isRecording = false;

    // Hide the popup
    popup.style.display = "none"; // Add this line

    startRecordingBtn.disabled = false;
    pauseRecordingBtn.disabled = true;
    stopRecordingBtn.disabled = true;
    deleteRecordingBtn.disabled = false;

    recordingContainer.style.display = "none";
    popup.style.display = "none";

    setTimeout(() => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });

      // Check if API is responsive, if not, open a new tab for replay and download
      const apiResponsive = checkApiResponsiveness();

      if (apiResponsive) {
        // If API is responsive, send the video data to the API
        sendToApi(blob);
      } else {
        // If API is not responsive, open a new tab for replay and download
        openReplayPage(blob);
      }
    }, 5000);

    document.body.style.width = "150px";
    document.body.style.height = "150px";
    loading.style.display = "block";

    console.log("Screen recording stopped");
  }
});

// Function to check API responsiveness (You can replace this with your own logic)
async function checkApiResponsiveness(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    // Check if the response status code is in the 2xx range (indicating success)
    if (response.ok) {
      return true; // API is responsive
    } else {
      return false; // API is not responsive
    }
  } catch (error) {
    return false; // An error occurred (e.g., network issue), so API is not responsive
  }
}

// Example usage:
const apiUrl = "https://hng-chrome-extension.onrender.com/api/upload-video"; // Replace with your API endpoint
async function main() {
  const isApiResponsive = await checkApiResponsiveness(apiUrl);
  if (isApiResponsive) {
    console.log("API is responsive");
  } else {
    console.log("API is not responsive");
  }
}

// Call the main function
main();

// Function to send video data to the API
function sendToApi(blob) {
  const formData = new FormData();
  formData.append("video", blob, "screen-recording.webm");

  postData(formData)
    .then((link) => {
      console.log("Video uploaded successfully", link);
      popup.style.display = "flex";
      loading.style.display = "none";
    })
    .catch((error) => {
      console.error("Error uploading video:", error);
    });
}

// Function to open a new tab with replay.html and send the video data
function openReplayPage(blob) {
  // Create a new tab with replay.html
  chrome.tabs.create({ url: chrome.runtime.getURL('replay.html') }, (tab) => {
    // Listen for the tab to complete loading
    chrome.webNavigation.onCompleted.addListener(function listener(details) {
      if (details.tabId === tab.id) {
        // Send the video data to the new tab
        chrome.tabs.sendMessage(tab.id, { videoData: blob });
        // Remove the listener after sending the data
        chrome.webNavigation.onCompleted.removeListener(listener);
      }
    });
  });
}

// Rest of your code...


deleteRecordingBtn.addEventListener("click", () => {
  // Clear the recorded chunks when the user chooses to delete the recording
  recordedChunks.length = 0;
});

function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  timerDisplay.textContent = formattedTime;
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

toggleCameraBtn.addEventListener("click", () => {
  isCameraOn = !isCameraOn;
  // Toggle camera and update button text/icon
  if (isCameraOn) {
    // Start capturing camera video
    // Update button text/icon to indicate camera is on
    toggleCameraBtn.textContent = "Camera Off";
  } else {
    // Stop capturing camera video
    // Update button text/icon to indicate camera is off
    toggleCameraBtn.textContent = "Camera On";
  }
});

toggleMicrophoneBtn.addEventListener("click", () => {
  isMicrophoneOn = !isMicrophoneOn;
  // Toggle microphone and update button text/icon
  if (isMicrophoneOn) {
    // Start capturing microphone audio
    // Update button text/icon to indicate microphone is on
    toggleMicrophoneBtn.textContent = "Microphone Off";
  } else {
    // Stop capturing microphone audio
    // Update button text/icon to indicate microphone is off
    toggleMicrophoneBtn.textContent = "Microphone On";
  }
});