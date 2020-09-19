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
const icons = document.querySelectorAll('i');

if (buttons.length > 0) {
	for (button of buttons) {
		button.onclick = function() {
			if (!this.classList.contains('clicked')) {
				this.classList.add('clicked');
				this.onclick = null;
			}
		};

		button.addEventListener('transitionend', function() {
			if (!this.classList.contains('clicked')) {
				this.onclick = function() {
					if (!this.classList.contains('clicked')) {
						this.classList.add('clicked');
						this.onclick = null;
					}
				};
			}
		});
	}

	for (icon of icons) {
		icon.onclick = function() {
			const clicked = document.getElementsByClassName('clicked');

			for (click of clicked) {
				click.classList.remove('clicked');
			}
		};
	}
}
