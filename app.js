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

const skills = new Skills();

barba.init({
	transitions: [
		{
			name: 'default',
			async leave(data) {
				transition();
				await delay(600);
			},
			async enter(data) {
				if (data.next.namespace === 'skills') {
					skills.run();
				}
				transition();
			},
			once(data) {
				if (data.next.namespace === 'skills') {
					skills.run();
				}
			}
		}
	]
});
