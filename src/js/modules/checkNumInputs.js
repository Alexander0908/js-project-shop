const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, ''); // все нечисловые значения заменяем пустой строкой
        });
    });

}

export default checkNumInputs; 