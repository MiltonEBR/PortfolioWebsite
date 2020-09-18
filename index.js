console.log('hello');

const transitionDIV = document.querySelector('.trans');

const links = document.querySelectorAll('.panel-item');

var func;
transitionDIV.addEventListener('transitionend', (event) => {
	if (func) {
		func();
	}
});

for (link of links) {
	const href = link.href;
	link.onclick = (event) => {
		event.preventDefault();
		console.log(href);
		func = () => {
			window.location.href = href;
		};
		transitionDIV.classList.add('trans-on');
	};
}
