const timer = (id, deadline) => {
    const addZero = (num) => {
        // if (num <= 9) {
        //     return '0' + num;
        // } else {
        //     return num;
        // }
        return num <=9 ? '0' + num : num;
    }

    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor((t/1000) % 60), // переводим миллисекунды в секунды
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/(1000 * 60 * 60)) % 24),
              days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock(); // такая запись решит проблему, когда сначала загружается таймер из верстки, а потом уже правильный таймер. Теперь будет сразу работать правильный таймер

        function updateClock() { // функция определяет сколько времени осталось до дедлайна
            const t = getTimeRemaining(endTime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;