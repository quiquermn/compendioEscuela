const mainarticle = document.getElementById("mainarticle");
const h2s = mainarticle.getElementsByTagName("h2");
const h3s = mainarticle.getElementsByTagName("h3");
const indexbox = document.getElementsByClassName("indicebox")[0];
const indice = document.getElementsByClassName("indice")[0];

let emptyh2s = 0;
//Detect all h3s inbetween h2s and create links for them
for (let i = 0; i < h2s.length; i++) {
  if (h2s[i].innerText == "") {
    emptyh2s++;
  }

  let h3slist = [];
  nexth3 = h2s[i].nextElementSibling;
  while (nexth3 != "h3" && nexth3 != null) {
    if (nexth3.tagName == "H3") {
      h3slist.push(nexth3);
    }
    nexth3 = nexth3.nextElementSibling;
  }

  let li = document.createElement("li");
  let a = document.createElement("a");
  let linkname = h2s[i].innerText.replace(/[^A-Z0-9]/gi, "");

  a.href = "#" + linkname;
  h2s[i].id = linkname;
  a.innerText = h2s[i].innerText;

  // Asign class to li element
  li.className = "h2link";
  li.appendChild(a);
  indice.appendChild(li);
  indexbox.style.backgroundColor = "var(--indice-color)";

  for (let j = 0; j < h3slist.length; j++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let linkname = h3slist[j].innerText.replace(/[^A-Z0-9]/gi, "");

    a.href = "#" + linkname;
    h3slist[j].id = linkname;
    a.innerText = h3slist[j].innerText;

    li.className = "h3link";
    li.appendChild(a);
    indice.appendChild(li);
    indexbox.style.backgroundColor = "var(--indice-color)";
  }
}

if (emptyh2s == h2s.length) {
  indexbox.style.display = "none";
}

const hidebuttons = document.getElementsByClassName("spoiler");

for (let i = 0; i < hidebuttons.length; i++) {
  hidebuttons[i].addEventListener("click", function () {
    if (hidebuttons[i].style.backgroundColor != "white") {
      hidebuttons[i].style.userSelect = "none";
      hidebuttons[i].style.backgroundColor = "white";
      hidebuttons[i].style.color = "transparent";
      hidebuttons[i].style.backgroundImage = 'url("/imgs/unhide.svg")';
    } else {
      hidebuttons[i].style.backgroundColor = "transparent";
      hidebuttons[i].style.color = "inherit";
      hidebuttons[i].style.backgroundImage = "none";
      hidebuttons[i].style.userSelect = "all";
    }
  });
}
