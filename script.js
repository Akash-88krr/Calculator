// script.js
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons')[0].children);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.value = '';
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            case '←':
                if (display.value) {
                    display.value = display.value.slice(0, -1);
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    });
});