// Load URLs from LocalStorage (or set example links if empty)
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("quickURLs")) {
    let sampleLinks = [
      "https://www.google.com",
      "https://www.youtube.com",
      "https://www.github.com",
      "https://www.stackoverflow.com",
      "https://www.wikipedia.org"
    ];
    localStorage.setItem("quickURLs", JSON.stringify(sampleLinks));
  }
  loadURLs();
});

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
  localStorage.setItem("quickURLs", JSON.stringify(urls));

  urlInput.value = "";
  loadURLs();
}

function loadURLs() {
  let urlList = document.getElementById("urlList");
  urlList.innerHTML = "";

  let urls = JSON.parse(localStorage.getItem("quickURLs")) || [];

  urls.forEach((url, index) => {
    let card = document.createElement("div");
    card.className = "url-card";

    card.innerHTML = `
      <a href="${url}" target="_blank">${url}</a>
      <button class="delete-btn" onclick="deleteURL(${index})">X</button>
    `;

    urlList.appendChild(card);
  });
}

function deleteURL(index) {
  let urls = JSON.parse(localStorage.getItem("quickURLs")) || [];
  urls.splice(index, 1);
  localStorage.setItem("quickURLs", JSON.stringify(urls));
  loadURLs();
}
