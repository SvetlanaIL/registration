document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const form = document.querySelector('form');
	const regulars = {
		email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
		number: /^\d+$/,
	}
	const status = {
		incorrect: 'Введите корректные данные!',
		emptyInputs: 'Данное поле не заполнено',
	}
	let isValidate = false;

	const submit = () => {
		alert("Спасибо, Ваши данные отправлены!");
	}

//Функция проверки инпутов на валидность
	const validate = (elem) => {
		if (elem.name == 'email') {
			if (!regulars.email.test(elem.value)) {
				elem.nextElementSibling.textContent = status.incorrect;
				elem.classList.add('invalid');
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = '';
				elem.classList.remove('invalid');
				isValidate = true;
			}
		}
		if (elem.name == 'tel') {
			if (!regulars.number.test(elem.value)) {
				elem.nextElementSibling.textContent = status.incorrect;
				elem.classList.add('invalid');
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = '';
				elem.classList.remove('invalid');
				isValidate = true;
			}
		}
	}
 	
 	for (let elem of form.elements) {
		if (!elem.classList.contains('checkbox-input') && elem.tagName != 'BUTTON') {
			elem.addEventListener("blur", () => {
				validate(elem);
			});
		}
	}

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		for (let elem of form.elements) {
			if (!elem.classList.contains('checkbox-input') && elem.tagName != 'BUTTON') {
				if (elem.value == "" || elem.value == " ") {
					elem.nextElementSibling.textContent = status.emptyInputs;
					elem.classList.add('invalid');
					isValidate = false;
				}else {
					elem.nextElementSibling.textContent = '';
					elem.classList.remove('invalid');
					isValidate = true;
				}
			}
		}
		if (isValidate) {
			if (form.querySelector('.checkbox-input').checked) {
				submit();
				form.reset();

			} else {
				alert("Вы не дали согласие на обработку персональных данных")
			}
		}
	});

})








