class Skills {
	constructor() {
		this.buttons = null;
		this.icons = null;
	}

	closeCards() {
		const clicked = document.getElementsByClassName('clicked');

		for (let click of clicked) {
			click.classList.remove('clicked');
		}
	}

	openCard(icons) {
		const closeCards = this.closeCards;
		if (icons)
			return function(evt) {
				var close = false;
				for (let icon of icons) {
					if (evt.target === icon) {
						close = true;
						break;
					}
				}
				if (!this.classList.contains('clicked') && !close) {
					closeCards();
					this.classList.add('clicked');
				}
			};
	}

	run() {
		this.buttons = document.querySelectorAll('.icon-btn');
		this.icons = document.querySelectorAll('i');

		const closeCards = this.closeCards;
		document.addEventListener('click', (evt) => {
			var clickInside = false;
			for (let button of this.buttons) {
				if (button.contains(evt.target)) {
					clickInside = true;
				}
			}

			if (!clickInside) {
				closeCards();
			}
		});

		if (this.buttons.length > 0) {
			for (let button of this.buttons) {
				button.onclick = this.openCard(this.icons);
			}

			for (let icon of this.icons) {
				icon.onclick = function() {
					closeCards();
				};
			}
		}
	}
}
