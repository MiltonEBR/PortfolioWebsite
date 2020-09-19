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
				transition();
				await delay(600);
			},
			async enter(data) {
				transition();
			}
		}
	]
});

//Skills
const buttons = document.querySelectorAll('.icon-btn');

if (buttons.length > 0) {
	for (button of buttons) {
		button.onclick = function() {
			console.log('hello');
			this.classList.add('clicked');
		};
	}
}
