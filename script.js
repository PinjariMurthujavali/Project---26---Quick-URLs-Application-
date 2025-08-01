// Load URLs from LocalStorage
document.addEventListener("DOMContentLoaded", loadURLs);

function addURL() {
  let urlInput = document.getElementById("urlInput");
  let url = urlInput.value.trim();

  if (url === "") {
    alert("Please enter a URL!");
    return;
  }

  // Add 'https://' if missing
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Save URL to localStorage
  let urls = JSON.parse(localStorage.getItem("quickURLs")) || [];
  urls.push(url);
  localStorage.setItem("quickURLs", JSON.stringify(url
