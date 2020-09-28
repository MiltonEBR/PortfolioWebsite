function setHidden(panel) {
	if (panel.classList.contains('show')) {
		panel.classList.remove('show');
	}

	if (!panel.classList.contains('hide')) {
		panel.classList.add('hide');
	}
}

function setVisible(panel) {
	if (!panel.classList.contains('show')) {
		panel.classList.add('show');
	}

	if (panel.classList.contains('hide')) {
		panel.classList.remove('hide');
	}
}

function run() {
	const panel = document.querySelector('#proj-panel');
	panel.addEventListener('click', (evt) => {
		if (panel === evt.target) {
			setHidden(panel);
		}
	});
	const closeBtn = panel.querySelector('i');
	closeBtn.onclick = () => {
		this.setHidden(panel);
	};
	this.setHidden(panel);
	const cards = document.querySelectorAll('.proj');
	for (let card of cards) {
		card.onclick = () => {
			this.setVisible(panel);
		};
	}
}

run();
