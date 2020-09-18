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
	div.classList.toggle('trans-on');
};

barba.init({
	transitions: [
		{
			name: 'default-transition',
			async leave(data) {
				const done = this.async();

				transition();
				await delay(250);
				done();
			},
			async enter(data) {
				const done = this.async();

				transition();
				await delay(1250);

				done();
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
