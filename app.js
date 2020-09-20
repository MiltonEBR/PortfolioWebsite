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
			name: 'default',
			async leave(data) {
				console.log('hello');
				transition();
				await delay(600);
			},
			async enter(data) {
				transition();
			}
		}
	]
});

const s = new Skills();
s.run();
