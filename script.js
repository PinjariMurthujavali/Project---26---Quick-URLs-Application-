// ✅ Load URLs on page start
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

// ✅ Add new URL
function addURL() {
  let urlInput = document.getElementById("urlInput");
  let url = urlInput.value.trim();

  if (url === "") {
    alert("Please enter a URL!");
    return;
  }

  // Add https:// if missing
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  let urls = JSON.parse(localStorage.getItem("quickURLs")) || [];
  urls.push(url);
  localStorage.setItem("quickURLs", JSON.stringify(urls));

  urlInput.value = "";
  loadURLs();
}

// ✅ Load and display URLs
function loadURLs() {
  let urlList = document.getElementById("urlList");
  urlList.innerHTML = "";

  let urls = JSON.parse(localStorage.getItem("quickURLs")) || [];

  urls.forEach((url, index) => {
    let card = document.createElement("div");
    card.className = "url-card";

    let favicon = `https://www.google.com/s2/favicons?domain=${url}`;

    card.innerHTML = `
      <div class="url-info">
        <img src="${favicon}" alt="favicon">
        <a href="${url}" target="_blank">${url}</a>
      </div>
      <button class="delete-btn" onclick="deleteURL(${index})">X</button>
    `;

    urlList.appendChild(card);
  });
}

// ✅ Delete URL
function deleteURL(index) {
  let urls = JSON.parse(localStorage.getItem("quickURLs")) || [];
  urls.splice(index, 1);
  localStorage.setItem("quickURLs", JSON.stringify(urls));
  loadURLs();
}
