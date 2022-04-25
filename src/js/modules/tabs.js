export const tabs = ({
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
}) => {
  const headers = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  const hideTabContents = () => {
    content.forEach((hideTabContent) => {
      hideTabContent.style.display = 'none';
    });

    tab.forEach((hideTabContent) => {
      hideTabContent.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = 'block';
    tab[i].classList.add(activeClass);
  };

  hideTabContents();
  showTabContent();

  headers.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
    ) {
      tab.forEach((hideTabContent, i) => {
        if (target == hideTabContent || target.parentNode == hideTabContent) {
          hideTabContents();
          showTabContent(i);
        }
      });
    }
  });
};
