const list = document.getElementById("quotes");

chrome.storage.local.get(["quotes"], (result) => {
  const qqq = result.quotes || [];

  if (qqq.length === 0) {
    list.innerHTML = "<li>No quotes saved yet.</li>";
    return;
  }

  qqq.reverse().forEach((q) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="quote-container">
        <div class="p1">
         <p>"${q.text}"</p>
         <small>${q.date}</small>
        </div>
        <div class="p2">
         <a href="${q.url}" target="_blank">Check</a>
        </div>
    </div>
    `;

    list.appendChild(li);
  });
});
