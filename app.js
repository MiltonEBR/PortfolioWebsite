const delay = (n) => {
	n = n || 2000;
	return new Promise((acc) => {
		setTimeout(() => {
			acc();
		}, n);
	});
};

const transition = () => {
	const div = document.querySelector('.trans');
	if (div.classList.contains('trans-off')) {
		div.classList.remove('trans-off');
		div.classList.add('trans-on');
	} else {
		div.classList.remove('trans-on');
		div.classList.add('trans-off');
	}
};

barba.init({
	transitions: [
		{
			name: 'default-transition',
			async leave(data) {
				const done = this.async();

				transition();
				await delay(600);
				done();
			},
			async enter(data) {
				transition();
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
