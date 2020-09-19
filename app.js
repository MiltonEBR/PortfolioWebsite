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

const closeCards = () => {
	const clicked = document.getElementsByClassName('clicked');

	for (click of clicked) {
		click.classList.remove('clicked');
	}
};

const openCard = (btn) => {
	if (!btn.classList.contains('clicked')) {
		btn.classList.add('clicked');
		btn.onclick = null;
	}
};

document.addEventListener('click', (evt) => {
	var clickInside = false;
	for (button of buttons) {
		if (button.contains(evt.target)) {
			clickInside = true;
		}
	}

	if (!clickInside) {
		closeCards();
	}
});

if (buttons.length > 0) {
	for (button of buttons) {
		button.addEventListener('transitionend', function() {
			console.log('hello');
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
			closeCards();
		};
	}
}
