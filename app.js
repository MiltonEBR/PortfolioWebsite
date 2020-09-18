barba.init({
	transitions: [
		{
			name: 'default-transition',
			leave() {
				const div = document.querySelector('.trans');
				div.classList.add('trans-on');
			},
			enter() {
				const div = document.querySelector('.trans');
				div.classList.remove('trans-on');
			}
		}
	]
});

const div = document.querySelector('.trans');

// const links = document.querySelectorAll('.panel-item');

// const transitionDIV = addTransDiv();
// var func;
// transitionDIV.addEventListener('transitionend', () => {
// 	if (func) {
// 		func();
// 	}
// });

// for (link of links) {
// 	const href = link.href;
// 	link.onclick = (event) => {
// 		event.preventDefault();
// 		console.log(href);
// 		func = () => {
// 			window.location.href = href;
// 		};
// 		transitionDIV.classList.add('trans-on');
// 	};
// }
