// Script principal del sitio web

var openbutton = document.getElementById('mobilenavopen');
var closebutton = document.getElementById('mobilenavclose');

var links = document.querySelectorAll('#navigationheader > ul')[0];

var minsize = 790;
document.documentElement.style.setProperty('--max-width-mbl', minsize + 'px'); // Hace que el modo móvil se active a partir de minsize

var changesize = window.matchMedia(`(max-width: ${minsize}px)`);
changesize.addEventListener('change', function (e) {
	if (!e.matches) {
		//Regresa los navs cuando cambie de tamaño
		links.style.display = 'flex';
	}
});

// Eventos para el menú móvil
openbutton.addEventListener('click', function () {
	links.style.transform = 'translateX(0)';
});

closebutton.addEventListener('click', function () {
	links.style.transform = 'translateX(100%)';
});
// ----------------------------

var subnavs = document.querySelectorAll('.subsectionsnav');
var linkslist = document.querySelectorAll('.nolist-style > li+li');

// Eventos para los submenús en escritorio
subnavs.forEach((subnav) => {
	var parent = subnav.parentNode;

	parent.addEventListener('mouseover', function () {
		if (window.innerWidth > minsize) {
			subnav.style.display = 'flex';
			subnav.style.width = (parent.clientWidth / 16) * 2 + 'em';
			subnav.style.transform = 'translateX(-' + parent.clientWidth / 2 + 'px)';
		}
	});

	parent.addEventListener('mouseout', function (event) {
		if (
			window.innerWidth > minsize &&
			!parent.contains(event.relatedTarget) &&
			!subnav.contains(event.relatedTarget)
		) {
			subnav.style.display = 'none';
		}
	});

	subnav.addEventListener('mouseout', function (event) {
		if (
			window.innerWidth > minsize &&
			!subnav.contains(event.relatedTarget) &&
			!parent.contains(event.relatedTarget)
		) {
			subnav.style.display = 'none';
		}
	});
});

// ----------------------------

// Eventos para los submenús en móvil

subnavs.forEach((subnav) => {
	var parent = subnav.parentNode;
	var expandbutton = document.createElement('button');
	var materiaslist = parent.querySelector('.subsectionsnav').cloneNode(true);

	expandbutton.innerHTML = `<svg width="20" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L11 9.33333L21 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
	expandbutton.classList.add('expandbutton');
	parent.appendChild(expandbutton);
	var opened = false;

	expandbutton.addEventListener('click', function () {
		opened = !opened;
		if (opened) {
			expandbutton.style.transform = `rotate(${Math.PI}rad)`; //Rotar un pi radian
			for (var i = 0; i < linkslist.length; i++) {
				if (!linkslist[i].isEqualNode(parent)) {
					linkslist[i].style.display = 'none';
				}
			}
			parent.parentNode.appendChild(materiaslist);
			materiaslist.style.display = 'flex';
			parent.parentNode.style.gap = '0';
			parent.style.marginTop = '1.5em';
			materiaslist.style.width = '100%';
		} else {
			expandbutton.style.transform = 'rotate(0)';
			for (var o = 0; o < linkslist.length; o++) {
				linkslist[o].style.display = 'flex';
			}
			materiaslist.style.display = 'none';
			parent.style.margin = '0';

			parent.parentNode.style.gap = '1.5em';
		}
	});
});
// ----------------------------

//Agrega a milly en todas las paginas donde se use este js
var millyimage = document.getElementById('logo');

var canhover = true;
millyimage.addEventListener('mouseover', function () {
	if (canhover) millyimage.src = '/imgs/jollymilly.webp';
});

millyimage.addEventListener('mouseout', function () {
	if (canhover) millyimage.src = '/imgs/sillymilly.webp';
});

millyimage.addEventListener('click', function () {
	canhover = !canhover;
	if (canhover) millyimage.src = '/imgs/sillymilly.webp';
	else millyimage.src = '/imgs/seriousmilly.webp';
});
