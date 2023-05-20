let hidebuttons = document.getElementsByClassName('spoiler');

for (let u = 0; u < hidebuttons.length; u++) {
	hidebuttons[u].addEventListener('click', function () {
		if (hidebuttons[u].style.backgroundColor != 'white') {
			hidebuttons[u].style.userSelect = 'none';
			hidebuttons[u].style.backgroundColor = 'white';
			hidebuttons[u].style.color = 'transparent';
			hidebuttons[u].style.backgroundImage = 'url("/imgs/unhide.svg")';
		} else {
			hidebuttons[u].style.backgroundColor = 'transparent';
			hidebuttons[u].style.color = 'inherit';
			hidebuttons[u].style.backgroundImage = 'none';
			hidebuttons[u].style.userSelect = 'all';
		}
	});
}
