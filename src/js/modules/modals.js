export const modals = () => {
  const bindModal = ({
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
  }) => {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open');

        if (
          document.querySelector(`${modalSelector} input:not([type='radio'])`)
        ) {
          document.querySelector <
            HTMLElement >
            `${modalSelector} input:not([type='radio'])`.focus();
        }
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });

      closeModal();
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });

        closeModal();
        // document.body.classList.remove('modal-open');
      }
    });
  };

  const showModalByTime = ({ selector, time }) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.querySelector('#modalFocus').focus();
    }, time);
  };

  const popupCalcBtns = document.querySelectorAll('.popup_calc_btn');
  const modalFocusCalc = () => {
    popupCalcBtns.forEach((popupCalcBtn) => {
      popupCalcBtn.addEventListener('click', () => {
        setTimeout(() => {
          document.querySelector('#width').focus();
        }, 100);
      });
    });
  };
  modalFocusCalc();

  const popupCalcProfileButtons = document.querySelectorAll(
    '.popup_calc_profile_button',
  );
  const endModlaFocusCalc = () => {
    popupCalcProfileButtons.forEach((popupCalcProfileButton) => {
      popupCalcProfileButton.addEventListener('click', () => {
        setTimeout(() => {
          document.querySelector('#endModlaFocusCalc').focus();
        }, 100);
      });
    });
  };
  endModlaFocusCalc();

  bindModal({
    triggerSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close',
  });

  bindModal({
    triggerSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close',
  });

  bindModal({
    triggerSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close',
  });

  bindModal({
    triggerSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlay: false,
  });

  bindModal({
    triggerSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlay: false,
  });

  showModalByTime({
    selector: '.popup',
    time: 3000,
  });
};
