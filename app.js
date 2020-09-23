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

let skills;

barba.init({
	transitions: [
		{
			name: 'default',
			async leave(data) {
				transition();
				await delay(600);
			},
			beforeEnter(data) {
				const body = document.querySelector('body');
				if (data.next.namespace !== 'home') {
					if (!body.classList.contains('info-body')) {
						body.classList.add('info-body');
					}
				} else {
					if (body.classList.contains('info-body')) {
						body.classList.remove('info-body');
					}
				}
			},
			enter(data) {
				transition();
			}
		}
	],
	views: [
		{
			namespace: 'skills',
			beforeEnter(data) {
				if (!skills) {
					skills = new Skills();
				}
				console.log('ello');
				skills.run();
			}
		}
	]
});
