const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href'); // parentNode потому что у нас в верстке ссылка находится сверху нашей картинки
            bigImage.setAttribute('src', path); // добавляем path в src
        }

        if (target && target.matches('div.popup')) { //проверяем что пользователь кликнул на подложку и тогда картинка закроется
            imgPopup.style.display = 'none';
        }
    });
};

export default images;