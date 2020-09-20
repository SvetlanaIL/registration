
const regulars = {
	email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
	number: /^\d+$/,
};

const status = {
	correctEmail: 'Введите корректный E-mail!',
	correctNumber: 'Введите корректный номер телефона в формате: +79...!'
}

let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
	input.addEventListener('blur', function() {
		let rule = this.dataset.rule;
		let value = this.value;
		let check;

		switch(rule) {
			case 'email':
				check = regulars.email.test(value);
				break;
		}

		if (!check) {
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			input.appendChild(statusMessage.textContent = status.correctEmail);
		}
	})
}

export default;