const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: "Дякуємо! Скоро з вами зв'яжуться",
        failuer: 'Помилка...'
    };

    const postData = async (url, data) => { // url и data нужны для щапуска fetch
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

            const formData = new FormData(item); // конструктор. этот объект найдет все инпуты, соберет все эти данные в одну структуру и эта структура будет в formData

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failuer)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {         // через какое время удалиться сообщение
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;