history.pushState(null, document.title, location.href);
window.addEventListener("popstate", function (event) {
  if (document.URL.indexOf("/#!back") >= 0) {
    history.replaceState(null, document.title, location.href);
    window.onbeforeunload = function () {};
    location.href = "https://www.google.com ";
  }
  history.pushState(null, document.title, location.href);
  location.href = "https://www.google.com";
});
