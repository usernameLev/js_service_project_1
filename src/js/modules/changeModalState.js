import { checkNumInputs } from './checkNumInputs';

export const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = ({ event, elems, prop }) => {
    elems.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (elems.checked !== false) {
              state[prop] = elem.value;
            }
            break;
          case 'SELECT':
            state[prop] = elem.value;
            break;
        }

        console.log(state);
      });
    });
  };

  bindActionToElems({
    event: 'click',
    elems: windowForm,
    prop: 'form',
  });
  bindActionToElems({
    event: 'input',
    elems: windowHeight,
    prop: 'height',
  });
  bindActionToElems({
    event: 'input',
    elems: windowWidth,
    prop: 'width',
  });
  bindActionToElems({
    event: 'change',
    elems: windowType,
    prop: 'type',
  });
  bindActionToElems({
    event: 'change',
    elems: windowProfile,
    prop: 'profile',
  });
};
