class RegularTable {
	constructor(parentElement = null, options) {
		if (options.statePadding == undefined)
			options.statePadding = 0.5;
		if (options.collapse == undefined)
			options.collapse = true;
		if (options.rounded == undefined)
			options.rounded = false;
		if (options.theme == undefined)
			options.theme = 'default';
		if (options.textCase == undefined)
			options.textCase = 'none';

		this.statePadding = options.statePadding;
		this.RegularTable = document.createElement('table');
		this.RegularTable.className = 'regular-table';
		this.data = options.bodyData;

		switch (options.theme) {
			case 'default':
				this.RegularTable.classList.add('theme-default');
				break;
			case 'dark':
				this.RegularTable.classList.add('theme-dark');
				break;
			case 'light':
				this.RegularTable.classList.add('theme-light');
				break;
			default:
				break;
		}

		if (options.collapse)
			this.RegularTable.style.borderCollapse = 'collapse';
		if (options.rounded)
			this.RegularTable.classList.add('rounded');
		this.tBody = document.createElement('tbody');
		this.tHead = document.createElement('thead');
		this.RegularTable.appendChild(this.tHead);
		this.RegularTable.appendChild(this.tBody);
		this.addHeadRow(options.headData, options.statePadding);
		this.addBodyRow(options.statePadding, options.textCase);
		document.querySelector(parentElement).appendChild(this.RegularTable);
	}
	addBodyRow(padding = this.statePadding, textCase) {
		this.tBody.innerHTML = null;
		this.data.forEach(value => {
			let newRow = document.createElement('tr');
			value.forEach(data => {
				let td = document.createElement('td');
				td.style.padding = `${padding}rem`;
				switch (textCase) {
					case 'uppercase':
						td.innerText = data.toString().toUpperCase();
						break;
					case 'lowercase':
						td.innerText = data.toString().toLowerCase();
						break;
					default:
						td.innerText = data.toString();
						break;
				}
				newRow.appendChild(td);
			});
			this.tBody.appendChild(newRow);
		});
	}
	addHeadRow(data, padding) {
		data.forEach(value => {
			let th = document.createElement('th');
			th.style.padding = `${padding}rem`;
			th.innerText = value;
			this.tHead.appendChild(th);
		});
		let arrow = document.createElement('div');
		let sort = false;
		arrow.className = 'arrow';
		this.tHead.firstElementChild.appendChild(arrow);
		arrow.addEventListener('click', e => {
			this.thSort(arrow, sort = !sort);
		});
	}
	thSort(arrow, isSort, index) {
		if (isSort) {
			this.data = this.data.sort();
			this.addBodyRow();
			arrow.animate([{
					transform: 'translate(-50%, calc(-50% + 4px)) rotate(0deg)'
				},
				{
					transform: 'translate(-50%, calc(-50% + -4px)) rotate(180deg)'
				}
			], {
				duration: 350,
				easing: 'ease-in-out'
			});
			arrow.style.setProperty('transform', 'translate(-50% , calc(-50% + -4px)) rotate(180deg)');
		} else {
			this.data = this.data.sort().reverse();
			this.addBodyRow();
			arrow.animate([{
					transform: 'translate(-50%, calc(-50% + -4px)) rotate(180deg)'
				},
				{
					transform: 'translate(-50%, calc(-50% + 4px)) rotate(0deg)'
				}
			], {
				duration: 350,
				easing: 'ease-in-out'
			});
			arrow.style.setProperty('transform', 'translate(-50%, calc(-50% + 4px)) rotate(0deg)');
		}
	}
}