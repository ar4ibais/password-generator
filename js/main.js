const mainEl = document.querySelector('.main');
const passwordEl = document.createElement('input');

passwordEl.classList.add('password');
passwordEl.setAttribute('placeholder', 'Сгенерировать пароль');

passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault();
});
passwordEl.addEventListener('focus', () => {
    navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement('button');

copyBtn.classList.add('password-button');
copyBtn.innerText = 'Скопировать';

copyBtn.addEventListener('click', () => {
    passwordEl.select();
    navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement('button');

generateBtn.classList.add('password-button');
generateBtn.innerText = 'Сгенерировать';

generateBtn.addEventListener('click', (e) => {
    const password = generatePassword(12);

    passwordEl.value = password;
});

function generatePassword(passwordLength) {
    const numberChars = '0123456789',
          upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          lowerChars = 'abcdefghijklmnopqrstuvwxyz',
          symbolChars = '!"№;%:?*()_+';
    const allChars = numberChars + upperChars + lowerChars + symbolChars;
    let randomString = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber];
    }

    return randomString;
}

mainEl.append(passwordEl);
mainEl.append(copyBtn);
mainEl.append(generateBtn);