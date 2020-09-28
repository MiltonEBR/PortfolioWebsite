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

async function readJSONFile(file) {
	const resp = await fetch(file);
	const jsonData = await resp.json();
	return jsonData;
}

async function createCards() {
	const cards = await readJSONFile('./projects.json');

	const list = document.querySelector('.proj-list');

	const createdCards = [];

	for (i = 0; i < cards.length; i++) {
		const article = document.createElement('article');
		article.classList.add('proj');

		const header = document.createElement('header');
		header.classList.add('proj-header');
		const title = document.createElement('h2');
		title.innerHTML = cards[i].title;
		header.appendChild(title);
		article.append(header);

		const imgDiv = document.createElement('div');
		imgDiv.classList.add('thumb-container');

		const bigThumb = document.createElement('img');
		bigThumb.classList.add('big-thumb');
		bigThumb.src = cards[i].thumb;
		imgDiv.append(bigThumb);

		for (j = 0; j < cards[i].smallThumbs.length; j++) {
			const smallImg = document.createElement('img');
			smallImg.classList.add('small-thumb');
			smallImg.src = cards[i].smallThumbs[j];
			imgDiv.append(smallImg);
		}
		article.append(imgDiv);

		const desc = document.createElement('p');
		desc.innerHTML = cards[i].short;
		article.append(desc);

		createdCards.push(article);
		list.append(article);
	}
	return createdCards;
}

function addOnClick(cardList, callback) {
	for (let card of cardList) {
		card.onclick = () => {
			callback();
		};
	}
}

async function run() {
	const panel = document.querySelector('#proj-panel');
	this.setHidden(panel);
	panel.addEventListener('click', (evt) => {
		if (panel === evt.target) {
			setHidden(panel);
		}
	});

	const closeBtn = panel.querySelector('i');
	closeBtn.onclick = () => {
		this.setHidden(panel);
	};

	const cardList = await createCards();
	console.log(cardList);
	addOnClick(cardList, () => {
		this.setVisible(panel);
	});
}

run();
