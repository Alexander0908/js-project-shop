import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
        
    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: "Дякуємо! Скоро з вами зв'яжуться",
        failuer: 'Помилка...'
    };

    const postData = async (url, data) => { // url и data нужны для запуска fetch
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {       //перед асинхронной опирацией await
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {    // функция для отчищения инпута
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault(); // теперь страница не будет перезагружаться после отправки данных

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item); // formData собирает все данные. Это все данные, которые есть у нас в форме (с инпутов и др)
            if(item.getAttribute('data-calc') === "end") {
                for (let key in state) { // перебираем данные из state и отправляем их в formData
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData) // отправляем нашу форму с данными
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failuer)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {         // - через какое время удалиться сообщение
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;