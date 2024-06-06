import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeigth = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width'); //валидируем ширину
    checkNumInputs('#height'); // и высоту

    //функция, которая на определенный element навязывает определенный обработчик события event 
    //и записывает в определенное свойство props в глобальном объекте state
    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодне" : state[prop] = "Тепле";
                            // с помощью forEach делаю условия чтобы только один checkbox мог быть выбран
                            elem.forEach((box, j) => {
                                box.checked = false; //галочка снимается
                                if (i == j) { 
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value; // берем value из нашего инпута
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);

            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeigth, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'type');
};

export default changeModalState;