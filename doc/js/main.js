import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {}; // - состояние модального окна, где пользователь что-то выбирает. глобальный стейт
    let deadline = '2024-08-31'

    changeModalState(modalState); // - постоянно модифицируем объект modalState
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', '.active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); // заинициализируем все табы
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', '.do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});