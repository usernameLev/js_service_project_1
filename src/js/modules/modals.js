export const modals = () => {
  const bindModal = ({ triggerSelector, modalSelector, closeSelector }) => {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

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

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      closeModal();
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
        // document.body.classList.remove('modal-open');
      }
    });
  };

  const showModalByTime = ({ selector, time }) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  };

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

  showModalByTime({
    selector: '.popup',
    time: 3000,
  });
};
