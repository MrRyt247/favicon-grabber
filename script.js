function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null);
}

function startIT() {
  const card = document.querySelector(".card");
  const url = document.getElementById("urltext");
  const log = document.querySelector(".log");
  const button = document.querySelector("button");

  if (url.value == "") {
    handleError(log, "Enter a URL");
    shake(url);
  } else if (url.value !== "" && isValidURL(url.value) == true) {
    log.innerText = "";
    grabFAV();
    glow(card);
  } else {
    handleError(log, "Enter a valid URL");
    shake(url);
  }
}

function grabFAV() {
  var urlValue = document.getElementById("urltext").value;
  var img = document.getElementById("img");
  var size = document.getElementById("size").value;
  const duckapi = "https://icons.duckduckgo.com/ip3/";
  const gapi = "https://s2.googleusercontent.com/s2/favicons?domain=";

  switch (size) {
    case "default":
      var h1 = "https://", h2 = "http://";

      urlValue = urlValue.replace(h1, "");
      urlValue = urlValue.replace(h2, "");
      img.src = duckapi + urlValue + ".ico";
      break;
    case "16":
      img.src = gapi + urlValue + "&sz=16";
      break;
    case "32":
      img.src = gapi + urlValue + "&sz=32";
      break;
    case "48":
      img.src = gapi + urlValue + "&sz=48";
      break;
    case "64":
      img.src = gapi + urlValue + "&sz=64";
      break;
    case "128":
      img.src = gapi + urlValue + "&sz=128";
      break;
    default:
      break;
  }
}

function handleError(target, log) {
  target.innerText = log;
}

function shake(target) {
  target.style.setProperty("animation", "shake 1s ease-in-out alternate");
  setTimeout(() => {
    target.style.removeProperty('animation');
  }, 1005);
};

function glow(target) {
  target.style.boxShadow = "var(--cardShadow), var(--glowShadow)";
  setTimeout(() => {
    target.style.boxShadow = "var(--cardShadow)";
  }, 800);
};

window.addEventListener("keypress", (e) => {
  if(e.key === 'Enter') {
    startIT();
    glow(card);
  };
})

//TODO:
// Write the paste function
// Write the download function